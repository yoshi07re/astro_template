interface SwupInstance {
  hooks: {
    on(event: 'page:view', callback: () => void): void;
    off(event: 'page:view', callback: () => void): void;
  };
}

declare global {
  interface Window {
    swup?: SwupInstance;
  }
}

export const setupSwup = (customSetup: () => void, cleanUpFunction?: () => void) => {
  const setupSwupHook = () => {
    const swupInstance = window.swup;
    if (swupInstance && swupInstance.hooks) {
      const pageViewHandler = () => {
        if (cleanUpFunction) {
          cleanUpFunction();
        }
        customSetup();
      };

      swupInstance.hooks.on('page:view', pageViewHandler);

      // クリーンアップ関数のためのアンフック
      return () => {
        swupInstance.hooks.off('page:view', pageViewHandler);
      };
    }
  };

  // DOMContentLoaded 時に Swup フックをセットアップ
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSwupHook);
  } else {
    setupSwupHook();
  }

  // Swup が後から有効になった場合に備える
  document.addEventListener('swup:enable', setupSwupHook, { once: true });
};
