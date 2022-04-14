
(function () {
var scripts = [{"deps":{"./assets/scripts/Photon-Javascript_SDK":7,"./assets/scripts/Photon_Interface":1,"./assets/scripts/PublicSetUp":9,"./assets/scripts/autoPlayButton":8,"./assets/scripts/buildSymbols":2,"./assets/scripts/co.cc":5,"./assets/scripts/connectToServer":3,"./assets/scripts/decBetButton":4,"./assets/scripts/freeSpinAnim":6,"./assets/scripts/getSymbolAnchor":10,"./assets/scripts/getSymbolSprite":11,"./assets/scripts/handleGameCommand":13,"./assets/scripts/heart":12,"./assets/scripts/historyButton":14,"./assets/scripts/homeButton":15,"./assets/scripts/incBetButton":16,"./assets/scripts/lineFrames":17,"./assets/scripts/login":18,"./assets/scripts/mainController":19,"./assets/scripts/manualPlayButton":20,"./assets/scripts/maxBetButton":21,"./assets/scripts/menuButton":22,"./assets/scripts/menuController":23,"./assets/scripts/observable.cc":26,"./assets/scripts/pauseButton":25,"./assets/scripts/performanceController":24,"./assets/scripts/playAll":27,"./assets/scripts/playButton":28,"./assets/scripts/playEffect":29,"./assets/scripts/playLine":30,"./assets/scripts/playSymbolCol":32,"./assets/scripts/playVideo":31,"./assets/scripts/readMeButton":33,"./assets/scripts/readPanel":34,"./assets/scripts/requestGameResult":35,"./assets/scripts/requestTableInfo":36,"./assets/scripts/shuffle":37,"./assets/scripts/sound":38,"./assets/scripts/soundOffButton":39,"./assets/scripts/soundOnButton":40,"./assets/scripts/symbolGridIndexMapping":41,"./assets/scripts/value-types.cc":42,"./assets/scripts/videoReady":43,"./assets/scripts/BaseCmdLogic":45,"./assets/scripts/LoginScene":44},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./Photon-Javascript_SDK":7},"path":"preview-scripts/assets/scripts/Photon_Interface.js"},{"deps":{"./getSymbolAnchor":10,"./getSymbolSprite":11},"path":"preview-scripts/assets/scripts/buildSymbols.js"},{"deps":{"./BaseCmdLogic":45,"./handleGameCommand":13,"./Photon_Interface":1},"path":"preview-scripts/assets/scripts/connectToServer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/decBetButton.js"},{"deps":{"./value-types.cc":42},"path":"preview-scripts/assets/scripts/co.cc.js"},{"deps":{},"path":"preview-scripts/assets/scripts/freeSpinAnim.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Photon-Javascript_SDK.js"},{"deps":{"PublicSetUp":9},"path":"preview-scripts/assets/scripts/autoPlayButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PublicSetUp.js"},{"deps":{},"path":"preview-scripts/assets/scripts/getSymbolAnchor.js"},{"deps":{},"path":"preview-scripts/assets/scripts/getSymbolSprite.js"},{"deps":{},"path":"preview-scripts/assets/scripts/heart.js"},{"deps":{},"path":"preview-scripts/assets/scripts/handleGameCommand.js"},{"deps":{},"path":"preview-scripts/assets/scripts/historyButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/homeButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/incBetButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lineFrames.js"},{"deps":{"./connectToServer":3},"path":"preview-scripts/assets/scripts/login.js"},{"deps":{"./co.cc":5,"./connectToServer":3,"PublicSetUp":9},"path":"preview-scripts/assets/scripts/mainController.js"},{"deps":{"PublicSetUp":9},"path":"preview-scripts/assets/scripts/manualPlayButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/maxBetButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/menuButton.js"},{"deps":{"./co.cc":5},"path":"preview-scripts/assets/scripts/menuController.js"},{"deps":{"./buildSymbols":2,"./co.cc":5,"./playAll":27,"./shuffle":37,"./requestTableInfo":36,"./requestGameResult":35,"PublicSetUp":9},"path":"preview-scripts/assets/scripts/performanceController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pauseButton.js"},{"deps":{"./co.cc":5,"./value-types.cc":42},"path":"preview-scripts/assets/scripts/observable.cc.js"},{"deps":{"./co.cc":5,"./playLine":30,"./playSymbolCol":32,"./playVideo":31,"./PublicSetUp":9,"PublicSetUp":9},"path":"preview-scripts/assets/scripts/playAll.js"},{"deps":{},"path":"preview-scripts/assets/scripts/playButton.js"},{"deps":{"./co.cc":5},"path":"preview-scripts/assets/scripts/playEffect.js"},{"deps":{"./co.cc":5,"./getSymbolAnchor":10,"./lineFrames":17,"./playEffect":29},"path":"preview-scripts/assets/scripts/playLine.js"},{"deps":{"./co.cc":5,"./sound":38,"PublicSetUp":9},"path":"preview-scripts/assets/scripts/playVideo.js"},{"deps":{"./co.cc":5},"path":"preview-scripts/assets/scripts/playSymbolCol.js"},{"deps":{},"path":"preview-scripts/assets/scripts/readMeButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/readPanel.js"},{"deps":{"./co.cc":5,"./buildSymbols":2},"path":"preview-scripts/assets/scripts/requestGameResult.js"},{"deps":{},"path":"preview-scripts/assets/scripts/requestTableInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/shuffle.js"},{"deps":{"PublicSetUp":9},"path":"preview-scripts/assets/scripts/sound.js"},{"deps":{"PublicSetUp":9},"path":"preview-scripts/assets/scripts/soundOffButton.js"},{"deps":{"PublicSetUp":9},"path":"preview-scripts/assets/scripts/soundOnButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/symbolGridIndexMapping.js"},{"deps":{},"path":"preview-scripts/assets/scripts/value-types.cc.js"},{"deps":{},"path":"preview-scripts/assets/scripts/videoReady.js"},{"deps":{"PublicSetUp":9},"path":"preview-scripts/assets/scripts/LoginScene.js"},{"deps":{"./observable.cc":26,"./Photon-Javascript_SDK":7,"./Photon_Interface":1,"PublicSetUp":9},"path":"preview-scripts/assets/scripts/BaseCmdLogic.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    