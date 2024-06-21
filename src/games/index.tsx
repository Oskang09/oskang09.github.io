import type { WebGLEngine } from '@galacean/engine';
import { useEffect } from 'react';

import { init as playfulpsyduck } from './playfulpsyduck';

type IGameProps = {
  type: string;
};

const games: {
  [key in string]: (canvas: HTMLCanvasElement) => Promise<WebGLEngine>;
} = {
  playfulpsyduck,
};

const Game = (props: IGameProps) => {
  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const init = games[props.type]!!;
      init(document.getElementById('game') as HTMLCanvasElement);
    })();
  }, []);

  return (
    <div>
      <canvas
        id="game"
        width="295"
        height="650"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Game;
