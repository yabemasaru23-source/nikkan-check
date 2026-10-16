/* アクセス測定（Google Analytics 4）
 * GA_ID に GA4 の「測定ID」（G-XXXXXXXXXX）を入れると測定が始まる。空のあいだは何もしない。
 * 送るのは「ページを見た」「チェックした（結果の型）」「シェアを押した」だけ。生年月日や呼び名は送らない。
 */
(() => {
  'use strict';
  const GA_ID = 'G-TLPRG6DJWE';   // GA4 プロパティ「日干チェック」の測定ID
  window.qmTrack = () => {};
  if (!/^G-[A-Z0-9]+$/.test(GA_ID)) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.append(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
  window.qmTrack = (name, params) => gtag('event', name, params || {});
})();
