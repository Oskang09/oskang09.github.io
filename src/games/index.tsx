import type { WebGLEngine } from '@galacean/engine';
import { useEffect, useState } from 'react';

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
  const [canvasStyle, setCanvasStyle] = useState<React.CSSProperties>({
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  });

  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const init = games[props.type]!!;
      init(document.getElementById('game') as HTMLCanvasElement);
    })();
  }, []);

  return (
    <div>
      <canvas id="game" width="295" height="650" style={canvasStyle} />
      <button
        type="button"
        onClick={() => {
          const fullScreenStyles: React.CSSProperties = {
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          };
          switch (true) {
            case window.innerWidth >= 1900:
              fullScreenStyles.width = '30%';
              break;
            case window.innerWidth >= 1500:
              fullScreenStyles.width = '40%';
              break;
            case window.innerWidth >= 1280:
              fullScreenStyles.width = '50%';
              break;
            case window.innerWidth >= 1000:
              fullScreenStyles.width = '60%';
              break;
            case window.innerWidth >= 800:
              fullScreenStyles.width = '70%';
              break;
            case window.innerWidth >= 550:
              fullScreenStyles.width = '80%';
              break;
            default:
          }
          setCanvasStyle({
            ...canvasStyle,
            ...fullScreenStyles,
          });
        }}
        className="mb-2 me-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginTop: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          width: 200,
        }}
      >
        FullScreen ( Mobile )
      </button>
    </div>
  );
};

export default Game;
