let d = new Date();
function tick() {
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(tick, 1000);