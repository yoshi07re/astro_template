import SwupHeadPlugin from '@swup/head-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import Swup from 'swup';

export const useSwup = (): void => {
  new Swup({
    plugins: [
      new SwupHeadPlugin(),
      new SwupScrollPlugin({
        animateScroll: {
          betweenPages: false,
          samePageWithHash: true,
          samePage: true,
        },
      }),
    ],
    containers: ['#swup'],
    animateHistoryBrowsing: true,
  });
};

// import SwupHeadPlugin from '@swup/head-plugin';
// import SwupScrollPlugin from '@swup/scroll-plugin';
// import Swup from 'swup';

// export const useSwup = (): void => {
//   const swup = new Swup({
//     plugins: [
//       new SwupHeadPlugin(),
//       new SwupScrollPlugin({
//         animateScroll: {
//           betweenPages: false,
//           samePageWithHash: true,
//           samePage: true,
//         },
//       }),
//     ],
//     containers: ['#swup'],
//     animateHistoryBrowsing: true,
//   });

//   if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
//     window.history.scrollRestoration = 'manual';
//   }

//   // スクロール位置を保存するオブジェクト
//   const scrollValues: { [key: string]: number } = {};

//   // イベントリスナーの追加
//   swup.hooks.on('link:click', () => {
//     scrollValues[window.location.href] = window.scrollY;
//     console.log(`Saved scroll position: ${window.scrollY} for URL: ${window.location.href}`);
//   });

//   swup.hooks.on('animation:out:end', () => {
//     // setTimeout(() => {
//     //   window.scrollTo(0, scrollValues[window.location.href] || 0);
//     // }, 1000);
//     window.scrollTo(0, scrollValues[window.location.href] || 0);
//     console.log(`Restoring scroll position: ${scrollValues[window.location.href] || 0} for URL: ${window.location.href}`);
//   });
// };
