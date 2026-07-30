// 1. HTML elements ko select karna (Aapki CSS classes ke hisaab se)
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.min'); /* Ensure your minute hand div has this class */
const secondEl = document.querySelector('.sec');

function updateClock() {
    // 2. Current Time get karna
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    
    // 3. Smooth Rotation Calculation (Real watch physics)
    /* Second hand normal 360 degree ghumegi */
    const secondDeg = (second / 60) * 360;
    
    /* Minute hand seconds ke hisaab se thodi-thodi aage badhegi */
    const minuteDeg = ((minute + second / 60) / 60) * 360;
    
    /* Hour hand minutes ke hisaab se smoothly aage badhegi (12 format ke liye % 12 use kiya) */
    const hourDeg = ((hour % 12 + minute / 60) / 12) * 360;
    
    // 4. CSS mein Rotation Apply karna
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

// 5. Har 1 second (1000ms) mein clock ko update karna
setInterval(updateClock, 1000);

// 6. Page load hote hi turant time dikhane ke liye function call
updateClock();
