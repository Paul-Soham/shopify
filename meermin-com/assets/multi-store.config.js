/**
 * Asset: Multi-store config
 * ------------------------------------------------------------------------------
 * Configuration file used in `redirect.js` and `currency.js` handler.
 * - All properties are required, leave empty string if unused.
 */
window.Frame = window.Frame || {};
window.Frame.MultiStore = [
  {
    storeCode: 'US',
    storeName: 'United States',
    storeUrl: 'https://meerminshoes.myshopify.com',
    supportedLanguages: 'English',
    supportedLanguagesCodes: 'en',
    supportedCurrencies: 'USD ($),CAD (C$)',
    supportedStores: 'US,CA,MX',
    defaultCurrency: 'USD',
  },
  {
    storeCode: 'EU',
    storeName: 'Europe (',
    storeUrl: 'https://meermin-eu.myshopify.com',
    supportedLanguages: 'English, French, Spanish',
    supportedLanguagesCodes: 'en, fr, es',
    supportedCurrencies: 'EUR (€),GBP (£),SEK (kr),DKK (kr.)',
    supportedStores: 'AD,AL,AT,AX,BA,BE,BG,CS,CY,CZ,DE,DK,EE,ES,FI,FO,FR,GB,GE,GG,GI,GR,HR,HU,IE,IS,IT,JE,LI,LT,LU,LV,MC,MD,MT,NL,PL,PT,RO,SE,SI,SJ,SK,SM,VA',
    defaultCurrency: 'EUR',
  },
  {
    storeCode: 'ROW',
    storeName: 'Rest of World',
    storeUrl: 'https://meermin-row.myshopify.com',
    supportedLanguages: 'English',
    supportedLanguagesCodes: 'en',
    supportedCurrencies: 'USD ($)',
    supportedStores: 'AE,AF,AG,AI,AM,AN,AO,AR,AU,AW,AZ,BB,BD,BF,BH,BI,BJ,BM,BN,BO,BR,BT,BW,BY,BZ,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CX,DM,DO,EC,EG,EH,ER,ET,FJ,FK,FM,GA,GD,GF,GH,GL,GM,GN,GP,GQ,GT,GU,GW,GY,HK,HM,HN,HT,ID,IL,IN,IQ,IR,JM,JO,JP,KE,KG,KH,KI,KM,KN,KY,KZ,LA,LB,LC,LK,LR,LS,LY,MA,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MU,MV,MW,MY,MZ,NA,NC,NE,NF,NG,NI,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PM,PR,PS,PW,PY,QA,RE,RU,RW,SA,SB,SC,SD,SG,SH,SL,SN,SO,SR,ST,SV,SY,SZ,TC,TD,TH,TJ,TK,TL,TM,TO,TR,TT,TV,TW,UA,US,UZ,VC,VG,VI,VN,VU,WF,WS,YE,ZA',
    defaultCurrency: 'USD',
  },
];
