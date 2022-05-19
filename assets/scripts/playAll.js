import co from './co.cc';
import playLine from './playLine';
import playSymbolCol from './playSymbolCol';
import playVideo from './playVideo';
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

if(PublicSetUp.sound==1){
            
  cc.audioEngine.playEffect(PublicSetUp.audio["0024"], false);
}
  yield co.waitForAll(cols);
  const {type, iLine, iFrame,freeGameNCnts, WinPointLine, WinTotalPoint ,heart,VideoIdx} = cc.store.gameResult;

  // 2
  let lastLine = -1;
  for (let i = 9 - 1; i >= 0; i--) {
    if (iLine[i] === 1) {
      lastLine = i;
      break;
    }
  }
  let score=cc.find('Canvas/Game/score').getComponent("score");
  if (lastLine > -1) {
    let t =1;
    for (let i = 0; i < 9; i++) {
      if (iLine[i] === 1) {
        cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinPointLine[i];
        if(t>3){
          t=1;
        }
        score.run(t,cc.store.gameResult.WinPointLine[i]);
        t++;
        if(PublicSetUp.sound==1){
            
          cc.audioEngine.playEffect(PublicSetUp.audio["0022"], false);
        }
        yield playLine(i, iFrame[i], true, i === lastLine, 4.5, 1000);

      }
    }

    // 3
    const lines = [];
    for (let i = 0; i < 9; i++) {
      if (iLine[i] === 1) {
        lines.push(
          co.start(function* () {
            yield playLine(i, iFrame[i], false, false, 4.5, 1500);

          })
        );
      }
    }
    cc.find('Canvas/Game/Machine/UI/GameScore/Value').getComponent(cc.Label).string = cc.store.gameResult.WinTotalPoint;

    yield co.waitForAll(lines);

    // 4
    if (lines.length >= 2) {
      yield playVideo('random',0);


      if(PublicSetUp.sound==1){
        cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
      }
      
      
    }
  }

  if(cc.store.cardRatio>=1 && cc.store.cardcnts>=1){
    let cardObj=cc.find('Canvas/Game/Card/cardback').getComponent("card");
    cardObj.show();
  }
  

    let heartObj=cc.find('Canvas/Game/heartPanel').getComponent("heart");
    heartObj.show(heart);


    if(VideoIdx!=null && VideoIdx!=0){
      yield playVideo('index',VideoIdx);
    }


    if(freeGameNCnts[0]==2){
      yield playVideo('card',1);
    }
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
      
    }else if(type==2){
      //如果目前是免費遊戲
      cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/cnt').getComponent(cc.Label).string=freeGameNCnts[2];
      let _total =addFloat(PublicSetUp.freeSpinTotal,cc.store.gameResult.WinTotalPoint);    
      PublicSetUp.freeSpinTotal=_total;
      cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string=PublicSetUp.freeSpinTotal;
      if(freeGameNCnts[2]==0){
        cc.store.type=1;
      }
    }
    
    if(cc.store.type==1){
      //最後一次
      cc.store.type=0;
      if(cc.store.FreeTotalPoint!=null){
        cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel/total').getComponent(cc.Label).string=cc.store.FreeTotalPoint;
      }
      
      yield co.waitForSeconds(2);     
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
