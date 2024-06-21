
import { Script, Pointer } from '@galacean/engine';
/**
 * 脚本参考: https://galacean.antgroup.com/#/docs/latest/cn/script
 */
export default class extends Script {
  onPointerClick(_: Pointer) {
    const audio = new Audio("../../../assets/games/playfulpsyduck/Assets/psyduck.mpeg");
    audio.volume = 0.08;
    audio.play();
    
    this.entity.parent.isActive = false;
    this.scene.findEntityByPath("Manager").children.forEach(x => {
      x.isActive = true;
    });
  }
}