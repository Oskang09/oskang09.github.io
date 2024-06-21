
import { Script, Pointer } from '@galacean/engine';
import GameManager from "../Scripts/GameManager";
/**
 * 脚本参考: https://galacean.antgroup.com/#/docs/latest/cn/script
 */
export default class extends Script {

  _gameManager: GameManager = null

  onAwake() {
    this._gameManager = this.entity.parent.getComponent(GameManager);    
  }

  onPointerClick(_: Pointer) {
    this._gameManager.onModeChange();
  }
  
}