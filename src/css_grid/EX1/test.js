{
    const callTo = document.querySelector('.cta');
    const colOne = document.querySelector('.col-1');
    const colTwo = document.querySelector('.col-2');
    const colThree = document.querySelector('.col-3');
    const hidden = document.querySelector('.hide');

    //document width
    let docWidth = document.body.clientWidth || document.documentElement.clientWidth;

    //blue box top positions
    let boxOne = colOne.offsetTop;
    let boxTwo = colTwo.offsetTop;
    let boxThree = colThree.offsetTop;


    //animate call to action box
    function animate() {
        callTo.classList.add('call-reveal');
        callTo.style.margin = '25px 5px 25px 5px';
    }
    //animate .col-one when scroll to .col-one
    function animateDos() {
        if (window.pageYOffset > boxOne) {
            colOne.classList.add('reveal');
            colOne.style.opacity = 1;
        }
    }
    //animate .col-two when scroll to .col-two
    function animateThree() {
        if (window.pageYOffset > boxTwo) {
            colTwo.classList.add('reveal');
            colTwo.style.opacity = 1;
        }
    }
    //animate .col-three when scroll to .col-three
    function animateFour() {
        if (window.pageYOffset > boxThree) {
            colThree.classList.add('reveal');
            colThree.style.opacity = 1;
        }
    }

    //animate blue column cards
    function animateTwo() {
        setTimeout(() => {
            colOne.classList.add('reveal');
            colOne.style.opacity = 1;
        }, 1500);
        setTimeout(() => {
            colTwo.classList.add('reveal');
            colTwo.style.opacity = 1;
        }, 3000);
        setTimeout(() => {
            colThree.classList.add('reveal');
            colThree.style.opacity = 1;
        }, 4500);
    }




    //Trigger animation by window scroll event
    window.onscroll = function () { animateScroll() };

    //full animation function by document width for responsive design
    function animateScroll() {
        if (docWidth >= 900) {
            animate();
            animateTwo();
            hidden.style.opacity = 1;
        } else if (docWidth < 899) {
            animate();
            animateDos();
            animateThree();
            animateFour();
            hidden.style.opacity = 1;
        } else {
            console.log(`nothing happened`);
        }
    }
}
