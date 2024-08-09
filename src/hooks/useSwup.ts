// import SwupHeadPlugin from '@swup/head-plugin';
// import SwupPreloadPlugin from '@swup/preload-plugin';
// import SwupScrollPlugin from '@swup/scroll-plugin';
// import Swup from 'swup';

// export const useSwup = (): void => {
//   new Swup({
//     plugins: [
//       new SwupHeadPlugin(),
//       new SwupPreloadPlugin(),
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
// };

//TODO if gsap animation
import SwupHeadPlugin from '@swup/head-plugin';
import SwupJsPlugin from '@swup/js-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import gsap from 'gsap';
import Swup from 'swup';

export const useSwup = (): void => {
  new Swup({
    plugins: [
      new SwupHeadPlugin(),
      new SwupPreloadPlugin(),
      new SwupScrollPlugin({
        animateScroll: {
          betweenPages: false,
          samePageWithHash: true,
          samePage: true,
        },
      }),
      new SwupJsPlugin({
        // overlay svg path animation
        // animations: [
        //   {
        //     from: '(.*)',
        //     to: '(.*)',
        //     out: async () => {
        //       await gsap
        //         .timeline()
        //         .set('.js-overlayPath', {
        //           // 初めにアニメーションするパス（透明なパス）
        //           attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
        //         })
        //         // 扇型を黒く塗りつぶしたパス
        //         .to('.js-overlayPath', {
        //           duration: 0.5,
        //           ease: 'power4.in',
        //           attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
        //         })
        //         // 真っ黒なパス
        //         .to('.js-overlayPath', {
        //           duration: 0.3,
        //           ease: 'power2',
        //           attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
        //         });
        //     },
        //     in: async () => {
        //       await gsap
        //         .timeline()
        //         // 真っ黒なパス
        //         .set('.js-overlayPath', {
        //           attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
        //         })
        //         // 扇型の余白部分を黒く塗りつぶしたパス
        //         .to('.js-overlayPath', {
        //           duration: 0.3,
        //           ease: 'power2.in',
        //           attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' },
        //         })
        //         // 透明なパス
        //         .to('.js-overlayPath', {
        //           duration: 0.5,
        //           ease: 'power4',
        //           attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        //         });
        //     },
        //   },
        // ],
        animations: [
          {
            from: '(.*)',
            to: '(.*)',
            out: async () => {
              await gsap.to('#swup', { opacity: 0, duration: 0.25, ease: 'power1.inOut' });
            },
            in: async () => {
              await gsap.fromTo('#swup', { opacity: 0 }, { opacity: 1, duration: 1.25, ease: 'power1.inOut' });
            },
          },
        ],
      }),
    ],
    // containers: ['#swup'],
    animateHistoryBrowsing: true,
  });
};

// import SwupHeadPlugin from '@swup/head-plugin';
// import SwupJsPlugin from '@swup/js-plugin';
// import SwupPreloadPlugin from '@swup/preload-plugin';
// import SwupScrollPlugin from '@swup/scroll-plugin';
// import gsap from 'gsap';
// import Swup from 'swup';

// import { useLenis } from '@/hooks/useLenis';

// export const useSwup = (): void => {
//   const lenis = useLenis();

//   const swup = new Swup({
//     plugins: [
//       new SwupHeadPlugin(),
//       new SwupPreloadPlugin(),
//       new SwupScrollPlugin({
//         animateScroll: {
//           betweenPages: false,
//           samePageWithHash: true,
//           samePage: true,
//         },
//       }),
//       new SwupJsPlugin({
//         animations: [
//           {
//             from: '(.*)',
//             to: '(.*)',
//             out: async () => {
//               if (lenis) {
//                 lenis.stop();
//               }
//               await gsap.to('#swup', { opacity: 0, duration: 0.25, ease: 'power1.inOut' });
//             },
//             in: async () => {
//               if (lenis) {
//                 lenis.start();
//               }
//               await gsap.fromTo('#swup', { opacity: 0 }, { opacity: 1, duration: 1.25, ease: 'power1.inOut' });
//             },
//           },
//         ],
//       }),
//     ],
//     animateHistoryBrowsing: true,
//   });

//   // ページ遷移開始時にbodyにスタイルを追加
//   swup.hooks.on('animation:out:start', () => {
//     document.body.style.scrollbarGutter = 'stable';
//   });

//   // ページ遷移完了時にスタイルを削除
//   swup.hooks.on('animation:in:end', () => {
//     document.body.style.scrollbarGutter = ''; // 必要に応じて 'auto' や 'initial' を設定
//   });
// };
