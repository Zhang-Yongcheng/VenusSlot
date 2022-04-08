import co from './co.cc';
import getSymbolAnchor from './getSymbolAnchor';
import lineFrames from './lineFrames';
import playEffect from './playEffect';

export default function* playLine(lineIndex, frameCnt, slideEffect, keepVisible, speed, duration) {
  const linesNode = cc.find('Canvas/Game/Machine/Performance/Lines');
  const lineNode = linesNode.getChildByName(`${lineIndex + 1}`);
  lineNode.active = true;

  if (slideEffect === true) {
    lineNode.x -= linesNode.width;

    yield co.start(function* () {
      try {
        let t0 = co.currentRuntime.lastTickTime;
        let dt = 0;

        while (true) {
          const dx = speed * dt;
          lineNode.x += dx;
          if (lineNode.x >= 0) {
            lineNode.x = 0;
            break;
          }

          yield;

          const t1 = co.currentRuntime.lastTickTime;
          dt = t1 - t0;
          t0 = t1;
        }
      } finally {
        lineNode.x = 0;
      }
    });
  }

  try {
    const effects = [];
    try {
      const frames = lineFrames[lineIndex + 1];
      for (let i = 0; i < frameCnt; i++) {
        effects.push(
          co.start(function* () {
            yield playEffect(getSymbolAnchor(frames[i]), 2000);
          })
        );
      }
      yield co.waitForMilliseconds(duration);
    } finally {
      effects.forEach(effect => effect.stop());
    }
  } finally {
    if (keepVisible === false) {
      lineNode.active = false;
    }
  }
}
