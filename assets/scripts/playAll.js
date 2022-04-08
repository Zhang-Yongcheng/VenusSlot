import co from './co.cc';
import playLine from './playLine';
import playSymbolCol from './playSymbolCol';
import playVideo from './playVideo';
let PublicSetUp=require('PublicSetUp');
export default function* playAll() {
  // 1
  const cols = [];
  for (let i = 0; i < 5; i++) {
    cols.push(
      co.start(function* () {

        yield playSymbolCol(i, 3.0);

      })
    );
  }
  yield co.waitForAll(cols);
  const { iLine, iFrame, WinPointLine, WinTotalPoint } = cc.store.gameResult;

  // 2
  let lastLine = -1;
  for (let i = 9 - 1; i >= 0; i--) {
    if (iLine[i] === 1) {
      lastLine = i;
      break;
    }
  }
  if (lastLine > -1) {
    for (let i = 0; i < 9; i++) {
      if (iLine[i] === 1) {
        cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinPointLine[i];
        yield playLine(i, iFrame[i], true, i === lastLine, 4.5, 3200);

      }
    }

    // 3
    const lines = [];
    for (let i = 0; i < 9; i++) {
      if (iLine[i] === 1) {
        lines.push(
          co.start(function* () {
            yield playLine(i, iFrame[i], false, false, 4.5, 3700);

          })
        );
      }
    }
    cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinTotalPoint;

    yield co.waitForAll(lines);

    // 4
    if (lines.length >= 2) {
      yield playVideo('random');
      cc.find('Canvas/Game/Machine/Particle_coin').active=false;
      cc.find('Canvas/Game/Machine/VideoFrame').active=false;
      cc.audioEngine.stopAll(PublicSetUp.audio1, false);
      cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
      
    }
  }

  cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = 0;

  // update user points
  cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;
}
