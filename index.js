// my initial method


// //setting initial count
// let count = 0;
// const number = document.getElementById('span'),
// decrease = document.querySelector('.decrease'),
// reset = document.querySelector('.reset'),
// increase = document.querySelector('.increase');

// increase.addEventListener('click',function(){
//     if (count<0) {
//         return
//     } else {
//         increaseNumber();
//         span.innerText = count;
//     }
// });
// decrease.addEventListener('click',function(){
//     if (count<=0) {
//         return
//     } else {
//         decreaseNumber();
//         span.innerText = count;
//     }
    
// });
// reset.addEventListener('click',function(){
//         resetCounter();
//         span.innerText = count;
// });

// function increaseNumber(){
//     count += 1;
//     console.log(count);
// }
// function decreaseNumber(){
//     count -= 1;
//     console.log(count);
// }
// function resetCounter(){
//    count = 0;
// }






// efficient method
let count = 0;
const number = document.getElementById('span'),
btns = document.querySelectorAll('.btn');


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        let btnClass = e.currentTarget.classList;
        if (btnClass.contains('increase')) {
            count++;
        } 
        else if(btnClass.contains('decrease')) {
            count--;
        }
        else{
            count = 0;
        }

        if (count>0) {
           span.style.color = 'green'
        }
        if (count<0) {
           span.style.color = 'red'
        }
        if (count===0) {
           span.style.color = 'black'
        }
        span.innerText = count;
    })
})
