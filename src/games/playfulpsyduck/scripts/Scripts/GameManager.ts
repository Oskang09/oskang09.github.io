import { Script, Pointer, Entity, TextRenderer } from '@galacean/engine';
import SpawnerScript from "../Scripts/Spawner";

type Result = {
  destroyedCount: number
  seconds: number
};

export default class extends Script {

  // private
  _gameEntity: Entity = null;
  _dashboardRenderer: TextRenderer = null;
  _modeRenderer: TextRenderer = null;
  _mode: number = 0
  _backgroundAudio: Audio = null;

  // lifecycle
  onAwake() {
    this._gameEntity = this.scene.findEntityByPath("Game");
    this._dashboardRenderer = this.scene.findEntityByPath("Manager/Dashboard").getComponent(TextRenderer);
    this._modeRenderer = this.scene.findEntityByPath("Manager/ModeButton").getComponent(TextRenderer);
    this._backgroundAudio = new Audio(
      '/assets/games/playfulpsyduck/Assets/background-silly-psyduck.webm'
    );
    this._backgroundAudio.loop = true;
    this._backgroundAudio.volume = 0.03;
  }

  onModeChange() {
    this._mode += 1;
    if (this._mode > 2) {
      this._mode = 0;
    }

    switch (true) {
      case this._mode === 0:
        this._modeRenderer.text = "Mode: Mouse & Keyboard";
        break;
      case this._mode === 1:
        this._modeRenderer.text = "Mode: Mouse Only";
        break;
      case this._mode === 2:
        this._modeRenderer.text = "Mode: Keyboard Only";
        break;
    }
  }

  onStartClick() {
    this._backgroundAudio.load();
    this._backgroundAudio.play();

    this.entity.isActive = false;
    const script = this._gameEntity.getComponent<SpawnerScript>(SpawnerScript);
    script.setConfig({ mode: this._mode });
    script.enabled = true;
  }

  // handler
  onEndGameWithResult(result: Result) {
    this._backgroundAudio.pause();
    this._gameEntity.getComponent(SpawnerScript).enabled = false;
    this.entity.isActive = true;

    this._dashboardRenderer.text = `Result: \nDestroyed ${result.destroyedCount} in ${result.seconds}s`
  }
}