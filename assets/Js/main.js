"use strict";
let add = document.querySelectorAll('.card-size img');
let right = document.querySelector('#right');
let left = document.querySelector('#left');
let count = 1;

switcher();
function switcher() {


    right.addEventListener('click', () => {
        // debugger;
        for (let i = count; i < add.length;) {
            add[i].classList.toggle('active');
            ((i != 0) ? i-- : i = 2);
            add[i].classList.add('active');
            if (count == add.length - 1) {
                count = 0;
                break;
            }
            count++;
            break;
        }
    })


    left.addEventListener('click', () => {
        debugger;
        (count == 2)? count-=3:'';

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
        }
    })
    // left.addEventListener('click', () => {

    //     debugger;
    //     for (let i = ++count; i < add.length;) {
    //         add[i].classList.toggle('active');
    //         ((i==2)? i=0 :(i != 0) ? i-- : i++);
    //         add[i].classList.toggle('active');
    //         if (count == add.length - 1) {
    //             count = 0;
    //             break;
    //         }
    //         count++
    //         (count==2)? count=-1:'';
    //         break;
    //     }
    // })

    add[0].classList.toggle('active');

}




