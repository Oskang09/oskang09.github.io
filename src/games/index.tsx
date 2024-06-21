import { useEffect } from 'react';

type IGameProps = {
  type: string;
};
const Game = (props: IGameProps) => {
  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const { init } = await import(`./${props.type}`);
      init(document.getElementById('game'));
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
