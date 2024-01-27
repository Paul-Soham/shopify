/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

if(typeof lazySizes === 'undefined'){
	/*! lazysizes - v4.1.8 */
  !function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
  /*! ls.rias.min.ks - v4.1.8 */
  !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var onSale = false;
var soldOut = false;
var priceVaries = false;
var images = [];
var firstVariant = {};

// Override Settings
var bcSfFilterSettings = {
  general: {
    limit: bcSfFilterConfig.custom.products_per_page,
    /* Optional */
    loadProductFirst: true,
    // Placeholder
    showPlaceholderProductList: true,
    placeholderProductPerRow: 8,
  },
  template: {
    filterOptionHorizontalWrapper: '<div class="{{class.filterOption}} {{blockTypeClass}} {{blockId}}" data-block-id="{{blockId}}" js-bc-filter="filterOption"><div class="{{class.filterBlockTitle}}" id={{blockTitleId}}><a class="body-1" tabindex="0" role="button" aria-controls="{{blockContentId}}" aria-expanded="false" href="javascript:;" js-bc-filter="optionBlock"><span>{{blockTitle}}{{tooltip}}</span><div></div></a></div><div class="{{class.filterBlockContent}}" id={{blockContentId}} js-bc-filter="filterBlockContent"><div class="{{class.filterBlockContent}}-inner">{{blockContent}}</div>{{btnApply}}{{clearButton}}</div></div>',
    filterTreeMobileButton: '<button id="bc-sf-filter-tree-mobile-button" class="button button--block button--primary button--outlined" type="button" js-bc-filter="filterMobileButton">{{label}}<svg class="icon icon__arrow" width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8H26M26 8L18.7778 1M26 8L18.7778 15"/></svg><svg class="icon icon__close"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L20 20M4 20L20 4"/></svg></button>',
    filterRefineItem: '<div class="selected-item {{class.filterOptionLabel}}"><a class="subtitle-1" href="{{itemLink}}"><span class="selected-type"><span>{{itemType}}</span>: <strong>{{itemLabel}}</strong></span><span class="{{class.clearButton}}"></span></a></div>',
    filterOptionLabel: '<span></span><span class="body-1 bc-sf-filter-option-value">{{itemValue}}</span><span class="body-1 bc-sf-filter-option-amount">{{itemAmount}}</span>',
    noResult: '<div id="bc-sf-filter-message" class="container"><p class="body-1"><em>{{content}}</em></p></div>',
  },
  label: {
    refineMobile: BCSfFilter.prototype.getLabel("label", "refine_mobile", theme.strings.collections.refineBy),
    search: {
      resultEmpty: BCSfFilter.prototype.getLabel("label", "search_result_empty", "No results for '{{ terms }}"),
      resultNumber: BCSfFilter.prototype.getLabel("label", "search_result_number", '{{ count }} results for "{{ terms }}"')
    },
  },
};

var nodeSelectors = {};

/************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
function prepareShopifyData(data) {
  // Displaying price base on the policy of Shopify, have to multiple by 100
  soldOut = !data.available; // Check a product is out of stock
  onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Convert images to array
  images = data.images_info;
  // Get First Variant (selected_or_first_available_variant)
  var firstVariant = data['variants'][0];
  {{ firstVariant }}
  if (getParam('variant') !== null && getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  return data;
}

function desktopFilterOpenHandler() {
  if (!window.matchMedia(`(min-width: 768px)`).matches) {return;}

  nodeSelectors.filterTree.style.marginBottom = 20 + 'px';

  [].forEach.call(nodeSelectors.optionBlock, function(element) {
    element.addEventListener('click', filtersClickHandler);
  });

  [].forEach.call(nodeSelectors.filterSelectButton, function(element) {
    element.addEventListener('click', resetHorizontalFilters);
  });
}

function addZeros(number) {
  if (number < 10) {
    number = `0${number}`;
  }

  return number;
}

/************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
/************************** BUILD PRODUCT LIST **************************/
// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
  const expiredTemplate = document.querySelector('.template-collection-mto-expired');
  const timeNow = new Date();

  let timeStart;
  let timeExpiry;
  const storeTimeZone = "Europe/Madrid";

  data.tags.forEach((tag) => {
    if (tag.includes('mto-start-date')) {
      const month = tag.split('/')[1];
      const day = tag.split(':')[1].split('/')[0];
      const year = tag.split('/')[2].split(' ')[0];
      const hour = tag.split(' ')[1].split(':')[0];
      const minute = tag.split(' ')[1].split(':')[1];
      const second = tag.split(' ')[1].split(':')[2];

      startDate = parseInt(`20${year}${month}${day}${hour}${minute}${second}`, 10);
      timeStart = new Date(startDate).toLocaleString("en-US", {timeZone: storeTimeZone});
    }

    if (tag.includes('mto-end-date')) {
      const month = tag.split('/')[1];
      const day = tag.split(':')[1].split('/')[0];
      const year = tag.split('/')[2].split(' ')[0];
      const hour = tag.split(' ')[1].split(':')[0];
      const minute = tag.split(' ')[1].split(':')[1];
      const second = tag.split(' ')[1].split(':')[2];

      endDate = parseInt(`20${year}${month}${day}${hour}${minute}${second}`, 10);
      timeExpiry = new Date(endDate).toLocaleString("en-US", {timeZone: storeTimeZone});
    };
  });

  if (timeNow > timeExpiry && !expiredTemplate) {
    return `<div></div>`;
  }

  if (timeStart > timeNow) {
    return `<div></div>`;
  }

  // Get Template
  var itemHtml = bcSfFilterTemplate.productGridItemHtml;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);
  // Add Custom class
  var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
  var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';

  itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  // Add Grid Width class
  itemHtml = itemHtml.replace(/{{gridWidthClass}}/g, buildGridWidthClass(data));
  // Add Label
  itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
  // Add Countdown Data
  itemHtml = itemHtml.replace(/{{itemStartDateTag}}/g, setCountdownStartData(data));
  itemHtml = itemHtml.replace(/{{itemEndDateTag}}/g, setCountdownEndData(data));
  // Add TAG Label
  itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
  // Add Images
  itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
  // Add Price
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, buildPrice(data));
  // Add Vendor
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));
  // itemActiveSwapClass
  var itemActiveSwapClass = bcSfFilterConfig.custom.active_image_swap ? 'has-bc-swap-image' : '';
  itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, itemActiveSwapClass);

  // Add data json
    itemHtml = itemHtml.replace(/{{itemJson}}/g, JSON.stringify(data.json));

  // Add main attribute (Always put at the end of this function)
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

  return itemHtml;
};
// Build Product List Item
BCSfFilter.prototype.buildProductListItem = function(data) {
  // For List View
  /*** Prepare data ***/
  var images = data.images_info;
  // Displaying price base on the policy of Shopify, have to multiple by 100
  var soldOut = !data.available; // Check a product is out of stock
  var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  var priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Get First Variant (selected_or_first_available_variant)
  var firstVariant = data['variants'][0];
  if (getParam('variant') !== null && getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  /*** End Prepare data ***/
  // Get Template
  var itemHtml = bcSfFilterTemplate.productListItemHtml;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);
  // Add Custom class
  var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
  var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
  itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  // Add Label
  itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
  // Add TAG Label
  itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
  // Add Images
  itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
  // Add Vendor
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));
  // Add Price
  var itemPriceHtml = buildPrice(data, onSale, priceVaries);
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);
  // Description
  var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
  itemDescription = (itemDescription.split(" ")).length > 40 ? itemDescription.split(" ").splice(0, 40).join(" ") + '...' : itemDescription.split(" ").splice(0, 40).join(" ");
  itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
  // itemActiveSwapClass
  var itemActiveSwapClass = bcSfFilterConfig.custom.active_image_swap ? 'has-bc-swap-image' : '';
  itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, itemActiveSwapClass);
  // Add main attribute
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));
  return itemHtml;
  // End For List View
};

BCSfFilter.prototype.buildFilterOptionLabel = function(label, productNumber, fOData) {
    // Customize label
    label = this.customizeFilterOptionLabel(label, fOData.prefix, fOData.filterType, fOData.displayAllValuesInUppercaseForm);
    // Build Labels
    //Fix $ icon on Safari 13.05 or lower
    label = label.replace(/\$/g, "&#36;");
    // Remove dash in filter value
    label = label.replace(/\-/g, " ");
    var itemLabelHtml = this.getTemplate('filterOptionLabel').replace(/{{itemValue}}/g, label);
    if (this.getSettingValue('general.showFilterOptionCount') && fOData.displayType != 'box') {
        if (fOData.keepValuesStatic !== true && productNumber !== null && ((productNumber > 0 && this.getSettingValue('general.showOutOfStockOption') == false) || this.getSettingValue('general.showOutOfStockOption') == true)) {
            return itemLabelHtml.replace(/{{itemAmount}}/g, '(' + productNumber + ')');
        }
    }
    return itemLabelHtml.replace(/{{itemAmount}}/g, '');
};

BCSfFilter.prototype.customizeFilterOptionLabel = function(label, prefix, filterType, displayAllValuesInUppercaseForm) {
    // Format label and value of each filter option item
    if (filterType == 'price' || filterType == 'variants_price' || filterType == 'percent_sale') {
        label = label.replace(/\*/g, '').replace(/\-/g, ':');
        // console.log('filterType', filterType);
        if (filterType == 'price' || filterType == 'variants_price') {
            label = this.getPriceLabel(label);
        } else label = this.getPercentSaleLabel(label);
    }

    // Remove Prefix
    if (typeof prefix !== 'undefined' && prefix !== null && prefix !== false) {
        prefix = prefix.replace(/\\/g, '');
        label = label.replace(prefix, '').trim();
    }
  
    // Remove dash in filter value
    label = label.replace(/\-/g, " ");
  
    // No capital label of Rating filter option
    if (label.indexOf('bc-sf-filter-icon-star') > -1) return label;

    // Make the text to uppercase
    displayAllValuesInUppercaseForm = displayAllValuesInUppercaseForm || false;
    if (displayAllValuesInUppercaseForm) return label.toUpperCase();

    // Make all letters lowercase first, then capitalize all first letters of each string in a filter option value
    // For example: HELLO World => Hello World
    if (this.getSettingValue('general.forceCapitalizeFilterOptionValues')) return capitalize(label, true);

    // Make all letters lowercase first, then capitalize first letter of a filter option value
    // For example: product fILTER => Product filter
    if (this.getSettingValue('general.capitalizeFirstLetterFilterOptionValues')) return capitalize(label, true, true);

    // Just capitalize first letter and don't change the format of any other letters 
    // For example: hello wORLD => Hello WORLD
    if (this.getSettingValue('general.capitalizeFilterOptionValues')) return capitalize(label);

    // return label
    return label;
};

BCSfFilter.prototype.buildSuggestionProductList = function (a, b, c, d, e) {
  var f = "";
  f += this.buildSuggestionHeader(d.label, "product");
  var g = this.buildSuggestionDidYouMean(a, e, c);
  if ("" != g && (f += '<li class="' + this.class.searchSuggestionItem + ' bc-sf-search-suggestion-dym" aria-label="Did you mean">' + g + "</li>"), Object.keys(b).length > 0) {
    var h, i = b.length;
    for (h = 0; h < i; h++) {
      var j = b[h],
        k = this.customizeSuggetionProductTitle(j.title, a, b);
      k = this.highlightSuggestionResult(k, a);
      var l = this.buildProductItemUrl(j, !1),
        m = j.images_info.length > 0 ? this.optimizeImage(j.images_info[0].src, "200x") : bcSfFilterConfig.general.no_image_url,
        n = null !== j.skus && j.skus.length > 0 ? j.skus[0] : "",
        o = this.class.searchSuggestion,
        p = this.getSettingValue("search.openProductNewTab") ? 'target="_blank"' : "";
      f += '<li class="' + this.class.searchSuggestionItem + " " + this.class.searchSuggestionItem + '-product" data-label="' + this.escape(j.id) + '" data-value="' + this.escape(j.title) + '" aria-label="' + this.escape(d.label) + ": " + this.escape(j.title) + '">', f += '<a href="' + l + '" ' + p + ">", this.getSettingValue("search.showSuggestionProductImage") && (f += '<div class="' + o + '-left"><img src="' + m + '" /></div>'), f += '<div class="' + o + '-right">', f += '<div class="' + o + '-product-title h6">' + k + "</div>", this.getSettingValue("search.showSuggestionProductSku") && (f += '<div class="' + o + '-product-sku">SKU: ' + n + "</div>"), this.getSettingValue("search.showSuggestionProductVendor") && (f += '<div class="' + o + '-product-vendor">' + j.vendor + "</div>"), f += this.buildSuggestionProductPrice(j), f += "</div>", f += "</a>", f += "</li>"
    }
  }
  return f
};

BCSfFilter.prototype.buildSuggestionProductPrice = function (a) {
  this.prepareSuggestionProductPriceData(a);
  var b = a.compare_at_price_min > a.price_min,
    c = this.formatMoney(100 * a.price_min),
    d = this.formatMoney(100 * a.compare_at_price_min);
  this.getSettingValue("search.removePriceDecimal") && (c = this.removeDecimal(c), d = this.removeDecimal(d));
  var e = "";
  return this.getSettingValue("search.showSuggestionProductPrice") && (e += '<div class="' + this.class.searchSuggestion + '-product-price">', b && this.getSettingValue("search.showSuggestionProductSalePrice") ? (e += "<s>" + d + "</s>  ", e += '<span class="bc-sf-product-sale-price">' + c + "</span>") : e += '<span class="bc-sf-product-regular-price">' + c + "</span>", e += "</div>"), e
};

/************************** END BUILD PRODUCT LIST **************************/
/************************** BUILD PRODUCT ITEM ELEMENTS **************************/
function buildGridWidthClass() {
  var gridWidthClass = '';
  // On PC
  switch (bcSfFilterConfig.custom.products_per_row) {
    case 2:
      gridWidthClass = 'bc-sf-filter-grid-width-2';
      break;
    case 3:
      gridWidthClass = 'bc-sf-filter-grid-width-3';
      break;
    case 5:
      gridWidthClass = 'bc-sf-filter-grid-width-5';
      break;
    default:
      gridWidthClass = 'bc-sf-filter-grid-width-4';
      break;
  }
  // On Mobile
  switch (bcSfFilterConfig.custom.products_per_row_mobile) {
    case 1:
      gridWidthClass += ' bc-sf-filter-grid-width-mb-1';
      break;
    case 3:
      gridWidthClass += ' bc-sf-filter-grid-width-mb-3';
      break;
    default:
      gridWidthClass += ' bc-sf-filter-grid-width-mb-2';
      break;
  }
  return gridWidthClass;
}

function setCountdownStartData(data) {
  var startDate = data.tags.find(function(element) {
    return element.includes('mto-start-date:')
  })

  return startDate === undefined ? '' : startDate.replace(/mto-start-date:/g, '');
}

function setCountdownEndData(data) {
  var endDate = data.tags.find(function(element) {
    return element.includes('mto-end-date:')
  })

  return endDate === undefined ? '' : endDate.replace(/mto-end-date:/g, '');
}

function buildImages(data) {
  var html = '';
  // Build Main Image
  var thumbUrl = bcsffilter.getFeaturedImage(images, '{width}x');
  html += '<img class="bc-sf-filter-product-item-main-image lazyload"' +
    'data-src="' + thumbUrl + '" ' +
    'data-widths="[180, 360, 540, 720]" ' +
    'data-sizes="auto" />';
  // Build Image Swap
  if (bcSfFilterConfig.custom.active_image_swap) {
    var flipImageUrl = thumbUrl;
    
    if(images.length > 1) {
      flipImageUrl = images[1]['src'].includes('swatch') ? thumbUrl : bcsffilter.optimizeImage(images[1]['src'],'{width}x');
    }

    html += '<img class="bc-sf-filter-product-item-flip-image lazyload"' +
    'data-src="' + flipImageUrl + '" ' +
    'data-widths="[180, 360, 540, 720]" ' +
    'data-sizes="auto" />';
  }
  return html;
}

function buildVendor(data) {
  var html = '';
  if (bcSfFilterConfig.custom.show_vendor) {
    html = bcSfFilterTemplate.vendorHtml;
  }
  return html;
}

function buildPrice(data) {
  var html = '';
  if (bcSfFilterConfig.custom.show_price) {
    html = '<p class="bc-sf-filter-product-item-price body-1">';
    if (onSale) {
      html += '<span class="bc-sf-filter-product-item-sale-price">' + bcsffilter.formatMoney(data.price_min) + '</span>';
      html += '<s>' + bcsffilter.formatMoney(data.compare_at_price_min) + '</s> ';
    } else {
      if (priceVaries) {
        html += (bcSfFilterConfig.label_basic.from) + ' ';
      }
      html += '<span class="bc-sf-filter-product-item-regular-price">' + bcsffilter.formatMoney(data.price_min) + '</span>';
    }
    html += '</p>';
  }
  return html;
}

function buildLabels(data) {
  // Build Sold out label
  var soldOutLabel = '';
  if (bcSfFilterConfig.custom.show_sold_out_label && soldOut) {
    soldOutLabel = bcSfFilterTemplate.soldOutLabelHtml.replace(/{{style}}/g, '');
  }
  // Build Sale label
  var saleLabel = '';
  if (bcSfFilterConfig.custom.show_sale_label && onSale && !soldOut) {
    saleLabel = bcSfFilterTemplate.saleLabelHtml.replace(/{{style}}/g, '');
  }
  // Build Labels
  return soldOutLabel + saleLabel;
}
// BUILD LABEL PRODUCT WITH TAGS
function buildTagLabels(data, showall) {
  if (showall) {
    var tagLabel = '';
    if (data.tags) {
      for (var i = 0; i < data.tags.length; i++) {
        var tag = data.tags[i];
        if (tag.indexOf("pfs:label") !== -1) {
          var preTagLabel = bcSfFilterTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
          tagLabel += preTagLabel;
        }
      }
    }
  } else {
    var tagLabel = '';
    if (data.tags) {
      for (var i = data.tags.length - 1; i >= 0; i--) {
        var tag = data.tags[i];
        if (tag.indexOf("pfs:label") !== -1) {
          var preTagLabel = bcSfFilterTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
          tagLabel += preTagLabel;
          break;
        }
      }
    }
  }
  return tagLabel;
}
/************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
/************************** BUILD TOOLBAR **************************/
// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
  // Get page info
  var currentPage = parseInt(this.queryParams.page);
  var totalPage = Math.ceil(totalProduct / this.queryParams.limit);
  // If it has only one page, clear Pagination
  if (totalPage == 1) {
    jQ(this.selector.pagination).html('');
    return false;
  }
  if (this.getSettingValue('general.paginationType') == 'default') {
    var paginationHtml = bcSfFilterTemplate.paginateHtml;
    // Build Previous
    var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
    previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
    paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
    // Build Next
    var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml : bcSfFilterTemplate.nextDisabledHtml;
    nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
    paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
    // Create page items array
    var beforeCurrentPageArr = [];
    for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
      beforeCurrentPageArr.unshift(iBefore);
    }
    if (currentPage - 4 > 0) {
      beforeCurrentPageArr.unshift('...');
    }
    if (currentPage - 4 >= 0) {
      beforeCurrentPageArr.unshift(1);
    }
    beforeCurrentPageArr.push(currentPage);
    var afterCurrentPageArr = [];
    for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
      afterCurrentPageArr.push(iAfter);
    }
    if (currentPage + 3 < totalPage) {
      afterCurrentPageArr.push('...');
    }
    if (currentPage + 3 <= totalPage) {
      afterCurrentPageArr.push(totalPage);
    }
    // Build page items
    var pageItemsHtml = '';
    var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);

    pageItemsHtml += bcSfFilterTemplate.pageCountHtml
      .replace(/{{ current }}/g, currentPage)
      .replace(/{{ size }}/g, totalPage);

    paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
    jQ(this.selector.pagination).html(paginationHtml);
  }
};
// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
  if (bcSfFilterConfig.custom.show_sorting && bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
    jQ(this.selector.topSorting).html('');
    var sortingArr = this.getSortingList();
    if (sortingArr) {
      var paramSort = this.queryParams.sort || '';
      // Build content
      var sortingItemsHtml = '';
      for (var k in sortingArr) {
        activeClass = '';
        if(paramSort == k) {
          activeClass = 'active';
        }
        sortingItemsHtml += '<li><a class="" href="#" data-sort="' + k + '" class="' + activeClass+ '">' + sortingArr[k] + '</a></li>';
      }
      var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
      jQ('.bc-sf-filter-custom-sorting').html(html);
      if(jQ('.bc-sf-filter-custom-sorting').hasClass("bc-sf-filter-sort-active")) {
        jQ('.bc-sf-filter-custom-sorting').toggleClass('bc-sf-filter-sort-active');
      }

      var labelSort = '';
      if(paramSort.length > 0) {
        var labelHandle = 'sorting_' + paramSort.replace(/\-/g, '_');
        labelSort = bcSfFilterConfig.label[labelHandle];
      } else {
        labelSort = bcSfFilterConfig.label.sorting;
      }

      jQ('.bc-sf-filter-custom-sorting label span span').text(labelSort);
    }
  }
};

BCSfFilter.prototype.buildFilterOption = function (a, b, c) {
  var d = b.label,
    e = this.class.filterOption + "-" + this.slugify(d),
    f = "vertical" == c ? this.getTemplate("filterOptionWrapper") : this.getTemplate("filterOptionHorizontalWrapper");
  f = f.replace(/{{blockTitle}}/g, d), f = f.replace(/{{blockTitleId}}/g, this.class.filterBlockTitle + "-" + this.slugify(d)), f = f.replace(/{{blockTypeClass}}/g, this.class.filterOption + "-" + b.displayType), f = f.replace(/{{blockId}}/g, e), f = f.replace(/{{blockContent}}/g, a), f = f.replace(/{{blockContentId}}/g, this.class.filterBlockContent + "-" + this.slugify(d)), f = f.replace(/{{btnApply}}/g, "collection" == b.filterType || "review_ratings" == b.filterType ? "" : '<button class="button button--primary button--outlined ' + this.class.selectFilterOptionButton + '" data-id="' + e + '" js-bc-filter="filterSelectButton">' + this.getSettingValue("label.apply") + "</button>"), f = f.replace(/{{tooltip}}/g, this.buildFilterOptionTooltip(b));
  var g = "",
    h = "vertical" == c ? this.getSettingValue("label.clear") : this.getSettingValue("label.clearAll");
  if (this.queryParams.hasOwnProperty(b.filterOptionId) && this.queryParams[b.filterOptionId] && (g = '<a href="javascript:;" role="button" aria-label="' + this.getSettingValue("label.clear") + '" class="' + this.class.clearButton + '" onClick="clearFilterOption(event, this, \'' + b.filterOptionId + "')\">" + h + "</a>"), f = f.replace(/{{clearButton}}/g, g), "" !== (f = this.buildFilterTreeClass(f))) {
    var i = jQ(f);
    i.attr({
      "data-id": b.filterOptionId,
      "data-type": b.filterType,
      "data-display-type": b.displayType,
      "data-select-type": b.selectType,
      "data-title": d,
      "data-prefix": b.prefix
    });
    var j = !!b.hasOwnProperty("isCollapseMobile") && b.isCollapseMobile;
    this.getSettingValue("general.collapseOnMobileByDefault") && (j = !0), i.attr("data-collapse-mobile", j);
    var k = null;
    if (["list", "box", "swatch"].indexOf(b.displayType) > -1 && (k = "scrollbar"), b.hasOwnProperty("showMoreType") && b.showMoreType && (k = b.showMoreType), "" != this.getSettingValue("general.showMoreType") && ["list"].indexOf(b.displayType) > -1 && (k = this.getSettingValue("general.showMoreType")), k && i.attr({
        "data-show-more-type": k
      }), this.getSettingValue("general.requestInstantly") && i.find("." + this.class.selectFilterOptionButton).hide(), b.hasOwnProperty("useAndCondition") && b.useAndCondition && i.attr("data-and-condition", !0), b.hasOwnProperty("showExactRating") && b.showExactRating && i.attr("data-exact-rating", !0), i.attr("data-filter-option", JSON.stringify(b)), this.queryParams.hasOwnProperty(b.filterOptionId) && this.queryParams[b.filterOptionId] && (!c || "vertical" != c)) {
      var l = this.queryParams[b.filterOptionId].map(function (a) {
        return encodeURIParamValue(a)
      });
      i.attr("data-selected", JSON.stringify(l))
    }
    this.addFilterTreeItem(jQ(i)[0].outerHTML, "after", c), this.checkShowFilterOption(b) || jQ("." + e).addClass(this.class.filterOptionHidden)
  }
};

BCSfFilter.prototype.buildDefaultPaginationEvent = function (a) {
  var b = this,
    c = this.getSelector("pagination");
  jQ(c).find("a").unbind("click"), jQ(c).find("a").on("click", function (a) {
    a.preventDefault(), b.internalClick = !0;
    var c = jQ(this).attr("href");
    b.onChangeData(c, "page"), jQ("body,html").animate({
      scrollTop: jQ(b.getSelector("products")).offset().top - 220
    }, 600)
  })
};

BCSfFilter.prototype.buildFilterTreeMobileButtonEvent = function () {
  var a = this,
    b = this.getSelector("filterTree"),
    c = this.getSelector("filterTreeMobileButton");

  if (jQ(b).hasClass("bc-sf-filter-tree-mobile-open")) {
    jQ(c).addClass('is-active');
  }

  jQ(c).unbind("click"), jQ(c).on("click", function (event) {
    var c = a.mobileStyle;
    if ("style2" == c || "style3" == c) jQ(b).toggleClass("bc-sf-filter-tree-mobile-open"), a.buildFilterTreeMobile(), a.removeScrollbar(jQ("." + a.class.filterBlockContent));
    else {
      if (a.getSettingValue("general.changeMobileButtonLabel")) {
        var d = a.class.mobileButtonOpen;
        jQ(this).toggleClass(d);
        var e = jQ(this).hasClass(d) ? a.getSettingValue("label.refineMobileCollapse") : a.getSettingValue("label.refineMobile");
        jQ(this).text(e)
      }
      jQ(b).slideToggle(function () {
        event.currentTarget.classList.toggle('is-active');

        jQ(b).toggleClass("bc-sf-filter-tree-mobile-open"), a.buildFilterOptionBoxStyle(jQ(this)), a.buildFilterScrollbar()
      })
    }

  });
};

// Build Sorting event
BCSfFilter.prototype.buildSortingEvent = function() {
  var _this = this;
  jQ('.bc-sf-filter-filter-dropdown a').click(function(e){
    e.preventDefault();
    onInteractWithToolbar(e, 'sort', _this.queryParams.sort, jQ(this).data('sort'));
  });

  jQ(".bc-sf-filter-custom-sorting > label").click(function(){
    if (!jQ('.bc-sf-filter-filter-dropdown').is(':animated')) {
      jQ('.bc-sf-filter-filter-dropdown').toggle().parent().toggleClass('bc-sf-filter-sort-active');
      jQ('#bc-sf-filter-tree').hide();
    }
  });

  jQ(this.getSelector('filterTreeMobileButton')).click(function(){
    jQ('#bc-sf-filter-top-sorting-mobile .bc-sf-filter-filter-dropdown').hide();
  });
};
// For Toolbar - Build Display type
BCSfFilter.prototype.buildFilterDisplayType = function() {
  var itemHtml = '<span>' + bcSfFilterConfig.label.toolbar_viewas + '</span>';
  itemHtml += '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="bc-sf-filter-display-item bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
  itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="bc-sf-filter-display-item bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
  var topDisplayTypeSelector = jQ(this.getSelector('topDisplayType'));
  var listProductSelector = jQ(this.getSelector('products'));
  topDisplayTypeSelector.html(itemHtml);
  // Active current display type
  topDisplayTypeSelector.find('.bc-sf-filter-display-item').removeClass('active');
  if (this.queryParams.display == 'list') {
    topDisplayTypeSelector.find('.bc-sf-filter-display-list').addClass('active');
    listProductSelector.removeClass('bc-sf-filter-grid-view-items').addClass('bc-sf-filter-list-view-items');
  } else if (this.queryParams.display == 'grid') {
    topDisplayTypeSelector.find('.bc-sf-filter-display-grid').addClass('active');
    listProductSelector.removeClass('bc-sf-filter-list-view-items').addClass('bc-sf-filter-grid-view-items');
  }
};

// Build Display type event
BCSfFilter.prototype.buildDisplayTypeEvent = function() {
  var _this = this;
  var topDisplayTypeSelector = jQ(this.getSelector('topDisplayType'));
  var listProductSelector = jQ(this.getSelector('products'));
  jQ(this.getSelector('topDisplayType') + ' a').click(function(e) {
    e.preventDefault();
    _this.internalClick = true;
    jQ(this).parent().children().removeClass('active');
    jQ(this).addClass('active');
    if (_this.queryParams.display == 'list') {
      topDisplayTypeSelector.find('.bc-sf-filter-display-list').addClass('active');
      listProductSelector.removeClass('bc-sf-filter-grid-view-items').addClass('bc-sf-filter-list-view-items');
    } else if (_this.queryParams.display == 'grid') {
      topDisplayTypeSelector.find('.bc-sf-filter-display-grid').addClass('active');
      listProductSelector.removeClass('bc-sf-filter-list-view-items').addClass('bc-sf-filter-grid-view-items');
    }
    var newUrl = jQ(this).attr('href');
    _this.onChangeData(newUrl, 'display');
  })
};
// Build Show Limit
BCSfFilter.prototype.buildFilterShowLimit = function() {
  if (bcSfFilterConfig.custom.show_limit && bcSfFilterTemplate.hasOwnProperty('showLimitHtml')) {
    jQ(this.selector.topShowLimit).html('');
    var numberList = this.getSettingValue('general.showLimitList');
    if (numberList != '') {
      // Build content
      var showLimitItemsHtml = '';
      var arr = numberList.split(',');
      for (var k = 0; k < arr.length; k++) {
        showLimitItemsHtml += '<option value="' + arr[k].trim() + '">' + arr[k].trim() + '</option>';
      }
      var html = bcSfFilterTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
      jQ(this.selector.topShowLimit).html(html);
      // Set value
      jQ(this.selector.topShowLimit + ' select').val(this.queryParams.limit);
    }
  }
};
// Build Breadcrumb
BCSfFilter.prototype.buildBreadcrumb = function(colData, apiData) {
  if (bcSfFilterTemplate.hasOwnProperty('breadcrumbHtml')) {
    var breadcrumbItemsHtml = '';
    if (typeof colData !== 'undefined' && colData.hasOwnProperty('collection')) {
      var colInfo = colData.collection;
      if (typeof this.collectionTags !== 'undefined' && this.collectionTags !== null) {
        breadcrumbItemsHtml += bcSfFilterTemplate.breadcrumbItemLink.replace(/{{itemLink}}/g, '/collections/' + colInfo.handle).replace(/{{itemTitle}}/g, colInfo.title);
        breadcrumbItemsHtml += " {{breadcrumbDivider}} ";
        breadcrumbItemsHtml += bcSfFilterTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, this.collectionTags[0]);
      } else {
        breadcrumbItemsHtml += bcSfFilterTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, colInfo.title);
      }
    } else {
      breadcrumbItemsHtml += bcSfFilterTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, this.getSettingValue('label.defaultCollectionHeader'));
    }
    var html = bcSfFilterTemplate.breadcrumbHtml.replace(/{{breadcrumbItems}}/g, breadcrumbItemsHtml)
    html = html.replace(/{{breadcrumbDivider}}/g, bcSfFilterTemplate.breadcrumbDivider);
    jQ(this.selector.breadcrumb).html(html);
  }
};
/************************** END BUILD TOOLBAR **************************/
function matchHeightImage() {
  jQ('.bc-sf-filter-product-item-main-image').load(function() {
    var imageContainer = jQ(this).parent();
    imageContainer.css('width', '100%').css('height', jQ(this).height());
  }).each(function() {
    if (this.complete) jQ(this).load();
  });
}
// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
    /* start-initialize-bc-al */
    var self = this;
    var alEnable = true;
    if(self.getSettingValue('actionlist.qvEnable') != '' || self.getSettingValue('actionlist.atcEnable') != ''){
      alEnable = self.getSettingValue('actionlist.qvEnable') || self.getSettingValue('actionlist.atcEnable');
    }
    if (alEnable === true && typeof BCActionList !== 'undefined') {
        if (typeof bcActionList === 'undefined') {
            bcActionList = new BCActionList();
        }else{
          if (typeof bcAlParams !== 'undefined' && typeof bcSfFilterParams !== 'undefined') {
              bcActionList.initFlag = false;
              bcActionList.alInit(bcSfFilterParams, bcAlParams);
          } else {
              bcActionList.alInit();
          }
        }
    }
    /* end-initialize-bc-al */
  // Call theme init function
  // if (typeof theme !== 'undefined' && typeof theme.init === 'function') {
  //   $(theme.init);
  // }
  // End For List View
};
// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
  var _this = this;
  var totalProduct = data.total_product + '<span> ' + bcSfFilterConfig.label.items_with_count_other + '</span>';
  if (data.total_product == 1) {
    totalProduct = data.total_product + '<span> ' + bcSfFilterConfig.label.items_with_count_one + '</span>';
  }
  jQ('#bc-sf-filter-total-product').html(totalProduct);
  matchHeightImage();
  jQ(window).resize(function() {
    matchHeightImage();
  });

  jQ('body').find('.bc-sf-filter-skeleton-button').remove();

  // Prevent double tap on iOS
  this.isMobile()&&jQ(".bc-sf-filter-product-item").find("a").on("touchstart",function(){isScrolling=!1}).on("touchmove",function(){isScrolling=!0}).on("touchend",function(){isScrolling||(window.location=jQ(this).attr("href"))});

  // Fix image not loaded on mobile
  (this.isMobile()||null!=navigator.userAgent.match(/iPad/i))&&(setTimeout(function(){jQ(".bc-sf-filter-product-item-image img").each(function(){var a=jQ(this).attr("src")+"3";jQ(this).attr("src",a)})},200),setTimeout(function(){jQ(".bc-sf-filter-product-item-image img").each(function(){var a=jQ(this).attr("src")+"3";jQ(this).attr("src",a)})},2e3));

  setNodeSelectors();
  setDesktopFilterListener();
  if (theme.promoBanner && _typeof(theme.promoBanner.init) === 'function') theme.promoBanner.init();
  if (_typeof(theme.collectionCountdown) === 'function') theme.collectionCountdown();
};

function setNodeSelectors() {
  nodeSelectors = {
    filterTree: document.querySelector('[js-bc-filter="filterTree"]'),
    filterOption: document.querySelectorAll('[js-bc-filter="filterOption"]'),
    optionBlock: document.querySelectorAll('[js-bc-filter="optionBlock"]'),
    blockContent: document.querySelectorAll('[js-bc-filter="blockContent"]'),
    filterSelectButton: document.querySelectorAll('[js-bc-filter="filterSelectButton"]'),
    filterBlockContent: document.querySelectorAll('[js-bc-filter="filterBlockContent"]'),
  };
}

function setDesktopFilterListener() {
  var config = { attributes: true, childList: true, subtree: true };
  var observer = new MutationObserver(mutationCallback);

  [].forEach.call(nodeSelectors.filterBlockContent, function(element) {
    element.style.display = 'none';
  });

  observer.observe(nodeSelectors.filterTree, config);
}

function mutationCallback(mutationsList, observer) {
  var filterBlock = [].find.call(mutationsList, function(mutation) {
    return mutation.attributeName === 'style' && mutation.target.getAttribute('js-bc-filter') === 'filterBlockContent';
  });

  if(!filterBlock) {return;}

  filterBlock.target.style.top = 'initial';
  toggleFilters()
}

function toggleFilters() {
  var expandedItem = [].find.call(nodeSelectors.optionBlock, function(element) {
    return element.classList.contains('selected');
  });

  if (expandedItem) {
    var parentContainer = expandedItem.closest('[js-bc-filter="filterOption"]');
    var filterBlockContent = parentContainer.querySelector('[js-bc-filter="filterBlockContent"]');
    var blockContentBound = filterBlockContent.getBoundingClientRect();
    
    toggleParentContainers(parentContainer)
    nodeSelectors.filterTree.style.marginBottom = blockContentBound.height + 20 + 'px';
  } else {
    resetHorizontalFilters();
  }
}

function toggleParentContainers(parentContainer) {
  [].forEach.call(nodeSelectors.filterOption, function(element) {

    if (element === parentContainer) {
      element.classList.add('is-active');
      element.classList.remove('is-disabled');
    } else {
      element.classList.add('is-disabled');
      element.classList.remove('is-active');
    }
  });
}


function resetHorizontalFilters() {
  var isCollapsed = true;
  nodeSelectors.filterTree.style.marginBottom = '20px';

  [].forEach.call(nodeSelectors.filterBlockContent, function(element) {
    if (element.style.display === 'block') {
      isCollapsed = false;
    }
  });

  if(isCollapsed) {
    [].forEach.call(nodeSelectors.filterOption, function(element) {
      element.classList.remove('is-active');
      element.classList.remove('is-disabled');
    })
  }
}

// Build Default layout
BCSfFilter.prototype.buildDefaultElements=function(){var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,isSafari=/Safari/.test(navigator.userAgent),isBackButton=window.performance&&window.performance.navigation&&2==window.performance.navigation.type;if(!(isiOS&&isSafari&&isBackButton)){var self=this,url=window.location.href.split("?")[0],searchQuery=self.isSearchPage()&&self.queryParams.hasOwnProperty("q")?"&q="+self.queryParams.q:"";window.location.replace(url+"?view=bc-original"+searchQuery)}};

function customizeJsonProductData(data) {for (var i = 0; i < data.variants.length; i++) {var variant = data.variants[i];var featureImage = data.images.filter(function(e) {return e.src == variant.image;});if (featureImage.length > 0) {variant.featured_image = {"id": featureImage[0]['id'],"product_id": data.id,"position": featureImage[0]['position'],"created_at": "","updated_at": "","alt": null,"width": featureImage[0]['width'], "height": featureImage[0]['height'], "src": featureImage[0]['src'], "variant_ids": [variant.id]}} else {variant.featured_image = '';};};var self = bcsffilter;var itemJson = {"id": data.id,"title": data.title,"handle": data.handle,"vendor": data.vendor,"variants": data.variants,"url": self.buildProductItemUrl(data),"options_with_values": data.options_with_values,"images": data.images,"images_info": data.images_info,"available": data.available,"price_min": data.price_min,"price_max": data.price_max,"compare_at_price_min": data.compare_at_price_min,"compare_at_price_max": data.compare_at_price_max};return itemJson;};
BCSfFilter.prototype.prepareProductData=function(data){var self=this;var countData=data.length;for(var k=0;k<countData;k++){data[k]["images"]=data[k]["images_info"];if(data[k]["images"].length>0){data[k]["featured_image"]=data[k]["images"][0]}else{data[k]["featured_image"]={src:bcSfFilterConfig.general.no_image_url,width:"",height:"",aspect_ratio:0}}data[k]["url"]="/products/"+data[k].handle;var optionsArr=[];var countOptionsWithValues=data[k]["options_with_values"].length;for(var i=0;i<countOptionsWithValues;i++){optionsArr.push(data[k]["options_with_values"][i]["name"])}data[k]["options"]=optionsArr;var firstVariant=data[k]["variants"][0];var isRoundedPrice=true;if(firstVariant.hasOwnProperty("fulfillment_service")&&firstVariant.fulfillment_service=="gift_card"){isRoundedPrice=false}if(typeof self.convertPriceBasedOnActiveCurrency!=="undefined"){data[k].price_min=self.convertPriceBasedOnActiveCurrency(data[k].price_min,isRoundedPrice);data[k].price_max=self.convertPriceBasedOnActiveCurrency(data[k].price_max,isRoundedPrice);data[k].compare_at_price_min=self.convertPriceBasedOnActiveCurrency(data[k].compare_at_price_min,isRoundedPrice);data[k].compare_at_price_max=self.convertPriceBasedOnActiveCurrency(data[k].compare_at_price_max,isRoundedPrice)}data[k]["price_min"]*=100,data[k]["price_max"]*=100;if(data[k]["compare_at_price_min"]!=null){data[k]["compare_at_price_min"]*=100}if(data[k]["compare_at_price_max"]!=null){data[k]["compare_at_price_max"]*=100}data[k]["price"]=data[k]["price_min"];data[k]["compare_at_price"]=data[k]["compare_at_price_min"];data[k]["price_varies"]=data[k]["price_min"]!=data[k]["price_max"];if(getParam("variant")!==null&&getParam("variant")!=""){var paramVariant=data[k]["variants"].filter(function(e){return e.id==getParam("variant")});if(typeof paramVariant[0]!=="undefined")firstVariant=paramVariant[0]}else{var countVariants=data[k]["variants"].length;for(var i=0;i<countVariants;i++){if(data[k]["variants"][i].available){firstVariant=data[k]["variants"][i];break}}}data[k]["selected_or_first_available_variant"]=firstVariant;var countVariants=data[k]["variants"].length;for(var i=0;i<countVariants;i++){var variantOptionArr=[];var count=1;var variant=data[k]["variants"][i];var variantOptions=variant["merged_options"];if(Array.isArray(variantOptions)){var countVariantOptions=variantOptions.length;for(var j=0;j<countVariantOptions;j++){var temp=variantOptions[j].split(":");data[k]["variants"][i]["option"+(parseInt(j)+1)]=temp[1];data[k]["variants"][i]["option_"+temp[0]]=temp[1];variantOptionArr.push(temp[1])}data[k]["variants"][i]["options"]=variantOptionArr}if(data[k]["variants"][i]["compare_at_price"]!=null){var variantCompareAtPrice=parseFloat(data[k]["variants"][i]["compare_at_price"]);if(typeof self.convertPriceBasedOnActiveCurrency!=="undefined"){variantCompareAtPrice=self.convertPriceBasedOnActiveCurrency(variantCompareAtPrice,isRoundedPrice)}data[k]["variants"][i]["compare_at_price"]=variantCompareAtPrice*100}var variantPrice=parseFloat(data[k]["variants"][i]["price"]);if(typeof self.convertPriceBasedOnActiveCurrency!=="undefined"){variantPrice=self.convertPriceBasedOnActiveCurrency(variantPrice,isRoundedPrice)}data[k]["variants"][i]["price"]=variantPrice*100}data[k]["description"]=data[k]["content"]=data[k]["body_html"];if(data[k].hasOwnProperty("original_tags")&&data[k]["original_tags"].length>0){data[k]["tags"]=data[k]["original_tags"].slice(0)}data[k]["json"]=customizeJsonProductData(data[k])}return data};

// Prepare Filter params
BCSfFilter.prototype.prepareFilterParams = function(params, eventType) {
  // Get collection id
  if (!this.queryParams.hasOwnProperty('collection_scope')) {
      if (!this.isSearchPage()) {
          params.collection_scope = parseInt(this.collectionId);
          if (eventType == 'history') {
              var historyData = History.getState().data;
              if (historyData.hasOwnProperty('param') && historyData.param.hasOwnProperty('collection_scope')) {
                  params.collection_scope = this.collectionId = parseInt(historyData.param.collection_scope);
              } else {
                  params.collection_scope = this.collectionId = parseInt(bcSfFilterConfig.general.collection_id);
              }
          }
      } else {
          params.collection_scope = 0;
      }
  } else {
      params.collection_scope = Array.isArray(this.queryParams.collection_scope) ? this.queryParams['collection_scope'][0] : this.queryParams['collection_scope'];
  }
  // Get product/variant available or not
  if (this.getSettingValue('general.availableAfterFiltering') == true) {
      params.product_available = this.checkExistFilterOptionParam() === true ? true : this.productAvailable;
      params.variant_available = this.checkExistFilterOptionParam() === true ? true : this.variantAvailable;
  } else {
      params.product_available = this.productAvailable;
      params.variant_available = this.variantAvailable;
  }
  // Get Tag value
  if (typeof this.collectionTags !== 'undefined' && this.collectionTags !== null) params.tag = this.collectionTags;
  // Display filter option items even they return no product
  if (this.getSettingValue('general.showOutOfStockOption')) params.zero_options = true;
  // Build Filter tree or not
  params.build_filter_tree = (typeof eventType !== 'undefined' && this.imutableFilterTree.indexOf(eventType) > -1) ? false : true; // Except events of elements in filter tree, all remaining events do not rebuild filter tree
  // Enable cache when request params doest not have filter option values, "page" param equal to 1 and "sort" param equal to default sorting
  params.check_cache = (this.checkExistFilterOptionParam() === false && params['page'] == 1 && params['sort'] == this.defaultSorting && params['limit'] == this.getSettingValue('general.limit') && !this.isSearchPage() && !this.isVendorPage() && !this.isTypePage()) ? true : false;
  // Turn on price mode
  if (this.getSettingValue('general.priceMode') != '') params['price_mode'] = this.getSettingValue('general.priceMode');
  // Tag mode
  if (this.getSettingValue('general.tagMode') != '') params['tag_mode'] = this.getSettingValue('general.tagMode');
  // Availability Sorting
  if (this.getSettingValue('general.sortingAvailableFirst')) params.sort_first = 'available';
  // Vendor page: Get Vendor param
  if (this.isVendorPage() && params.hasOwnProperty('q')) {
      var vendorParam = this.getSettingValue('general.vendorParam');
      // params[vendorParam] = [params['q'].replace(/\+/g, ' ')];
      params[vendorParam] = [params['q']];
      delete params['q'];
  }
  // Type page: Get Type param
  if (this.isTypePage() && params.hasOwnProperty('q')) {
      var typeParam = this.getSettingValue('general.typeParam');
      params[typeParam] = [params['q']];
      delete params['q'];
  }

  // EU store collection ids
  var mtoExpired = 198538493997;
  var comingSoon = 200092319789;

  if (this.queryParams.shop === 'meermin-dev.myshopify.com') {
    mtoExpired = 186438942860;
    comingSoon = 187819786380;
  } else if (this.queryParams.shop === 'meermin-row.myshopify.com') {
    mtoExpired = 198543704109;
    comingSoon = 200092352557;
  } else if (this.queryParams.shop === 'meerminshoes.myshopify.com') {
    mtoExpired = 185788268680;
    comingSoon = 185794822280;
  }

  // NEW CODE TO SHOW OUT OF STOCK PRODUCTS IN SOME COLLECTION
  if (bcSfFilterConfig.general.collection_id == mtoExpired || bcSfFilterConfig.general.collection_id == comingSoon) {
    params.product_available = false;
    params.variant_available = false;
  } else {
    params.product_available = true;
    params.variant_available = true;
  }

  return params;
};


/* Begin patch boost-010 run 2 */
BCSfFilter.prototype.initFilter=function(){return this.isBadUrl()?void(window.location.href=window.location.pathname):(this.updateApiParams(!1),void this.getFilterData("init"))},BCSfFilter.prototype.isBadUrl=function(){try{var t=decodeURIComponent(window.location.search).split("&"),e=!1;if(t.length>0)for(var i=0;i<t.length;i++){var n=t[i],a=(n.match(/</g)||[]).length,r=(n.match(/>/g)||[]).length,o=(n.match(/alert\(/g)||[]).length,h=(n.match(/execCommand/g)||[]).length;if(a>0&&r>0||a>1||r>1||o||h){e=!0;break}}return e}catch(l){return!0}};
/* End patch boost-010 run 2 */
