import { Script, Vector3, Entity, TextRenderer, SpriteRenderer, InputManager } from '@galacean/engine';
import GameManager from "../Scripts/GameManager";
import MouseItem from "../Scripts/MouseItem";
import KeyboardItem from "../Scripts/KeyboardItem";
import KeyboardConfig from "../Scripts/KeyboardConfig";

/**
 * 脚本参考: https://galacean.antgroup.com/#/docs/latest/cn/script
 */

type SpawnerParams = {
  mode: number
};

export default class extends Script {

    // configuration
    params: SpawnerParams = null;
    startAt: number = 0
    fallSpeed: number = 3
    spawnInterval: number = 0.9
    maxScreenWidth: number = 3.5
    spawnPosition: Vector3 = new Vector3(0, 9, 0)

    // private
    _soundAudio: HTMLAudioElement = null;
    _missedEntityCount: number = 0
    _destroyedEntityCount: number = 0
    _nextFallspedIncreaseCounter: number = 3
    _lastDeltaTime: number = 0
    _pendingDestroyKeyboardEntities: Entity = null
    _hasKeyUp: boolean = false
    _spawningMechanism: Function = null
    
    // object pointer
    _gameManager: GameManager = null
    _groupEntity: Entity = null
    _spawnMouseEntity: Entity = null
    _spawnKeyboardEntity: Entity = null
    _displayEntity: TextRenderer = null
    _particleEntity: Entity = null
    _backgroundEntity: SpriteRenderer = null
    _inputManager: InputManager = null

    // lifecycle
    onEnable() {
      this._inputManager = this.engine.inputManager;
      this._soundAudio = new Audio("http://127.0.0.1:5500/psyduck.mp3");
      this._soundAudio.volume = 0.08;

      this._gameManager = this.scene.findEntityByPath("Manager").getComponent(GameManager);
      this._backgroundEntity = this.scene.findEntityByPath("Background").getComponent(SpriteRenderer);
      this._groupEntity = this.scene.findEntityByPath("Game/Spawner");
      this._spawnMouseEntity = this.scene.findEntityByPath("Game/MouseItem");
      this._spawnKeyboardEntity = this.scene.findEntityByPath("Game/KeyboardItem");
      this._displayEntity = this.scene.findEntityByPath("Game/Display").getComponent(TextRenderer);
      this._particleEntity = this.scene.findEntityByPath("Game/Particle");

      this.startAt = this.engine.time.actualElapsedTime;
      
      switch (this.params.mode) {
        case 0:
          this._spawningMechanism = function() {
            var random = Math.random();
            if (random < 0.5) {
              this.spawnMouseEntity();
            } else {
              this.spawnKeyboardEntity();
            }
          };
          break;
        case 1:
          this._spawningMechanism = function() {
            this.spawnMouseEntity();
          };
          break;
        case 2:
          this._spawningMechanism = function() {
            this.spawnKeyboardEntity();
          };
          break;
      }
    }

    onUpdate(deltaTime: number) {

      this._displayEntity.text = `
        Time: ${Math.floor(this.engine.time.actualElapsedTime - this.startAt)}s\n
        Speed: ${this.fallSpeed.toFixed(1)}\n
        Miss Target: ${this._missedEntityCount}\n
        Destroyed Target: ${this._destroyedEntityCount}\n
        Next Speed Increase: ${this._nextFallspedIncreaseCounter}
      `

      this._groupEntity.children.forEach(child => {
        child.transform.translate(new Vector3(0, -this.fallSpeed * deltaTime, 0), true)
      });

      if (this.params.mode !== 1) {
        this._hasKeyUp = KeyboardConfig.keys.some(x => this._inputManager.isKeyUp(x));
      }
      
      this._lastDeltaTime += deltaTime;
      if (this._lastDeltaTime >= this.spawnInterval) {
        this._lastDeltaTime = 0
        this._spawningMechanism();
      }
    }

    onLateUpdate(_: number) {
      if (this._hasKeyUp && !this._pendingDestroyKeyboardEntities) {
        this.handleIncreaseFallSpeed(0.2);
      }

      this._hasKeyUp = false;
      if (this._pendingDestroyKeyboardEntities != null) {
        this.handleOnDestroyEntity(this._pendingDestroyKeyboardEntities);
        this._pendingDestroyKeyboardEntities.destroy();
        this._pendingDestroyKeyboardEntities = null;
      }
    }

    // handler
    setConfig(params: SpawnerParams) {
      this.params = params;
    }

    spawnMouseEntity() {
      var entity = this._spawnMouseEntity.clone();

      entity.name = "CloneMouseItem";
      entity.isActive = true; 
      entity.addComponent(MouseItem);
      
      entity.transform.position = this.spawnPosition; 

      var random = Math.random();
      if (random < 0.5) {
        random = -random
      }
      entity.transform.translate(new Vector3(random * this.maxScreenWidth, 0, 0), true);
      this._groupEntity.addChild(entity);
    }

    spawnKeyboardEntity() {
      var entity = this._spawnKeyboardEntity.clone();

      entity.name = "CloneKeyboardItem";
      entity.isActive = true; 
      entity.addComponent(KeyboardItem);
      
      entity.transform.position = this.spawnPosition; 

      var random = Math.random();
      if (random < 0.5) {
        random = -random
      }
      entity.transform.translate(new Vector3(random * this.maxScreenWidth, 0, 0), true);
      this._groupEntity.addChild(entity);
    }

    handleOnKeyboardKeyUp() {
      this._hasKeyUp = true;
    }

    handleOnKeyboardEntityPreDestroy(entity: Entity) {
      if (!this._pendingDestroyKeyboardEntities) {
        this._pendingDestroyKeyboardEntities = entity;
        return;
      }

      if (entity.transform.position.y < this._pendingDestroyKeyboardEntities.transform.position.y) {
        this._pendingDestroyKeyboardEntities = entity;
      }
    }

    handleOnMissEntity() {
      this._missedEntityCount += 1;
      if (this._missedEntityCount >= 10) {

        // clean up cloned entites
        this._displayEntity.text = "";
        this._groupEntity.clearChildren();
        this._gameManager.onEndGameWithResult({ 
          destroyedCount: this._destroyedEntityCount,
          seconds: Math.floor(this.engine.time.actualElapsedTime - this.startAt), 
        });
      }
    }

    handleOnDestroyEntity(entity: Entity) {
      const particle = this._particleEntity.clone();
      particle.isActive = true;
      particle.transform.position = entity.transform.position;
      this._groupEntity.addChild(particle);
      this._soundAudio.play();
      setTimeout(() => {
        this._groupEntity.removeChild(particle);
        particle.destroy();
      }, 300);

      this._destroyedEntityCount += 1;
      this._nextFallspedIncreaseCounter -= 1;
      if (this._nextFallspedIncreaseCounter <= 0) {
        this._backgroundEntity.flipX = !this._backgroundEntity.flipX;

        this._nextFallspedIncreaseCounter = 3;
        this.handleIncreaseFallSpeed(0.5);
      }
    }

    handleIncreaseFallSpeed(speed: number) {
      this.fallSpeed += speed;
      switch (true) {
        case this.fallSpeed >= 18.0:
          this.spawnInterval = 0.5
          break;
        case this.fallSpeed >= 12.0:
          this.spawnInterval = 0.65
          break;
        case this.fallSpeed >= 6.0:
          this.spawnInterval = 0.8
          break;
      }
    }
    
  }