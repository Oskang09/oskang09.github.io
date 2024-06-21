import { Script, Pointer } from '@galacean/engine';
import SpawnerScript from "../Scripts/Spawner";
/**
 * 脚本参考: https://galacean.antgroup.com/#/docs/latest/cn/script
 */
export default class extends Script {

  spawnerScript: SpawnerScript = null

  onAwake() {
    this.spawnerScript = this.scene.findEntityByPath("Game").getComponent(SpawnerScript);
  }

  onUpdate(_: number) {
    if (this.entity.transform.position.y < -9.5) {
      this.spawnerScript.handleOnMissEntity();
      this.entity.destroy();
    } 
  }
  
  onPointerClick(_: Pointer) {
    this.spawnerScript.handleOnDestroyEntity(this.entity);
    this.entity.destroy();
  }

}