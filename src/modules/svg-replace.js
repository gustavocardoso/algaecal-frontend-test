/**
 Ajax load svgs and add them to the page. Finds the file by data-svg-source={uri}
 */
export default function loadSVGs(classname = 'svg-replace') {
  Array.from(document.getElementsByClassName(classname)).forEach((el) => {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', el.getAttribute('data-svg-source'), true);
    ajax.send();
    ajax.onload = () => {
      const div = document.createElement('div');
      div.innerHTML = ajax.responseText;
      document.body.insertBefore(div, document.body.childNodes[0]);
    };
  });
}
