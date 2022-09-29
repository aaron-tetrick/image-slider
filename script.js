function checkBtns(btn, element) {
    if(btn.checked === true && element === 'prev') {
       btn.previousElementSibling.checked = true;
    }  
    
    if (btn.checked === true && element === 'next') {
        btn.nextElementSibling.checked = true;
    }
 }

document.querySelector('.prev').addEventListener('click', e => {
    const first = document.querySelector('.first');
    radioBtns = Array.from(document.querySelectorAll('.radio-btn'));

    for (i=0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked === true) {
            if (radioBtns[i].id === 'radio1') {
            const lastImg = document.getElementById(`radio${[radioBtns.length]}`)
            radioBtns[i].checked = false;
            lastImg.checked = true;
            return;
            } else {
                checkBtns(radioBtns[i], 'prev');
            }
        }
    }
 
    first.style.marginLeft = `calc(${first.style.marginLeft} + 20%)`;
});

document.querySelector('.next').addEventListener('click', e => {
    const first = document.querySelector('.first');
    radioBtns = Array.from(document.querySelectorAll('.radio-btn'));

    for (i=0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked === true) {
            if (radioBtns[i].id === `radio${radioBtns.length}`) {
            const firstImg = document.getElementById('radio1');
            radioBtns[i].checked = false;
            firstImg.checked = true;
            console.log(firstImg);
            return;
            } else {
                checkBtns(radioBtns[i], 'next');
                return;
            }
        }
    }

    first.style.marginLeft = `calc(${first.style.marginLeft} - 20%)`;

});

