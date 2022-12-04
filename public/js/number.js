var int;
var elementId;
import {register} from './KeyBoardListener.js';

export function number(elementId) {
    let obj = document.getElementById(elementId);
    obj?.addEventListener("click", myFunction, false);

}

export function myFunction() {
    console.log(int + " 값을 누름")

}

export function getButton() {
    return document.getElementById(this.elementId);
}

