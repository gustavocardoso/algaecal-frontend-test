import moment from 'moment-timezone';

function app() {
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

    async handleOfficeHours() {
      // Fetch data from API
      const response = await fetch('https://www.algaecal.com/wp-json/acf/v3/options/options');
      const data = await response.json();
      // Get office hours
      const officeHours = data.acf.office_hours;
      // Get Vancouver current hour from moment.js
      const vancouverHour = moment().tz('America/Vancouver').format('H');
      const currentDay = new Date().getDay();
      const startingHour = parseInt(parseInt(officeHours[currentDay].starting_time, 10) / 100, 10);
      const closingHour = parseInt(parseInt(officeHours[currentDay].closing_time, 10) / 100, 10);
      const callCenterMsgElement = document.querySelector('.speak-to-our-bone-specialists');

      if (vancouverHour <= startingHour || vancouverHour >= closingHour) {
        callCenterMsgElement.classList.add('closed-now');
      }
    },
  };
}

export default app;
