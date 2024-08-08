export const useHelperGrid = (): void => {
  const grid = document.querySelector('.js-helper-grid-area') as HTMLElement | null;
  const lines = document.querySelectorAll('.js-helper-grid-lines') as NodeListOf<HTMLElement>;
  let isGridVisible = false;
  const size = 1.6667;

  if (!grid || lines.length === 0) return;

  // グリッドラインのレンダリング
  const renderLinePosition = (): void => {
    lines.forEach((line, index) => {
      line.style.left = `calc(${index + 1} * ${size}vw)`;
    });
  };

  renderLinePosition();

  window.addEventListener('resize', () => {
    renderLinePosition();
  });

  // "Dキー"押下によるグリッドの表示・非表示
  document.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.code === 'KeyD') {
      if (!isGridVisible) {
        grid.classList.remove('is-invisible');
        isGridVisible = true;
      } else {
        grid.classList.add('is-invisible');
        isGridVisible = false;
      }
    }
  });
};
