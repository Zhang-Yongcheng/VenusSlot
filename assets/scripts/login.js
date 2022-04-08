import connectToServer from './connectToServer';

cc.Class({
  extends: cc.Component,

  onLoad() {
    const accountEditBox = this.node.getChildByName('Account').getComponent(cc.EditBox);
    const passwordEditBox = this.node.getChildByName('Password').getComponent(cc.EditBox);
    const okButton = this.node.getChildByName('Ok').getComponent(cc.Button);
    okButton.node.on('click', () => {
      if (accountEditBox.string.length === 0 || passwordEditBox.string.length === 0) {
        return;
      }
      accountEditBox.enabled = false;
      passwordEditBox.enabled = false;
      okButton.interactable = false;
      connectToServer('213.139.235.73', 6380, accountEditBox.string, passwordEditBox.string);
    });
  }
});
