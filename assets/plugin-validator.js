// Popups
var elementsToApplyPopupSemantic;

function openPopup(e) {
    if (document.querySelectorAll('a[data-popup="' + e + '"]')) {
        new_css('css-popups', window.filepaths['async_popups_css']);
        document.querySelectorAll("[class^=popup].shown").removeClass("shown");
        var t = document.querySelector('[class^=popup][data-title="' + e + '"]');
        if (!t) throw new Error('Element [class^=popup][data-title="' + e + '"]not found');
        showPopupForElement(t)
    }
}

function querySelectorFrom(e, t) {
    return [].filter.call(t, function (t) {
        return t.matches(e)
    })
}

function showPopupForElement(e) {
    e.addClass("shown"), e.setAttribute("focusable", "true"), e.setAttribute("aria-hidden", "false"), document.documentElement.addClass("popup-shown"), window.addEventListener("keydown", closePopupEscWithEvent);
    for (var t = e.querySelectorAll("a[data-popup]"), o = 0; o < t.length; o++) t[o].addEventListener("click", function (e) {
        e.preventDefault(), openPopup(this.getAttribute("data-popup"))
    }, {
        once: !0
    })
}

function hidePopupForElement(e) {
    e.removeClass("shown"), e.setAttribute("focusable", "false"), e.setAttribute("aria-hidden", "true"), e.addClass("unshown"), e.delay(500, function () {
        e.removeClass("unshown")
    }), document.documentElement.removeClass("popup-shown"), window.removeEventListener("keydown", closePopupEscWithEvent)
}

function closePopupEscWithEvent(e) {
    "Escape" !== e.key && "Esc" !== e.key || findAndHideShownElements()
}

function findAndHideShownElements() {
    var elements = document.querySelectorAll('[class^="popup-"]:not(html)');
    // var elementsWithShown = querySelectorFrom(".shown", elementsToApplyPopupSemantic);
    var elementsWithShown = querySelectorFrom(".shown", elements);
    elementsWithShown.forEach(elShown => {
        hidePopupForElement(elShown);
    });
}

function initializePopups() {
    var e = document.documentElement;
    if (!e.classList.contains("popup-loaded")) {
        var t = document.querySelectorAll('[class^="popup-"]:not(html):not(.ready)');
        t && !document.documentElement.classList.contains("spi") && t.semanticPopup();
        for (var o = document.querySelectorAll("a[data-popup], form[data-popup]"), n = 0; n < o.length; n++) {
            var s = o[n],
                a = "click";
            "FORM" === s.tagName && (a = "submit"), s.addEventListener(a, function (e) {
                e.preventDefault(), e.target.classList.contains("f8vl") || openPopup(this.getAttribute("data-popup"))
            })
        }
        e.classList.add("popup-loaded")
    }
}
NodeList.prototype.semanticPopup = function () {
    document.documentElement.addClass("spi"), elementsToApplyPopupSemantic = this;
    for (var e = 0; e < this.length; e++) {
        var t = this[e],
            o = t.getAttribute("data-title");
        t.setAttribute("aria-labelledby", o + "-tab"), t.setAttribute("aria-describedby", o + "-tab"), t.id = o, t.innerHTML = '<div class="box-outer"><div class="box-inner"><div class="box-inset">' + t.innerHTML + '<a class="close" href="./">Close</a></div></div><a class="close" href="./">Close</a></div>', document.querySelectorAll('[data-popup="' + o + '"]').forEach(e => {
            var t = o + "-tab",
                n = document.querySelectorAll("#" + t);
            n.length >= 1 && (t += "-" + n.length), e.id = t, e.setAttribute("aria-controls", o), e.setAttribute("aria-haspopup", "true"), e.href = "#" + o
        }), t.querySelectorAll('.close, button[type="reset"]').forEach(e => {
            null !== e.previousElementSibling && e.previousElementSibling.addClass("last-child"), e.addEventListener("click", function (e) {
                e.preventDefault(), findAndHideShownElements()
            })
        }), t.addClass("ready")
    }
}, HTMLElement.prototype.addClass = function (e) {
    return this.classList.contains(e) || this.classList.add(e), this
}, NodeList.prototype.addClass = function (e) {
    for (var t = 0; t < this.length; t++) this[t].addClass(e);
    return this
}, HTMLElement.prototype.removeClass = function (e) {
    return this.classList.contains(e) && this.classList.remove(e), this
}, NodeList.prototype.removeClass = function (e) {
    for (var t = 0; t < this.length; t++) this[t].removeClass(e);
    return this
}, HTMLElement.prototype.delay = function (e, t) {
    setTimeout(t, e)
}, initializePopups();
/*!
	native-validator-bootstrap
	Copyright	Iskandar Jamil
	License		MIT
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	Version		0.0.6

	https://github.com/iskandarjamil/native-validator-bootstrap
*/
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory();
    else if (typeof define === "function" && define.amd) define([], factory);
    else if (typeof exports === "object") exports["Validator"] = factory();
    else root["Validator"] = factory()
})(window, function () {
    return function (modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                })
            }
        };
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            })
        };
        __webpack_require__.t = function (value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != "string")
                for (var key in value) __webpack_require__.d(ns, key, function (key) {
                    return value[key]
                }.bind(null, key));
            return ns
        };
        __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"]
            } : function getModuleExports() {
                return module
            };
            __webpack_require__.d(getter, "a", getter);
            return getter
        };
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property)
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 1)
    }([function (module, exports, __webpack_require__) {
        (function (global) {
            var FUNC_ERROR_TEXT = "Expected a function";
            var NAN = 0 / 0;
            var symbolTag = "[object Symbol]";
            var reTrim = /^\s+|\s+$/g;
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            var reIsBinary = /^0b[01]+$/i;
            var reIsOctal = /^0o[0-7]+$/i;
            var freeParseInt = parseInt;
            var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
            var freeSelf = typeof self == "object" && self && self.Object === Object && self;
            var root = freeGlobal || freeSelf || Function("return this")();
            var objectProto = Object.prototype;
            var objectToString = objectProto.toString;
            var nativeMax = Math.max,
                nativeMin = Math.min;
            var now = function () {
                return root.Date.now()
            };

            function debounce(func, wait, options) {
                var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0,
                    leading = false,
                    maxing = false,
                    trailing = true;
                if (typeof func != "function") {
                    throw new TypeError(FUNC_ERROR_TEXT)
                }
                wait = toNumber(wait) || 0;
                if (isObject(options)) {
                    leading = !!options.leading;
                    maxing = "maxWait" in options;
                    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                    trailing = "trailing" in options ? !!options.trailing : trailing
                }

                function invokeFunc(time) {
                    var args = lastArgs,
                        thisArg = lastThis;
                    lastArgs = lastThis = undefined;
                    lastInvokeTime = time;
                    result = func.apply(thisArg, args);
                    return result
                }

                function leadingEdge(time) {
                    lastInvokeTime = time;
                    timerId = setTimeout(timerExpired, wait);
                    return leading ? invokeFunc(time) : result
                }

                function remainingWait(time) {
                    var timeSinceLastCall = time - lastCallTime,
                        timeSinceLastInvoke = time - lastInvokeTime,
                        result = wait - timeSinceLastCall;
                    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result
                }

                function shouldInvoke(time) {
                    var timeSinceLastCall = time - lastCallTime,
                        timeSinceLastInvoke = time - lastInvokeTime;
                    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait
                }

                function timerExpired() {
                    var time = now();
                    if (shouldInvoke(time)) {
                        return trailingEdge(time)
                    }
                    timerId = setTimeout(timerExpired, remainingWait(time))
                }

                function trailingEdge(time) {
                    timerId = undefined;
                    if (trailing && lastArgs) {
                        return invokeFunc(time)
                    }
                    lastArgs = lastThis = undefined;
                    return result
                }

                function cancel() {
                    if (timerId !== undefined) {
                        clearTimeout(timerId)
                    }
                    lastInvokeTime = 0;
                    lastArgs = lastCallTime = lastThis = timerId = undefined
                }

                function flush() {
                    return timerId === undefined ? result : trailingEdge(now())
                }

                function debounced() {
                    var time = now(),
                        isInvoking = shouldInvoke(time);
                    lastArgs = arguments;
                    lastThis = this;
                    lastCallTime = time;
                    if (isInvoking) {
                        if (timerId === undefined) {
                            return leadingEdge(lastCallTime)
                        }
                        if (maxing) {
                            timerId = setTimeout(timerExpired, wait);
                            return invokeFunc(lastCallTime)
                        }
                    }
                    if (timerId === undefined) {
                        timerId = setTimeout(timerExpired, wait)
                    }
                    return result
                }
                debounced.cancel = cancel;
                debounced.flush = flush;
                return debounced
            }

            function isObject(value) {
                var type = typeof value;
                return !!value && (type == "object" || type == "function")
            }

            function isObjectLike(value) {
                return !!value && typeof value == "object"
            }

            function isSymbol(value) {
                return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag
            }

            function toNumber(value) {
                if (typeof value == "number") {
                    return value
                }
                if (isSymbol(value)) {
                    return NAN
                }
                if (isObject(value)) {
                    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
                    value = isObject(other) ? other + "" : other
                }
                if (typeof value != "string") {
                    return value === 0 ? value : +value
                }
                value = value.replace(reTrim, "");
                var isBinary = reIsBinary.test(value);
                return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value
            }
            module.exports = debounce
        }).call(this, __webpack_require__(2))
    }, function (module, exports, __webpack_require__) {
        var Validator = __webpack_require__(5)["default"];
        Validator.plugin = Validator.prototype.plugin;
        Validator.plugin("match", __webpack_require__(3)["default"]);
        Validator.plugin("email", __webpack_require__(4)["default"]);
        module.exports = Validator
    }, function (module, exports) {
        var g;
        g = function () {
            return this
        }();
        try {
            g = g || new Function("return this")()
        } catch (e) {
            if (typeof window === "object") g = window
        }
        module.exports = g
    }, function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = {
            install: function install() {},
            validate: function validate(el, attribute) {
                return el.value === document.querySelector(attribute).value
            }
        }
    }, function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = {
            install: function install() {},
            validate: function validate(el, attribute) {
                return /^[_A-z0-9._%+-]+@[_A-z0-9.-]+\.[_A-z]{2,}$/.test(el.value)
            }
        }
    }, function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function () {
            return Validator_Validator
        });
        var lodash_debounce = __webpack_require__(0);
        var lodash_debounce_default = __webpack_require__.n(lodash_debounce);

        function getClosest(elem, selector) {
            if (!Element.prototype.matches) {
                Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1
                }
            }
            for (; elem && elem !== document; elem = elem.parentNode) {
                if (elem.matches(selector)) return elem
            }
            return null
        }

        function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                    return typeof obj
                }
            } else {
                _typeof = function _typeof(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
                }
            }
            return _typeof(obj)
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor
        }
        var Validator_Validator = function () {
            function Validator(target, options) {
                _classCallCheck(this, Validator);
                this.$target = _typeof(target) === "object" ? target : document.querySelector(target);
                this.$submitBtn = this.$target ? this.$target.querySelectorAll('[type="submit"]') : null;
                this.$resetBtn = this.$target ? this.$target.querySelector('[type="reset"]') : null;
                this.$fields = [];
                this.options = options || {};
                this.plugins = {};
                this.selectorElement = "input, select, textarea";
                this.selector = ':input:not([type="hidden"]):not([type="submit"]):not([type="reset"]):not(button)';
                this.isValid = false;
                this.delay = 500;
                this.offsetFocus = 50;
                this.timerChange;
                this.timerTyping;
                this.isFocusing;
                this.callback;
                if (!this.$target) {
                    return
                }
                this.state = Object.assign({
                    showValid: true,
                    autoScroll: true,
                    selectorElement: this.selectorElement,
                    selector: this.selector,
                    delay: this.delay,
                    offsetFocus: this.offsetFocus
                }, this.options);
                this.installPlugin();
                if (!this.$target.hasValidator) {
                    this.init();
                    this.$target.hasValidator = this
                } else {
                    return this.$target.hasValidator
                }
                return this
            }
            _createClass(Validator, [{
                key: "init",
                value: function init() {
                    this.attachFields();
                    this.attachEvents()
                }
            }, {
                key: "plugin",
                value: function plugin(name, option) {
                    if (typeof name === "undefined") {
                        throw "Validator: Plugin must have a name."
                    }
                    if (typeof option["validate"] !== "function") {
                        throw 'Validator: Plugin "'.concat(name, '" must have validate method.')
                    }
                    this.prototype[this.prototype.getPluginName(name)] = option
                }
            }, {
                key: "installPlugin",
                value: function installPlugin() {
                    for (var key in this) {
                        if (/plugin/.test(key) && key !== "plugin" && key !== "plugins") {
                            this.plugins[this.getPluginParseName(key)] = this[key];
                            if (typeof this[key]["install"] === "function") {
                                this[key]["install"](this)
                            }
                        }
                    }
                }
            }, {
                key: "refresh",
                value: function refresh() {
                    var _this = this;
                    this.attachFields();
                    this.$fields.forEach(function (el) {
                        el.removeEventListener("blur", _this.handleBlur.bind(_this));
                        el.removeEventListener("keyup", _this.handleKeyup.bind(_this));
                        el.removeEventListener("change", _this.handleChange.bind(_this));
                        el.addEventListener("blur", lodash_debounce_default()(_this.handleBlur.bind(_this), 150));
                        el.addEventListener("keyup", _this.handleKeyup.bind(_this));
                        el.addEventListener("change", _this.handleChange.bind(_this))
                    })
                }
            }, {
                key: "completed",
                value: function completed() {
                    var event = document.createEvent("Event");
                    event.initEvent("completed", true, true);
                    this.$target.dispatchEvent(event)
                }
            }, {
                key: "clear",
                value: function clear() {
                    this.$target.reset();
                    this.$target.classList.remove("was-validated")
                }
            }, {
                key: "attachFields",
                value: function attachFields() {
                    var _this2 = this;
                    var elements = this.selectorElement.split(",");
                    var selector = this.state.selector.split(":input")[1];
                    this.$fields = [];
                    for (var i = 0; i < elements.length; i++) {
                        this.$target.querySelectorAll(elements[i].trim() + selector).forEach(function (el) {
                            if (el.offsetParent !== null) {
                                _this2.$fields.push(el)
                            }
                        })
                    }
                    this.$target.setAttribute("novalidate", true)
                }
            }, {
                key: "attachEvents",
                value: function attachEvents() {
                    var _this3 = this;
                    this.$target.addEventListener("reset", this.handleFormReset.bind(this));
                    this.$target.addEventListener("submit", this.handleFormSubmit.bind(this));
                    this.$target.addEventListener("change", this.handleFormChange.bind(this));
                    this.$target.addEventListener("refresh", this.refresh.bind(this));
                    this.$fields.forEach(function (el) {
                        el.addEventListener("blur", lodash_debounce_default()(_this3.handleBlur.bind(_this3), 150));
                        el.addEventListener("keyup", _this3.handleKeyup.bind(_this3));
                        el.addEventListener("change", _this3.handleChange.bind(_this3))
                    })
                }
            }, {
                key: "handleFormReset",
                value: function handleFormReset(e) {
                    var _this4 = this;
                    this.$fields.forEach(function (el) {
                        _this4.clearError(el)
                    })
                }
            }, {
                key: "handleFormSubmit",
                value: function handleFormSubmit(e) {
                    var _this5 = this,
                        hold = 0,
                        hardHold = 2000;

                    function processForm() {
                        if (_this5.$target.hasAttribute("data-action") && _this5.$target.getAttribute('data-action') === 'close') {
                            findAndHideShownElements();
                        } else {
                            if (_this5.$target.hasAttribute("data-popup")) {
                                if (typeof openPopup !== "undefined") {
                                    openPopup(_this5.$target.getAttribute("data-popup"));
                                }
                            } else {
                                _this5.$target.submit();
                            };
                        }
                    }

                    function processDataHold() {
                        _this5.$target.classList.remove("processing");
                        _this5.$target.classList.add("processed");
                    }
                    this.runAllValidation();
                    if (this.state.showValid) {
                        this.$target.classList.add("was-validated")
                    }
                    if (this.hasError()) {
                        e.preventDefault();
                        this.setSubmitDisabled();
                        setTimeout(function () {
                            _this5.focusFirstError()
                        }, 500);
                        return false
                    } else {
                        e.preventDefault();
                        _this5.$target.classList.remove("processed");
                        _this5.$target.classList.add("processing");
                        if (this.$target.hasAttribute("data-hold")) {
                            hold = parseFloat(this.$target.getAttribute("data-hold"));

                            if (hold === 0) {
                                processForm();
                                setTimeout(function () {
                                    processDataHold()
                                }, hardHold);
                            } else {
                                setTimeout(function () {
                                    processForm();
                                    processDataHold()
                                }, parseFloat(hold));
                            }
                        } else {
                            _this5.$target.classList.add("processing");
                            processForm();
                        }
                    }
                    this.completed();
                    if (typeof this.$target.dataset.disableSubmit !== "undefined") {
                        e.preventDefault();
                        return false
                    }
                }
            }, {
                key: "handleFormChange",
                value: function handleFormChange(e) {
                    if (this.hasError()) {
                        this.setSubmitDisabled()
                    } else {
                        this.setSubmitEnabled()
                    }
                }
            }, {
                key: "handleFocus",
                value: function handleFocus(e) {
                    clearTimeout(this.timerTyping);
                    clearTimeout(this.timerChange);
                    this.clearError(e.target)
                }
            }, {
                key: "handleBlur",
                value: function handleBlur(e) {
                    clearTimeout(this.timerTyping);
                    clearTimeout(this.timerChange);
                    this.validateEach(e.target)
                }
            }, {
                key: "handleKeyup",
                value: function handleKeyup(e) {
                    var _this6 = this;
                    var target = e.target;
                    clearTimeout(this.timerTyping);
                    this.timerTyping = setTimeout(function () {
                        _this6.validateEach(target)
                    }, this.delay)
                }
            }, {
                key: "handleChange",
                value: function handleChange(e) {
                    var _this7 = this;
                    var target = e.target;
                    clearTimeout(this.timerChange);
                    this.timerChange = setTimeout(function () {
                        _this7.validateEach(target)
                    }, this.delay)
                }
            }, {
                key: "runAllValidation",
                value: function runAllValidation() {
                    var _this8 = this;
                    this.$fields.forEach(function (el) {
                        _this8.validateEach(el)
                    })
                }
            }, {
                key: "validateEach",
                value: function validateEach(el) {
                    var hasDefaultError = false;
                    if (el.checkValidity) {
                        if (!el.checkValidity()) {
                            for (var key in el.validity) {
                                if (key === "customError") {
                                    continue
                                }
                                if (el.validity[key] === true) {
                                    this.setError(el);
                                    hasDefaultError = true
                                }
                            }
                        }
                    }
                    if (hasDefaultError) {
                        return
                    } else {
                        this.clearError(el)
                    }
                    for (var _key in this.plugins) {
                        if (this.plugins.hasOwnProperty(_key)) {
                            if (el.hasAttribute("data-" + _key)) {
                                if (!this.plugins[_key].validate(el, el.getAttribute("data-" + _key))) {
                                    if (typeof this.plugins[_key]["error"] === "function") {
                                        el.setCustomValidity(this.plugins[_key]["error"](el))
                                    } else if (typeof this.plugins[_key]["error"] !== "undefined") {
                                        el.setCustomValidity(this.plugins[_key]["error"])
                                    } else {
                                        el.setCustomValidity(this.getPluginErrorMessage(el, _key))
                                    }
                                    this.setError(el);
                                    return
                                } else {
                                    el.setCustomValidity("");
                                    this.clearError(el)
                                }
                            }
                        }
                    }
                    this.clearError(el)
                }
            }, {
                key: "hasError",
                value: function hasError() {
                    return this.getErrors().length > 0
                }
            }, {
                key: "hasInvalid",
                value: function hasInvalid(el) {
                    return el.checkValidity && !el.checkValidity() && !el.validity.valid
                }
            }, {
                key: "setError",
                value: function setError(el) {
                    var $parent = getClosest(el, ".form-group");
                    var $siblings = this.getSiblings($parent);
                    el.classList.add("is-invalid");
                    el.classList.remove("is-valid");
                    if ($siblings.length > 1) {
                        for (var index = 0; index < $siblings.length; index++) {
                            $siblings[index].classList.add("is-invalid");
                            $siblings[index].classList.remove("is-valid")
                        }
                    } else {
                        el.classList.add("is-invalid");
                        el.classList.remove("is-valid")
                    }
                    if ($parent) {
                        $parent.classList.remove("is-valid");
                        $parent.classList.add("is-invalid")
                    }
                    this.displayError(el)
                }
            }, {
                key: "clearError",
                value: function clearError(el) {
                    var $parent = getClosest(el, ".form-group");
                    var $siblings = this.getSiblings($parent);
                    if ($siblings.length > 1) {
                        for (var index = 0; index < $siblings.length; index++) {
                            $siblings[index].classList.remove("is-invalid");
                            if (this.state.showValid) {
                                $siblings[index].classList.add("is-valid")
                            }
                        }
                    } else {
                        el.classList.remove("is-invalid");
                        if (this.state.showValid) {
                            el.classList.add("is-valid")
                        }
                    }
                    if ($parent) {
                        $parent.classList.remove("is-invalid");
                        if (this.state.showValid) {
                            $parent.classList.add("is-valid")
                        }
                        if ($parent.querySelector(".invalid-feedback")) {
                            $parent.querySelector(".invalid-feedback").textContent = ""
                        }
                    }
                }
            }, {
                key: "displayError",
                value: function displayError(el) {
                    var $parent = getClosest(el, ".form-group");
                    var errorMessage;
                    if ($parent) {
                        errorMessage = this.getErrorMessage(el);
                        if ($parent.querySelector(".invalid-feedback")) {
                            $parent.querySelector(".invalid-feedback").textContent = errorMessage
                        }
                    }
                }
            }, {
                key: "setSubmitDisabled",
                value: function setSubmitDisabled() {
                    if (this.$submitBtn) {
                        Array.from(this.$submitBtn).forEach(function (cs) {
                            cs.classList.add("disabled");
                        });
                        //this.$submitBtn.classList.add("disabled")
                    }
                }
            }, {
                key: "setSubmitEnabled",
                value: function setSubmitEnabled() {
                    if (this.$submitBtn) {
                        Array.from(this.$submitBtn).forEach(function (cs) {
                            cs.classList.remove("disabled");
                            cs.removeAttribute("disabled")
                        });
                        /*this.$submitBtn.classList.remove("disabled");
                        this.$submitBtn.removeAttribute("disabled")*/
                    }
                }
            }, {
                key: "focusFirstError",
                value: function focusFirstError() {
                    var _this9 = this;
                    var $parent;
                    var el = this.getErrors();
                    if (this.isFocusing) {
                        return
                    }
                    if (el.length < 1) {
                        return
                    }
                    el = el[0];
                    $parent = getClosest(el, ".form-group");
                    if ($parent) {
                        setTimeout(function () {
                            if ($parent.querySelector("input")) {
                                $parent.querySelector("input").focus()
                            }
                            if ($parent.querySelector("select")) {
                                $parent.querySelector("select").focus()
                            }
                            if ($parent.querySelector("textarea")) {
                                $parent.querySelector("textarea").focus()
                            }
                        }, this.delay);
                        if (this.state.autoScroll) {
                            this.isFocusing = true;
                            window.scrollTo({
                                top: Math.round($parent.getBoundingClientRect().top) + Math.round(window.scrollY) + -this.state.offsetFocus,
                                behavior: "smooth"
                            });
                            setTimeout(function () {
                                _this9.isFocusing = false
                            }, 500)
                        }
                    }
                }
            }, {
                key: "getSiblings",
                value: function getSiblings(target) {
                    var elements = this.selectorElement.split(",");
                    var selector = this.state.selector.split(":input")[1];
                    var $items = [];
                    for (var i = 0; i < elements.length; i++) {
                        target.querySelectorAll(elements[i].trim() + selector).forEach(function (el) {
                            if (el.offsetParent !== null) {
                                $items.push(el)
                            }
                        })
                    }
                    return $items
                }
            }, {
                key: "getErrors",
                value: function getErrors() {
                    var el = this.$target.querySelectorAll(":invalid");
                    var items = [];
                    el.forEach(function (item) {
                        if (!!(item.offsetWidth || item.offsetHeight || item.getClientRects().length)) {
                            items.push(item)
                        }
                    });
                    return items
                }
            }, {
                key: "getErrorMessage",
                value: function getErrorMessage(el) {
                    if (el.validity.customError === true) {
                        return el.validationMessage || el.dataset["error"] || "Please fill out this field."
                    }
                    return el.dataset["error"] || el.validationMessage || "Please fill out this field."
                }
            }, {
                key: "getPluginErrorMessage",
                value: function getPluginErrorMessage(el, name) {
                    return el.dataset[name + "Error"] || el.dataset["error"] || "Please fill out this field."
                }
            }, {
                key: "getPluginName",
                value: function getPluginName(name) {
                    return "plugin" + name[0].toUpperCase() + name.slice(1).toLowerCase()
                }
            }, {
                key: "getPluginParseName",
                value: function getPluginParseName(name) {
                    return name.replace("plugin", "").toLowerCase()
                }
            }]);
            return Validator
        }()
    }])
});
