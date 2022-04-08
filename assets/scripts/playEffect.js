import co from './co.cc';

const playEffect = (function () {
  const cachedEffectSpriteFrame = {};

  return function* playEffect(node, duration, loop = true) {
    let playNode = node.getChildByName('Effect');
    if (playNode === null) {
      playNode = new cc.Node('Effect');
      playNode.active = false;
      node.addChild(playNode);
    }

    let playSprite = playNode.getComponent(cc.Sprite);
    if (playSprite === null) {
      playSprite = playNode.addComponent(cc.Sprite);
    }

    if (playNode.active === true) {
      return;
    }

    const effectSource = cc.find('Canvas/Game/Machine/Performance/Effect');

    try {
      playNode.active = true;

      while (true) {
        const t0 = co.currentRuntime.lastTickTime;

        for (let done = false; done === false; ) {
          const p = (co.currentRuntime.lastTickTime - t0) / duration;
          let i = Math.floor(effectSource.childrenCount * p);
          if (i >= effectSource.childrenCount) {
            i = effectSource.childrenCount - 1;
            done = true;
          }

          const effectName = `SlotEffect_${i.toString().padStart(5, '0')}`;
          let spriteFrame = cachedEffectSpriteFrame[effectName];
          if (spriteFrame === undefined) {
            cachedEffectSpriteFrame[effectName] = spriteFrame = effectSource.getChildByName(effectName).getComponent(cc.Sprite).spriteFrame;
          }
          playSprite.spriteFrame = spriteFrame;

          yield;
        }

        if (loop !== true) {
          break;
        }
      }
    } finally {
      playNode.active = false;
    }
  };
})();

export default playEffect;
