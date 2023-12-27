const showtimes = document.querySelector('.showtime');
setInterval(() =>{
    const date = new Date();
    showtimes.innerHTML = (date.toLocaleTimeString());
},1000);

// console.log(newdate);
// const clockshow = document.querySelector('.clockshow');
// clockshow.innerHTML = newdate;