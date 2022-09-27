document.querySelector('.prev').addEventListener('click', e => {
    const first = document.querySelector('.first')
    const radio1 = document.querySelector('#radio1')
    const radio2 = document.querySelector('#radio2')
    
    console.log(e.target);
    console.log(first.style.marginLeft)
    console.log(radio2.style.marginLeft)

    console.log(first.style.marginLeft);

    if (first.style.marginLeft === 0) {
        console.log('PLZ')
    } else {
    first.style.marginLeft = `calc(${first.style.marginLeft} + 20%)`;
    console.log("HIII", first.style.marginLeft)
}

    function checkBtns(btn) {
        if(btn.checked === true) {
            btn.previousElementSibling.checked = true;
        }
    }

    checkBtns(radio2);
});

document.querySelector('.next').addEventListener('click', e => {
    const first = document.querySelector('.first');
    const radio1 = document.querySelector('#radio1');
    const radio2 = document.querySelector('#radio2');
    
    console.log(e.target);

    console.log(first.style.marginLeft);

    if (first.style.marginLeft === '') {
        first.style.marginLeft = '0%';
    }
    first.style.marginLeft = `calc(${first.style.marginLeft} - 20%)`;

    function checkBtns(btn) {
        if(btn.checked === true) {
            btn.nextElementSibling.checked = true;
        }
    }

    checkBtns(radio1);


});

function checkRadio1() {
    const radio1 = document.querySelector('#radio1');
    if (radio1.checked === false) {
        radio1.checked = true;
    }
}

checkRadio1();