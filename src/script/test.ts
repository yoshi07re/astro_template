//TODO ターゲットmyComponentに
// import Alpine from 'alpinejs';
// import gsap from 'gsap';

// document.addEventListener('alpine:init', () => {
//   Alpine.data('myComponent', () => ({
//     animation: null as gsap.core.Tween | null,

//     init() {
//       // 初期化処理
//       console.log('Alpine component initialized');

//       const target = this.$el;
//       if (target) {
//         gsap.set(target, { scale: 0.4 });
//         this.animation = gsap.to(target, {
//           scale: 1,
//           duration: 1,
//           ease: 'power2.out',
//         });
//       }
//     },
//     destroy() {
//       // クリーンアップ処理
//       console.log('Alpine component destroyed');

//       if (this.animation) {
//         this.animation.kill();
//         this.animation = null;
//       }
//     },
//   }));
// });

//TODO テストのため雑
import Alpine from 'alpinejs';
import gsap from 'gsap';

document.addEventListener('alpine:init', () => {
  Alpine.data('myComponent', () => ({
    animation: null as gsap.core.Tween | null,
    init() {
      // 初期化処理
      console.log('Alpine component initialized');
      const target = document.querySelectorAll('.js-test');
      if (target.length) {
        gsap.set(target, { opacity: 0, scale: 0.4 });
        this.animation = gsap.to(target, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        });
      }
      // 追加のアニメーション設定
      const targetScale = gsap.utils.toArray<HTMLElement>('.js-test-scale');
      const targetFade = gsap.utils.toArray<HTMLElement>('.js-test-fade');
      const targetMove = gsap.utils.toArray<HTMLElement>('.js-test-move');
      if (targetScale.length) {
        targetScale.forEach((parent: HTMLElement) => {
          const children = gsap.utils.toArray<HTMLElement>(parent.children);
          gsap.set(children, { scale: 0.4, opacity: 0 });
          gsap.to(children, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: {
              amount: 1,
              ease: 'none',
            },
          });
        });
      }
      if (targetFade.length) {
        gsap.set(targetFade, { opacity: 0 });
        gsap.to(targetFade, {
          opacity: 1,
          duration: 1.5,
          ease: 'power1.inOut',
          stagger: 0.2,
        });
      }
      if (targetMove.length) {
        gsap.set(targetMove, { x: -100, opacity: 0 });
        gsap.to(targetMove, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.3,
        });
      }
    },
    destroy() {
      // クリーンアップ処理
      console.log('Alpine component destroyed');
      if (this.animation) {
        this.animation.kill();
        this.animation = null;
      }
    },
  }));
});

//TODO animation遷移後発火調整
// import Alpine from 'alpinejs';
// import gsap from 'gsap';

// document.addEventListener('alpine:init', () => {
//   Alpine.data('myComponent', () => ({
//     animation: null as gsap.core.Tween | null,
//     init() {
//       console.log('Alpine component initialized');
//       this.setupAnimation();
//     },
//     setupAnimation() {
//       if (window.isSwupAnimating) {
//         window.addEventListener('swup:animation:finished', () => this.startAnimation(), { once: true });
//       } else {
//         this.startAnimation();
//       }
//     },
//     startAnimation() {
//       console.log('Alpine component animation started');
//       this.animateTest();
//       this.animateScale();
//       this.animateFade();
//       this.animateMove();
//     },
//     animateTest() {
//       const target = document.querySelectorAll('.js-test');
//       if (target.length) {
//         gsap.set(target, { scale: 0.4 });
//         this.animation = gsap.to(target, {
//           scale: 1,
//           duration: 1,
//           ease: 'power2.out',
//         });
//       }
//     },
//     animateScale() {
//       const targetScale = gsap.utils.toArray<HTMLElement>('.js-test-scale');
//       if (targetScale.length) {
//         targetScale.forEach((parent: HTMLElement) => {
//           const children = gsap.utils.toArray<HTMLElement>(parent.children);
//           gsap.set(children, { scale: 0.4, opacity: 0 });
//           gsap.to(children, {
//             scale: 1,
//             opacity: 1,
//             duration: 0.5,
//             ease: 'power2.out',
//             stagger: {
//               amount: 1,
//               ease: 'none',
//             },
//           });
//         });
//       }
//     },
//     animateFade() {
//       const targetFade = gsap.utils.toArray<HTMLElement>('.js-test-fade');
//       if (targetFade.length) {
//         gsap.set(targetFade, { opacity: 0 });
//         gsap.to(targetFade, {
//           opacity: 1,
//           duration: 1.5,
//           ease: 'power1.inOut',
//           stagger: 0.2,
//         });
//       }
//     },
//     animateMove() {
//       const targetMove = gsap.utils.toArray<HTMLElement>('.js-test-move');
//       if (targetMove.length) {
//         gsap.set(targetMove, { x: -100, opacity: 0 });
//         gsap.to(targetMove, {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           ease: 'back.out(1.7)',
//           stagger: 0.3,
//         });
//       }
//     },
//     destroy() {
//       console.log('Alpine component destroyed');
//       if (this.animation) {
//         this.animation.kill();
//         this.animation = null;
//       }
//     },
//   }));
// });
