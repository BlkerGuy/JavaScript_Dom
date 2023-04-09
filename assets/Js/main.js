"use strict";

let add = document.querySelectorAll('.card-size img');
let right = document.querySelector('#right');
let left = document.querySelector('#left');
let count = 1;


// Customize Time: default 4 sec
let setSlideSpeedTime=0;

right.addEventListener('click', RightSideSwitch);
left.addEventListener('click', LeftSideSwitch);
add[0].classList.remove('active');



//Slide next img
function RightSideSwitch() {
add[0].classList.add('active');

        for (let i = count; i < add.length;) {
            add[i].classList.toggle('active');
            ((i != 0) ? i-- :(i==0)? i=2 :''); 
            add[i].classList.add('active');
            if (count == add.length - 1) {
                count = 0;
                break;
            }
            count++;
            break;
        }
    
}
//Slide back img
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
        break;
    };
}

// Slider auto 
if (document.querySelector('#slider')) {
    const slider = () => {
        document.querySelector("#slider").classList.add('fade-in');
        setInterval(RightSideSwitch,(setSlideSpeedTime!=0)? setSlideSpeedTime:4000);
    };
    slider();
}



