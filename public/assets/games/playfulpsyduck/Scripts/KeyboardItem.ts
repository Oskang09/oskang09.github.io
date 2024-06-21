import { Script, Keys, TextRenderer, InputManager } from '@galacean/engine';
import SpawnerScript from "../Scripts/Spawner";
import KeyboardConfig from "../Scripts/KeyboardConfig";

/**
 * 脚本参考: https://galacean.antgroup.com/#/docs/latest/cn/script
 */

export default class extends Script {

  inputManager: InputManager = null
  spawnerScript: SpawnerScript = null
  key: Keys = null

  onAwake() {
    this.inputManager = this.engine.inputManager;
    this.spawnerScript = this.scene.findEntityByPath("Game").getComponent(SpawnerScript);


    const random = Math.floor(Math.random() * KeyboardConfig.keyDisplay.size);
    this.key = KeyboardConfig.keys[random];
    this.entity.getComponent(TextRenderer).text = KeyboardConfig.keyDisplay.get(this.key);
  }

  onUpdate(_: number) {
    if (this.inputManager.isKeyUp(this.key)) {
      this.spawnerScript.handleOnKeyboardEntityPreDestroy(this.entity);
      return;
    }

    if (this.entity.transform.position.y < -9.5) {
      this.spawnerScript.handleOnMissEntity();
      this.entity.destroy();
    }
  }
}