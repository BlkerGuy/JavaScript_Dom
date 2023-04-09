"use strict";
let add = document.querySelectorAll('.card-size img');
let right = document.querySelector('#right');
let left = document.querySelector('#left');
let count = 1;

right.addEventListener('click', RightSideSwitch);
left.addEventListener('click', LeftSideSwitch);

//Slider auto 
// if (document.getElementById("slider")) {
//     count = 0;
//     const slider = () => {
//         document.querySelector("#slider").classList.add('fade-in');

//         RightSideSwitch()
//     };
//     slider(); // Start slider immediately
//     setInterval(slider, 3000); // Slide every 4 seconds
// }

//Slide next img
add[0].classList.toggle('active');

function RightSideSwitch() {
    // (count<0)? count++:'';  
    debugger;
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




