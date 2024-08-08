export const useFillHeight = () => {
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  const resizeObserver = new ResizeObserver(() => {
    setFillHeight();
  });

  const initialize = () => {
    resizeObserver.observe(document.documentElement);
    setFillHeight();
  };

  const disconnect = () => {
    resizeObserver.disconnect();
  };

  // 初期化を呼び出し
  initialize();

  // 必要に応じて後でリスナーを解除するためにdisconnectをエクスポート
  return { disconnect };
};
