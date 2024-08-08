import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// LenisManagerクラスの定義
class LenisManager {
  private static instance: LenisManager;
  private lenis: Lenis | null = null;

  private constructor() {
    this.initializeLenis();
  }

  public static getInstance(): LenisManager {
    if (!LenisManager.instance) {
      LenisManager.instance = new LenisManager();
    }
    return LenisManager.instance;
  }

  private initializeLenis() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // gsapとScrollTriggerを登録
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    // アロー関数でwrapしてScrollTrigger.updateを呼び出し
    const onScroll = () => ScrollTrigger.update();
    this.lenis.on('scroll', onScroll);

    // gsapのtickerを用いてLenisのrafを更新
    const update = (time: number) => {
      this.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update as (this: void, time: number) => void);
    gsap.ticker.lagSmoothing(0);

    // ウィンドウのアンロード時にクリーンアップ
    window.addEventListener('beforeunload', () => this.cleanup());
  }

  public getLenis(): Lenis | null {
    return this.lenis;
  }

  private cleanup() {
    this.lenis?.destroy();
    gsap.ticker.remove((time: number) => {
      this.lenis?.raf(time * 1000);
    });
  }
}

// LenisManagerのインスタンスを取得する関数
export const useLenis = (): Lenis | null => {
  return LenisManager.getInstance().getLenis();
};
