/*
create a program in JavaScript where the startTimer function calls the callback every interval 
milliseconds. 
The callback should then receive the counter parameter and return true if the timer 
continues operating or false if the timer stops operating. 
interval milliseconds after the timer is started, the callback should be called the first time. 
The first time callback is called, the counter should equal to 1, 
the second time equal to 2 and so on.

Right now, my startTimer function isn't working correctly and I'm not exactly sure where. 
The output should print the numbers 1,2,3,4,5 in 50ms intervals. Can anyone help me?
 */

//setInterval sets up a recurring timer
//clearInterval to stop it from firing.
// var interval = setInterval(doStuff, 2000); // 2000 ms = start after 2sec 
// function doStuff() {
//   alert('this is a 2 second warning');
//   clearInterval(interval);
// }
//solution1
function startTimer(callback, interval) {
  let count = 0;
  let intervalId = setInterval(() => {
    // console.log('count', count)
    count++;
    if (!callback(count)) {   //if (true/false)
// console.log('end callback')
      clearInterval(intervalId);
    }
  }, interval);
}

function callback(counter) {
  // console.log('callback')
  console.log(counter);
  return counter < 5;
}



// Expected: 1, 2, 3, 4, 5 with 50ms interval.
console.log(startTimer(callback, 50));