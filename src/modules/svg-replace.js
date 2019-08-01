/**
 Ajax load svgs and add them to the page. Finds the file by data-svg-source={uri}
 @param {...number} num A positive or negative number
 */
export function loadSVGs(classname='svg-replace'){
    let els = document.getElementsByClassName(classname);

    for( let el of els) {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", el.getAttribute('data-svg-source'), true);
        ajax.send();
        ajax.onload = () => {
            let div = document.createElement("div");
            div.innerHTML = ajax.responseText;
            document.body.insertBefore(div, document.body.childNodes[0]);
        }
    }
}