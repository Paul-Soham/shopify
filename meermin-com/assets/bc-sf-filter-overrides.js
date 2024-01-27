/**
 * bc-sf-filter-lib.js file function definition overrides.
 */

BCSfFilter.prototype.buildSuggestion = function (a, b, c, d) {
  var e = this,
    a = this.escape(a),
    f = jQ(c),
    g = "",
    h = getValueInObjectArray("all_empty", b);
  if (f.closest("." + e.class.searchSuggestionWrapper).show(), h) {
    getValueInObjectArray("redirect", b) ? f.closest("." + e.class.searchSuggestionWrapper).hide() : (g += e.buildSuggestionNoResult(a, c), f.append(g))
  } else {
    var i = e.getSettingValue("search.suggestionBlocks");
    if (e.isSuggestionStyle2() && "products" != i[0].type) {
      var j = i.findIndex(function (a) {
          return "products" == a.type
        }),
        k = i[j];
      i.splice(j, 1), e.getSettingValue("search.suggestionStyle2ReverseProductBlock") ? i.push(k) : i.unshift(k)
    }
    var l, m = i.length;
    for (l = 0; l < m; l++) {
      var n = i[l];
      if (n.hasOwnProperty("status") && "active" == n.status) {
        var o = e.findIndexArray(n.type, b, "key");
        if (o > -1 && b[o].hasOwnProperty("values")) {
          var p = b[o],
            q = '<li class="bc-sf-search-suggestion-group" data-group="' + n.type + '" aria-label="' + i[l].label + '"><ul>';
          switch (n.type) {
            case "suggestions":
              q += e.buildSuggestionPopular(a, p.values, c, n, b);
              break;
            case "products":
              q += e.buildSuggestionProductList(a, p.values, c, n, b);
              break;
            case "pages":
              q += e.buildSuggestionPage(a, p.values, c, n, b);
              break;
            case "collections":
              q += e.buildSuggestionCollection(a, p.values, c, n, b)
          }
          q += "</ul></li>", f.append(q)
        }
      }
    }
    if ("" === getValueInObjectArray("suggest_query", b)) {
      var r = e.buildSuggestionViewAll(a, b, c);
      f.append(r)
    }
  }
  f.find("." + e.class.searchSuggestionItem + "[data-label]").each(function () {
    var a = jQ(this),
      b = a.data("label") || "",
      c = a.data("value") || "";
    "" !== c && a.data("ui-autocomplete-item", {
      label: b.toString(),
      value: c
    }).addClass("bc-ui-item")
  }), e.buildSuggestionWrapper(c, d)
};

BCSfFilter.prototype.buildSuggestionViewAll = function (a, b, c) {
  var d = this.class.searchSuggestionHeader,
    e = "",
    f = getValueInObjectArray("total_product", b),
    g = getValueInObjectArray("suggest_total_product", b);
  return "" !== g && (f = g), f > getValueInObjectArray("products", this.getSettingValue("search.suggestionBlocks"), "type", "number") && f > 0 && (e += '<li class="' + d + "-view-all " + d + '" aria-label="View All">', e += '<a class="button button--primary" href="' + this.buildSearchLink(a) + '"><span>' + this.getSettingValue("label.suggestion.viewAll").replace(/{{ count }}/g, f) + "</span></a>", e += "</li>"), e

};

BCSfFilter.prototype.buildSuggestionHeader = function (a, b) {
  var c = this.class.searchSuggestionHeader;
  return '<li class="' + c + "-" + b + " " + c + ' subtitle-2" aria-label="' + this.escape(a) + '">' + a + "</li>"
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
  return this.getSettingValue("search.showSuggestionProductPrice") && (e += '<div class="' + this.class.searchSuggestion + '-product-price body-1">', b && this.getSettingValue("search.showSuggestionProductSalePrice") ? (e += "<s>" + d + "</s>  ", e += '<span class="bc-sf-product-sale-price">' + c + "</span>") : e += '<span class="bc-sf-product-regular-price">' + c + "</span>", e += "</div>"), e
};

BCSfFilter.prototype.openSuggestionEvent = function (a, b) {
  var c = this;
  c.isiOS() && jQ("." + this.class.searchSuggestionItem + " a").on("touchstart", function () {
    isScrolling = !1
  }).on("touchmove", function (a) {
    isScrolling = !0
  }).on("touchend", function (a) {
    isScrolling || (window.location = jQ(this).attr("href"))
  });
  var d = jQ("body");
  c.checkIsFullWidthSuggestionMobile(a) && !d.hasClass(c.getClass("searchSuggestionMobileOpen")) && d.addClass(c.getClass("searchSuggestionMobileOpen"))
};

BCSfFilter.prototype.closeSuggestionEvent = function (a) {
  "test" == this.getSettingValue("search.suggestionMode") || this.checkIsFullWidthSuggestionMobile(a) ? jQ("." + this.class.searchSuggestion).show() : jQ("." + this.class.searchSuggestion + '[data-search-box="' + a + '"]').siblings().hide(), jQ('.bc-sf-search-suggestion-wrapper').css('height', 0);
};

BCSfFilter.prototype.buildSearchResultNumber = function (a) {
  var b = "",
    c = this.getSearchTerm();
  null !== c && "" != c && (c = this.escape(c), b = this.getSettingValue("label.search.resultNumber"), b = b.replace(/{{ count }}/g, "<span>" + a.total_product + "</span>").replace(/{{ terms }}/g, "<span>" + c + "</span>")), jQ("." + this.class.searchResultNumber).html(b)
}