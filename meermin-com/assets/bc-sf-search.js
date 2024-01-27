// Override Settings
var bcSfSearchSettings = {
    search: {
        //suggestionMode: 'test',
        //suggestionPosition: 'left'
        // suggestionMobileStyle: 'style2',
        showSuggestionProductVendor: false,
        showSuggestionProductSku: false,
    }
};

/*
* Sets suggestion wrapper top position based on scroll position.
*/
function setSuggestionTop(suggestionElement, searchElement, searchForm, siteHeader, timeOut, interval) {
  clearInterval(interval);
  clearTimeout(timeOut);

  interval = setInterval(function() {
    var searchFormBound = searchForm.getBoundingClientRect();

    suggestionElement[0].closest('.bc-sf-search-suggestion-wrapper').style.top = searchFormBound.top + searchFormBound.height + 'px';
    setSugestionWrapperHeight(suggestionElement, searchElement, siteHeader);
  }, 5);

  timeOut = setTimeout( function() {
    clearInterval(interval);
    clearTimeout(timeOut);
  }, 300);
}

/*
* Sets suggestion wrapper height.
*/
function setSugestionWrapperHeight(suggestionElement, searchElement, siteHeader) {
  var headerBound = siteHeader.getBoundingClientRect();
  var wrapper = suggestionElement[0].closest('.bc-sf-search-suggestion-wrapper');
  var suggestionBound = suggestionElement[0].getBoundingClientRect();

  if (window.innerHeight > (headerBound.height + suggestionBound.height)) {
    wrapper.style.height = suggestionBound.height + 'px';
  } else {
    wrapper.style.height ='calc(' + ( window.innerHeight - (headerBound.height)) + 'px)';
  }

  wrapper.style.top = 'calc(' + (headerBound.height) + 'px)';
}

function searchPageFormHandler(suggestionElement) {
  var wrapper = suggestionElement[0].closest('.bc-sf-search-suggestion-wrapper');

  wrapper.style.position = 'absolute';
  wrapper.style.overflowY = 'visible';
  wrapper.classList.add('bc-sf-search-page-suggestion');
}

// Customize style of Suggestion box
BCSfFilter.prototype.customizeSuggestion = function(suggestionElement, searchElement, searchBoxId) {
  var timeOut = {};
  var interval = {};
  var scrollDirection = '';

  if (!window.matchMedia('(min-width: 768px)').matches) {return;}

  if (searchElement[0].classList.contains('template-search__hero-input')) {
    searchPageFormHandler(suggestionElement);

    return;
  }

  theme.searchSelectors = {
    searchForm: document.querySelector('[js-search="form"]'),
    siteHeader: document.querySelector('[js-site-header="container"]'),
  };

  setTimeout(function() {
    setSugestionWrapperHeight(suggestionElement, searchElement, theme.searchSelectors.siteHeader);
  }, 150);

  Frame.EventBus.listen([
    'ScrollDirection:down',
    'ScrollDirection:top'
  ], function(scrollPosition) {
    if (scrollDirection === scrollPosition) { return; }

    scrollDirection = scrollPosition;
    setSuggestionTop(suggestionElement, searchElement, theme.searchSelectors.searchForm, theme.searchSelectors.siteHeader, timeOut, interval);
  });
};

BCSfFilter.prototype.requestFilter = function(sendFunc, eventType, errorCount) {
  var self = this;
  // Get translate Search term in case the current language is different from English
  // Then use it in our API
if (self.isSearchPage() && isWeglotActive()) {
  if (localStorage.getItem('bc-weglot')) {
    self.queryParams['q'] = localStorage.getItem('bc-weglot')
    sendFunc(eventType, errorCount);
  } else {
    Weglot.search(self.queryParams['q'], function(englishTerm) {
      self.queryParams['q'] = englishTerm;
      jQ('#bc-sf-filter-products').after('<input type="hidden" id="bc-sf-filter-weglot" value="' + englishTerm + '" />');
      sendFunc(eventType, errorCount);
    });
  }
 } else {
  if (self.isSearchPage()) {
    self.queryParams['q'] = this.getSearchTerm();
  }
  sendFunc(eventType, errorCount);
 }
};

BCSfFilter.prototype.prepareSearchParams = function(params, eventType) {
  if (this.isSearchPage()) {
    if (this.searchTermKey != 'q') delete params[this.searchTermKey];
    var enableFuzzy = this.getSettingValue('search.enableFuzzy');
    if (enableFuzzy !== true ) params.fuzzy = enableFuzzy;
    if (this.getSettingValue('search.reduceMinMatch') !== false) {
      params.reduce_min_match = this.getSettingValue('search.reduceMinMatch');
    }
    if (this.getSettingValue('search.fullMinMatch')) params.full_min_match = true;
    if (this.getSettingValue('general.sortingAvailableFirst')) params.sort_first = 'available';
  }
  return params;
};

// Only send Weglot request if the current language is different from English
function isWeglotActive() {
  var currentLang = typeof Weglot != 'undefined' ? Weglot.getCurrentLang() : 'en';
  return currentLang !== 'en';
}

BCSfFilter.prototype.requestSuggestion = function(searchTerm, searchId) {
  var self = this;
  function BCSend(term) {
    var suggestion = getSuggestionInstance(searchId);
    self.showSuggestionLoading(suggestion, searchId);
    // Get data from cache
    if (term in self.suggestionCache) {
      suggestionCallback(self.suggestionCache[term]);
      return;
    }
    self.getSuggestionData(term, 0, 'suggest');
  }

  // Get translate Search term in case the current language is different from English
  // Then use it in our API
  if (window.Weglot && window.Weglot.initialized && isWeglotActive()) {
    Weglot.search(searchTerm, function(englishTerm) {
      localStorage.setItem('bc-weglot' , englishTerm)
      BCSend(englishTerm);                  		  
    });
  } else {
    BCSend(searchTerm);
  }
};
