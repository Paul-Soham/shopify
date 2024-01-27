/**
 * Asset: Multi-currency config
 * ------------------------------------------------------------------------------
 * Configuration file used in `currency.js` handler.
 * - Currencies defined here will be used in the Forex API arguments.
 * - All properties are required.
 */
window.Frame = window.Frame || {};
window.Frame.MultiCurrency = {
  SupportedCurrencies: [
    {
      currencyCode: 'EUR',
      currencyName: 'Euro',
      currencySymbol: '€',
      currencyLocale: 'en-EU',
    },
    {
      currencyCode: 'GBP',
      currencyName: 'Pound Sterling',
      currencySymbol: '£',
      currencyLocale: 'en-GB',
    },
    {
      currencyCode: 'USD',
      currencyName: 'United States Dollar',
      currencySymbol: '$',
      currencyLocale: 'en-US',
    },
  ],
};
