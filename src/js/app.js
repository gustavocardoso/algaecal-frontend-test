import moment from 'moment-timezone';

async function app() {
  // Fetch data from API
  const response = await fetch('https://www.algaecal.com/wp-json/acf/v3/options/options');
  const data = await response.json();

  return {
    handleProductsBoxes() {
      // Get all product boxes
      const productBoxes = document.querySelectorAll('.product-box .percent-off');
      // Check if the total savings amount is greater than 0. If not, hide the badge.
      productBoxes.forEach((product) => {
        const { totalSavingsAmount } = product.dataset;
        if (parseInt(totalSavingsAmount, 10) === 0) {
          product.classList.add('hide');
        }
      });
    },

    handleOfficeHours() {
      // Get office hours
      const officeHours = data.acf.office_hours;
      // Get Vancouver current hour from moment.js
      const vancouverHour = moment().tz('America/Vancouver').format('H');
      const currentDay = new Date().getDay();
      const startingHour = parseInt(parseInt(officeHours[currentDay].starting_time, 10) / 100, 10);
      const closingHour = parseInt(parseInt(officeHours[currentDay].closing_time, 10) / 100, 10);
      const callCenterMsgElement = document.querySelector('.speak-to-our-bone-specialists');
      if (vancouverHour >= startingHour && vancouverHour < closingHour) {
        callCenterMsgElement.classList.add('now-open');
      }
    },

    handleHighlightVideo() {
      const videoOverlay = document.querySelector('.play-button-overlay');
      videoOverlay.addEventListener('click', () => {
        /* eslint no-underscore-dangle: 0 */
        window._wq = window._wq || [];
        window._wq.push({
          id: 'zwflowymel',
          onReady(video) {
            video.play();
            videoOverlay.remove();
          },
        });
      }, false);
    },

    handleGuaranteeModal() {
      // get modal data
      const modalTitle = data.acf['7yr_title'];
      const modalContent = data.acf['7yr_full_copy'];
      const modalTitleElement = document.querySelector('#guarantee .modal-title');
      const modalContentElement = document.querySelector('#guarantee .modal-body');
      // set content
      modalTitleElement.innerHTML = modalTitle;
      modalContentElement.innerHTML = modalContent;
    },
  };
}

export default app;
