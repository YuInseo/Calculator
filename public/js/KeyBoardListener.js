let test;

export function register(zero) {
    document.addEventListener("keypress", press, false);
    test = zero;
}

function press(event) {
    if (test != null) {
        console.log(test)
        if (event.keyCode == test) {
            console.log(event.keyCode + "값 추가됨.")
        }
    }
}