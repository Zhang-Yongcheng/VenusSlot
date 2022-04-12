import co from './co.cc';
import playLine from './playLine';
import playSymbolCol from './playSymbolCol';
import playVideo from './playVideo';
import { test } from './PublicSetUp';
let PublicSetUp=require('PublicSetUp');


export default function* playAll() {


  function addFloat(num1,num2){
    var r1, r2, m;
    try{ 
        r1 = num1.toString().split(".")[1].length; 
    }catch(e){
        r1 = 0; 
    }
    try{
        r2 = num2.toString().split(".")[1].length;
    } catch(e){
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (mulFloat(num1, m) + mulFloat(num2, m)) / m;
  }
  function mulFloat(num1,num2){
    var m = 0, s1 = num1.toString(), s2 = num2.toString();
    try{ 
        m += s1.split(".")[1].length; 
    }catch(e){ }
    try{
        m += s2.toString().split(".")[1].length;
    } catch(e){ }
 
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
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
  const {type, iLine, iFrame,freeGameNCnts, WinPointLine, WinTotalPoint } = cc.store.gameResult;

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
      if(PublicSetUp.sound==1){
        cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
      }
      
      
    }
  }
  
    // if(PublicSetUp.test==11){
    //   freeGameNCnts[0]=1;
    //   PublicSetUp.test--;
    //   freeGameNCnts[1]=PublicSetUp.test;
    // }else if(PublicSetUp.test<11){
    //   cc.store.type=2;
    //   PublicSetUp.test--;
    //   freeGameNCnts[2]=PublicSetUp.test;
    //   if(PublicSetUp.test==0){
    //     cc.store.type=1;
    //     PublicSetUp.test=12;
    //   }
    // }
    //freeSpin
    let anim = cc.find('Canvas/Game/FreeSpin').getComponent("freeSpinAnim");
    if(freeGameNCnts[0]==1 && cc.store.type==0){
      //有中免費遊戲(第一次)
      
      if(cc.store.auto==false){
        //如果目前不是自動
        //則結束後改手動
        cc.store.type=3;
      }else{
        cc.store.type=2;
      }
      
      cc.store.auto=true;
      anim.play();
      yield co.waitForSeconds(3.1);
      cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string=freeGameNCnts[1];
      
    }
    if(cc.store.type==2){
      //如果目前是免費遊戲
      cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string=freeGameNCnts[2];
      let _total =addFloat(PublicSetUp.freeSpinTotal,cc.store.gameResult.WinTotalPoint);    
      PublicSetUp.freeSpinTotal=_total;
      cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string=PublicSetUp.freeSpinTotal;
    }
    
    if(cc.store.type==1){
      //最後一次
      cc.store.type=0;
      cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string=cc.store.FreeTotalPoint;
      yield co.waitForSeconds(1.2);     
      anim.UIOff();
      PublicSetUp.freeSpinTotal=0
      if(cc.store.type==3){
        cc.store.auto=false;
      }
    }



  cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = 0;

  // update user points
  cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;
}
