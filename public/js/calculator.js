var a = 0;
var b = 0;

var c = false;


let ADD;
let SUB;
let DVIDE;
let MULTIPLY;
let DEFAULT;

const compareType = {
    ADD, SUB, DVIDE, MULTIPLY, DEFAULT
}


var type = compareType.DEFAULT;


import {myFunction, number} from './number.js';

/***
 *  새로운 값은 n 변수,
 *  초기 값을 a로 지정하고
 *  계산할 기호가 붙은 다음 값을 b로 지정후,
 *  Equal (=) 버튼을 클릭하면 해당 값들이 타입에 따라
 *  계산이 되어 출력이 되는 형태이다.
 */

window.onload = function () {
    let obj = document.getElementById('1');
    obj?.addEventListener("click", function () {
        append(1)
    }, false);

    let two = document.getElementById('2');
    two?.addEventListener("click", function () {
        append(2)
    }, false);

    let three = document.getElementById('3');
    three?.addEventListener("click", function () {
        append(3)
    }, false);

    let four = document.getElementById('4');
    four?.addEventListener("click", function () {
        append(4)
    }, false);

    let five = document.getElementById('5');
    five?.addEventListener("click", function () {
        append(5)
    }, false);


    let six = document.getElementById('6');
    six?.addEventListener("click", function () {
        append(6)
    }, false);

    let seven = document.getElementById('7');
    seven?.addEventListener("click", function () {
        append(7)
    }, false);

    let eight = document.getElementById('8');
    eight?.addEventListener("click", function () {
        append(8)
    }, false);


    let nine = document.getElementById('9');
    nine?.addEventListener("click", function () {
        append(9)
    }, false);

    let zero = document.getElementById('zero');
    zero?.addEventListener("click", function () {
        append(0)
    }, false);


    let plus = document.getElementById('plus');
    plus?.addEventListener("click", function () {
        add()
    }, false);

    let r = document.getElementById('reset');
    r?.addEventListener("click", function () {
        reset()
    }, false);


}


function append(n) {
    let plus = document.getElementsByTagName('h1')[0].innerHTML;

    if (!c) {
        if (n == 0) { //TODO 0 누를때 처음엔 안눌리게 해야됨. length 로 불러와서 하면 될듯?
            if (plus.length != 0) {
                if ((plus.length + 1 <= 16)) {
                    console.log("0 값이 추가가 되었습니다.")
                    document.querySelector(".result").append(n.toString());
                }
            }
        } else {
            if (plus.length == 1 && plus == "0") {
                $(".result").text(n.toString());
            } else if ((plus.length + 1 <= 16)) {
                document.querySelector(".result").append(n.toString());
            }
        }
    }
}


function reset() {
    $(".result").text("0");
}

function add() {
    type = compareType.ADD;
}

function subtract() {

}

function divide() {

}