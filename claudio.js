//console.log('this line is test for git again');
(function () {
    var claudio = function (selector) {
        return new claudio.fn.init(selector);
    };
    var deletedIds = [];
    var indexOf = deletedIds.indexOf || function (elem) {
        var len = this.length;
        var ret = -1;
        for (var i = 0; i < len; i += 1) {
            if (elem === this[i]) {
                ret = i;
                break;
            };
        };
        return ret;
    };
    var slice = deletedIds.slice;
    var splice = deletedIds.splice;
    var push = deletedIds.push;
    var concat = deletedIds.concat;
    var class2type = {  };
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {  };
    var docElem = document.documentElement;
    var docBody = document.body;
    claudio.fn = { constructor : claudio,
                length : 0,
                init : function (selector, context) {
        if (!selector) {
            return this;
        } else {
            return this.pushStack(claudio.find(selector, context));
        };
    },
                pushStack : function (elems) {
        var ret = claudio.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
    },
                filter : function (selector) {
        return this.pushStack(claudio.filter(selector, this));
    },
                find : function (selector) {
        return this.map(function (elem, i) {
            return claudio.find(selector, elem);
        });
    },
                add : function (selector) {
        return this.pushStack(claudio.add(selector, this));
    },
                addSelf : function () {
        return claudio.unique(claudio.merge(this.prevObject || this.constructor(), this));
    },
                map : function (callback, unique) {
        return this.pushStack(claudio.map(this, function (elem, i) {
            return callback.call(elem, elem, i);
        }, unique));
    },
                each : function (callback) {
        return claudio.each(this, callback);
    },
                eq : function (i) {
        var len = this.length;
        var j = (i + 0) + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
                first : function () {
        return this.eq(0);
    },
                last : function () {
        return this.eq(-1);
    },
                end : function () {
        return this.prevObject || this.constructor(null);
    },
                get : function (num) {
        if (num != null) {
            return num >= 0 ? this[num] : this[this.length + num];
        } else {
            return slice.call(this);
        };
    },
                index : function (elem) {
        var len = this.length;
        var ret = -1;
        for (var i = 0; i < len; i += 1) {
            if (elem === this[i]) {
                ret = i;
                break;
            };
        };
        return ret;
    },
                slice : function () {
        return this.pushStack(slice.apply(this, arguments));
    },
                toArray : function () {
        return slice.call(this);
    },
                extend : function (options) {
        for (var i in options) {
            if (hasOwn.call(options, i)) {
                this[i] = options[i];
            };
        };
        return this;
    }
              };
    claudio.prototype = claudio.fn;
    claudio.fn.init.prototype = claudio.fn;
    claudio.extend = claudio.fn.extend;
    claudio.extend({ each : function (obj, callback) {
        var len = obj.length;
        var isArray = claudio.isArrayLike(obj);
        var value;
        if (isArray) {
            for (var i = 0; i < len; i += 1) {
                value = callback.call(obj[i], obj[i], i);
                if (value === false) {
                    break;
                };
            };
        } else {
            for (var i in obj) {
                value = callback.call(obj[i], obj[i], i);
                if (value === false) {
                    break;
                };
            };
        };
        return obj;
    },
                     map : function (obj, callback, unique) {
        if (unique === undefined) {
            unique = false;
        };
        var len = obj.length;
        var isArray = claudio.isArrayLike(obj);
        var ret = [];
        var value;
        if (isArray) {
            for (var i = 0; i < len; i += 1) {
                value = callback(obj[i], i);
                if (value != null) {
                    ret.push(value);
                };
            };
        } else {
            for (var i in obj) {
                value = callback(obj[i], i);
                if (value != null) {
                    ret.push(value);
                };
            };
        };
        ret = concat.apply([], ret);
        if (unique === true) {
            ret = claudio.unique(ret);
        };
        return ret;
    },
                     mapOne : function (obj, callback) {
        var elem0 = obj[0];
        return elem0 ? callback.call(elem0, elem0, 0) : null;
    },
                     grep : function (elems, callback, invert) {
        var callbackInvese;
        var len = elems.length;
        var callbackExpect = !invert;
        var elem;
        var matches = [];
        for (var i = 0; i < len; i += 1) {
            elem = elems[i];
            callbackInvese = !callback(elem, i);
            if (callbackInvese !== callbackExpect) {
                matches.push(elem);
            };
        };
        return matches;
    },
                     unique : function (array) {
        var elem;
        var former;
        var later;
        for (var i = 0; i < array.length; i += 1) {
            elem = array[i];
            former = slice.call(array, 0, i);
            later = slice.call(array, i + 1);
            if (indexOf.call(former, elem) > -1 || indexOf.call(later, elem) > -1) {
                splice.call(array, i, 1);
                --i;
            };
        };
        return array;
    },
                     some : Array.some || function (arr, callback) {
        var len = arr.length;
        var ret = false;
        for (var i = 0; i < len; i += 1) {
            if (callback(arr[i], i, arr)) {
                ret = true;
                break;
            };
        };
        return ret;
    },
                     every : Array.every || function (arr, callback) {
        var ret = true;
        var len = arr.length;
        for (var i = 0; i < len; i += 1) {
            if (!callback(arr[i], i, arr)) {
                ret = false;
                break;
            };
        };
        return ret;
    },
                     type : function (obj) {
        var type = typeof obj;
        if (obj == null) {
            return obj + '';
        } else {
            return type === 'object' || type === 'function' ? class2type[toString.call(obj)] || 'object' : type;
        };
    },
                     isArray : Array.isArray || function (obj) {
        return claudio.type(obj) === 'array';
    },
                     isNumeric : function (obj) {
        return !claudio.isArray(obj) && (obj - parseFloat(obj)) + 1 >= 0;
    },
                     isFunction : function (obj) {
        return claudio.type(obj) === 'function';
    },
                     isWindow : function (obj) {
        return obj != null && obj === obj.window;
    },
                     isEmptyObject : function (obj) {
        var ret = true;
        for (var name in obj) {
            ret = false;
            break;
        };
        return ret;
    },
                     isArrayLike : function (obj) {
        var length = 'length' in obj && obj.length;
        var type = claudio.type(obj);
        if (type === 'function' || claudio.isWindow(obj)) {
            return false;
        } else if (obj.nodeType === 1 && length) {
            return true;
        } else {
            return type === 'array' || length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
        };
    },
                     isPlainObject : function (obj) {
        if (!obj || toString.call(obj) !== '[object Object]' || obj.nodeType || claudio.isWindow(obj)) {
            return false;
        };
        try {
            if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
                return false;
            };
        } catch (e) {
            return false;
        };
        for (var key in obj) {
        };
        return 'undefined' === typeof key || hasOwn.call(obj, key);
    },
                     isHTML : function (str) {
        var pattern = /<[a-z][\s\S]*>/i;
        return typeof str === 'string' && pattern.test(str);
    },
                     merge : function (first, second) {
        var len = second.length;
        var j = 0;
        var i = first.length;
        while (j < len) {
            first[i] = second[j];
            ++i;
            ++j;
        };
        if (len !== len) {
            while (undefined !== second[j]) {
                first[i] = second[j];
                ++i;
                ++j;
            };
        };
        first.length = i;
        return first;
    },
                     union : function (obj1, obj2) {
        if (claudio.isPlainObject(obj1) && claudio.isPlainObject(obj2)) {
            for (var i in obj2) {
                if (!(i in obj1)) {
                    obj1[i] = obj2[i];
                };
            };
        };
        if (claudio.isArray(obj1) && claudio.isArray(obj2)) {
            var len = obj2.length;
            var value;
            for (var i = 0; i < len; i += 1) {
                value = obj2[i];
                if (!claudio.inArray(value, obj1)) {
                    obj1[obj1.length] = value;
                };
            };
        };
        return obj1;
    },
                     makeArray : function (arr, result) {
        ret = result || [];
        if (arr != null) {
            if (claudio.isArrayLike(arr)) {
                claudio.merge(ret, typeof arr === 'string' ? [arr] : arr);
            } else {
                ret.push(arr);
            };
        };
        return ret;
    },
                     toArray : function (arrayLike) {
        try {
            return slice.call(arrayLike);
        } catch (e) {
            return claudio.merge([], arrayLike);
        };
    },
                     inArray : function (elem, arr) {
        var len = arr.length;
        var ret = false;
        if (claudio.isFunction(elem)) {
            for (var i = 0; i < len; i += 1) {
                if (elem(arr[i])) {
                    ret = true;
                    break;
                };
            };
            return ret;
        } else {
            return indexOf.call(arr, elem) > -1 ? true : false;
        };
    },
                     find : function (selector, context) {
        if (!selector) {
            return [];
        } else if (claudio.isHTML(selector)) {
            return claudio.toArray(claudio.dom.fragment(selector).childNodes);
        } else if (typeof selector === 'string') {
            return claudio.toArray((context || document).querySelectorAll(selector));
        } else if (selector.nodeType) {
            return [selector];
        } else {
            return [];
        };
    },
                     isMatch : function (selector, elem) {
        parent = elem.parentNode || document;
        var ret = claudio.find(selector, parent);
        return claudio.inArray(elem, ret);
    },
                     filter : function (selector, elems) {
        return claudio.grep(elems, function (elem, i) {
            return claudio.isMatch(selector, elem);
        });
    },
                     add : function (selector, elems) {
        return claudio.unique(claudio.makeArray(claudio.find(selector), elems));
    },
                     support : support
                   });
    claudio.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (name, i) {
        return class2type['[object ' + name + ']'] = name.toLowerCase();
    });
    claudio.extend({ createXHR : function () {
        return new XMLHttpRequest();
    },
                     ajaxOptions : { type : 'GET',
                                     url : '',
                                     timeout : 5000,
                                     data : '',
                                     dataType : 'text',
                                     complete : function () {
        return null;
    },
                                     success : function () {
        return null;
    },
                                     error : function () {
        return null;
    }
                                   },
                     ajaxSetup : function (options) {
        return claudio.ajaxOptions = claudio.union(options, claudio.ajaxOptions);
    },
                     setupOptions : function (options) {
        options = options || {  };
        return options = claudio.union(options, claudio.ajaxOptions);
    },
                     serilize : function (obj) {
        console.log(obj);
        var ret = [];
        var len = obj.length;
        var elem;
        if (claudio.isArray(obj)) {
            for (var i = 0; i < len; i += 1) {
                elem = obj[i];
                ret.push(encodeURIComponent(elem.name) + '=' + encodeURIComponent(elem.value));
            };
        } else if (claudio.isPlainObject(obj)) {
            for (var i in obj) {
                ret.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
            };
        } else {
            obj;
        };
        return ret.join('&');
    },
                     httpSuccess : function (r) {
        var status = r.status;
        return status >= 200 && status < 300 || status === 304 || navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && 'undefined' === typeof status || !status && location.protocol === 'file:' ? true : false;
    },
                     httpData : function (r, dataType) {
        if (dataType) {
            dataType = dataType.toLowerCase();
        };
        var ct = r.getResponseHeader('content-type');
        var data = dataType == null || dataType === 'xml' ? r.responseXML : r.responseText;
        if (dataType === 'json') {
            data = JSON.parse(data);
        };
        if (dataType === 'script') {
            eval.call(window, data);
        };
        return data;
    },
                     ajax : function (options) {
        claudio.setupOptions(options);
        var xhr = claudio.createXHR();
        var url = options.url;
        var type = options.type.toUpperCase();
        var data = options.data;
        if (type === 'GET' && data) {
            url = url + '?' + claudio.serilize(data);
        };
        clearTimeout(xhr.timer);
        var requestDone = false;
        xhr.timer = setTimeout(function () {
            return requestDone = true;
        }, options.timeout);
        xhr.open(type, url, true);
        if (type === 'POST') {
            xhr.setRequestHeader({ 'Content-type' : 'text/plain:charset=UTF-8' });
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && !requestDone) {
                if (claudio.httpSuccess(xhr)) {
                    options.success(claudio.httpData(xhr, options.dataType));
                } else {
                    options.error(xhr);
                };
                options.complete(xhr);
                return xhr = null;
            };
        };
        return type === 'GET' ? xhr.send(null) : xhr.send(data);
    },
                     get : function (options) {
        return claudio.ajax(claudio.union({ type : 'GET' }, options));
    },
                     post : function (options) {
        return claudio.ajax(claudio.union({ type : 'POST' }, options));
    }
                   });
    claudio.extend({ event : { guid : 0,
                               addEvent : function (elem, type, handler) {
        if (!handler.$$guid) {
            handler.$$guid = ++claudio.event.guid;
        };
        if (!elem.events) {
            elem.events = {  };
        };
        handlers = elem.events[type];
        if (!handlers) {
            elem.events[type] = [];
            handlers = elem.events[type];
            if (elem['on' + type]) {
                handlers[0] = elem['on' + type];
            };
            elem['on' + type] = claudio.event.handleEvent;
        };
        return handlers[handler.$$guid] = handler;
    },
                               removeEvent : function (elem, type, handler) {
        var len;
        if (elem.events) {
            handlers = elem.events[type];
            len = handlers;
            if (handlers) {
                delete handlers[handler.$$guid];
                if (claudio.every(slice.call(handlers, 1), function (handler) {
                    return handler === undefined;
                })) {
                    elem.events = null;
                    return handlers[0] === undefined ? (elem['on' + type] = null) : (elem['on' + type] = handlers[0]);
                };
            };
        };
    },
                               handleEvent : function (event) {
        var returnValue = true;
        event = event || claudio.event.fixedEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
        var handlers = this.events[event.type];
        var handler;
        var len = handlers.length;
        for (var i = 0; i < len; i += 1) {
            handler = handlers[i];
            if (handler !== undefined) {
                if (handler.call(this, event) === false) {
                    returnValue = false;
                    break;
                };
            };
        };
        return returnValue;
    },
                               fixedEvent : function (event) {
        event.preventDefault = claudio.event.preventDefault;
        event.stopPropagation = claudio.event.stopPropagation;
        event.target = event.srcElement;
        return event;
    },
                               preventDefault : function () {
        this.returnValue = false;
        return true;
    },
                               stopPropagation : function () {
        return this.cancelBubble = true;
    },
                               bindReady : function (handler) {
        var called = false;
        var isFrame = false;
        /** ç§»é™¤äº‹ä»¶ */
        function unbindReady() {
            if (document.addEventListener) {
                return document.removeEventListener('DOMContentLoaded', ready, false);
            } else if (document.attachEvent) {
                return document.attachEvent('onreadystatechange', frameLoadHandler);
            };
        };
        /** æ‰§è¡Œå„ä¸ªäº‹ä»¶å‰ï¼Œç§»é™¤å·²ç»æ³¨å†Œçš„äº‹ä»¶ */
        function ready() {
            if (!called) {
                called = true;
                unbindReady();
                return handler();
            };
        };
        /** frameä¸­çš„äº‹ä»¶å¤„ç†æ–¹å¼ */
        function frameLoadHandler() {
            return /loaded|complete/.test(document.readyState) ? ready() : null;
        };
        /** å¦‚æžœä¸æ˜¯åœ¨frameä¸­ï¼Œè½®è¯¢å¾—çŸ¥æ˜¯å¦DOMReady */
        function tryScroll() {
            if (!called) {
                try {
                    docElem.doScroll('left');
                    return ready();
                } catch (e) {
                    return setTimeout(tryScroll);
                };
            };
        };
        if (document.readyState === 'complete') {
            return setTimeout(ready);
        } else if (document.addEventListener) {
            return document.addEventListener('DOMContentLoaded', ready, false);
        } else if (document.attachEvent) {
            try {
                isFrame = window.frameElement != null;
            } catch (e) {
            };
            if (docElem.doScroll) {
                return !isFrame ? tryScroll() : document.attachEvent('onreadystatechange', frameLoadHandler);
            };
        };
    },
                               delegate : function (srcElem, selector, type, fn) {
        var targetElems = claudio.find(selector);
        var len = targetElems.length;
        var targetElem;
        return claudio.event.addEvent(srcElem, type, function (e) {
            for (var i = 0; i < len; i += 1) {
                targetElem = targetElems[i];
                if (e.target === targetElem) {
                    fn.call(targetElem, e);
                };
            };
        });
    }
                             } });
    claudio.each({ on : 'addEvent', off : 'removeEvent' }, function (eventName, protoName) {
        return claudio.fn[protoName] = function (type, handler) {
            return this.each(function (elem) {
                return claudio.event[eventName](elem, type, handler);
            });
        };
    });
    claudio.fn.once = function (type, handler) {
        var that = this;
        function callback(e) {
            that.off(type, callback);
            return handler();
        };
        return this.on(type, callback);
    };
    claudio.each('click mouseover'.split(' '), function (type, i) {
        claudio.fn['on' + type] = function (handler) {
            return this.on(type, handler);
        };
        return claudio.fn['off' + type] = function (handler) {
            return this.off(type, handler);
        };
    });
    var readyList = [];
    claudio.extend({ ready : function (handler) {
        function executeHandlers() {
            var len = readyList.length;
            for (var i = 0; i < len; i += 1) {
                readyList[i]();
            };
        };
        if (!readyList.length) {
            claudio.event.bindReady(executeHandlers);
        };
        return readyList.push(handler);
    } });
    claudio.fn.delegate = function (selector, type, fn) {
        return this.each(function (elem) {
            return claudio.event.delegate(elem, selector, type, fn);
        });
    };
    claudio.extend({ style : { _getStyle : function (elem, name) {
        if (elem.style[name]) {
            return elem.style[name];
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            var s = document.defaultView.getComputedStyle(elem, '');
            name = name.replace(/([A-Z])/g, '-$1');
            name = name.toLowerCase();
            return s && s.getPropertyValue(name);
        } else if (elem.currentStyle) {
            return elem.currentStyle[name];
        } else {
            return '';
        };
    },
                               getStyle : function (elem, name) {
        var tmpName = name.toLowerCase();
        if (tmpName === 'opacity' && !support.opacity) {
            name = 'filter';
        };
        if (tmpName.search('float') > -1 && !support.cssFloat) {
            name = 'styleFloat';
        };
        var ret = claudio.style._getStyle(elem, name);
        if (name === 'filter') {
            ret = ret === '' ? 100 : parseFloat(ret.match(/\d+/g)[0]);
        };
        if (name === 'opacity') {
            ret *= 100;
        };
        if (name.search(/width|height|left|right/i) > -1) {
            ret = parseFloat(ret);
        };
        return ret;
    },
                               setStyle : function (elem, name, value) {
        if (name === 'opacity') {
            return claudio.style.setOpacity(elem, value);
        } else if (name.search(/float/i) > -1) {
            return claudio.style.setFloat(elem, value);
        } else {
            if (name.search(/width|height|left|right|top|bottom/i) > -1) {
                if (typeof value === 'number') {
                    value += 'px';
                };
            };
            return elem.style[name] = value;
        };
    },
                               setOpacity : function (elem, value) {
        value = Math.min(100, Math.max(0, value));
        return claudio.support.opacity ? (elem.style.opacity = value / 100) : (elem.style.filter = 'alpha(opacity=' + value + ')');
    },
                               setFloat : function (elem, value) {
        return claudio.support.cssFloat ? (elem.style['float'] = value) : (elem.style['styleFloat'] = value);
    },
                               resetCSS : function (elem, prop) {
        var old = {  };
        for (var i in prop) {
            old[i] = elem.style[i];
            elem.style[i] = prop[i];
        };
        return old;
    },
                               restoreCSS : function (elem, prop) {
        for (var i in prop) {
            elem.style[i] = prop[i];
        };
    },
                               innerDimension : function (elem) {
        var old = {  };
        var ret;
        if (claudio.style.getStyle(elem, 'display') === 'none') {
            old = claudio.style.resetCSS(elem, { display : '',
                                              visibility : 'hidden',
                                              position : 'absolute'
                                            });
        };
        ret = { width : elem.clientWidth, height : elem.clientHeight };
        claudio.style.restoreCSS(elem, old);
        return ret;
    },
                               outerDimension : function (elem) {
        var old = {  };
        var ret;
        if (claudio.style.getStyle(elem, 'display') === 'none') {
            old = claudio.style.resetCSS(elem, { display : '',
                                              visibility : 'hidden',
                                              position : 'absolute'
                                            });
        };
        ret = { width : elem.offsetWidth, height : elem.offsetHeight };
        claudio.style.restoreCSS(elem, old);
        return ret;
    },
                               deltas : { linear : function (progress) {
        return progress;
    },
                                          quad : function (progress) {
        return Math.pow(progress, 2);
    },
                                          circ : function (progress) {
        return 1 - Math.sin(Math.acos(progress));
    },
                                          back : function (x) {
        return function (progress) {
            return Math.pow(progress, 2) * ((x + 1) * progress - x);
        };
    },
                                          elastic : function (x) {
        return function (progress) {
            return Math.pow(2, 10 * (progress - 1)) * Math.cos((20 * Math.PI * x * progress) / 3);
        };
    }
                                        }
                             } });
    (function () {
        var div = document.createElement('div');
        div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
        var a = div.getElementsByTagName('a')[0];
        var style = a.style;
        style.cssText = 'float:left;opacity:.5';
        support.opacity = style.opacity == '0.5';
        support.cssFloat = style.cssFloat;
        support.standardMode = document.compatMode === 'CSS1Compat';
        return div = null;
    })();
    claudio.fn.css = function (name, value) {
        if ('undefined' === typeof value) {
            if (typeof name === 'string') {
                return claudio.mapOne(this, function (elem) {
                    return claudio.style.getStyle(elem, name);
                });
            } else if (claudio.isPlainObject(name)) {
                return this.each(function (elem) {
                    for (var i in name) {
                        claudio.style.setStyle(elem, i, name[i]);
                    };
                });
            };
        } else {
            return this.each(function (elem) {
                return claudio.style.setStyle(elem, name, value);
            });
        };
    };
    claudio.extend({ getScrollOffsets : function () {
        claudio.style.getScrollOffsets = false ? function () {
            return { top : window.pageYOffset, left : pageXOffset };
        } : function () {
            return { top : Math.max(docElem.scrollTop, docBody.scrollTop), left : Math.max(docElem.scrollLeft, docBody.scrollLeft) };
        };
        return claudio.style.getScrollOffsets();
    }, getViewPort : function () {
        claudio.style.getViewPort = support.standardMode ? function () {
            return { width : docElem.clientWidth, height : docElem.clientHeight };
        } : function () {
            return { width : docBody.clientWidth, height : docBody.clientHeight };
        };
        return claudio.style.getViewPort();
    } });
    claudio.each('width height'.split(' '), function (name) {
        return claudio.fn[name] = function (value) {
            return this.css(name, value);
        };
    });
    claudio.each('Width Height'.split(' '), function (name) {
        claudio.fn['inner' + name] = function () {
            return claudio.mapOne(this, function (elem) {
                return claudio.style.innerDimension(elem)[name.toLowerCase()];
            });
        };
        return claudio.fn['outer' + name] = function () {
            return claudio.mapOne(this, function (elem) {
                return claudio.style.outerDimension(elem)[name.toLowerCase()];
            });
        };
    });
    claudio.fn.offset = function () {
        return claudio.mapOne(this, function (elem) {
            var curLeft = 0;
            var curTop = 0;
            while (elem) {
                curLeft += elem.offsetLeft - elem.scrollLeft;
                curTop += elem.offsetTop - elem.scrollTop;
                elem = elem.offsetParent;
            };
            return { left : curLeft, top : curTop };
        });
    };
    claudio.fn.extend({ hide : function () {
        return this.each(function (elem) {
            var curDisplay = claudio.style.getStyle(elem, 'display');
            if (curDisplay !== 'none') {
                if (!elem.$oldDisplay) {
                    elem.$oldDisplay = curDisplay;
                };
            };
            return elem.style.display = 'none';
        });
    },
                        show : function () {
        return this.each(function (elem) {
            return elem.style.display = elem.$oldDisplay || '';
        });
    },
                        toggle : function () {
        return this.each(function (elem) {
            return claudio.style.getStyle(elem, 'display') === 'none' ? claudio(elem).show() : claudio(elem).hide();
        });
    },
                        animate : function (targetJson, opts) {
        var defaultOpts = { delay : 10,
                            duration : 300,
                            delta : 'linear'
                          };
        var defaultDelta = claudio.style.deltas.linear;
        opts = opts ? claudio.union(opts, defaultOpts) : defaultOpts;
        var delta = opts.delta;
        if (typeof delta === 'string') {
            opts.delta = delta.search(/(circ|quad)/) > -1 ? claudio.style.deltas[RegExp['$1']] : (delta.search(/(back|elastic)/) > -1 ? claudio.style.deltas[RegExp['$1']](opts.deltaX || 1.5) : defaultDelta);
        };
        var that = this;
        var start = new Date();
        return this.each(function (elem) {
            clearInterval(elem.timer);
            var subJson = {  };
            var srcJson = {  };
            var iSub;
            for (var attr in targetJson) {
                srcJson[attr] = claudio.style.getStyle(elem, attr);
            };
            for (var attr in targetJson) {
                iSub = targetJson[attr] - srcJson[attr];
                if (iSub !== 0) {
                    subJson[attr] = iSub;
                };
            };
            if (!claudio.isEmptyObject(subJson)) {
                return elem.timer = setInterval(function () {
                    var timePassed = new Date() - start;
                    var progress = timePassed / opts.duration;
                    if (progress > 1) {
                        progress = 1;
                    };
                    var delta = opts.delta(progress);
                    for (var attr in subJson) {
                        claudio.style.setStyle(elem, attr, srcJson[attr] + subJson[attr] * delta);
                    };
                    if (progress === 1) {
                        clearInterval(elem.timer);
                        that.timer = null;
                        return opts.callback ? opts.callback.call(that) : null;
                    };
                }, opts.delay);
            };
        });
    },
                        slideDown : function (opts) {
        return this.each(function (elem) {
            var h = elem.$oldHeight || claudio(elem).css('height');
            claudio(elem).show();
            return claudio(elem).animate({ height : h }, opts);
        });
    },
                        slideUp : function (opts) {
        this.each(function (elem) {
            return !elem.$oldHeight ? (elem.$oldHeight = claudio(elem).css('height')) : null;
        });
        return this.animate({ height : 0 }, claudio.union({ callback : function () {
            return this.hide();
        } }, opts));
    },
                        slideToggle : function () {
        return this.each(function (elem) {
            return claudio(elem).css('height') <= 0 ? claudio(elem).slideDown() : claudio(elem).slideUp();
        });
    },
                        fadeTo : function (opacity) {
        return this.animate({ opacity : opacity });
    },
                        fadeIn : function () {
        return this.fadeTo(100);
    },
                        fadeOut : function () {
        return this.fadeTo(0);
    }
                      });
    claudio.extend({ dom : { dir : function (elem, dir) {
        var matched = [];
        var cur = elem[dir];
        while (cur && cur.nodeType !== 9) {
            if (cur.nodeType === 1) {
                matched.push(cur);
            };
            cur = cur[dir];
        };
        return matched;
    },
                             sibling : function (elem, dir) {
        elem = elem[dir];
        while (elem && elem.nodeType !== 1) {
            elem = elem[dir];
        };
        return elem;
    },
                             nextSiblings : function (n, elem) {
        var ret = [];
        for (var i = n; i; i = i.nextSibling) {
            if (i.nodeType === 1 && i !== elem) {
                ret.push(i);
            };
        };
        return ret;
    },
                             setAttr : function (elem, name, value) {
        var toNormal = { 'for' : 'htmlFor', 'class' : 'className' };
        var unToNormal = { htmlFor : 'html', className : 'class' };
        name = toNormal[name] || name;
        elem[name] = value;
        if (elem.setAttribute) {
            name = unToNormal[name] || name;
            elem.setAttribute(name, value);
        };
        return elem;
    },
                             attr : function (elem, name, value) {
        if (name) {
            if (!value) {
                if (typeof name === 'string') {
                    return elem[name] || elem.getAttribute(name) || '';
                } else if (claudio.isPlainObject(name)) {
                    for (var i in name) {
                        claudio.setAttr(elem, i, name[i]);
                    };
                    return elem;
                };
            } else {
                return claudio.dom.setAttr(elem, name, value);
            };
        };
    },
                             removeAttr : function (elem, name) {
        elem.removeAttribute(name);
        return elem;
    },
                             _isElementWithClassList : function () {
        return Object.prototype.toString.call(document.body.classList) === '[object DOMTokenList]';
    },
                             hasClass : function (elem, name) {
        claudio.dom.hasClass = claudio.dom._isElementWithClassList() ? function (elem, name) {
            return elem.classList.contains(name);
        } : function (elem, name) {
            var pattern = new RegExp('(^|\\s)' + name + '(\\s|$)');
            var classes;
            if (name.length === 0 || name.indexOf(' ') > -1) {
                throw new Error('ivalide class name \'' + name + '\'');
            } else {
                classes = elem.className;
                if (classes === '') {
                    return false;
                } else if (classes === name) {
                    return true;
                } else {
                    return pattern.test(classes);
                };
            };
        };
        return claudio.dom.hasClass(elem, name);
    },
                             addClass : function (elem, name) {
        claudio.dom.addClass = claudio._isElementWithClassList() ? function (elem, name) {
            elem.classList.add(name);
            return elem;
        } : function (elem, name) {
            var classes;
            if (!claudio.dom.hasClass(elem, name)) {
                classes = elem.className;
                if (classes === '') {
                    elem.className = name;
                } else {
                    elem.className += classes.lastIndexof(' ') === classes.length - 1 ? name : ' ' + name;
                };
            };
            return elem;
        };
        return claudio.dom.addClass(elem, name);
    },
                             removeClass : function (elem, name) {
        claudio.dom.removeClass = claudio.dom._isElementWithClassList() ? function (elem, name) {
            elem.classList.remove(name);
            return elem;
        } : function (elem, name) {
            var classes;
            var pattern = new RegExp('\\s*\\b' + name + '\\b\\s*', 'g');
            if (claudio.dom.hasClass(elem, name)) {
                classes = elem.className;
                elem.className = classes.replace(pattern, ' ');
            };
            return elem;
        };
        return claudio.dom.removeClass(elem, name);
    },
                             toggleClass : function (elem, name) {
        claudio.dom.toggleClass = claudio.dom._isElementWithClassList() ? function (elem, name) {
            elem.classList.toggle(name);
            return elem;
        } : function (elem, name) {
            if (claudio.dom.hasClass(elem, name)) {
                claudio.dom.removeClass(elem, name);
            } else {
                claudio.dom.addClass(elem, name);
            };
            return elem;
        };
        return claudio.dom.toggleClass(elem, name);
    },
                             fragment : function (html) {
        var temp = document.createElement('div');
        var frag = document.createDocumentFragment();
        if (html) {
            temp.innerHTML = html;
        };
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        };
        return frag;
    },
                             insert : document.createElement('div').insertAdjacentHTML ? { before : function (e, h) {
        return e.insertAdjacentHTML('beforebegin', h);
    },
                                                                                           after : function (e, h) {
        return e.insertAdjacentHTML('afterend', h);
    },
                                                                                           atStart : function (e, h) {
        return e.insertAdjacentHTML('afterbegin', h);
    },
                                                                                           atEnd : function (e, h) {
        return e.insertAdjacentHTML('beforeend', h);
    }
                                                                                         } : { before : function (e, h) {
        return e.parentNode.insertBefore(claudio.dom.fragment(h), e);
    },
                                                                                               after : function (e, h) {
        return e.parent.insertBefore(claudio.dom.fragment(h), e.nextSibling);
    },
                                                                                               atStart : function (e, h) {
        return e.insertBefore(claudio.dom.fragment(h), e.firstChild);
    },
                                                                                               atEnd : function (e, h) {
        return e.appendChild(claudio.dom.fragment(h));
    }
                                                                                             },
                             locateTo : function (elem, html, location) {
        claudio.dom.insert[location](elem, html);
        return elem;
    },
                             insertTo : function (srcElems, selector, insertMethod) {
        var srcLen = srcElems.length;
        var targetElems = claudio.find(selector);
        var targetLen = targetElems.length;
        var ret = [];
        var temp;
        var fragment;
        for (var j = 0; j < targetLen; j += 1) {
            fragment = document.createDocumentFragment();
            for (var i = 0; i < srcLen; i += 1) {
                temp = j < targetLen - 1 ? srcElems[i].cloneNode(true) : srcElems[i];
                fragment.appendChild(temp);
                ret.push(temp);
            };
            insertMethod(fragment, targetElems[j]);
        };
        return ret;
    },
                             wrap : function (elem, html) {
        var target = claudio.find(html)[0];
        var p = elem.parentNode;
        p.replaceChild(target, elem);
        target.appendChild(elem);
        return elem;
    },
                             wrapInner : function (elem, html) {
        var target = claudio.find(html)[0];
        while (elem.firstChild) {
            target.appendChild(elem.firstChild);
        };
        elem.appendChild(target);
        return elem;
    },
                             wrapAll : function (elems, html) {
        var target = claudio.find(html)[0];
        var elem0 = elems[0];
        var parent = elem0.parentNode;
        elems[0] = elem0.cloneNode(true);
        var len = elems.length;
        for (var i = 0; i < len; i += 1) {
            target.appendChild(elems[i]);
        };
        parent.replaceChild(target, elem0);
        return elems;
    },
                             replaceWith : function (elems, html) {
        var src = claudio.dom.fragment(html);
        var len = elems.length;
        var parent;
        var elem;
        for (var i = 0; i < len; i += 1) {
            elem = elems[i];
            parent = elem.parentNode;
            parent.replaceChild(i < len - 1 ? src.cloneNode(true) : src, elem);
        };
        return elems;
    },
                             text : function (elem, newText) {
        var _isSupportTextContent = document.body.textContent;
        claudio.dom.text = _isSupportTextContent ? function (elem, newText) {
            if (newText) {
                elem.textContent = newText;
                return elem;
            } else {
                return elem.textContent;
            };
        } : function (elem, newText) {
            if (newText) {
                elem.innerText = newText;
                return elem;
            } else {
                return elem.innerText;
            };
        };
        return claudio.dom.text(elem, newText);
    },
                             outerHtml : function (elem, value) {
        var _isSupportOuterHtml = document.createElement('div').outerHTML;
        claudio.dom.outerHtml = _isSupportOuterHtml ? function (elem, value) {
            if (value) {
                elem.outerHTML = value;
                return elem;
            } else {
                return elem.outerHTML;
            };
        } : function (elem, value) {
            var temp = document.createElement('div');
            var tempHtml;
            var parent;
            if (value) {
                temp.innerHTML = value;
                parent = elem.parentNode;
                while (temp.firstChild) {
                    parent.insertBefore(temp.firstChild, elem);
                };
                parent.removeChild(elem);
                return elem;
            } else {
                temp.appendChild(elem.cloneNode(true));
                tempHtml = temp.innerHTML;
                temp = null;
                return elem;
            };
        };
        return claudio.dom.outerHtml(elem, value);
    },
                             outerText : function (elem, value) {
        var _isSupportOuterText = document.body.outerText;
        claudio.dom.outerText = _isSupportOuterText ? function (elem, value) {
            if (value) {
                elem.outerText = value;
                return elem;
            } else {
                return elem.outerText;
            };
        } : function (elem, value) {
            var temp = document.createElement('div');
            var tempText;
            var parent;
            if (value) {
                parent = elem.parentNode;
                value = document.createTextNode(value);
                parent.insertBefore(value, elem);
                parent.removeChild(elem);
                return elem;
            } else {
                temp.appendChild(elem.cloneNode(true));
                tempText = claudio.dom.text(temp);
                temp = null;
                return tempText;
            };
        };
        return claudio.dom.outerText(elem, value);
    },
                             dataset : function (elem) {
        claudio.dom.dataset = toString.call(document.body.dataset) === '[object DOMStringMap]' ? function (elem) {
            return elem.dataset;
        } : function (elem) {
            var attributes = elem.attributes;
            var len = attributes.length;
            var attr;
            var attrName;
            var attrValue;
            var result = {  };
            var prefix = 'data-';
            for (var i = 0; i < len; i += 1) {
                attr = attributes[i];
                attrName = attr.nodeName;
                attrValue = attr.nodeValue;
                if (attr.specified && attrName.toLowerCase().indexOf(prefix) === 0 && attrName.length > 5) {
                    result[attrName.slice(5)] = attrValue;
                };
            };
            return result;
        };
        return claudio.dom.dataset(elem);
    }
                           } });
    claudio.each({ parent : function (elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
    },
                   parents : function (elem) {
        return claudio.dom.dir(elem, 'parentNode');
    },
                   prev : function (elem) {
        return claudio.dom.sibling(elem, 'previousSibling');
    },
                   next : function (elem) {
        return claudio.dom.sibling(elem, 'nextSibling');
    },
                   prevAll : function (elem) {
        return claudio.dom.dir(elem, 'previousSibling');
    },
                   nextAll : function (elem) {
        return claudio.dom.dir(elem, 'nextSibling');
    },
                   siblings : function (elem) {
        return claudio.dom.nextSiblings((elem.parentNode || {  }).firstChild, elem);
    },
                   childern : function (elem) {
        return claudio.dom.nextSiblings(elem.firstChild);
    }
                 }, function (fn, name) {
        return claudio.fn[name] = function (selector) {
            var ret = claudio.map(this, fn);
            if (typeof selector === 'string') {
                ret = claudio.filter(selector, ret);
            };
            if (this.length > 1) {
                ret = claudio.unique(ret);
            };
            return this.pushStack(ret);
        };
    });
    claudio.fn.extend({ attr : function (name, value) {
        var attr = claudio.dom.attr;
        if ('undefined' !== typeof value) {
            return this.each(function (elem) {
                return attr(elem, name, value);
            });
        } else {
            if (claudio.isPlainObject(name)) {
                return this.each(function (elem) {
                    return attr(elem, name);
                });
            } else if (typeof name === 'string') {
                return claudio.mapOne(this, function (elem) {
                    return attr(elem, name);
                });
            } else {
                return this;
            };
        };
    }, removeAttr : function (name) {
        return this.each(function (elem) {
            return claudio.dom.removeAttr(elem, name);
        });
    } });
    claudio.each('hasClass removeClass addClass toggleClass'.split(' '), function (fnName, i) {
        return claudio.fn[fnName] = fnName === 'hasClass' ? function (className) {
            var ret = claudio.map(this, function (elem) {
                return claudio.dom.hasClass(elem, className);
            });
            return claudio.some(ret, function (e) {
                return e === true;
            }) ? true : false;
        } : function (className) {
            return this.each(function (elem) {
                return claudio.dom[fnName](elem, className);
            });
        };
    });
    claudio.each({ before : 'before',
                   prepend : 'atStart',
                   append : 'atEnd',
                   after : 'after'
                 }, function (location, name) {
        return claudio.fn[name] = function (html) {
            return this.each(function (elem) {
                return claudio.dom.locateTo(elem, html, location);
            });
        };
    });
    claudio.each({ appendTo : function (elem, target) {
        return target.appendChild(elem);
    },
                   prependTo : function (elem, target) {
        return target.insertBefore(elem, target.firstChild);
    },
                   insertBefore : function (elem, target) {
        return target.parentNode.insertBefore(elem, target);
    },
                   insertAfter : function (elem, target) {
        return target.parentNode.insertBefore(elem, claudio.dom.sibling(target, 'nextSibling'));
    },
                   replaceAll : function (elem, target) {
        return target.parentNode.replaceChild(elem, target);
    }
                 }, function (fn, name) {
        return claudio.fn[name] = function (selector) {
            return this.pushStack(claudio.dom.insertTo(this, selector, fn));
        };
    });
    claudio.fn.reverse = function () {
        return this.each(function (elem) {
            var fragment = document.createDocumentFragment();
            while (elem.lastChild) {
                fragment.appendChild(elem.lastChild);
            };
            return elem.appendChild(fragment);
        });
    };
    claudio.fn.extend({ remove : function () {
        return this.each(function (elem) {
            return elem.parentNode.removeChild(elem);
        });
    }, empty : function () {
        return this.each(function (elem) {
            while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
            };
        });
    } });
    claudio.each('wrap wrapInner'.split(' '), function (name) {
        return claudio.fn[name] = function (html) {
            return this.each(function (elem) {
                return claudio.dom[name](elem, html);
            });
        };
    });
    claudio.fn.wrapAll = function (html) {
        return claudio.dom.wrapAll(this, html);
    };
    claudio.fn.replaceWith = function (html) {
        return claudio.dom.replaceWith(this, html);
    };
    claudio.fn.clone = function () {
        return this.map(function (elem) {
            return elem.cloneNode(true);
        });
    };
    claudio.fn.extend({ html : function (newHtml) {
        return newHtml ? this.each(function (elem) {
            return elem.innerHTML = newHtml;
        }) : this[0].innerHTML;
    }, text : function (newText) {
        var text = claudio.dom.text;
        return newText ? this.each(function (elem) {
            return text(elem, newText);
        }) : claudio.map(this, function (elem) {
            return text(elem);
        }).join('');
    } });
    claudio.each('outerHtml outerText'.split(' '), function (name) {
        return claudio.fn[name] = function (value) {
            return value ? this.each(function (elem) {
                return claudio.dom[name](elem, value);
            }) : claudio.map(this, function (elem) {
                return claudio.dom[name](elem);
            }).join('');
        };
    });
    claudio.fn.dataset = function (name) {
        return claudio.mapOne(this, function (elem) {
            return claudio.dom.dataset(elem);
        })[name];
    };
    window.claudio = claudio;
    window.$ = window.claudio;
    return claudio;
})();
claudio.extend({ browser : (function () {
    var engine = { ie : 0,
                   gecko : 0,
                   webkit : 0,
                   khtml : 0,
                   opera : 0,
                   ver : null
                 };
    var browser = { ie : 0,
                    firefox : 0,
                    safari : 0,
                    konq : 0,
                    opera : 0,
                    chrome : 0,
                    ver : null
                  };
    var system = { win : false,
                   mac : false,
                   x11 : false,
                   iphone : false,
                   ipad : false,
                   ipod : false,
                   ios : false,
                   android : false,
                   nokiaN : false,
                   winMobile : false,
                   wii : false,
                   ps : false
                 };
    var ua = navigator.userAgent;
    if (window.opera) {
        engine.ver = window.opera.version();
        browser.ver = window.opera.version();
        engine.opera = parseFloat(engine.ver);
        browser.opera = parseFloat(engine.ver);
    } else if (/AppleWebKit\/(\S+)/.test(ua)) {
        engine.ver = RegExp['$1'];
        engine.webkit = parseFloat(engine.ver);
        if (/Chrome\/(\S+)/.test(ua)) {
            browser.ver = RegExp['$1'];
            browser.chrome = parseFloat(browser.ver);
        } else if (/Version\/(\S+)/.test(ua)) {
            browser.ver = RegExp['$1'];
            browser.safari = parseFloat(browser.ver);
        } else {
            var safariVersion = 1;
            if (engine.webkit < 100) {
                safariVersion = 1;
            } else if (engine.webkit < 312) {
                safariVersion = 1.2;
            } else if (engine.webkit < 412) {
                safariVersion = 1.3;
            } else {
                safariVersion = 2;
            };
            browser.safari = safariVersion;
            browser.ver = safariVersion;
        };
    } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
        engine.ver = RegExp['$1'];
        browser.ver = RegExp['$1'];
        engine.khtml = parseFloat(engine.ver);
        browser.konq = parseFloat(engine.ver);
    } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
        engine.ver = RegExp['$1'];
        engine.gecko = parseFloat(engine.ver);
        if (/Firefox\/(\S+)/.test(ua)) {
            browser.ver = RegExp['$1'];
            browser.firefox = parseFloat(browser.ver);
        };
    } else if (/MSIE ([^;]+)/.test(ua)) {
        engine.ver = RegExp['$1'];
        browser.ver = RegExp['$1'];
        engine.ie = parseFloat(engine.ver);
        browser.ie = parseFloat(engine.ver);
    };
    browser.ie = engine.ie;
    browser.opera = engine.opera;
    var p = navigator.platform;
    system.win = p.indexOf('Win') === 0;
    system.mac = p.indexOf('Mac') === 0;
    system.x11 = p === 'X11' || p.indexOf('Linux') === 0;
    if (system.win) {
        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
            if (RegExp['$1'] === 'NT') {
                switch (RegExp['$2']) {
                case '5.0':
                    system.win = '2000';
                    break;
                case '6.0':
                    system.win = 'Vista';
                    break;
                case '6.1':
                    system.win = '7';
                    break;
                default:
                    system.win = 'NT';
                    break;
                };
            } else if (RegExp['$1'] === '9x') {
                system.win = 'ME';
            } else {
                system.win = RegExp['$1'];
            };
        };
    };
    system.iphone = ua.indexOf('iPhone') > -1;
    system.ipod = ua.indexOf('iPod') > -1;
    system.ipad = ua.indexOf('iPad') > -1;
    system.nokiaN = ua.indexOf('NokiaN') > -1;
    if (system.win === 'CE') {
        system.winMobile = system.win;
    } else if (system.win === 'Ph') {
        if (/Windows Phone OS (\d+.\d+)/.test(ua)) {
            system.win = 'Phone';
            system.winMobile = parseFloat(RegExp['$1']);
        };
    };
    if (system.mac && ua.indexOf('Mobile') > -1) {
        if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
            system.ios = parseFloat(RegExp.$1.replace('_', '.'));
        } else {
            system.ios = 2;
        };
    };
    if (/Android (\d+\.\d+)/.test(ua)) {
        system.android = parseFloat(RegExp['$1']);
    };
    system.wii = ua.indexOf('Wii') > -1;
    system.ps = /playstation/i.test(ua);
    return { engine : engine,
             browser : browser,
             system : system
           };
})() });
