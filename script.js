(function () {
    let screen = document.getElementById('screen');
    const equal = document.querySelector('.btn-equal');
    const clear = document.querySelector('.btn-clear');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', function (event) {
            let value = event.target.innerText;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function () {
        if(screen.value === ''){
            screen.value = '';
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click', function () {
        screen.value = '';
    })
})();