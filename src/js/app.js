function app() {
  return {
    handleProductsBoxes() {
      const productBoxes = document.querySelectorAll('.product-box .percent-off');
      productBoxes.forEach((product) => {
        const { totalSavingsAmount } = product.dataset;
        if (parseInt(totalSavingsAmount, 10) === 0) {
          product.classList.add('hide');
        }
      });
    },
  };
}

export default app;
