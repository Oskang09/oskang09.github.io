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
import * as toolkit from '@galacean/engine-toolkit';

import projectInfo from './project.json';
import { registerShaders } from './shaders';

const { GSLPBRMaterial } = toolkit;

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
  GSLPBRMaterial.registerIncludes();
  registerShaders();

  if (import.meta.env.DEV) {
    Logger.enable();
  }

  // @ts-ignore
  const engine = await WebGLEngine.create(config);
  await engine.resourceManager
    .load({
      url: `https://cdn.oskadev.com/assets/games/playfulpsyduck/${projectInfo.url}`,
      type: AssetType.Project,
    })
    // @ts-ignore
    .catch((e) => {
      throw e;
    });

  engine.run();

  return engine;
}
