setInterval(() => {
    d = new Date();
    Hour_time = d.getHours();
    Min_time = d.getMinutes();
    Sec_time = d.getSeconds();
    H_rotation = 30*Hour_time + Min_time/2;
    M_rotation = 6*Min_time;
    S_rotation = 6*Sec_time;

    Hour.style.transform = `rotate(${H_rotation}deg)`;
    Minute.style.transform = `rotate(${M_rotation}deg)`;
    Second.style.transform = `rotate(${S_rotation}deg)`;
}, 1000);