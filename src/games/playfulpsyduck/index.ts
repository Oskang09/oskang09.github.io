import './scripts';

import {
  AssetType,
  Logger,
  Platform,
  SystemInfo,
  WebGLEngine,
} from '@galacean/engine';
import { LitePhysics } from '@galacean/engine-physics-lite';
import { ShaderLab } from '@galacean/engine-shader-lab';

import projectInfo from './project.json';
import { registerShaders } from './shaders';

const { GSLPBRMaterial } = pkg;

const isIOS =
  SystemInfo.platform === Platform.IPhone ||
  SystemInfo.platform === Platform.IPad;

export async function init(canvas: HTMLCanvasElement) {
  const config = {
    canvas,
    physics: new LitePhysics(),
    ktx2Loader: { workerCount: isIOS ? 0 : 4 },
    // @ts-ignore
    graphicDeviceOptions: projectInfo.webGLRendererOptions,
  };

  // @ts-ignore
  config.shaderLab = new ShaderLab();
  Logger.enable();
  GSLPBRMaterial.registerIncludes();

  // @ts-ignore
  const engine = await WebGLEngine.create(config);

  registerShaders();

  await engine.resourceManager
    .load({
      url: `../../../assets/games/playfulpsyduck/${projectInfo.url}`,
      type: AssetType.Project,
    })
    // @ts-ignore
    .catch((e) => {
      throw e;
    });

  engine.run();
  return engine;
}
