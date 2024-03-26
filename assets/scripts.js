/*!
	Browser.mobile
	Copyright	Chad Smith
	License		Unlicense
	Version		0.4.0

	http://detectmobilebrowsers.com
*/
window.mobileCheck = function () {
    var check = false;
    (function (a) {
        if (
            /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
/*!
	Swiper
	Copyright	Vladimir Kharlampidi
	License		MIT
	Version		9.3.4

	https://github.com/nolimits4web/swiper
*/
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).Swiper = t());
})(this, function () {
    'use strict';
    function e(e) {
        return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
    }
    function t(s, i) {
        void 0 === s && (s = {}),
            void 0 === i && (i = {}),
            Object.keys(i).forEach((a) => {
                void 0 === s[a] ? (s[a] = i[a]) : e(i[a]) && e(s[a]) && Object.keys(i[a]).length > 0 && t(s[a], i[a]);
            });
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
    };
    function i() {
        const e = 'undefined' != typeof document ? document : {};
        return t(e, s), e;
    }
    const a = {
        document: s,
        navigator: { userAgent: '' },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) => ('undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
        cancelAnimationFrame(e) {
            'undefined' != typeof setTimeout && clearTimeout(e);
        },
    };
    function n() {
        const e = 'undefined' != typeof window ? window : {};
        return t(e, a), e;
    }
    function r(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function l() {
        return Date.now();
    }
    function o(e, t) {
        void 0 === t && (t = 'x');
        const s = n();
        let i, a, r;
        const l = (function (e) {
            const t = n();
            let s;
            return (
                t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                !s && e.currentStyle && (s = e.currentStyle),
                s || (s = e.style),
                s
            );
        })(e);
        return (
            s.WebKitCSSMatrix
                ? ((a = l.transform || l.webkitTransform),
                  a.split(',').length > 6 &&
                      (a = a
                          .split(', ')
                          .map((e) => e.replace(',', '.'))
                          .join(', ')),
                  (r = new s.WebKitCSSMatrix('none' === a ? '' : a)))
                : ((r =
                      l.MozTransform ||
                      l.OTransform ||
                      l.MsTransform ||
                      l.msTransform ||
                      l.transform ||
                      l.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
                  (i = r.toString().split(','))),
            'x' === t && (a = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            'y' === t && (a = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            a || 0
        );
    }
    function d(e) {
        return (
            'object' == typeof e &&
            null !== e &&
            e.constructor &&
            'Object' === Object.prototype.toString.call(e).slice(8, -1)
        );
    }
    function c(e) {
        return 'undefined' != typeof window && void 0 !== window.HTMLElement
            ? e instanceof HTMLElement
            : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function p() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ['__proto__', 'constructor', 'prototype'];
        for (let s = 1; s < arguments.length; s += 1) {
            const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != i && !c(i)) {
                const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
                for (let t = 0, a = s.length; t < a; t += 1) {
                    const a = s[t],
                        n = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== n &&
                        n.enumerable &&
                        (d(e[a]) && d(i[a])
                            ? i[a].__swiper__
                                ? (e[a] = i[a])
                                : p(e[a], i[a])
                            : !d(e[a]) && d(i[a])
                            ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : p(e[a], i[a]))
                            : (e[a] = i[a]));
                }
            }
        }
        return e;
    }
    function u(e, t, s) {
        e.style.setProperty(t, s);
    }
    function m(e) {
        let { swiper: t, targetPosition: s, side: i } = e;
        const a = n(),
            r = -t.translate;
        let l,
            o = null;
        const d = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = 'none'), a.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > r ? 'next' : 'prev',
            p = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
            u = () => {
                (l = new Date().getTime()), null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0),
                    n = 0.5 - Math.cos(e * Math.PI) / 2;
                let c = r + n * (s - r);
                if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [i]: c }), p(c, s)))
                    return (
                        (t.wrapperEl.style.overflow = 'hidden'),
                        (t.wrapperEl.style.scrollSnapType = ''),
                        setTimeout(() => {
                            (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [i]: c });
                        }),
                        void a.cancelAnimationFrame(t.cssModeFrameID)
                    );
                t.cssModeFrameID = a.requestAnimationFrame(u);
            };
        u();
    }
    function f(e, t) {
        return void 0 === t && (t = ''), [...e.children].filter((e) => e.matches(t));
    }
    function h(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function v(e, t) {
        return n().getComputedStyle(e, null).getPropertyValue(t);
    }
    function g(e) {
        let t,
            s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling); ) 1 === s.nodeType && (t += 1);
            return t;
        }
    }
    function b(e, t) {
        const s = [];
        let i = e.parentElement;
        for (; i; ) t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
        return s;
    }
    function w(e, t, s) {
        const i = n();
        return s
            ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
                  parseFloat(
                      i.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-right' : 'margin-top')
                  ) +
                  parseFloat(
                      i.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom')
                  )
            : e.offsetWidth;
    }
    let y, T, S;
    function E() {
        return (
            y ||
                (y = (function () {
                    const e = n(),
                        t = i();
                    return {
                        smoothScroll: t.documentElement && 'scrollBehavior' in t.documentElement.style,
                        touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                    };
                })()),
            y
        );
    }
    function x(e) {
        return (
            void 0 === e && (e = {}),
            T ||
                (T = (function (e) {
                    let { userAgent: t } = void 0 === e ? {} : e;
                    const s = E(),
                        i = n(),
                        a = i.navigator.platform,
                        r = t || i.navigator.userAgent,
                        l = { ios: !1, android: !1 },
                        o = i.screen.width,
                        d = i.screen.height,
                        c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let p = r.match(/(iPad).*OS\s([\d_]+)/);
                    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                        m = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = 'Win32' === a;
                    let h = 'MacIntel' === a;
                    return (
                        !p &&
                            h &&
                            s.touch &&
                            [
                                '1024x1366',
                                '1366x1024',
                                '834x1194',
                                '1194x834',
                                '834x1112',
                                '1112x834',
                                '768x1024',
                                '1024x768',
                                '820x1180',
                                '1180x820',
                                '810x1080',
                                '1080x810',
                            ].indexOf(`${o}x${d}`) >= 0 &&
                            ((p = r.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, '13_0_0']), (h = !1)),
                        c && !f && ((l.os = 'android'), (l.android = !0)),
                        (p || m || u) && ((l.os = 'ios'), (l.ios = !0)),
                        l
                    );
                })(e)),
            T
        );
    }
    function C() {
        return (
            S ||
                (S = (function () {
                    const e = n();
                    let t = !1;
                    function s() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
                    }
                    if (s()) {
                        const s = String(e.navigator.userAgent);
                        if (s.includes('Version/')) {
                            const [e, i] = s
                                .split('Version/')[1]
                                .split(' ')[0]
                                .split('.')
                                .map((e) => Number(e));
                            t = e < 16 || (16 === e && i < 2);
                        }
                    }
                    return {
                        isSafari: t || s(),
                        needPerspectiveFix: t,
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                    };
                })()),
            S
        );
    }
    var M = {
        on(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ('function' != typeof t) return i;
            const a = s ? 'unshift' : 'push';
            return (
                e.split(' ').forEach((e) => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t);
                }),
                i
            );
        },
        once(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ('function' != typeof t) return i;
            function a() {
                i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
                t.apply(i, n);
            }
            return (a.__emitterProxy = t), i.on(e, a, s);
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ('function' != typeof e) return s;
            const i = t ? 'unshift' : 'push';
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed
                ? s
                : s.eventsListeners
                ? (e.split(' ').forEach((e) => {
                      void 0 === t
                          ? (s.eventsListeners[e] = [])
                          : s.eventsListeners[e] &&
                            s.eventsListeners[e].forEach((i, a) => {
                                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                                    s.eventsListeners[e].splice(a, 1);
                            });
                  }),
                  s)
                : s;
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, i;
            for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
            'string' == typeof n[0] || Array.isArray(n[0])
                ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
                : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
                s.unshift(i);
            return (
                (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
                    e.eventsAnyListeners &&
                        e.eventsAnyListeners.length &&
                        e.eventsAnyListeners.forEach((e) => {
                            e.apply(i, [t, ...s]);
                        }),
                        e.eventsListeners &&
                            e.eventsListeners[t] &&
                            e.eventsListeners[t].forEach((e) => {
                                e.apply(i, s);
                            });
                }),
                e
            );
        },
    };
    const L = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const s = t.closest(e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`);
            if (s) {
                const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                t && t.remove();
            }
        },
        P = (e, t) => {
            if (!e.slides[t]) return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute('loading');
        },
        k = (e) => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0) return;
            t = Math.min(t, s);
            const i = 'auto' === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                a = e.activeIndex,
                n = a + i - 1;
            if (e.params.rewind)
                for (let i = a - t; i <= n + t; i += 1) {
                    const t = ((i % s) + s) % s;
                    t !== a && t > n && P(e, t);
                }
            else for (let i = Math.max(n - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== a && i > n && P(e, i);
        };
    var A = {
        updateSize: function () {
            const e = this;
            let t, s;
            const i = e.el;
            (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth),
                (s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight),
                (0 === t && e.isHorizontal()) ||
                    (0 === s && e.isVertical()) ||
                    ((t = t - parseInt(v(i, 'padding-left') || 0, 10) - parseInt(v(i, 'padding-right') || 0, 10)),
                    (s = s - parseInt(v(i, 'padding-top') || 0, 10) - parseInt(v(i, 'padding-bottom') || 0, 10)),
                    Number.isNaN(t) && (t = 0),
                    Number.isNaN(s) && (s = 0),
                    Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
        },
        updateSlides: function () {
            const e = this;
            function t(t) {
                return e.isHorizontal()
                    ? t
                    : {
                          width: 'height',
                          'margin-top': 'margin-left',
                          'margin-bottom ': 'margin-right',
                          'margin-left': 'margin-top',
                          'margin-right': 'margin-bottom',
                          'padding-left': 'padding-top',
                          'padding-right': 'padding-bottom',
                          marginRight: 'marginBottom',
                      }[t];
            }
            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0);
            }
            const i = e.params,
                { wrapperEl: a, slidesEl: n, size: r, rtlTranslate: l, wrongRTL: o } = e,
                d = e.virtual && i.virtual.enabled,
                c = d ? e.virtual.slides.length : e.slides.length,
                p = f(n, `.${e.params.slideClass}, swiper-slide`),
                m = d ? e.virtual.slides.length : p.length;
            let h = [];
            const g = [],
                b = [];
            let y = i.slidesOffsetBefore;
            'function' == typeof y && (y = i.slidesOffsetBefore.call(e));
            let T = i.slidesOffsetAfter;
            'function' == typeof T && (T = i.slidesOffsetAfter.call(e));
            const S = e.snapGrid.length,
                E = e.slidesGrid.length;
            let x = i.spaceBetween,
                C = -y,
                M = 0,
                L = 0;
            if (void 0 === r) return;
            'string' == typeof x && x.indexOf('%') >= 0
                ? (x = (parseFloat(x.replace('%', '')) / 100) * r)
                : 'string' == typeof x && (x = parseFloat(x)),
                (e.virtualSize = -x),
                p.forEach((e) => {
                    l ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                        (e.style.marginBottom = ''),
                        (e.style.marginTop = '');
                }),
                i.centeredSlides &&
                    i.cssMode &&
                    (u(a, '--swiper-centered-offset-before', ''), u(a, '--swiper-centered-offset-after', ''));
            const P = i.grid && i.grid.rows > 1 && e.grid;
            let k;
            P && e.grid.initSlides(m);
            const A =
                'auto' === i.slidesPerView &&
                i.breakpoints &&
                Object.keys(i.breakpoints).filter((e) => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
            for (let a = 0; a < m; a += 1) {
                let n;
                if (
                    ((k = 0),
                    p[a] && (n = p[a]),
                    P && e.grid.updateSlide(a, n, m, t),
                    !p[a] || 'none' !== v(n, 'display'))
                ) {
                    if ('auto' === i.slidesPerView) {
                        A && (p[a].style[t('width')] = '');
                        const r = getComputedStyle(n),
                            l = n.style.transform,
                            o = n.style.webkitTransform;
                        if (
                            (l && (n.style.transform = 'none'), o && (n.style.webkitTransform = 'none'), i.roundLengths)
                        )
                            k = e.isHorizontal() ? w(n, 'width', !0) : w(n, 'height', !0);
                        else {
                            const e = s(r, 'width'),
                                t = s(r, 'padding-left'),
                                i = s(r, 'padding-right'),
                                a = s(r, 'margin-left'),
                                l = s(r, 'margin-right'),
                                o = r.getPropertyValue('box-sizing');
                            if (o && 'border-box' === o) k = e + a + l;
                            else {
                                const { clientWidth: s, offsetWidth: r } = n;
                                k = e + t + i + a + l + (r - s);
                            }
                        }
                        l && (n.style.transform = l),
                            o && (n.style.webkitTransform = o),
                            i.roundLengths && (k = Math.floor(k));
                    } else
                        (k = (r - (i.slidesPerView - 1) * x) / i.slidesPerView),
                            i.roundLengths && (k = Math.floor(k)),
                            p[a] && (p[a].style[t('width')] = `${k}px`);
                    p[a] && (p[a].swiperSlideSize = k),
                        b.push(k),
                        i.centeredSlides
                            ? ((C = C + k / 2 + M / 2 + x),
                              0 === M && 0 !== a && (C = C - r / 2 - x),
                              0 === a && (C = C - r / 2 - x),
                              Math.abs(C) < 0.001 && (C = 0),
                              i.roundLengths && (C = Math.floor(C)),
                              L % i.slidesPerGroup == 0 && h.push(C),
                              g.push(C))
                            : (i.roundLengths && (C = Math.floor(C)),
                              (L - Math.min(e.params.slidesPerGroupSkip, L)) % e.params.slidesPerGroup == 0 &&
                                  h.push(C),
                              g.push(C),
                              (C = C + k + x)),
                        (e.virtualSize += k + x),
                        (M = k),
                        (L += 1);
                }
            }
            if (
                ((e.virtualSize = Math.max(e.virtualSize, r) + T),
                l &&
                    o &&
                    ('slide' === i.effect || 'coverflow' === i.effect) &&
                    (a.style.width = `${e.virtualSize + x}px`),
                i.setWrapperSize && (a.style[t('width')] = `${e.virtualSize + x}px`),
                P && e.grid.updateWrapperSize(k, h, t),
                !i.centeredSlides)
            ) {
                const t = [];
                for (let s = 0; s < h.length; s += 1) {
                    let a = h[s];
                    i.roundLengths && (a = Math.floor(a)), h[s] <= e.virtualSize - r && t.push(a);
                }
                (h = t), Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - r);
            }
            if (d && i.loop) {
                const t = b[0] + x;
                if (i.slidesPerGroup > 1) {
                    const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
                        a = t * i.slidesPerGroup;
                    for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + a);
                }
                for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1)
                    1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
                        g.push(g[g.length - 1] + t),
                        (e.virtualSize += t);
            }
            if ((0 === h.length && (h = [0]), 0 !== x)) {
                const s = e.isHorizontal() && l ? 'marginLeft' : t('marginRight');
                p.filter((e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1).forEach((e) => {
                    e.style[s] = `${x}px`;
                });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
                let e = 0;
                b.forEach((t) => {
                    e += t + (x || 0);
                }),
                    (e -= x);
                const t = e - r;
                h = h.map((e) => (e < 0 ? -y : e > t ? t + T : e));
            }
            if (i.centerInsufficientSlides) {
                let e = 0;
                if (
                    (b.forEach((t) => {
                        e += t + (x || 0);
                    }),
                    (e -= x),
                    e < r)
                ) {
                    const t = (r - e) / 2;
                    h.forEach((e, s) => {
                        h[s] = e - t;
                    }),
                        g.forEach((e, s) => {
                            g[s] = e + t;
                        });
                }
            }
            if (
                (Object.assign(e, { slides: p, snapGrid: h, slidesGrid: g, slidesSizesGrid: b }),
                i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
                u(a, '--swiper-centered-offset-before', -h[0] + 'px'),
                    u(a, '--swiper-centered-offset-after', e.size / 2 - b[b.length - 1] / 2 + 'px');
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                (e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
            }
            if (
                (m !== c && e.emit('slidesLengthChange'),
                h.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
                g.length !== E && e.emit('slidesGridLengthChange'),
                i.watchSlidesProgress && e.updateSlidesOffset(),
                !(d || i.cssMode || ('slide' !== i.effect && 'fade' !== i.effect)))
            ) {
                const t = `${i.containerModifierClass}backface-hidden`,
                    s = e.el.classList.contains(t);
                m <= i.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t);
            }
        },
        updateAutoHeight: function (e) {
            const t = this,
                s = [],
                i = t.virtual && t.params.virtual.enabled;
            let a,
                n = 0;
            'number' == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const r = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
            if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || []).forEach((e) => {
                        s.push(e);
                    });
                else
                    for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                        const e = t.activeIndex + a;
                        if (e > t.slides.length && !i) break;
                        s.push(r(e));
                    }
            else s.push(r(t.activeIndex));
            for (a = 0; a < s.length; a += 1)
                if (void 0 !== s[a]) {
                    const e = s[a].offsetHeight;
                    n = e > n ? e : n;
                }
            (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
        },
        updateSlidesOffset: function () {
            const e = this,
                t = e.slides,
                s = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
            for (let i = 0; i < t.length; i += 1)
                t[i].swiperSlideOffset =
                    (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            const t = this,
                s = t.params,
                { slides: i, rtlTranslate: a, snapGrid: n } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let r = -e;
            a && (r = e),
                i.forEach((e) => {
                    e.classList.remove(s.slideVisibleClass);
                }),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
            let l = s.spaceBetween;
            'string' == typeof l && l.indexOf('%') >= 0
                ? (l = (parseFloat(l.replace('%', '')) / 100) * t.size)
                : 'string' == typeof l && (l = parseFloat(l));
            for (let e = 0; e < i.length; e += 1) {
                const o = i[e];
                let d = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
                const c = (r + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    p = (r - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    u = -(r - d),
                    m = u + t.slidesSizesGrid[e];
                ((u >= 0 && u < t.size - 1) || (m > 1 && m <= t.size) || (u <= 0 && m >= t.size)) &&
                    (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), i[e].classList.add(s.slideVisibleClass)),
                    (o.progress = a ? -c : c),
                    (o.originalProgress = a ? -p : p);
            }
        },
        updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * s) || 0;
            }
            const s = t.params,
                i = t.maxTranslate() - t.minTranslate();
            let { progress: a, isBeginning: n, isEnd: r, progressLoop: l } = t;
            const o = n,
                d = r;
            if (0 === i) (a = 0), (n = !0), (r = !0);
            else {
                a = (e - t.minTranslate()) / i;
                const s = Math.abs(e - t.minTranslate()) < 1,
                    l = Math.abs(e - t.maxTranslate()) < 1;
                (n = s || a <= 0), (r = l || a >= 1), s && (a = 0), l && (a = 1);
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0),
                    i = t.getSlideIndexByData(t.slides.length - 1),
                    a = t.slidesGrid[s],
                    n = t.slidesGrid[i],
                    r = t.slidesGrid[t.slidesGrid.length - 1],
                    o = Math.abs(e);
                (l = o >= a ? (o - a) / r : (o + r - n) / r), l > 1 && (l -= 1);
            }
            Object.assign(t, { progress: a, progressLoop: l, isBeginning: n, isEnd: r }),
                (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e),
                n && !o && t.emit('reachBeginning toEdge'),
                r && !d && t.emit('reachEnd toEdge'),
                ((o && !n) || (d && !r)) && t.emit('fromEdge'),
                t.emit('progress', a);
        },
        updateSlidesClasses: function () {
            const e = this,
                { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
                n = e.virtual && s.virtual.enabled,
                r = (e) => f(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let l;
            if (
                (t.forEach((e) => {
                    e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
                }),
                n)
            )
                if (s.loop) {
                    let t = a - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t),
                        t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                        (l = r(`[data-swiper-slide-index="${t}"]`));
                } else l = r(`[data-swiper-slide-index="${a}"]`);
            else l = t[a];
            if (l) {
                l.classList.add(s.slideActiveClass);
                let e = (function (e, t) {
                    const s = [];
                    for (; e.nextElementSibling; ) {
                        const i = e.nextElementSibling;
                        t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                    }
                    return s;
                })(l, `.${s.slideClass}, swiper-slide`)[0];
                s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
                let i = (function (e, t) {
                    const s = [];
                    for (; e.previousElementSibling; ) {
                        const i = e.previousElementSibling;
                        t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                    }
                    return s;
                })(l, `.${s.slideClass}, swiper-slide`)[0];
                s.loop && 0 === !i && (i = t[t.length - 1]), i && i.classList.add(s.slidePrevClass);
            }
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                { snapGrid: i, params: a, activeIndex: n, realIndex: r, snapIndex: l } = t;
            let o,
                d = e;
            const c = (e) => {
                let s = e - t.virtual.slidesBefore;
                return (
                    s < 0 && (s = t.virtual.slides.length + s),
                    s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                    s
                );
            };
            if (
                (void 0 === d &&
                    (d = (function (e) {
                        const { slidesGrid: t, params: s } = e,
                            i = e.rtlTranslate ? e.translate : -e.translate;
                        let a;
                        for (let e = 0; e < t.length; e += 1)
                            void 0 !== t[e + 1]
                                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                                    ? (a = e)
                                    : i >= t[e] && i < t[e + 1] && (a = e + 1)
                                : i >= t[e] && (a = e);
                        return s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a;
                    })(t)),
                i.indexOf(s) >= 0)
            )
                o = i.indexOf(s);
            else {
                const e = Math.min(a.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / a.slidesPerGroup);
            }
            if ((o >= i.length && (o = i.length - 1), d === n))
                return (
                    o !== l && ((t.snapIndex = o), t.emit('snapIndexChange')),
                    void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d)))
                );
            let p;
            (p =
                t.virtual && a.virtual.enabled && a.loop
                    ? c(d)
                    : t.slides[d]
                    ? parseInt(t.slides[d].getAttribute('data-swiper-slide-index') || d, 10)
                    : d),
                Object.assign(t, {
                    previousSnapIndex: l,
                    snapIndex: o,
                    previousRealIndex: r,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: d,
                }),
                t.initialized && k(t),
                t.emit('activeIndexChange'),
                t.emit('snapIndexChange'),
                r !== p && t.emit('realIndexChange'),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
        },
        updateClickedSlide: function (e) {
            const t = this,
                s = t.params,
                i = e.closest(`.${s.slideClass}, swiper-slide`);
            let a,
                n = !1;
            if (i)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === i) {
                        (n = !0), (a = e);
                        break;
                    }
            if (!i || !n) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
                t.virtual && t.params.virtual.enabled
                    ? (t.clickedIndex = parseInt(i.getAttribute('data-swiper-slide-index'), 10))
                    : (t.clickedIndex = a),
                s.slideToClickedSlide &&
                    void 0 !== t.clickedIndex &&
                    t.clickedIndex !== t.activeIndex &&
                    t.slideToClickedSlide();
        },
    };
    var I = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
            const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
            if (t.virtualTranslate) return s ? -i : i;
            if (t.cssMode) return i;
            let n = o(a, e);
            return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
            const s = this,
                { rtlTranslate: i, params: a, wrapperEl: n, progress: r } = s;
            let l,
                o = 0,
                d = 0;
            s.isHorizontal() ? (o = i ? -e : e) : (d = e),
                a.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
                (s.previousTranslate = s.translate),
                (s.translate = s.isHorizontal() ? o : d),
                a.cssMode
                    ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal() ? -o : -d)
                    : a.virtualTranslate ||
                      (s.isHorizontal() ? (o -= s.cssOverflowAdjustment()) : (d -= s.cssOverflowAdjustment()),
                      (n.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
            const c = s.maxTranslate() - s.minTranslate();
            (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
                l !== r && s.updateProgress(e),
                s.emit('setTranslate', s.translate, t);
        },
        minTranslate: function () {
            return -this.snapGrid[0];
        },
        maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, s, i, a) {
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                void 0 === i && (i = !0);
            const n = this,
                { params: r, wrapperEl: l } = n;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            const o = n.minTranslate(),
                d = n.maxTranslate();
            let c;
            if (((c = i && e > o ? o : i && e < d ? d : e), n.updateProgress(c), r.cssMode)) {
                const e = n.isHorizontal();
                if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -c;
                else {
                    if (!n.support.smoothScroll)
                        return m({ swiper: n, targetPosition: -c, side: e ? 'left' : 'top' }), !0;
                    l.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
                }
                return !0;
            }
            return (
                0 === t
                    ? (n.setTransition(0),
                      n.setTranslate(c),
                      s && (n.emit('beforeTransitionStart', t, a), n.emit('transitionEnd')))
                    : (n.setTransition(t),
                      n.setTranslate(c),
                      s && (n.emit('beforeTransitionStart', t, a), n.emit('transitionStart')),
                      n.animating ||
                          ((n.animating = !0),
                          n.onTranslateToWrapperTransitionEnd ||
                              (n.onTranslateToWrapperTransitionEnd = function (e) {
                                  n &&
                                      !n.destroyed &&
                                      e.target === this &&
                                      (n.wrapperEl.removeEventListener(
                                          'transitionend',
                                          n.onTranslateToWrapperTransitionEnd
                                      ),
                                      (n.onTranslateToWrapperTransitionEnd = null),
                                      delete n.onTranslateToWrapperTransitionEnd,
                                      s && n.emit('transitionEnd'));
                              }),
                          n.wrapperEl.addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd))),
                !0
            );
        },
    };
    function O(e) {
        let { swiper: t, runCallbacks: s, direction: i, step: a } = e;
        const { activeIndex: n, previousIndex: r } = t;
        let l = i;
        if ((l || (l = n > r ? 'next' : n < r ? 'prev' : 'reset'), t.emit(`transition${a}`), s && n !== r)) {
            if ('reset' === l) return void t.emit(`slideResetTransition${a}`);
            t.emit(`slideChangeTransition${a}`),
                'next' === l ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`);
        }
    }
    var z = {
        slideTo: function (e, t, s, i, a) {
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                'string' == typeof e && (e = parseInt(e, 10));
            const n = this;
            let r = e;
            r < 0 && (r = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: f,
                enabled: h,
            } = n;
            if ((n.animating && l.preventInteractionOnTransition) || (!h && !i && !a)) return !1;
            const v = Math.min(n.params.slidesPerGroupSkip, r);
            let g = v + Math.floor((r - v) / n.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const b = -o[g];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * b),
                        s = Math.floor(100 * d[e]),
                        i = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1]
                        ? t >= s && t < i - (i - s) / 2
                            ? (r = e)
                            : t >= s && t < i && (r = e + 1)
                        : t >= s && (r = e);
                }
            if (n.initialized && r !== p) {
                if (!n.allowSlideNext && b < n.translate && b < n.minTranslate()) return !1;
                if (!n.allowSlidePrev && b > n.translate && b > n.maxTranslate() && (p || 0) !== r) return !1;
            }
            let w;
            if (
                (r !== (c || 0) && s && n.emit('beforeSlideChangeStart'),
                n.updateProgress(b),
                (w = r > p ? 'next' : r < p ? 'prev' : 'reset'),
                (u && -b === n.translate) || (!u && b === n.translate))
            )
                return (
                    n.updateActiveIndex(r),
                    l.autoHeight && n.updateAutoHeight(),
                    n.updateSlidesClasses(),
                    'slide' !== l.effect && n.setTranslate(b),
                    'reset' !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)),
                    !1
                );
            if (l.cssMode) {
                const e = n.isHorizontal(),
                    s = u ? b : -b;
                if (0 === t) {
                    const t = n.virtual && n.params.virtual.enabled;
                    t && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
                        t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                            ? ((n._cssModeVirtualInitialSet = !0),
                              requestAnimationFrame(() => {
                                  f[e ? 'scrollLeft' : 'scrollTop'] = s;
                              }))
                            : (f[e ? 'scrollLeft' : 'scrollTop'] = s),
                        t &&
                            requestAnimationFrame(() => {
                                (n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1);
                            });
                } else {
                    if (!n.support.smoothScroll)
                        return m({ swiper: n, targetPosition: s, side: e ? 'left' : 'top' }), !0;
                    f.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
                }
                return !0;
            }
            return (
                n.setTransition(t),
                n.setTranslate(b),
                n.updateActiveIndex(r),
                n.updateSlidesClasses(),
                n.emit('beforeTransitionStart', t, i),
                n.transitionStart(s, w),
                0 === t
                    ? n.transitionEnd(s, w)
                    : n.animating ||
                      ((n.animating = !0),
                      n.onSlideToWrapperTransitionEnd ||
                          (n.onSlideToWrapperTransitionEnd = function (e) {
                              n &&
                                  !n.destroyed &&
                                  e.target === this &&
                                  (n.wrapperEl.removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                                  (n.onSlideToWrapperTransitionEnd = null),
                                  delete n.onSlideToWrapperTransitionEnd,
                                  n.transitionEnd(s, w));
                          }),
                      n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
                !0
            );
        },
        slideToLoop: function (e, t, s, i) {
            if (
                (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                'string' == typeof e)
            ) {
                e = parseInt(e, 10);
            }
            const a = this;
            let n = e;
            return (
                a.params.loop &&
                    (a.virtual && a.params.virtual.enabled
                        ? (n += a.virtual.slidesBefore)
                        : (n = a.getSlideIndexByData(n))),
                a.slideTo(n, t, s, i)
            );
        },
        slideNext: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
                { enabled: a, params: n, animating: r } = i;
            if (!a) return i;
            let l = n.slidesPerGroup;
            'auto' === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (l = Math.max(i.slidesPerViewDynamic('current', !0), 1));
            const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
                d = i.virtual && n.virtual.enabled;
            if (n.loop) {
                if (r && !d && n.loopPreventsSliding) return !1;
                i.loopFix({ direction: 'next' }), (i._clientLeft = i.wrapperEl.clientLeft);
            }
            return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s);
        },
        slidePrev: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
                { params: a, snapGrid: n, slidesGrid: r, rtlTranslate: l, enabled: o, animating: d } = i;
            if (!o) return i;
            const c = i.virtual && a.virtual.enabled;
            if (a.loop) {
                if (d && !c && a.loopPreventsSliding) return !1;
                i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft);
            }
            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = p(l ? i.translate : -i.translate),
                m = n.map((e) => p(e));
            let f = n[m.indexOf(u) - 1];
            if (void 0 === f && a.cssMode) {
                let e;
                n.forEach((t, s) => {
                    u >= t && (e = s);
                }),
                    void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
            }
            let h = 0;
            if (
                (void 0 !== f &&
                    ((h = r.indexOf(f)),
                    h < 0 && (h = i.activeIndex - 1),
                    'auto' === a.slidesPerView &&
                        1 === a.slidesPerGroup &&
                        a.slidesPerGroupAuto &&
                        ((h = h - i.slidesPerViewDynamic('previous', !0) + 1), (h = Math.max(h, 0)))),
                a.rewind && i.isBeginning)
            ) {
                const a =
                    i.params.virtual && i.params.virtual.enabled && i.virtual
                        ? i.virtual.slides.length - 1
                        : i.slides.length - 1;
                return i.slideTo(a, e, t, s);
            }
            return i.slideTo(h, e, t, s);
        },
        slideReset: function (e, t, s) {
            return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, s)
            );
        },
        slideToClosest: function (e, t, s, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = 0.5);
            const a = this;
            let n = a.activeIndex;
            const r = Math.min(a.params.slidesPerGroupSkip, n),
                l = r + Math.floor((n - r) / a.params.slidesPerGroup),
                o = a.rtlTranslate ? a.translate : -a.translate;
            if (o >= a.snapGrid[l]) {
                const e = a.snapGrid[l];
                o - e > (a.snapGrid[l + 1] - e) * i && (n += a.params.slidesPerGroup);
            } else {
                const e = a.snapGrid[l - 1];
                o - e <= (a.snapGrid[l] - e) * i && (n -= a.params.slidesPerGroup);
            }
            return (n = Math.max(n, 0)), (n = Math.min(n, a.slidesGrid.length - 1)), a.slideTo(n, e, t, s);
        },
        slideToClickedSlide: function () {
            const e = this,
                { params: t, slidesEl: s } = e,
                i = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let a,
                n = e.clickedIndex;
            const l = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating) return;
                (a = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
                    t.centeredSlides
                        ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
                            ? (e.loopFix(),
                              (n = e.getSlideIndex(f(s, `${l}[data-swiper-slide-index="${a}"]`)[0])),
                              r(() => {
                                  e.slideTo(n);
                              }))
                            : e.slideTo(n)
                        : n > e.slides.length - i
                        ? (e.loopFix(),
                          (n = e.getSlideIndex(f(s, `${l}[data-swiper-slide-index="${a}"]`)[0])),
                          r(() => {
                              e.slideTo(n);
                          }))
                        : e.slideTo(n);
            } else e.slideTo(n);
        },
    };
    var D = {
        loopCreate: function (e) {
            const t = this,
                { params: s, slidesEl: i } = t;
            if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
            f(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
                e.setAttribute('data-swiper-slide-index', t);
            }),
                t.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : 'next' });
        },
        loopFix: function (e) {
            let {
                slideRealIndex: t,
                slideTo: s = !0,
                direction: i,
                setTranslate: a,
                activeSlideIndex: n,
                byController: r,
                byMousewheel: l,
            } = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop) return;
            o.emit('beforeLoopFix');
            const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m } = o;
            if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && m.virtual.enabled))
                return (
                    s &&
                        (m.centeredSlides || 0 !== o.snapIndex
                            ? m.centeredSlides && o.snapIndex < m.slidesPerView
                                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                                : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                            : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
                    (o.allowSlidePrev = c),
                    (o.allowSlideNext = p),
                    void o.emit('loopFix')
                );
            const f =
                'auto' === m.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10));
            let h = m.loopedSlides || f;
            h % m.slidesPerGroup != 0 && (h += m.slidesPerGroup - (h % m.slidesPerGroup)), (o.loopedSlides = h);
            const v = [],
                g = [];
            let b = o.activeIndex;
            void 0 === n
                ? (n = o.getSlideIndex(o.slides.filter((e) => e.classList.contains(m.slideActiveClass))[0]))
                : (b = n);
            const w = 'next' === i || !i,
                y = 'prev' === i || !i;
            let T = 0,
                S = 0;
            if (n < h) {
                T = Math.max(h - n, m.slidesPerGroup);
                for (let e = 0; e < h - n; e += 1) {
                    const t = e - Math.floor(e / d.length) * d.length;
                    v.push(d.length - t - 1);
                }
            } else if (n > o.slides.length - 2 * h) {
                S = Math.max(n - (o.slides.length - 2 * h), m.slidesPerGroup);
                for (let e = 0; e < S; e += 1) {
                    const t = e - Math.floor(e / d.length) * d.length;
                    g.push(t);
                }
            }
            if (
                (y &&
                    v.forEach((e) => {
                        (o.slides[e].swiperLoopMoveDOM = !0),
                            u.prepend(o.slides[e]),
                            (o.slides[e].swiperLoopMoveDOM = !1);
                    }),
                w &&
                    g.forEach((e) => {
                        (o.slides[e].swiperLoopMoveDOM = !0),
                            u.append(o.slides[e]),
                            (o.slides[e].swiperLoopMoveDOM = !1);
                    }),
                o.recalcSlides(),
                'auto' === m.slidesPerView && o.updateSlides(),
                m.watchSlidesProgress && o.updateSlidesOffset(),
                s)
            )
                if (v.length > 0 && y)
                    if (void 0 === t) {
                        const e = o.slidesGrid[b],
                            t = o.slidesGrid[b + T] - e;
                        l
                            ? o.setTranslate(o.translate - t)
                            : (o.slideTo(b + T, 0, !1, !0),
                              a && (o.touches[o.isHorizontal() ? 'startX' : 'startY'] += t));
                    } else a && o.slideToLoop(t, 0, !1, !0);
                else if (g.length > 0 && w)
                    if (void 0 === t) {
                        const e = o.slidesGrid[b],
                            t = o.slidesGrid[b - S] - e;
                        l
                            ? o.setTranslate(o.translate - t)
                            : (o.slideTo(b - S, 0, !1, !0),
                              a && (o.touches[o.isHorizontal() ? 'startX' : 'startY'] += t));
                    } else o.slideToLoop(t, 0, !1, !0);
            if (((o.allowSlidePrev = c), (o.allowSlideNext = p), o.controller && o.controller.control && !r)) {
                const e = {
                    slideRealIndex: t,
                    slideTo: !1,
                    direction: i,
                    setTranslate: a,
                    activeSlideIndex: n,
                    byController: !0,
                };
                Array.isArray(o.controller.control)
                    ? o.controller.control.forEach((t) => {
                          !t.destroyed && t.params.loop && t.loopFix(e);
                      })
                    : o.controller.control instanceof o.constructor &&
                      o.controller.control.params.loop &&
                      o.controller.control.loopFix(e);
            }
            o.emit('loopFix');
        },
        loopDestroy: function () {
            const e = this,
                { params: t, slidesEl: s } = e;
            if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e) => {
                const t =
                    void 0 === e.swiperSlideIndex ? 1 * e.getAttribute('data-swiper-slide-index') : e.swiperSlideIndex;
                i[t] = e;
            }),
                e.slides.forEach((e) => {
                    e.removeAttribute('data-swiper-slide-index');
                }),
                i.forEach((e) => {
                    s.append(e);
                }),
                e.recalcSlides(),
                e.slideTo(e.realIndex, 0);
        },
    };
    function G(e) {
        const t = this,
            s = i(),
            a = n(),
            r = t.touchEventsData;
        r.evCache.push(e);
        const { params: o, touches: d, enabled: c } = t;
        if (!c) return;
        if (!o.simulateTouch && 'mouse' === e.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let u = p.target;
        if ('wrapper' === o.touchEventsTarget && !t.wrapperEl.contains(u)) return;
        if ('which' in p && 3 === p.which) return;
        if ('button' in p && p.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        const m = !!o.noSwipingClass && '' !== o.noSwipingClass,
            f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (u = f[0]);
        const h = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
        if (
            o.noSwiping &&
            (v
                ? (function (e, t) {
                      return (
                          void 0 === t && (t = this),
                          (function t(s) {
                              if (!s || s === i() || s === n()) return null;
                              s.assignedSlot && (s = s.assignedSlot);
                              const a = s.closest(e);
                              return a || s.getRootNode ? a || t(s.getRootNode().host) : null;
                          })(t)
                      );
                  })(h, u)
                : u.closest(h))
        )
            return void (t.allowClick = !0);
        if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
        (d.currentX = p.pageX), (d.currentY = p.pageY);
        const g = d.currentX,
            b = d.currentY,
            w = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
            y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
        if (w && (g <= y || g >= a.innerWidth - y)) {
            if ('prevent' !== w) return;
            e.preventDefault();
        }
        Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
        }),
            (d.startX = g),
            (d.startY = b),
            (r.touchStartTime = l()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            o.threshold > 0 && (r.allowThresholdMove = !1);
        let T = !0;
        u.matches(r.focusableElements) && ((T = !1), 'SELECT' === u.nodeName && (r.isTouched = !1)),
            s.activeElement &&
                s.activeElement.matches(r.focusableElements) &&
                s.activeElement !== u &&
                s.activeElement.blur();
        const S = T && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !S) || u.isContentEditable || p.preventDefault(),
            t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !o.cssMode &&
                t.freeMode.onTouchStart(),
            t.emit('touchStart', p);
    }
    function $(e) {
        const t = i(),
            s = this,
            a = s.touchEventsData,
            { params: n, touches: r, rtlTranslate: o, enabled: d } = s;
        if (!d) return;
        if (!n.simulateTouch && 'mouse' === e.pointerType) return;
        let c = e;
        if ((c.originalEvent && (c = c.originalEvent), !a.isTouched))
            return void (a.startMoving && a.isScrolling && s.emit('touchMoveOpposite', c));
        const p = a.evCache.findIndex((e) => e.pointerId === c.pointerId);
        p >= 0 && (a.evCache[p] = c);
        const u = a.evCache.length > 1 ? a.evCache[0] : c,
            m = u.pageX,
            f = u.pageY;
        if (c.preventedByNestedSwiper) return (r.startX = m), void (r.startY = f);
        if (!s.allowTouchMove)
            return (
                c.target.matches(a.focusableElements) || (s.allowClick = !1),
                void (
                    a.isTouched &&
                    (Object.assign(r, {
                        startX: m,
                        startY: f,
                        prevX: s.touches.currentX,
                        prevY: s.touches.currentY,
                        currentX: m,
                        currentY: f,
                    }),
                    (a.touchStartTime = l()))
                )
            );
        if (n.touchReleaseOnEdges && !n.loop)
            if (s.isVertical()) {
                if (
                    (f < r.startY && s.translate <= s.maxTranslate()) ||
                    (f > r.startY && s.translate >= s.minTranslate())
                )
                    return (a.isTouched = !1), void (a.isMoved = !1);
            } else if (
                (m < r.startX && s.translate <= s.maxTranslate()) ||
                (m > r.startX && s.translate >= s.minTranslate())
            )
                return;
        if (t.activeElement && c.target === t.activeElement && c.target.matches(a.focusableElements))
            return (a.isMoved = !0), void (s.allowClick = !1);
        if ((a.allowTouchCallbacks && s.emit('touchMove', c), c.targetTouches && c.targetTouches.length > 1)) return;
        (r.currentX = m), (r.currentY = f);
        const h = r.currentX - r.startX,
            v = r.currentY - r.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + v ** 2) < s.params.threshold) return;
        if (void 0 === a.isScrolling) {
            let e;
            (s.isHorizontal() && r.currentY === r.startY) || (s.isVertical() && r.currentX === r.startX)
                ? (a.isScrolling = !1)
                : h * h + v * v >= 25 &&
                  ((e = (180 * Math.atan2(Math.abs(v), Math.abs(h))) / Math.PI),
                  (a.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle));
        }
        if (
            (a.isScrolling && s.emit('touchMoveOpposite', c),
            void 0 === a.startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (a.startMoving = !0)),
            a.isScrolling || (s.zoom && s.params.zoom && s.params.zoom.enabled && a.evCache.length > 1))
        )
            return void (a.isTouched = !1);
        if (!a.startMoving) return;
        (s.allowClick = !1),
            !n.cssMode && c.cancelable && c.preventDefault(),
            n.touchMoveStopPropagation && !n.nested && c.stopPropagation();
        let g = s.isHorizontal() ? h : v,
            b = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
        n.oneWayMovement && ((g = Math.abs(g) * (o ? 1 : -1)), (b = Math.abs(b) * (o ? 1 : -1))),
            (r.diff = g),
            (g *= n.touchRatio),
            o && ((g = -g), (b = -b));
        const w = s.touchesDirection;
        (s.swipeDirection = g > 0 ? 'prev' : 'next'), (s.touchesDirection = b > 0 ? 'prev' : 'next');
        const y = s.params.loop && !n.cssMode;
        if (!a.isMoved) {
            if (
                (y && s.loopFix({ direction: s.swipeDirection }),
                (a.startTranslate = s.getTranslate()),
                s.setTransition(0),
                s.animating)
            ) {
                const e = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
                s.wrapperEl.dispatchEvent(e);
            }
            (a.allowMomentumBounce = !1),
                !n.grabCursor || (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) || s.setGrabCursor(!0),
                s.emit('sliderFirstMove', c);
        }
        let T;
        a.isMoved &&
            w !== s.touchesDirection &&
            y &&
            Math.abs(g) >= 1 &&
            (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (T = !0)),
            s.emit('sliderMove', c),
            (a.isMoved = !0),
            (a.currentTranslate = g + a.startTranslate);
        let S = !0,
            E = n.resistanceRatio;
        if (
            (n.touchReleaseOnEdges && (E = 0),
            g > 0
                ? (y &&
                      !T &&
                      a.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) &&
                      s.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
                  a.currentTranslate > s.minTranslate() &&
                      ((S = !1),
                      n.resistance &&
                          (a.currentTranslate =
                              s.minTranslate() - 1 + (-s.minTranslate() + a.startTranslate + g) ** E)))
                : g < 0 &&
                  (y &&
                      !T &&
                      a.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) &&
                      s.loopFix({
                          direction: 'next',
                          setTranslate: !0,
                          activeSlideIndex:
                              s.slides.length -
                              ('auto' === n.slidesPerView
                                  ? s.slidesPerViewDynamic()
                                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
                      }),
                  a.currentTranslate < s.maxTranslate() &&
                      ((S = !1),
                      n.resistance &&
                          (a.currentTranslate =
                              s.maxTranslate() + 1 - (s.maxTranslate() - a.startTranslate - g) ** E))),
            S && (c.preventedByNestedSwiper = !0),
            !s.allowSlideNext &&
                'next' === s.swipeDirection &&
                a.currentTranslate < a.startTranslate &&
                (a.currentTranslate = a.startTranslate),
            !s.allowSlidePrev &&
                'prev' === s.swipeDirection &&
                a.currentTranslate > a.startTranslate &&
                (a.currentTranslate = a.startTranslate),
            s.allowSlidePrev || s.allowSlideNext || (a.currentTranslate = a.startTranslate),
            n.threshold > 0)
        ) {
            if (!(Math.abs(g) > n.threshold || a.allowThresholdMove))
                return void (a.currentTranslate = a.startTranslate);
            if (!a.allowThresholdMove)
                return (
                    (a.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (a.currentTranslate = a.startTranslate),
                    void (r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                );
        }
        n.followFinger &&
            !n.cssMode &&
            (((n.freeMode && n.freeMode.enabled && s.freeMode) || n.watchSlidesProgress) &&
                (s.updateActiveIndex(), s.updateSlidesClasses()),
            s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
            s.updateProgress(a.currentTranslate),
            s.setTranslate(a.currentTranslate));
    }
    function B(e) {
        const t = this,
            s = t.touchEventsData,
            i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
        if ((i >= 0 && s.evCache.splice(i, 1), ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type))) {
            if (!('pointercancel' === e.type && (t.browser.isSafari || t.browser.isWebView))) return;
        }
        const { params: a, touches: n, rtlTranslate: o, slidesGrid: d, enabled: c } = t;
        if (!c) return;
        if (!a.simulateTouch && 'mouse' === e.pointerType) return;
        let p = e;
        if (
            (p.originalEvent && (p = p.originalEvent),
            s.allowTouchCallbacks && t.emit('touchEnd', p),
            (s.allowTouchCallbacks = !1),
            !s.isTouched)
        )
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
        a.grabCursor &&
            s.isMoved &&
            s.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
        const u = l(),
            m = u - s.touchStartTime;
        if (t.allowClick) {
            const e = p.path || (p.composedPath && p.composedPath());
            t.updateClickedSlide((e && e[0]) || p.target),
                t.emit('tap click', p),
                m < 300 && u - s.lastClickTime < 300 && t.emit('doubleTap doubleClick', p);
        }
        if (
            ((s.lastClickTime = l()),
            r(() => {
                t.destroyed || (t.allowClick = !0);
            }),
            !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate)
        )
            return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
        let f;
        if (
            ((s.isTouched = !1),
            (s.isMoved = !1),
            (s.startMoving = !1),
            (f = a.followFinger ? (o ? t.translate : -t.translate) : -s.currentTranslate),
            a.cssMode)
        )
            return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: f });
        let h = 0,
            v = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== d[e + t]
                ? f >= d[e] && f < d[e + t] && ((h = e), (v = d[e + t] - d[e]))
                : f >= d[e] && ((h = e), (v = d[d.length - 1] - d[d.length - 2]));
        }
        let g = null,
            b = null;
        a.rewind &&
            (t.isBeginning
                ? (b =
                      t.params.virtual && t.params.virtual.enabled && t.virtual
                          ? t.virtual.slides.length - 1
                          : t.slides.length - 1)
                : t.isEnd && (g = 0));
        const w = (f - d[h]) / v,
            y = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (m > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            'next' === t.swipeDirection &&
                (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : h + y) : t.slideTo(h)),
                'prev' === t.swipeDirection &&
                    (w > 1 - a.longSwipesRatio
                        ? t.slideTo(h + y)
                        : null !== b && w < 0 && Math.abs(w) > a.longSwipesRatio
                        ? t.slideTo(b)
                        : t.slideTo(h));
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
                ? p.target === t.navigation.nextEl
                    ? t.slideTo(h + y)
                    : t.slideTo(h)
                : ('next' === t.swipeDirection && t.slideTo(null !== g ? g : h + y),
                  'prev' === t.swipeDirection && t.slideTo(null !== b ? b : h));
        }
    }
    function _() {
        const e = this,
            { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e,
            r = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = r && t.loop;
        !('auto' === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        l
            ? e.params.loop && !r
                ? e.slideToLoop(e.realIndex, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)
            : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                (clearTimeout(e.autoplay.resizeTimeout),
                (e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
                }, 500))),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = i),
            e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    function N(e) {
        const t = this;
        t.enabled &&
            (t.allowClick ||
                (t.params.preventClicks && e.preventDefault(),
                t.params.preventClicksPropagation &&
                    t.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function H() {
        const e = this,
            { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
        if (!i) return;
        let a;
        (e.previousTranslate = e.translate),
            e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        (a = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
            a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
            e.emit('setTranslate', e.translate, !1);
    }
    function F(e) {
        L(this, e.target), this.update();
    }
    let V = !1;
    function j() {}
    const R = (e, t) => {
        const s = i(),
            { params: a, el: n, wrapperEl: r, device: l } = e,
            o = !!a.nested,
            d = 'on' === t ? 'addEventListener' : 'removeEventListener',
            c = t;
        n[d]('pointerdown', e.onTouchStart, { passive: !1 }),
            s[d]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
            s[d]('pointerup', e.onTouchEnd, { passive: !0 }),
            s[d]('pointercancel', e.onTouchEnd, { passive: !0 }),
            s[d]('pointerout', e.onTouchEnd, { passive: !0 }),
            s[d]('pointerleave', e.onTouchEnd, { passive: !0 }),
            (a.preventClicks || a.preventClicksPropagation) && n[d]('click', e.onClick, !0),
            a.cssMode && r[d]('scroll', e.onScroll),
            a.updateOnWindowResize
                ? e[c](l.ios || l.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _, !0)
                : e[c]('observerUpdate', _, !0),
            n[d]('load', e.onLoad, { capture: !0 });
    };
    const q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var X = {
        init: !0,
        direction: 'horizontal',
        oneWayMovement: !1,
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: 'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: 'swiper-',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };
    function Y(e, t) {
        return function (s) {
            void 0 === s && (s = {});
            const i = Object.keys(s)[0],
                a = s[i];
            'object' == typeof a && null !== a
                ? (['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 && !0 === e[i] && (e[i] = { auto: !0 }),
                  i in e && 'enabled' in a
                      ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                        'object' != typeof e[i] || 'enabled' in e[i] || (e[i].enabled = !0),
                        e[i] || (e[i] = { enabled: !1 }),
                        p(t, s))
                      : p(t, s))
                : p(t, s);
        };
    }
    const W = {
            eventsEmitter: M,
            update: A,
            translate: I,
            transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
                        s.emit('setTransition', e, t);
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        { params: i } = s;
                    i.cssMode ||
                        (i.autoHeight && s.updateAutoHeight(),
                        O({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }));
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        { params: i } = s;
                    (s.animating = !1),
                        i.cssMode || (s.setTransition(0), O({ swiper: s, runCallbacks: e, direction: t, step: 'End' }));
                },
            },
            slide: z,
            loop: D,
            grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
                    const s = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0),
                        (s.style.cursor = 'move'),
                        (s.style.cursor = e ? 'grabbing' : 'grab'),
                        t.isElement &&
                            requestAnimationFrame(() => {
                                t.__preventObserver__ = !1;
                            });
                },
                unsetGrabCursor: function () {
                    const e = this;
                    (e.params.watchOverflow && e.isLocked) ||
                        e.params.cssMode ||
                        (e.isElement && (e.__preventObserver__ = !0),
                        (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = ''),
                        e.isElement &&
                            requestAnimationFrame(() => {
                                e.__preventObserver__ = !1;
                            }));
                },
            },
            events: {
                attachEvents: function () {
                    const e = this,
                        t = i(),
                        { params: s } = e;
                    (e.onTouchStart = G.bind(e)),
                        (e.onTouchMove = $.bind(e)),
                        (e.onTouchEnd = B.bind(e)),
                        s.cssMode && (e.onScroll = H.bind(e)),
                        (e.onClick = N.bind(e)),
                        (e.onLoad = F.bind(e)),
                        V || (t.addEventListener('touchstart', j), (V = !0)),
                        R(e, 'on');
                },
                detachEvents: function () {
                    R(this, 'off');
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    const e = this,
                        { realIndex: t, initialized: s, params: i, el: a } = e,
                        n = i.breakpoints;
                    if (!n || (n && 0 === Object.keys(n).length)) return;
                    const r = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!r || e.currentBreakpoint === r) return;
                    const l = (r in n ? n[r] : void 0) || e.originalParams,
                        o = q(e, i),
                        d = q(e, l),
                        c = i.enabled;
                    o && !d
                        ? (a.classList.remove(
                              `${i.containerModifierClass}grid`,
                              `${i.containerModifierClass}grid-column`
                          ),
                          e.emitContainerClasses())
                        : !o &&
                          d &&
                          (a.classList.add(`${i.containerModifierClass}grid`),
                          ((l.grid.fill && 'column' === l.grid.fill) || (!l.grid.fill && 'column' === i.grid.fill)) &&
                              a.classList.add(`${i.containerModifierClass}grid-column`),
                          e.emitContainerClasses()),
                        ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
                            const s = i[t] && i[t].enabled,
                                a = l[t] && l[t].enabled;
                            s && !a && e[t].disable(), !s && a && e[t].enable();
                        });
                    const u = l.direction && l.direction !== i.direction,
                        m = i.loop && (l.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), p(e.params, l);
                    const f = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev,
                    }),
                        c && !f ? e.disable() : !c && f && e.enable(),
                        (e.currentBreakpoint = r),
                        e.emit('_beforeBreakpoint', l),
                        m && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
                        e.emit('breakpoint', l);
                },
                getBreakpoint: function (e, t, s) {
                    if ((void 0 === t && (t = 'window'), !e || ('container' === t && !s))) return;
                    let i = !1;
                    const a = n(),
                        r = 'window' === t ? a.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e) => {
                            if ('string' == typeof e && 0 === e.indexOf('@')) {
                                const t = parseFloat(e.substr(1));
                                return { value: r * t, point: e };
                            }
                            return { value: e, point: e };
                        });
                    l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < l.length; e += 1) {
                        const { point: n, value: r } = l[e];
                        'window' === t
                            ? a.matchMedia(`(min-width: ${r}px)`).matches && (i = n)
                            : r <= s.clientWidth && (i = n);
                    }
                    return i || 'max';
                },
            },
            checkOverflow: {
                checkOverflow: function () {
                    const e = this,
                        { isLocked: t, params: s } = e,
                        { slidesOffsetBefore: i } = s;
                    if (i) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > s;
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                        !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                        t && t !== e.isLocked && (e.isEnd = !1),
                        t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
                },
            },
            classes: {
                addClasses: function () {
                    const e = this,
                        { classNames: t, params: s, rtl: i, el: a, device: n } = e,
                        r = (function (e, t) {
                            const s = [];
                            return (
                                e.forEach((e) => {
                                    'object' == typeof e
                                        ? Object.keys(e).forEach((i) => {
                                              e[i] && s.push(t + i);
                                          })
                                        : 'string' == typeof e && s.push(t + e);
                                }),
                                s
                            );
                        })(
                            [
                                'initialized',
                                s.direction,
                                { 'free-mode': e.params.freeMode && s.freeMode.enabled },
                                { autoheight: s.autoHeight },
                                { rtl: i },
                                { grid: s.grid && s.grid.rows > 1 },
                                { 'grid-column': s.grid && s.grid.rows > 1 && 'column' === s.grid.fill },
                                { android: n.android },
                                { ios: n.ios },
                                { 'css-mode': s.cssMode },
                                { centered: s.cssMode && s.centeredSlides },
                                { 'watch-progress': s.watchSlidesProgress },
                            ],
                            s.containerModifierClass
                        );
                    t.push(...r), a.classList.add(...t), e.emitContainerClasses();
                },
                removeClasses: function () {
                    const { el: e, classNames: t } = this;
                    e.classList.remove(...t), this.emitContainerClasses();
                },
            },
        },
        U = {};
    class K {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++) a[n] = arguments[n];
            1 === a.length && a[0].constructor && 'Object' === Object.prototype.toString.call(a[0]).slice(8, -1)
                ? (t = a[0])
                : ([e, t] = a),
                t || (t = {}),
                (t = p({}, t)),
                e && !t.el && (t.el = e);
            const r = i();
            if (t.el && 'string' == typeof t.el && r.querySelectorAll(t.el).length > 1) {
                const e = [];
                return (
                    r.querySelectorAll(t.el).forEach((s) => {
                        const i = p({}, t, { el: s });
                        e.push(new K(i));
                    }),
                    e
                );
            }
            const l = this;
            (l.__swiper__ = !0),
                (l.support = E()),
                (l.device = x({ userAgent: t.userAgent })),
                (l.browser = C()),
                (l.eventsListeners = {}),
                (l.eventsAnyListeners = []),
                (l.modules = [...l.__modules__]),
                t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
            const o = {};
            l.modules.forEach((e) => {
                e({
                    params: t,
                    swiper: l,
                    extendParams: Y(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l),
                });
            });
            const d = p({}, X, o);
            return (
                (l.params = p({}, d, U, t)),
                (l.originalParams = p({}, l.params)),
                (l.passedParams = p({}, t)),
                l.params &&
                    l.params.on &&
                    Object.keys(l.params.on).forEach((e) => {
                        l.on(e, l.params.on[e]);
                    }),
                l.params && l.params.onAny && l.onAny(l.params.onAny),
                Object.assign(l, {
                    enabled: l.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => 'horizontal' === l.params.direction,
                    isVertical: () => 'vertical' === l.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: l.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: [],
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                    imagesToLoad: [],
                    imagesLoaded: 0,
                }),
                l.emit('_swiper'),
                l.params.init && l.init(),
                l
            );
        }
        getSlideIndex(e) {
            const { slidesEl: t, params: s } = this,
                i = g(f(t, `.${s.slideClass}, swiper-slide`)[0]);
            return g(e) - i;
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(
                this.slides.filter((t) => 1 * t.getAttribute('data-swiper-slide-index') === e)[0]
            );
        }
        recalcSlides() {
            const { slidesEl: e, params: t } = this;
            this.slides = f(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
            const e = this;
            e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
        }
        disable() {
            const e = this;
            e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const i = s.minTranslate(),
                a = (s.maxTranslate() - i) * e + i;
            s.translateTo(a, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className
                .split(' ')
                .filter((t) => 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit('_containerClasses', t.join(' '));
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed
                ? ''
                : e.className
                      .split(' ')
                      .filter((e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass))
                      .join(' ');
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((s) => {
                const i = e.getSlideClasses(s);
                t.push({ slideEl: s, classNames: i }), e.emit('_slideClass', s, i);
            }),
                e.emit('_slideClasses', t);
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = 'current'), void 0 === t && (t = !1);
            const { params: s, slides: i, slidesGrid: a, slidesSizesGrid: n, size: r, activeIndex: l } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e,
                    t = i[l].swiperSlideSize;
                for (let s = l + 1; s < i.length; s += 1)
                    i[s] && !e && ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    i[s] && !e && ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
            } else if ('current' === e)
                for (let e = l + 1; e < i.length; e += 1) {
                    (t ? a[e] + n[e] - a[l] < r : a[e] - a[l] < r) && (o += 1);
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    a[l] - a[e] < r && (o += 1);
                }
            return o;
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: s } = e;
            function i() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let a;
            if (
                (s.breakpoints && e.setBreakpoint(),
                [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
                    t.complete && L(e, t);
                }),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode && e.params.freeMode.enabled)
            )
                i(), e.params.autoHeight && e.updateAutoHeight();
            else {
                if (
                    ('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                ) {
                    const t = e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
                    a = e.slideTo(t.length - 1, 0, !1, !0);
                } else a = e.slideTo(e.activeIndex, 0, !1, !0);
                a || i();
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update');
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                i = s.params.direction;
            return (
                e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
                e === i ||
                    ('horizontal' !== e && 'vertical' !== e) ||
                    (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
                    s.el.classList.add(`${s.params.containerModifierClass}${e}`),
                    s.emitContainerClasses(),
                    (s.params.direction = e),
                    s.slides.forEach((t) => {
                        'vertical' === e ? (t.style.width = '') : (t.style.height = '');
                    }),
                    s.emit('changeDirection'),
                    t && s.update()),
                s
            );
        }
        changeLanguageDirection(e) {
            const t = this;
            (t.rtl && 'rtl' === e) ||
                (!t.rtl && 'ltr' === e) ||
                ((t.rtl = 'rtl' === e),
                (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
                t.rtl
                    ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl'))
                    : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'ltr')),
                t.update());
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let s = e || t.params.el;
            if (('string' == typeof s && (s = document.querySelector(s)), !s)) return !1;
            (s.swiper = t), s.shadowEl && (t.isElement = !0);
            const i = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
            let a = (() => {
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(i());
                }
                return f(s, i())[0];
            })();
            return (
                !a &&
                    t.params.createElements &&
                    ((a = h('div', t.params.wrapperClass)),
                    s.append(a),
                    f(s, `.${t.params.slideClass}`).forEach((e) => {
                        a.append(e);
                    })),
                Object.assign(t, {
                    el: s,
                    wrapperEl: a,
                    slidesEl: t.isElement ? s : a,
                    mounted: !0,
                    rtl: 'rtl' === s.dir.toLowerCase() || 'rtl' === v(s, 'direction'),
                    rtlTranslate:
                        'horizontal' === t.params.direction &&
                        ('rtl' === s.dir.toLowerCase() || 'rtl' === v(s, 'direction')),
                    wrongRTL: '-webkit-box' === v(a, 'display'),
                }),
                !0
            );
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return (
                !1 === t.mount(e) ||
                    (t.emit('beforeInit'),
                    t.params.breakpoints && t.setBreakpoint(),
                    t.addClasses(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.params.watchOverflow && t.checkOverflow(),
                    t.params.grabCursor && t.enabled && t.setGrabCursor(),
                    t.params.loop && t.virtual && t.params.virtual.enabled
                        ? t.slideTo(
                              t.params.initialSlide + t.virtual.slidesBefore,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                          )
                        : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                    t.params.loop && t.loopCreate(),
                    t.attachEvents(),
                    [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                        e.complete
                            ? L(t, e)
                            : e.addEventListener('load', (e) => {
                                  L(t, e.target);
                              });
                    }),
                    k(t),
                    (t.initialized = !0),
                    k(t),
                    t.emit('init'),
                    t.emit('afterInit')),
                t
            );
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                { params: i, el: a, wrapperEl: n, slides: r } = s;
            return (
                void 0 === s.params ||
                    s.destroyed ||
                    (s.emit('beforeDestroy'),
                    (s.initialized = !1),
                    s.detachEvents(),
                    i.loop && s.loopDestroy(),
                    t &&
                        (s.removeClasses(),
                        a.removeAttribute('style'),
                        n.removeAttribute('style'),
                        r &&
                            r.length &&
                            r.forEach((e) => {
                                e.classList.remove(
                                    i.slideVisibleClass,
                                    i.slideActiveClass,
                                    i.slideNextClass,
                                    i.slidePrevClass
                                ),
                                    e.removeAttribute('style'),
                                    e.removeAttribute('data-swiper-slide-index');
                            })),
                    s.emit('destroy'),
                    Object.keys(s.eventsListeners).forEach((e) => {
                        s.off(e);
                    }),
                    !1 !== e &&
                        ((s.el.swiper = null),
                        (function (e) {
                            const t = e;
                            Object.keys(t).forEach((e) => {
                                try {
                                    t[e] = null;
                                } catch (e) {}
                                try {
                                    delete t[e];
                                } catch (e) {}
                            });
                        })(s)),
                    (s.destroyed = !0)),
                null
            );
        }
        static extendDefaults(e) {
            p(U, e);
        }
        static get extendedDefaults() {
            return U;
        }
        static get defaults() {
            return X;
        }
        static installModule(e) {
            K.prototype.__modules__ || (K.prototype.__modules__ = []);
            const t = K.prototype.__modules__;
            'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e) => K.installModule(e)), K) : (K.installModule(e), K);
        }
    }
    function Z(e, t, s, i) {
        return (
            e.params.createElements &&
                Object.keys(i).forEach((a) => {
                    if (!s[a] && !0 === s.auto) {
                        let n = f(e.el, `.${i[a]}`)[0];
                        n || ((n = h('div', i[a])), (n.className = i[a]), e.el.append(n)), (s[a] = n), (t[a] = n);
                    }
                }),
            s
        );
    }
    function J(e) {
        return (
            void 0 === e && (e = ''),
            `.${e
                .trim()
                .replace(/([\.:!+\/])/g, '\\$1')
                .replace(/ /g, '.')}`
        );
    }
    function Q(e) {
        const t = this,
            { params: s, slidesEl: i } = t;
        s.loop && t.loopDestroy();
        const a = (e) => {
            if ('string' == typeof e) {
                const t = document.createElement('div');
                (t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = '');
            } else i.append(e);
        };
        if ('object' == typeof e && 'length' in e) for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
        else a(e);
        t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update();
    }
    function ee(e) {
        const t = this,
            { params: s, activeIndex: i, slidesEl: a } = t;
        s.loop && t.loopDestroy();
        let n = i + 1;
        const r = (e) => {
            if ('string' == typeof e) {
                const t = document.createElement('div');
                (t.innerHTML = e), a.prepend(t.children[0]), (t.innerHTML = '');
            } else a.prepend(e);
        };
        if ('object' == typeof e && 'length' in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && r(e[t]);
            n = i + e.length;
        } else r(e);
        t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update(), t.slideTo(n, 0, !1);
    }
    function te(e, t) {
        const s = this,
            { params: i, activeIndex: a, slidesEl: n } = s;
        let r = a;
        i.loop && ((r -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = r > e ? r + 1 : r;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides[t];
            e.remove(), d.unshift(e);
        }
        if ('object' == typeof t && 'length' in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
            o = r > e ? r + t.length : r;
        } else n.append(t);
        for (let e = 0; e < d.length; e += 1) n.append(d[e]);
        s.recalcSlides(),
            i.loop && s.loopCreate(),
            (i.observer && !s.isElement) || s.update(),
            i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function se(e) {
        const t = this,
            { params: s, activeIndex: i } = t;
        let a = i;
        s.loop && ((a -= t.loopedSlides), t.loopDestroy());
        let n,
            r = a;
        if ('object' == typeof e && 'length' in e) {
            for (let s = 0; s < e.length; s += 1) (n = e[s]), t.slides[n] && t.slides[n].remove(), n < r && (r -= 1);
            r = Math.max(r, 0);
        } else (n = e), t.slides[n] && t.slides[n].remove(), n < r && (r -= 1), (r = Math.max(r, 0));
        t.recalcSlides(),
            s.loop && t.loopCreate(),
            (s.observer && !t.isElement) || t.update(),
            s.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1);
    }
    function ie() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t);
    }
    Object.keys(W).forEach((e) => {
        Object.keys(W[e]).forEach((t) => {
            K.prototype[t] = W[e][t];
        });
    }),
        K.use([
            function (e) {
                let { swiper: t, on: s, emit: i } = e;
                const a = n();
                let r = null,
                    l = null;
                const o = () => {
                        t && !t.destroyed && t.initialized && (i('beforeResize'), i('resize'));
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && i('orientationchange');
                    };
                s('init', () => {
                    t.params.resizeObserver && void 0 !== a.ResizeObserver
                        ? t &&
                          !t.destroyed &&
                          t.initialized &&
                          ((r = new ResizeObserver((e) => {
                              l = a.requestAnimationFrame(() => {
                                  const { width: s, height: i } = t;
                                  let a = s,
                                      n = i;
                                  e.forEach((e) => {
                                      let { contentBoxSize: s, contentRect: i, target: r } = e;
                                      (r && r !== t.el) ||
                                          ((a = i ? i.width : (s[0] || s).inlineSize),
                                          (n = i ? i.height : (s[0] || s).blockSize));
                                  }),
                                      (a === s && n === i) || o();
                              });
                          })),
                          r.observe(t.el))
                        : (a.addEventListener('resize', o), a.addEventListener('orientationchange', d));
                }),
                    s('destroy', () => {
                        l && a.cancelAnimationFrame(l),
                            r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                            a.removeEventListener('resize', o),
                            a.removeEventListener('orientationchange', d);
                    });
            },
            function (e) {
                let { swiper: t, extendParams: s, on: i, emit: a } = e;
                const r = [],
                    l = n(),
                    o = function (e, s) {
                        void 0 === s && (s = {});
                        const i = new (l.MutationObserver || l.WebkitMutationObserver)((e) => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) return void a('observerUpdate', e[0]);
                            const s = function () {
                                a('observerUpdate', e[0]);
                            };
                            l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0);
                        });
                        i.observe(e, {
                            attributes: void 0 === s.attributes || s.attributes,
                            childList: void 0 === s.childList || s.childList,
                            characterData: void 0 === s.characterData || s.characterData,
                        }),
                            r.push(i);
                    };
                s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                    i('init', () => {
                        if (t.params.observer) {
                            if (t.params.observeParents) {
                                const e = b(t.el);
                                for (let t = 0; t < e.length; t += 1) o(e[t]);
                            }
                            o(t.el, { childList: t.params.observeSlideChildren }), o(t.wrapperEl, { attributes: !1 });
                        }
                    }),
                    i('destroy', () => {
                        r.forEach((e) => {
                            e.disconnect();
                        }),
                            r.splice(0, r.length);
                    });
            },
        ]);
    const ae = [
        function (e) {
            let t,
                { swiper: s, extendParams: a, on: n, emit: r } = e;
            a({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0,
                },
            });
            const l = i();
            s.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] };
            const o = l.createElement('div');
            function d(e, t) {
                const i = s.params.virtual;
                if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                let a;
                return (
                    i.renderSlide
                        ? ((a = i.renderSlide.call(s, e, t)),
                          'string' == typeof a && ((o.innerHTML = a), (a = o.children[0])))
                        : (a = s.isElement ? h('swiper-slide') : h('div', s.params.slideClass)),
                    a.setAttribute('data-swiper-slide-index', t),
                    i.renderSlide || (a.innerHTML = e),
                    i.cache && (s.virtual.cache[t] = a),
                    a
                );
            }
            function c(e) {
                const { slidesPerView: t, slidesPerGroup: i, centeredSlides: a, loop: n } = s.params,
                    { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
                    { from: c, to: p, slides: u, slidesGrid: m, offset: h } = s.virtual;
                s.params.cssMode || s.updateActiveIndex();
                const v = s.activeIndex || 0;
                let g, b, w;
                (g = s.rtlTranslate ? 'right' : s.isHorizontal() ? 'left' : 'top'),
                    a
                        ? ((b = Math.floor(t / 2) + i + o), (w = Math.floor(t / 2) + i + l))
                        : ((b = t + (i - 1) + o), (w = (n ? t : i) + l));
                let y = v - w,
                    T = v + b;
                n || ((y = Math.max(y, 0)), (T = Math.min(T, u.length - 1)));
                let S = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
                function E() {
                    s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), r('virtualUpdate');
                }
                if (
                    (n && v >= w
                        ? ((y -= w), a || (S += s.slidesGrid[0]))
                        : n && v < w && ((y = -w), a && (S += s.slidesGrid[0])),
                    Object.assign(s.virtual, {
                        from: y,
                        to: T,
                        offset: S,
                        slidesGrid: s.slidesGrid,
                        slidesBefore: w,
                        slidesAfter: b,
                    }),
                    c === y && p === T && !e)
                )
                    return (
                        s.slidesGrid !== m &&
                            S !== h &&
                            s.slides.forEach((e) => {
                                e.style[g] = S - Math.abs(s.cssOverflowAdjustment()) + 'px';
                            }),
                        s.updateProgress(),
                        void r('virtualUpdate')
                    );
                if (s.params.virtual.renderExternal)
                    return (
                        s.params.virtual.renderExternal.call(s, {
                            offset: S,
                            from: y,
                            to: T,
                            slides: (function () {
                                const e = [];
                                for (let t = y; t <= T; t += 1) e.push(u[t]);
                                return e;
                            })(),
                        }),
                        void (s.params.virtual.renderExternalUpdate ? E() : r('virtualUpdate'))
                    );
                const x = [],
                    C = [],
                    M = (e) => {
                        let t = e;
                        return e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t;
                    };
                if (e)
                    s.slidesEl.querySelectorAll(`.${s.params.slideClass}, swiper-slide`).forEach((e) => {
                        e.remove();
                    });
                else
                    for (let e = c; e <= p; e += 1)
                        if (e < y || e > T) {
                            const t = M(e);
                            s.slidesEl
                                .querySelectorAll(
                                    `.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                                )
                                .forEach((e) => {
                                    e.remove();
                                });
                        }
                const L = n ? -u.length : 0,
                    P = n ? 2 * u.length : u.length;
                for (let t = L; t < P; t += 1)
                    if (t >= y && t <= T) {
                        const s = M(t);
                        void 0 === p || e ? C.push(s) : (t > p && C.push(s), t < c && x.push(s));
                    }
                if (
                    (C.forEach((e) => {
                        s.slidesEl.append(d(u[e], e));
                    }),
                    n)
                )
                    for (let e = x.length - 1; e >= 0; e -= 1) {
                        const t = x[e];
                        s.slidesEl.prepend(d(u[t], t));
                    }
                else
                    x.sort((e, t) => t - e),
                        x.forEach((e) => {
                            s.slidesEl.prepend(d(u[e], e));
                        });
                f(s.slidesEl, '.swiper-slide, swiper-slide').forEach((e) => {
                    e.style[g] = S - Math.abs(s.cssOverflowAdjustment()) + 'px';
                }),
                    E();
            }
            n('beforeInit', () => {
                if (!s.params.virtual.enabled) return;
                let e;
                if (void 0 === s.passedParams.virtual.slides) {
                    const t = [...s.slidesEl.children].filter((e) =>
                        e.matches(`.${s.params.slideClass}, swiper-slide`)
                    );
                    t &&
                        t.length &&
                        ((s.virtual.slides = [...t]),
                        (e = !0),
                        t.forEach((e, t) => {
                            e.setAttribute('data-swiper-slide-index', t), (s.virtual.cache[t] = e), e.remove();
                        }));
                }
                e || (s.virtual.slides = s.params.virtual.slides),
                    s.classNames.push(`${s.params.containerModifierClass}virtual`),
                    (s.params.watchSlidesProgress = !0),
                    (s.originalParams.watchSlidesProgress = !0),
                    s.params.initialSlide || c();
            }),
                n('setTranslate', () => {
                    s.params.virtual.enabled &&
                        (s.params.cssMode && !s._immediateVirtual
                            ? (clearTimeout(t),
                              (t = setTimeout(() => {
                                  c();
                              }, 100)))
                            : c());
                }),
                n('init update resize', () => {
                    s.params.virtual.enabled &&
                        s.params.cssMode &&
                        u(s.wrapperEl, '--swiper-virtual-size', `${s.virtualSize}px`);
                }),
                Object.assign(s.virtual, {
                    appendSlide: function (e) {
                        if ('object' == typeof e && 'length' in e)
                            for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                        else s.virtual.slides.push(e);
                        c(!0);
                    },
                    prependSlide: function (e) {
                        const t = s.activeIndex;
                        let i = t + 1,
                            a = 1;
                        if (Array.isArray(e)) {
                            for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                            (i = t + e.length), (a = e.length);
                        } else s.virtual.slides.unshift(e);
                        if (s.params.virtual.cache) {
                            const e = s.virtual.cache,
                                t = {};
                            Object.keys(e).forEach((s) => {
                                const i = e[s],
                                    n = i.getAttribute('data-swiper-slide-index');
                                n && i.setAttribute('data-swiper-slide-index', parseInt(n, 10) + a),
                                    (t[parseInt(s, 10) + a] = i);
                            }),
                                (s.virtual.cache = t);
                        }
                        c(!0), s.slideTo(i, 0);
                    },
                    removeSlide: function (e) {
                        if (null == e) return;
                        let t = s.activeIndex;
                        if (Array.isArray(e))
                            for (let i = e.length - 1; i >= 0; i -= 1)
                                s.virtual.slides.splice(e[i], 1),
                                    s.params.virtual.cache && delete s.virtual.cache[e[i]],
                                    e[i] < t && (t -= 1),
                                    (t = Math.max(t, 0));
                        else
                            s.virtual.slides.splice(e, 1),
                                s.params.virtual.cache && delete s.virtual.cache[e],
                                e < t && (t -= 1),
                                (t = Math.max(t, 0));
                        c(!0), s.slideTo(t, 0);
                    },
                    removeAllSlides: function () {
                        (s.virtual.slides = []),
                            s.params.virtual.cache && (s.virtual.cache = {}),
                            c(!0),
                            s.slideTo(0, 0);
                    },
                    update: c,
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a, emit: r } = e;
            const l = i(),
                o = n();
            function d(e) {
                if (!t.enabled) return;
                const { rtlTranslate: s } = t;
                let a = e;
                a.originalEvent && (a = a.originalEvent);
                const d = a.keyCode || a.charCode,
                    c = t.params.keyboard.pageUpDown,
                    p = c && 33 === d,
                    u = c && 34 === d,
                    m = 37 === d,
                    f = 39 === d,
                    h = 38 === d,
                    v = 40 === d;
                if (!t.allowSlideNext && ((t.isHorizontal() && f) || (t.isVertical() && v) || u)) return !1;
                if (!t.allowSlidePrev && ((t.isHorizontal() && m) || (t.isVertical() && h) || p)) return !1;
                if (
                    !(
                        a.shiftKey ||
                        a.altKey ||
                        a.ctrlKey ||
                        a.metaKey ||
                        (l.activeElement &&
                            l.activeElement.nodeName &&
                            ('input' === l.activeElement.nodeName.toLowerCase() ||
                                'textarea' === l.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (t.params.keyboard.onlyInViewport && (p || u || m || f || h || v)) {
                        let e = !1;
                        if (
                            b(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
                            0 === b(t.el, `.${t.params.slideActiveClass}`).length
                        )
                            return;
                        const a = t.el,
                            r = a.clientWidth,
                            l = a.clientHeight,
                            d = o.innerWidth,
                            c = o.innerHeight,
                            p = (function (e) {
                                const t = n(),
                                    s = i(),
                                    a = e.getBoundingClientRect(),
                                    r = s.body,
                                    l = e.clientTop || r.clientTop || 0,
                                    o = e.clientLeft || r.clientLeft || 0,
                                    d = e === t ? t.scrollY : e.scrollTop,
                                    c = e === t ? t.scrollX : e.scrollLeft;
                                return { top: a.top + d - l, left: a.left + c - o };
                            })(a);
                        s && (p.left -= a.scrollLeft);
                        const u = [
                            [p.left, p.top],
                            [p.left + r, p.top],
                            [p.left, p.top + l],
                            [p.left + r, p.top + l],
                        ];
                        for (let t = 0; t < u.length; t += 1) {
                            const s = u[t];
                            if (s[0] >= 0 && s[0] <= d && s[1] >= 0 && s[1] <= c) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                e = !0;
                            }
                        }
                        if (!e) return;
                    }
                    t.isHorizontal()
                        ? ((p || u || m || f) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                          (((u || f) && !s) || ((p || m) && s)) && t.slideNext(),
                          (((p || m) && !s) || ((u || f) && s)) && t.slidePrev())
                        : ((p || u || h || v) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                          (u || v) && t.slideNext(),
                          (p || h) && t.slidePrev()),
                        r('keyPress', d);
                }
            }
            function c() {
                t.keyboard.enabled || (l.addEventListener('keydown', d), (t.keyboard.enabled = !0));
            }
            function p() {
                t.keyboard.enabled && (l.removeEventListener('keydown', d), (t.keyboard.enabled = !1));
            }
            (t.keyboard = { enabled: !1 }),
                s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
                a('init', () => {
                    t.params.keyboard.enabled && c();
                }),
                a('destroy', () => {
                    t.keyboard.enabled && p();
                }),
                Object.assign(t.keyboard, { enable: c, disable: p });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i, emit: a } = e;
            const o = n();
            let d;
            s({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: 'container',
                    thresholdDelta: null,
                    thresholdTime: null,
                },
            }),
                (t.mousewheel = { enabled: !1 });
            let c,
                p = l();
            const u = [];
            function m() {
                t.enabled && (t.mouseEntered = !0);
            }
            function f() {
                t.enabled && (t.mouseEntered = !1);
            }
            function h(e) {
                return (
                    !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
                    !(t.params.mousewheel.thresholdTime && l() - p < t.params.mousewheel.thresholdTime) &&
                    ((e.delta >= 6 && l() - p < 60) ||
                        (e.direction < 0
                            ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), a('scroll', e.raw))
                            : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), a('scroll', e.raw)),
                        (p = new o.Date().getTime()),
                        !1))
                );
            }
            function v(e) {
                let s = e,
                    i = !0;
                if (!t.enabled) return;
                const n = t.params.mousewheel;
                t.params.cssMode && s.preventDefault();
                let o = t.el;
                'container' !== t.params.mousewheel.eventsTarget &&
                    (o = document.querySelector(t.params.mousewheel.eventsTarget));
                const p = o && o.contains(s.target);
                if (!t.mouseEntered && !p && !n.releaseOnEdges) return !0;
                s.originalEvent && (s = s.originalEvent);
                let m = 0;
                const f = t.rtlTranslate ? -1 : 1,
                    v = (function (e) {
                        let t = 0,
                            s = 0,
                            i = 0,
                            a = 0;
                        return (
                            'detail' in e && (s = e.detail),
                            'wheelDelta' in e && (s = -e.wheelDelta / 120),
                            'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
                            'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                            'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
                            (i = 10 * t),
                            (a = 10 * s),
                            'deltaY' in e && (a = e.deltaY),
                            'deltaX' in e && (i = e.deltaX),
                            e.shiftKey && !i && ((i = a), (a = 0)),
                            (i || a) &&
                                e.deltaMode &&
                                (1 === e.deltaMode ? ((i *= 40), (a *= 40)) : ((i *= 800), (a *= 800))),
                            i && !t && (t = i < 1 ? -1 : 1),
                            a && !s && (s = a < 1 ? -1 : 1),
                            { spinX: t, spinY: s, pixelX: i, pixelY: a }
                        );
                    })(s);
                if (n.forceToAxis)
                    if (t.isHorizontal()) {
                        if (!(Math.abs(v.pixelX) > Math.abs(v.pixelY))) return !0;
                        m = -v.pixelX * f;
                    } else {
                        if (!(Math.abs(v.pixelY) > Math.abs(v.pixelX))) return !0;
                        m = -v.pixelY;
                    }
                else m = Math.abs(v.pixelX) > Math.abs(v.pixelY) ? -v.pixelX * f : -v.pixelY;
                if (0 === m) return !0;
                n.invert && (m = -m);
                let g = t.getTranslate() + m * n.sensitivity;
                if (
                    (g >= t.minTranslate() && (g = t.minTranslate()),
                    g <= t.maxTranslate() && (g = t.maxTranslate()),
                    (i = !!t.params.loop || !(g === t.minTranslate() || g === t.maxTranslate())),
                    i && t.params.nested && s.stopPropagation(),
                    t.params.freeMode && t.params.freeMode.enabled)
                ) {
                    const e = { time: l(), delta: Math.abs(m), direction: Math.sign(m) },
                        i = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                    if (!i) {
                        c = void 0;
                        let l = t.getTranslate() + m * n.sensitivity;
                        const o = t.isBeginning,
                            p = t.isEnd;
                        if (
                            (l >= t.minTranslate() && (l = t.minTranslate()),
                            l <= t.maxTranslate() && (l = t.maxTranslate()),
                            t.setTransition(0),
                            t.setTranslate(l),
                            t.updateProgress(),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses(),
                            ((!o && t.isBeginning) || (!p && t.isEnd)) && t.updateSlidesClasses(),
                            t.params.loop &&
                                t.loopFix({ direction: e.direction < 0 ? 'next' : 'prev', byMousewheel: !0 }),
                            t.params.freeMode.sticky)
                        ) {
                            clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
                            const s = u.length ? u[u.length - 1] : void 0,
                                i = u[0];
                            if ((u.push(e), s && (e.delta > s.delta || e.direction !== s.direction))) u.splice(0);
                            else if (
                                u.length >= 15 &&
                                e.time - i.time < 500 &&
                                i.delta - e.delta >= 1 &&
                                e.delta <= 6
                            ) {
                                const s = m > 0 ? 0.8 : 0.2;
                                (c = e),
                                    u.splice(0),
                                    (d = r(() => {
                                        t.slideToClosest(t.params.speed, !0, void 0, s);
                                    }, 0));
                            }
                            d ||
                                (d = r(() => {
                                    (c = e), u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                                }, 500));
                        }
                        if (
                            (i || a('scroll', s),
                            t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                            l === t.minTranslate() || l === t.maxTranslate())
                        )
                            return !0;
                    }
                } else {
                    const s = { time: l(), delta: Math.abs(m), direction: Math.sign(m), raw: e };
                    u.length >= 2 && u.shift();
                    const i = u.length ? u[u.length - 1] : void 0;
                    if (
                        (u.push(s),
                        i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && h(s) : h(s),
                        (function (e) {
                            const s = t.params.mousewheel;
                            if (e.direction < 0) {
                                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                            } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                            return !1;
                        })(s))
                    )
                        return !0;
                }
                return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
            }
            function g(e) {
                let s = t.el;
                'container' !== t.params.mousewheel.eventsTarget &&
                    (s = document.querySelector(t.params.mousewheel.eventsTarget)),
                    s[e]('mouseenter', m),
                    s[e]('mouseleave', f),
                    s[e]('wheel', v);
            }
            function b() {
                return t.params.cssMode
                    ? (t.wrapperEl.removeEventListener('wheel', v), !0)
                    : !t.mousewheel.enabled && (g('addEventListener'), (t.mousewheel.enabled = !0), !0);
            }
            function w() {
                return t.params.cssMode
                    ? (t.wrapperEl.addEventListener(event, v), !0)
                    : !!t.mousewheel.enabled && (g('removeEventListener'), (t.mousewheel.enabled = !1), !0);
            }
            i('init', () => {
                !t.params.mousewheel.enabled && t.params.cssMode && w(), t.params.mousewheel.enabled && b();
            }),
                i('destroy', () => {
                    t.params.cssMode && b(), t.mousewheel.enabled && w();
                }),
                Object.assign(t.mousewheel, { enable: b, disable: w });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i, emit: a } = e;
            s({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden',
                    lockClass: 'swiper-button-lock',
                    navigationDisabledClass: 'swiper-navigation-disabled',
                },
            }),
                (t.navigation = { nextEl: null, prevEl: null });
            const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
            function r(e) {
                let s;
                return e && 'string' == typeof e && t.isElement && ((s = t.el.shadowRoot.querySelector(e)), s)
                    ? s
                    : (e &&
                          ('string' == typeof e && (s = [...document.querySelectorAll(e)]),
                          t.params.uniqueNavElements &&
                              'string' == typeof e &&
                              s.length > 1 &&
                              1 === t.el.querySelectorAll(e).length &&
                              (s = t.el.querySelector(e))),
                      e && !s ? e : s);
            }
            function l(e, s) {
                const i = t.params.navigation;
                (e = n(e)).forEach((e) => {
                    e &&
                        (e.classList[s ? 'add' : 'remove'](...i.disabledClass.split(' ')),
                        'BUTTON' === e.tagName && (e.disabled = s),
                        t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? 'add' : 'remove'](i.lockClass));
                });
            }
            function o() {
                const { nextEl: e, prevEl: s } = t.navigation;
                if (t.params.loop) return l(s, !1), void l(e, !1);
                l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind);
            }
            function d(e) {
                e.preventDefault(),
                    (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a('navigationPrev'));
            }
            function c(e) {
                e.preventDefault(),
                    (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a('navigationNext'));
            }
            function p() {
                const e = t.params.navigation;
                if (
                    ((t.params.navigation = Z(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: 'swiper-button-next',
                        prevEl: 'swiper-button-prev',
                    })),
                    !e.nextEl && !e.prevEl)
                )
                    return;
                let s = r(e.nextEl),
                    i = r(e.prevEl);
                Object.assign(t.navigation, { nextEl: s, prevEl: i }), (s = n(s)), (i = n(i));
                const a = (s, i) => {
                    s && s.addEventListener('click', 'next' === i ? c : d),
                        !t.enabled && s && s.classList.add(...e.lockClass.split(' '));
                };
                s.forEach((e) => a(e, 'next')), i.forEach((e) => a(e, 'prev'));
            }
            function u() {
                let { nextEl: e, prevEl: s } = t.navigation;
                (e = n(e)), (s = n(s));
                const i = (e, s) => {
                    e.removeEventListener('click', 'next' === s ? c : d),
                        e.classList.remove(...t.params.navigation.disabledClass.split(' '));
                };
                e.forEach((e) => i(e, 'next')), s.forEach((e) => i(e, 'prev'));
            }
            i('init', () => {
                !1 === t.params.navigation.enabled ? m() : (p(), o());
            }),
                i('toEdge fromEdge lock unlock', () => {
                    o();
                }),
                i('destroy', () => {
                    u();
                }),
                i('enable disable', () => {
                    let { nextEl: e, prevEl: s } = t.navigation;
                    (e = n(e)),
                        (s = n(s)),
                        [...e, ...s]
                            .filter((e) => !!e)
                            .forEach((e) => e.classList[t.enabled ? 'remove' : 'add'](t.params.navigation.lockClass));
                }),
                i('click', (e, s) => {
                    let { nextEl: i, prevEl: r } = t.navigation;
                    (i = n(i)), (r = n(r));
                    const l = s.target;
                    if (t.params.navigation.hideOnClick && !r.includes(l) && !i.includes(l)) {
                        if (
                            t.pagination &&
                            t.params.pagination &&
                            t.params.pagination.clickable &&
                            (t.pagination.el === l || t.pagination.el.contains(l))
                        )
                            return;
                        let e;
                        i.length
                            ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
                            : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)),
                            a(!0 === e ? 'navigationShow' : 'navigationHide'),
                            [...i, ...r]
                                .filter((e) => !!e)
                                .forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
                    }
                });
            const m = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), u();
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')), p(), o();
                },
                disable: m,
                update: o,
                init: p,
                destroy: u,
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i, emit: a } = e;
            const n = 'swiper-pagination';
            let r;
            s({
                pagination: {
                    el: null,
                    bulletElement: 'span',
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: 'bullets',
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (e) => e,
                    formatFractionTotal: (e) => e,
                    bulletClass: `${n}-bullet`,
                    bulletActiveClass: `${n}-bullet-active`,
                    modifierClass: `${n}-`,
                    currentClass: `${n}-current`,
                    totalClass: `${n}-total`,
                    hiddenClass: `${n}-hidden`,
                    progressbarFillClass: `${n}-progressbar-fill`,
                    progressbarOppositeClass: `${n}-progressbar-opposite`,
                    clickableClass: `${n}-clickable`,
                    lockClass: `${n}-lock`,
                    horizontalClass: `${n}-horizontal`,
                    verticalClass: `${n}-vertical`,
                    paginationDisabledClass: `${n}-disabled`,
                },
            }),
                (t.pagination = { el: null, bullets: [] });
            let l = 0;
            const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
            function d() {
                return (
                    !t.params.pagination.el ||
                    !t.pagination.el ||
                    (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
                );
            }
            function c(e, s) {
                const { bulletActiveClass: i } = t.params.pagination;
                e &&
                    (e = e[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
                    (e.classList.add(`${i}-${s}`),
                    (e = e[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
                        e.classList.add(`${i}-${s}-${s}`));
            }
            function p(e) {
                const s = e.target.closest(J(t.params.pagination.bulletClass));
                if (!s) return;
                e.preventDefault();
                const i = g(s) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === i) return;
                    const e = t.getSlideIndexByData(i),
                        s = t.getSlideIndexByData(t.realIndex);
                    e > t.slides.length - t.loopedSlides &&
                        t.loopFix({ direction: e > s ? 'next' : 'prev', activeSlideIndex: e, slideTo: !1 }),
                        t.slideToLoop(i);
                } else t.slideTo(i);
            }
            function u() {
                const e = t.rtl,
                    s = t.params.pagination;
                if (d()) return;
                let i,
                    n,
                    p = t.pagination.el;
                p = o(p);
                const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
                if (
                    (t.params.loop
                        ? ((n = t.previousRealIndex || 0),
                          (i =
                              t.params.slidesPerGroup > 1
                                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                                  : t.realIndex))
                        : void 0 !== t.snapIndex
                        ? ((i = t.snapIndex), (n = t.previousSnapIndex))
                        : ((n = t.previousIndex || 0), (i = t.activeIndex || 0)),
                    'bullets' === s.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                ) {
                    const a = t.pagination.bullets;
                    let o, d, u;
                    if (
                        (s.dynamicBullets &&
                            ((r = w(a[0], t.isHorizontal() ? 'width' : 'height', !0)),
                            p.forEach((e) => {
                                e.style[t.isHorizontal() ? 'width' : 'height'] = r * (s.dynamicMainBullets + 4) + 'px';
                            }),
                            s.dynamicMainBullets > 1 &&
                                void 0 !== n &&
                                ((l += i - (n || 0)),
                                l > s.dynamicMainBullets - 1 ? (l = s.dynamicMainBullets - 1) : l < 0 && (l = 0)),
                            (o = Math.max(i - l, 0)),
                            (d = o + (Math.min(a.length, s.dynamicMainBullets) - 1)),
                            (u = (d + o) / 2)),
                        a.forEach((e) => {
                            const t = [
                                ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
                                    (e) => `${s.bulletActiveClass}${e}`
                                ),
                            ]
                                .map((e) => ('string' == typeof e && e.includes(' ') ? e.split(' ') : e))
                                .flat();
                            e.classList.remove(...t);
                        }),
                        p.length > 1)
                    )
                        a.forEach((e) => {
                            const t = g(e);
                            t === i && e.classList.add(...s.bulletActiveClass.split(' ')),
                                s.dynamicBullets &&
                                    (t >= o && t <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(' ')),
                                    t === o && c(e, 'prev'),
                                    t === d && c(e, 'next'));
                        });
                    else {
                        const e = a[i];
                        if ((e && e.classList.add(...s.bulletActiveClass.split(' ')), s.dynamicBullets)) {
                            const e = a[o],
                                t = a[d];
                            for (let e = o; e <= d; e += 1)
                                a[e] && a[e].classList.add(...`${s.bulletActiveClass}-main`.split(' '));
                            c(e, 'prev'), c(t, 'next');
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(a.length, s.dynamicMainBullets + 4),
                            n = (r * i - r) / 2 - u * r,
                            l = e ? 'right' : 'left';
                        a.forEach((e) => {
                            e.style[t.isHorizontal() ? l : 'top'] = `${n}px`;
                        });
                    }
                }
                p.forEach((e, n) => {
                    if (
                        ('fraction' === s.type &&
                            (e.querySelectorAll(J(s.currentClass)).forEach((e) => {
                                e.textContent = s.formatFractionCurrent(i + 1);
                            }),
                            e.querySelectorAll(J(s.totalClass)).forEach((e) => {
                                e.textContent = s.formatFractionTotal(m);
                            })),
                        'progressbar' === s.type)
                    ) {
                        let a;
                        a = s.progressbarOpposite
                            ? t.isHorizontal()
                                ? 'vertical'
                                : 'horizontal'
                            : t.isHorizontal()
                            ? 'horizontal'
                            : 'vertical';
                        const n = (i + 1) / m;
                        let r = 1,
                            l = 1;
                        'horizontal' === a ? (r = n) : (l = n),
                            e.querySelectorAll(J(s.progressbarFillClass)).forEach((e) => {
                                (e.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${l})`),
                                    (e.style.transitionDuration = `${t.params.speed}ms`);
                            });
                    }
                    'custom' === s.type && s.renderCustom
                        ? ((e.innerHTML = s.renderCustom(t, i + 1, m)), 0 === n && a('paginationRender', e))
                        : (0 === n && a('paginationRender', e), a('paginationUpdate', e)),
                        t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? 'add' : 'remove'](s.lockClass);
                });
            }
            function m() {
                const e = t.params.pagination;
                if (d()) return;
                const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
                let i = t.pagination.el;
                i = o(i);
                let n = '';
                if ('bullets' === e.type) {
                    let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
                    for (let s = 0; s < i; s += 1)
                        e.renderBullet
                            ? (n += e.renderBullet.call(t, s, e.bulletClass))
                            : (n += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
                }
                'fraction' === e.type &&
                    (n = e.renderFraction
                        ? e.renderFraction.call(t, e.currentClass, e.totalClass)
                        : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
                    'progressbar' === e.type &&
                        (n = e.renderProgressbar
                            ? e.renderProgressbar.call(t, e.progressbarFillClass)
                            : `<span class="${e.progressbarFillClass}"></span>`),
                    (t.pagination.bullets = []),
                    i.forEach((s) => {
                        'custom' !== e.type && (s.innerHTML = n || ''),
                            'bullets' === e.type && t.pagination.bullets.push(...s.querySelectorAll(J(e.bulletClass)));
                    }),
                    'custom' !== e.type && a('paginationRender', i[0]);
            }
            function f() {
                t.params.pagination = Z(t, t.originalParams.pagination, t.params.pagination, {
                    el: 'swiper-pagination',
                });
                const e = t.params.pagination;
                if (!e.el) return;
                let s;
                'string' == typeof e.el && t.isElement && (s = t.el.shadowRoot.querySelector(e.el)),
                    s || 'string' != typeof e.el || (s = [...document.querySelectorAll(e.el)]),
                    s || (s = e.el),
                    s &&
                        0 !== s.length &&
                        (t.params.uniqueNavElements &&
                            'string' == typeof e.el &&
                            Array.isArray(s) &&
                            s.length > 1 &&
                            ((s = [...t.el.querySelectorAll(e.el)]),
                            s.length > 1 && (s = s.filter((e) => b(e, '.swiper')[0] === t.el)[0])),
                        Array.isArray(s) && 1 === s.length && (s = s[0]),
                        Object.assign(t.pagination, { el: s }),
                        (s = o(s)),
                        s.forEach((s) => {
                            'bullets' === e.type && e.clickable && s.classList.add(e.clickableClass),
                                s.classList.add(e.modifierClass + e.type),
                                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                                'bullets' === e.type &&
                                    e.dynamicBullets &&
                                    (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                                    (l = 0),
                                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                                'progressbar' === e.type &&
                                    e.progressbarOpposite &&
                                    s.classList.add(e.progressbarOppositeClass),
                                e.clickable && s.addEventListener('click', p),
                                t.enabled || s.classList.add(e.lockClass);
                        }));
            }
            function h() {
                const e = t.params.pagination;
                if (d()) return;
                let s = t.pagination.el;
                s &&
                    ((s = o(s)),
                    s.forEach((s) => {
                        s.classList.remove(e.hiddenClass),
                            s.classList.remove(e.modifierClass + e.type),
                            s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                            e.clickable && s.removeEventListener('click', p);
                    })),
                    t.pagination.bullets &&
                        t.pagination.bullets.forEach((t) => t.classList.remove(...e.bulletActiveClass.split(' ')));
            }
            i('changeDirection', () => {
                if (!t.pagination || !t.pagination.el) return;
                const e = t.params.pagination;
                let { el: s } = t.pagination;
                (s = o(s)),
                    s.forEach((s) => {
                        s.classList.remove(e.horizontalClass, e.verticalClass),
                            s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
                    });
            }),
                i('init', () => {
                    !1 === t.params.pagination.enabled ? v() : (f(), m(), u());
                }),
                i('activeIndexChange', () => {
                    void 0 === t.snapIndex && u();
                }),
                i('snapIndexChange', () => {
                    u();
                }),
                i('snapGridLengthChange', () => {
                    m(), u();
                }),
                i('destroy', () => {
                    h();
                }),
                i('enable disable', () => {
                    let { el: e } = t.pagination;
                    e &&
                        ((e = o(e)),
                        e.forEach((e) => e.classList[t.enabled ? 'remove' : 'add'](t.params.pagination.lockClass)));
                }),
                i('lock unlock', () => {
                    u();
                }),
                i('click', (e, s) => {
                    const i = s.target;
                    let { el: n } = t.pagination;
                    if (
                        (Array.isArray(n) || (n = [n].filter((e) => !!e)),
                        t.params.pagination.el &&
                            t.params.pagination.hideOnClick &&
                            n &&
                            n.length > 0 &&
                            !i.classList.contains(t.params.pagination.bulletClass))
                    ) {
                        if (
                            t.navigation &&
                            ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                                (t.navigation.prevEl && i === t.navigation.prevEl))
                        )
                            return;
                        const e = n[0].classList.contains(t.params.pagination.hiddenClass);
                        a(!0 === e ? 'paginationShow' : 'paginationHide'),
                            n.forEach((e) => e.classList.toggle(t.params.pagination.hiddenClass));
                    }
                });
            const v = () => {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let { el: e } = t.pagination;
                e && ((e = o(e)), e.forEach((e) => e.classList.add(t.params.pagination.paginationDisabledClass))), h();
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let { el: e } = t.pagination;
                    e &&
                        ((e = o(e)), e.forEach((e) => e.classList.remove(t.params.pagination.paginationDisabledClass))),
                        f(),
                        m(),
                        u();
                },
                disable: v,
                render: m,
                update: u,
                init: f,
                destroy: h,
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i } = e;
            function a(e, t) {
                const s = (function () {
                    let e, t, s;
                    return (i, a) => {
                        for (t = -1, e = i.length; e - t > 1; ) (s = (e + t) >> 1), i[s] <= a ? (t = s) : (e = s);
                        return e;
                    };
                })();
                let i, a;
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e
                            ? ((a = s(this.x, e)),
                              (i = a - 1),
                              ((e - this.x[i]) * (this.y[a] - this.y[i])) / (this.x[a] - this.x[i]) + this.y[i])
                            : 0;
                    }),
                    this
                );
            }
            function n() {
                t.controller.control &&
                    t.controller.spline &&
                    ((t.controller.spline = void 0), delete t.controller.spline);
            }
            s({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
                (t.controller = { control: void 0 }),
                i('beforeInit', () => {
                    if (
                        'undefined' != typeof window &&
                        ('string' == typeof t.params.controller.control ||
                            t.params.controller.control instanceof HTMLElement)
                    ) {
                        const e = document.querySelector(t.params.controller.control);
                        if (e && e.swiper) t.controller.control = e.swiper;
                        else if (e) {
                            const s = (i) => {
                                (t.controller.control = i.detail[0]), t.update(), e.removeEventListener('init', s);
                            };
                            e.addEventListener('init', s);
                        }
                    } else t.controller.control = t.params.controller.control;
                }),
                i('update', () => {
                    n();
                }),
                i('resize', () => {
                    n();
                }),
                i('observerUpdate', () => {
                    n();
                }),
                i('setTranslate', (e, s, i) => {
                    t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, i);
                }),
                i('setTransition', (e, s, i) => {
                    t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, i);
                }),
                Object.assign(t.controller, {
                    setTranslate: function (e, s) {
                        const i = t.controller.control;
                        let n, r;
                        const l = t.constructor;
                        function o(e) {
                            if (e.destroyed) return;
                            const s = t.rtlTranslate ? -t.translate : t.translate;
                            'slide' === t.params.controller.by &&
                                (!(function (e) {
                                    t.controller.spline = t.params.loop
                                        ? new a(t.slidesGrid, e.slidesGrid)
                                        : new a(t.snapGrid, e.snapGrid);
                                })(e),
                                (r = -t.controller.spline.interpolate(-s))),
                                (r && 'container' !== t.params.controller.by) ||
                                    ((n =
                                        (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())),
                                    (!Number.isNaN(n) && Number.isFinite(n)) || (n = 1),
                                    (r = (s - t.minTranslate()) * n + e.minTranslate())),
                                t.params.controller.inverse && (r = e.maxTranslate() - r),
                                e.updateProgress(r),
                                e.setTranslate(r, t),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses();
                        }
                        if (Array.isArray(i))
                            for (let e = 0; e < i.length; e += 1) i[e] !== s && i[e] instanceof l && o(i[e]);
                        else i instanceof l && s !== i && o(i);
                    },
                    setTransition: function (e, s) {
                        const i = t.constructor,
                            a = t.controller.control;
                        let n;
                        function l(s) {
                            var i, n;
                            s.destroyed ||
                                (s.setTransition(e, t),
                                0 !== e &&
                                    (s.transitionStart(),
                                    s.params.autoHeight &&
                                        r(() => {
                                            s.updateAutoHeight();
                                        }),
                                    (i = s.wrapperEl),
                                    (n = () => {
                                        a && s.transitionEnd();
                                    }) &&
                                        i.addEventListener('transitionend', function e(t) {
                                            t.target === i && (n.call(i, t), i.removeEventListener('transitionend', e));
                                        })));
                        }
                        if (Array.isArray(a))
                            for (n = 0; n < a.length; n += 1) a[n] !== s && a[n] instanceof i && l(a[n]);
                        else a instanceof i && s !== a && l(a);
                    },
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i } = e;
            s({
                a11y: {
                    enabled: !0,
                    notificationClass: 'swiper-notification',
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    firstSlideMessage: 'This is the first slide',
                    lastSlideMessage: 'This is the last slide',
                    paginationBulletMessage: 'Go to slide {{index}}',
                    slideLabelMessage: '{{index}} / {{slidesLength}}',
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: 'group',
                    id: null,
                },
            }),
                (t.a11y = { clicked: !1 });
            let a = null;
            function n(e) {
                const t = a;
                0 !== t.length && ((t.innerHTML = ''), (t.innerHTML = e));
            }
            const r = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
            function l(e) {
                (e = r(e)).forEach((e) => {
                    e.setAttribute('tabIndex', '0');
                });
            }
            function o(e) {
                (e = r(e)).forEach((e) => {
                    e.setAttribute('tabIndex', '-1');
                });
            }
            function d(e, t) {
                (e = r(e)).forEach((e) => {
                    e.setAttribute('role', t);
                });
            }
            function c(e, t) {
                (e = r(e)).forEach((e) => {
                    e.setAttribute('aria-roledescription', t);
                });
            }
            function p(e, t) {
                (e = r(e)).forEach((e) => {
                    e.setAttribute('aria-label', t);
                });
            }
            function u(e) {
                (e = r(e)).forEach((e) => {
                    e.setAttribute('aria-disabled', !0);
                });
            }
            function m(e) {
                (e = r(e)).forEach((e) => {
                    e.setAttribute('aria-disabled', !1);
                });
            }
            function f(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const s = t.params.a11y,
                    i = e.target;
                (t.pagination &&
                    t.pagination.el &&
                    (i === t.pagination.el || t.pagination.el.contains(e.target)) &&
                    !e.target.matches(J(t.params.pagination.bulletClass))) ||
                    (t.navigation &&
                        t.navigation.nextEl &&
                        i === t.navigation.nextEl &&
                        ((t.isEnd && !t.params.loop) || t.slideNext(),
                        t.isEnd ? n(s.lastSlideMessage) : n(s.nextSlideMessage)),
                    t.navigation &&
                        t.navigation.prevEl &&
                        i === t.navigation.prevEl &&
                        ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                        t.isBeginning ? n(s.firstSlideMessage) : n(s.prevSlideMessage)),
                    t.pagination && i.matches(J(t.params.pagination.bulletClass)) && i.click());
            }
            function v() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
            }
            function b() {
                return v() && t.params.pagination.clickable;
            }
            const w = (e, t, s) => {
                    l(e),
                        'BUTTON' !== e.tagName && (d(e, 'button'), e.addEventListener('keydown', f)),
                        p(e, s),
                        (function (e, t) {
                            (e = r(e)).forEach((e) => {
                                e.setAttribute('aria-controls', t);
                            });
                        })(e, t);
                },
                y = () => {
                    t.a11y.clicked = !0;
                },
                T = () => {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            t.destroyed || (t.a11y.clicked = !1);
                        });
                    });
                },
                S = (e) => {
                    if (t.a11y.clicked) return;
                    const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                    if (!s || !t.slides.includes(s)) return;
                    const i = t.slides.indexOf(s) === t.activeIndex,
                        a = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                    i ||
                        a ||
                        (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
                        (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
                        t.slideTo(t.slides.indexOf(s), 0));
                },
                E = () => {
                    const e = t.params.a11y;
                    e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage),
                        e.slideRole && d(t.slides, e.slideRole);
                    const s = t.slides.length;
                    e.slideLabelMessage &&
                        t.slides.forEach((i, a) => {
                            const n = t.params.loop ? parseInt(i.getAttribute('data-swiper-slide-index'), 10) : a;
                            p(
                                i,
                                e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s)
                            );
                        });
                },
                x = () => {
                    const e = t.params.a11y;
                    t.isElement ? t.el.shadowEl.append(a) : t.el.append(a);
                    const s = t.el;
                    e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
                        e.containerMessage && p(s, e.containerMessage);
                    const i = t.wrapperEl,
                        n =
                            e.id ||
                            i.getAttribute('id') ||
                            `swiper-wrapper-${
                                ((l = 16),
                                void 0 === l && (l = 16),
                                'x'.repeat(l).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))
                            }`;
                    var l;
                    const o = t.params.autoplay && t.params.autoplay.enabled ? 'off' : 'polite';
                    var d;
                    (d = n),
                        r(i).forEach((e) => {
                            e.setAttribute('id', d);
                        }),
                        (function (e, t) {
                            (e = r(e)).forEach((e) => {
                                e.setAttribute('aria-live', t);
                            });
                        })(i, o),
                        E();
                    let { nextEl: u, prevEl: m } = t.navigation ? t.navigation : {};
                    if (
                        ((u = r(u)),
                        (m = r(m)),
                        u && u.forEach((t) => w(t, n, e.nextSlideMessage)),
                        m && m.forEach((t) => w(t, n, e.prevSlideMessage)),
                        b())
                    ) {
                        (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e) => {
                            e.addEventListener('keydown', f);
                        });
                    }
                    t.el.addEventListener('focus', S, !0),
                        t.el.addEventListener('pointerdown', y, !0),
                        t.el.addEventListener('pointerup', T, !0);
                };
            i('beforeInit', () => {
                (a = h('span', t.params.a11y.notificationClass)),
                    a.setAttribute('aria-live', 'assertive'),
                    a.setAttribute('aria-atomic', 'true');
            }),
                i('afterInit', () => {
                    t.params.a11y.enabled && x();
                }),
                i('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
                    t.params.a11y.enabled && E();
                }),
                i('fromEdge toEdge afterInit lock unlock', () => {
                    t.params.a11y.enabled &&
                        (function () {
                            if (t.params.loop || t.params.rewind || !t.navigation) return;
                            const { nextEl: e, prevEl: s } = t.navigation;
                            s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))),
                                e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
                        })();
                }),
                i('paginationUpdate', () => {
                    t.params.a11y.enabled &&
                        (function () {
                            const e = t.params.a11y;
                            v() &&
                                t.pagination.bullets.forEach((s) => {
                                    t.params.pagination.clickable &&
                                        (l(s),
                                        t.params.pagination.renderBullet ||
                                            (d(s, 'button'),
                                            p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, g(s) + 1)))),
                                        s.matches(J(t.params.pagination.bulletActiveClass))
                                            ? s.setAttribute('aria-current', 'true')
                                            : s.removeAttribute('aria-current');
                                });
                        })();
                }),
                i('destroy', () => {
                    t.params.a11y.enabled &&
                        (function () {
                            a && a.remove();
                            let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
                            (e = r(e)),
                                (s = r(s)),
                                e && e.forEach((e) => e.removeEventListener('keydown', f)),
                                s && s.forEach((e) => e.removeEventListener('keydown', f)),
                                b() &&
                                    (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach(
                                        (e) => {
                                            e.removeEventListener('keydown', f);
                                        }
                                    );
                            t.el.removeEventListener('focus', S, !0),
                                t.el.removeEventListener('pointerdown', y, !0),
                                t.el.removeEventListener('pointerup', T, !0);
                        })();
                });
        },
        function (e) {
            let t,
                s,
                { swiper: a, extendParams: n, on: r, emit: l, params: o } = e;
            (a.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
                n({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1,
                    },
                });
            let d,
                c,
                p,
                u,
                m,
                f,
                h,
                v = o && o.autoplay ? o.autoplay.delay : 3e3,
                g = o && o.autoplay ? o.autoplay.delay : 3e3,
                b = new Date().getTime;
            function w(e) {
                a &&
                    !a.destroyed &&
                    a.wrapperEl &&
                    e.target === a.wrapperEl &&
                    (a.wrapperEl.removeEventListener('transitionend', w), C());
            }
            const y = () => {
                    if (a.destroyed || !a.autoplay.running) return;
                    a.autoplay.paused ? (c = !0) : c && ((g = d), (c = !1));
                    const e = a.autoplay.paused ? d : b + g - new Date().getTime();
                    (a.autoplay.timeLeft = e),
                        l('autoplayTimeLeft', e, e / v),
                        (s = requestAnimationFrame(() => {
                            y();
                        }));
                },
                T = (e) => {
                    if (a.destroyed || !a.autoplay.running) return;
                    cancelAnimationFrame(s), y();
                    let i = void 0 === e ? a.params.autoplay.delay : e;
                    (v = a.params.autoplay.delay), (g = a.params.autoplay.delay);
                    const n = (() => {
                        let e;
                        if (
                            ((e =
                                a.virtual && a.params.virtual.enabled
                                    ? a.slides.filter((e) => e.classList.contains('swiper-slide-active'))[0]
                                    : a.slides[a.activeIndex]),
                            !e)
                        )
                            return;
                        return parseInt(e.getAttribute('data-swiper-autoplay'), 10);
                    })();
                    !Number.isNaN(n) && n > 0 && void 0 === e && ((i = n), (v = n), (g = n)), (d = i);
                    const r = a.params.speed,
                        o = () => {
                            a &&
                                !a.destroyed &&
                                (a.params.autoplay.reverseDirection
                                    ? !a.isBeginning || a.params.loop || a.params.rewind
                                        ? (a.slidePrev(r, !0, !0), l('autoplay'))
                                        : a.params.autoplay.stopOnLastSlide ||
                                          (a.slideTo(a.slides.length - 1, r, !0, !0), l('autoplay'))
                                    : !a.isEnd || a.params.loop || a.params.rewind
                                    ? (a.slideNext(r, !0, !0), l('autoplay'))
                                    : a.params.autoplay.stopOnLastSlide || (a.slideTo(0, r, !0, !0), l('autoplay')),
                                a.params.cssMode &&
                                    ((b = new Date().getTime()),
                                    requestAnimationFrame(() => {
                                        T();
                                    })));
                        };
                    return (
                        i > 0
                            ? (clearTimeout(t),
                              (t = setTimeout(() => {
                                  o();
                              }, i)))
                            : requestAnimationFrame(() => {
                                  o();
                              }),
                        i
                    );
                },
                S = () => {
                    (a.autoplay.running = !0), T(), l('autoplayStart');
                },
                E = () => {
                    (a.autoplay.running = !1), clearTimeout(t), cancelAnimationFrame(s), l('autoplayStop');
                },
                x = (e, s) => {
                    if (a.destroyed || !a.autoplay.running) return;
                    clearTimeout(t), e || (h = !0);
                    const i = () => {
                        l('autoplayPause'),
                            a.params.autoplay.waitForTransition
                                ? a.wrapperEl.addEventListener('transitionend', w)
                                : C();
                    };
                    if (((a.autoplay.paused = !0), s)) return f && (d = a.params.autoplay.delay), (f = !1), void i();
                    const n = d || a.params.autoplay.delay;
                    (d = n - (new Date().getTime() - b)),
                        (a.isEnd && d < 0 && !a.params.loop) || (d < 0 && (d = 0), i());
                },
                C = () => {
                    (a.isEnd && d < 0 && !a.params.loop) ||
                        a.destroyed ||
                        !a.autoplay.running ||
                        ((b = new Date().getTime()),
                        h ? ((h = !1), T(d)) : T(),
                        (a.autoplay.paused = !1),
                        l('autoplayResume'));
                },
                M = () => {
                    if (a.destroyed || !a.autoplay.running) return;
                    const e = i();
                    'hidden' === e.visibilityState && ((h = !0), x(!0)), 'visible' === e.visibilityState && C();
                },
                L = (e) => {
                    'mouse' === e.pointerType && ((h = !0), x(!0));
                },
                P = (e) => {
                    'mouse' === e.pointerType && a.autoplay.paused && C();
                };
            r('init', () => {
                a.params.autoplay.enabled &&
                    (a.params.autoplay.pauseOnMouseEnter &&
                        (a.el.addEventListener('pointerenter', L), a.el.addEventListener('pointerleave', P)),
                    i().addEventListener('visibilitychange', M),
                    (b = new Date().getTime()),
                    S());
            }),
                r('destroy', () => {
                    a.el.removeEventListener('pointerenter', L),
                        a.el.removeEventListener('pointerleave', P),
                        i().removeEventListener('visibilitychange', M),
                        a.autoplay.running && E();
                }),
                r('beforeTransitionStart', (e, t, s) => {
                    !a.destroyed &&
                        a.autoplay.running &&
                        (s || !a.params.autoplay.disableOnInteraction ? x(!0, !0) : E());
                }),
                r('sliderFirstMove', () => {
                    !a.destroyed &&
                        a.autoplay.running &&
                        (a.params.autoplay.disableOnInteraction
                            ? E()
                            : ((p = !0),
                              (u = !1),
                              (h = !1),
                              (m = setTimeout(() => {
                                  (h = !0), (u = !0), x(!0);
                              }, 200))));
                }),
                r('touchEnd', () => {
                    if (!a.destroyed && a.autoplay.running && p) {
                        if ((clearTimeout(m), clearTimeout(t), a.params.autoplay.disableOnInteraction))
                            return (u = !1), void (p = !1);
                        u && a.params.cssMode && C(), (u = !1), (p = !1);
                    }
                }),
                r('slideChange', () => {
                    !a.destroyed && a.autoplay.running && (f = !0);
                }),
                Object.assign(a.autoplay, { start: S, stop: E, pause: x, resume: C });
        },
        function (e) {
            let { swiper: t } = e;
            Object.assign(t, {
                appendSlide: Q.bind(t),
                prependSlide: ee.bind(t),
                addSlide: te.bind(t),
                removeSlide: se.bind(t),
                removeAllSlides: ie.bind(t),
            });
        },
    ];
    return K.use(ae), K;
});
/*!
	enquire.js
	Copyright	Nick Williams
	License		MIT
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	Version		2.1.6

	https://github.com/WickyNilliams/enquire.js
*/
!(function (a) {
    if ('object' == typeof exports && 'undefined' != typeof module) module.exports = a();
    else if ('function' == typeof define && define.amd) define([], a);
    else {
        var b;
        (b =
            'undefined' != typeof window
                ? window
                : 'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                ? self
                : this),
            (b.enquire = a());
    }
})(function () {
    return (function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = 'function' == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw ((j.code = 'MODULE_NOT_FOUND'), j);
                }
                var k = (c[g] = { exports: {} });
                b[g][0].call(
                    k.exports,
                    function (a) {
                        var c = b[g][1][a];
                        return e(c ? c : a);
                    },
                    k,
                    k.exports,
                    a,
                    b,
                    c,
                    d
                );
            }
            return c[g].exports;
        }
        for (var f = 'function' == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e;
    })(
        {
            1: [
                function (a, b, c) {
                    function d(a, b) {
                        (this.query = a),
                            (this.isUnconditional = b),
                            (this.handlers = []),
                            (this.mql = window.matchMedia(a));
                        var c = this;
                        (this.listener = function (a) {
                            (c.mql = a.currentTarget || a), c.assess();
                        }),
                            this.mql.addListener(this.listener);
                    }
                    var e = a(3),
                        f = a(4).each;
                    (d.prototype = {
                        constuctor: d,
                        addHandler: function (a) {
                            var b = new e(a);
                            this.handlers.push(b), this.matches() && b.on();
                        },
                        removeHandler: function (a) {
                            var b = this.handlers;
                            f(b, function (c, d) {
                                if (c.equals(a)) return c.destroy(), !b.splice(d, 1);
                            });
                        },
                        matches: function () {
                            return this.mql.matches || this.isUnconditional;
                        },
                        clear: function () {
                            f(this.handlers, function (a) {
                                a.destroy();
                            }),
                                this.mql.removeListener(this.listener),
                                (this.handlers.length = 0);
                        },
                        assess: function () {
                            var a = this.matches() ? 'on' : 'off';
                            f(this.handlers, function (b) {
                                b[a]();
                            });
                        },
                    }),
                        (b.exports = d);
                },
                { 3: 3, 4: 4 },
            ],
            2: [
                function (a, b, c) {
                    function d() {
                        if (!window.matchMedia)
                            throw new Error('matchMedia not present, legacy browsers require a polyfill');
                        (this.queries = {}), (this.browserIsIncapable = !window.matchMedia('only all').matches);
                    }
                    var e = a(1),
                        f = a(4),
                        g = f.each,
                        h = f.isFunction,
                        i = f.isArray;
                    (d.prototype = {
                        constructor: d,
                        register: function (a, b, c) {
                            var d = this.queries,
                                f = c && this.browserIsIncapable;
                            return (
                                d[a] || (d[a] = new e(a, f)),
                                h(b) && (b = { match: b }),
                                i(b) || (b = [b]),
                                g(b, function (b) {
                                    h(b) && (b = { match: b }), d[a].addHandler(b);
                                }),
                                this
                            );
                        },
                        unregister: function (a, b) {
                            var c = this.queries[a];
                            return c && (b ? c.removeHandler(b) : (c.clear(), delete this.queries[a])), this;
                        },
                    }),
                        (b.exports = d);
                },
                { 1: 1, 4: 4 },
            ],
            3: [
                function (a, b, c) {
                    function d(a) {
                        (this.options = a), !a.deferSetup && this.setup();
                    }
                    (d.prototype = {
                        constructor: d,
                        setup: function () {
                            this.options.setup && this.options.setup(), (this.initialised = !0);
                        },
                        on: function () {
                            !this.initialised && this.setup(), this.options.match && this.options.match();
                        },
                        off: function () {
                            this.options.unmatch && this.options.unmatch();
                        },
                        destroy: function () {
                            this.options.destroy ? this.options.destroy() : this.off();
                        },
                        equals: function (a) {
                            return this.options === a || this.options.match === a;
                        },
                    }),
                        (b.exports = d);
                },
                {},
            ],
            4: [
                function (a, b, c) {
                    function d(a, b) {
                        var c = 0,
                            d = a.length;
                        for (c; c < d && b(a[c], c) !== !1; c++);
                    }
                    function e(a) {
                        return '[object Array]' === Object.prototype.toString.apply(a);
                    }
                    function f(a) {
                        return 'function' == typeof a;
                    }
                    b.exports = { isFunction: f, isArray: e, each: d };
                },
                {},
            ],
            5: [
                function (a, b, c) {
                    var d = a(2);
                    b.exports = new d();
                },
                { 2: 2 },
            ],
        },
        {},
        [5]
    )(5);
});
/*!
	js-cookie
	Copyright	Klaus Hartl, Fagner Brack, GitHub Contributors
	License		MIT
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	Version		3.0.5

	https://github.com/js-cookie/js-cookie
*/
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self),
          (function () {
              var n = e.Cookies,
                  o = (e.Cookies = t());
              o.noConflict = function () {
                  return (e.Cookies = n), o;
              };
          })());
})(this, function () {
    'use strict';
    function e(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) e[o] = n[o];
        }
        return e;
    }
    var t = (function t(n, o) {
        function r(t, r, i) {
            if ('undefined' != typeof document) {
                'number' == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                    i.expires && (i.expires = i.expires.toUTCString()),
                    (t = encodeURIComponent(t)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/[()]/g, escape));
                var c = '';
                for (var u in i) i[u] && ((c += '; ' + u), !0 !== i[u] && (c += '=' + i[u].split(';')[0]));
                return (document.cookie = t + '=' + n.write(r, t) + c);
            }
        }
        return Object.create(
            {
                set: r,
                get: function (e) {
                    if ('undefined' != typeof document && (!arguments.length || e)) {
                        for (
                            var t = document.cookie ? document.cookie.split('; ') : [], o = {}, r = 0;
                            r < t.length;
                            r++
                        ) {
                            var i = t[r].split('='),
                                c = i.slice(1).join('=');
                            try {
                                var u = decodeURIComponent(i[0]);
                                if (((o[u] = n.read(c, u)), e === u)) break;
                            } catch (e) {}
                        }
                        return e ? o[e] : o;
                    }
                },
                remove: function (t, n) {
                    r(t, '', e({}, n, { expires: -1 }));
                },
                withAttributes: function (n) {
                    return t(this.converter, e({}, this.attributes, n));
                },
                withConverter: function (n) {
                    return t(e({}, this.converter, n), this.attributes);
                },
            },
            { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(n) } }
        );
    })(
        {
            read: function (e) {
                return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
            },
            write: function (e) {
                return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
            },
        },
        { path: '/' }
    );
    return t;
});

// Ratings
function createRatingsHtmlElement(rating, total) {
    var ratingElem = createElementWithClass('span', 'rating');
    var split = rating.toString().split('.');
    var intRating = +split[0];
    var intDecimalRating = +split[1] || 0;
    for (var i = 1; i <= total; i++) {
        if (i <= intRating) {
            ratingElem.appendChild(createStarHtmlElement(100));
        } else if (intDecimalRating > 0) {
            var baseTenValue = (intDecimalRating + '0').substr(0, 2);
            ratingElem.appendChild(createStarHtmlElement(baseTenValue));
            intDecimalRating = 0;
        } else {
            ratingElem.appendChild(createStarHtmlElement(0));
        }
    }
    return ratingElem;
}

function createElementWithClass(tag, classList) {
    var tagElem = document.createElement(tag);
    if (!Array.isArray(classList)) {
        classList = [classList];
    }
    for (var i = 0; i < classList.length; i++) {
        tagElem.classList.add(classList[i]);
    }
    return tagElem;
}

function createStarHtmlElement(fillPercentage) {
    var star = createElementWithClass('span', 'star');
    var fill = createElementWithClass('span', 'fill');
    fill.style.setProperty('width', fillPercentage + '%');
    star.appendChild(fill);
    return star;
}
// Tabs
function semanticTabs(en) {
    'use strict';
    var tabs_header = en.children[0],
        tabs_header_items = tabs_header.querySelectorAll('li'),
        tabs_content = en.children[1],
        active_class = 'active',
        custom_active_class = '',
        classes;
    if (en.classList.contains('btn')) {
        active_class = 'link-btn';
    }
    if (en.getAttribute('data-active-class')) {
        custom_active_class = en.getAttribute('data-active-class');
    }
    Array.from(tabs_content.children).forEach(function (el, index) {
        if (el.classList.contains('tab-closed')) {
            classes = 'tabs-header';
        } else {
            classes = 'tabs-header toggle';
        }
        el.setAttribute('data-index', tabs_header_items.length - index);
        el.innerHTML =
            '<a href="./" class="' + classes + '">Tabs Header</a> <div class="tabs-inner">' + el.innerHTML + '</div>';
    });
    Array.from(tabs_content.querySelectorAll('.tabs-header')).forEach(function (el) {
        el.addEventListener('click', function (e) {
            el.classList.toggle('toggle');
            e.preventDefault();
        });
    });
    Array.from(tabs_header_items).forEach(function (el, index) {
        el.setAttribute('data-index', tabs_header_items.length - index);
        var d = el.dataset.index,
            alias = el.children[0].innerHTML;
        Array.from(tabs_content.querySelectorAll('[data-index="' + d + '"] .tabs-header')).forEach(function (el) {
            el.innerHTML = alias;
        });
        if (!en.classList.contains('static')) {
            Array.from(el.querySelectorAll('a')).forEach(function (el) {
                el.addEventListener('click', function (e) {
                    Array.from(tabs_header_items).forEach(function (el) {
                        el.classList.remove(active_class);
                        el.classList.remove(custom_active_class);
                        el.classList.remove('active');
                    });
                    el.parentElement.classList.add(active_class);
                    el.parentElement.classList.add(custom_active_class);
                    Array.from(tabs_content.children).forEach(function (el) {
                        el.classList.add('hidden');
                        if (el.matches('[data-index="' + d + '"]')) {
                            el.classList.remove('hidden');
                        }
                    });
                    e.preventDefault();
                });
            });
        }
    });
}
