"use strict";
let add = document.querySelectorAll('.card-size img');
let right = document.querySelector('#right');
let left = document.querySelector('#left');
let count = 1;







// (count==1)? add[0].classList.toggle('active'):'';
right.addEventListener('click', RightSideSwitch);
left.addEventListener('click', LeftSideSwitch);

if (document.getElementById("slider")) {
    count = 0;
    const slider = () => {
        document.querySelector("#slider").classList.add('fade-in');

        RightSideSwitch()
    };
    slider(); // Start slider immediately
    setInterval(slider, 3000); // Slide every 4 seconds
}
function RightSideSwitch() {
    for (let i = count; i < add.length;) {
        add[i].classList.toggle('active');
        ((i != 0) ? i-- : i = 2);
        add[i].classList.add('active');
        add[1].style.transition = "all 1000s";
        if (count == add.length - 1) {
            count = 0;
            break;
        }
        count++;
        break;
    }
}
function LeftSideSwitch() {

    (count == 2) ? count -= 3 : '';

    for (let i = ++count; i < add.length;) {
        add[i].classList.toggle('active');
        ((i == 2) ? i = 0 : (i == 1) ? i++ : (i != 0) ? i-- : i++);
        add[i].classList.toggle('active');
        if (count == add.length - 1) {
            count = 0;
            break;
        }
        count++
        (count == 2) ? count = -1 : '';
        break;
    };
}



