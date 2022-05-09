
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/BaseCmdLogic');
require('./assets/scripts/LoginScene');
require('./assets/scripts/Photon-Javascript_SDK');
require('./assets/scripts/Photon_Interface');
require('./assets/scripts/PublicSetUp');
require('./assets/scripts/autoPlayButton');
require('./assets/scripts/buildSymbols');
require('./assets/scripts/co.cc');
require('./assets/scripts/connectToServer');
require('./assets/scripts/decBetButton');
require('./assets/scripts/freeSpinAnim');
require('./assets/scripts/getSymbolAnchor');
require('./assets/scripts/getSymbolSprite');
require('./assets/scripts/handleGameCommand');
require('./assets/scripts/heart');
require('./assets/scripts/historyButton');
require('./assets/scripts/homeButton');
require('./assets/scripts/incBetButton');
require('./assets/scripts/lineFrames');
require('./assets/scripts/login');
require('./assets/scripts/mainController');
require('./assets/scripts/manualPlayButton');
require('./assets/scripts/maxBetButton');
require('./assets/scripts/menuButton');
require('./assets/scripts/menuController');
require('./assets/scripts/observable.cc');
require('./assets/scripts/pauseButton');
require('./assets/scripts/performanceController');
require('./assets/scripts/playAll');
require('./assets/scripts/playButton');
require('./assets/scripts/playEffect');
require('./assets/scripts/playLine');
require('./assets/scripts/playSymbolCol');
require('./assets/scripts/playVideo');
require('./assets/scripts/readMeButton');
require('./assets/scripts/readPanel');
require('./assets/scripts/requestGameResult');
require('./assets/scripts/requestTableInfo');
require('./assets/scripts/score');
require('./assets/scripts/shuffle');
require('./assets/scripts/sound');
require('./assets/scripts/soundOffButton');
require('./assets/scripts/soundOnButton');
require('./assets/scripts/symbolGridIndexMapping');
require('./assets/scripts/value-types.cc');
require('./assets/scripts/videoReady');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();