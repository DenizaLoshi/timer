let intervalId;
function shfaqOren() {
    const clock = new Date();
    const ora = clock.toLocaleTimeString();
    document.getElementById('ora').innerHTML = ora;
}
function startInterval() {
    shfaqOren();
    intervalId = setInterval(shfaqOren, 1000);
}
function stopInterval(){
    clearInterval(intervalId)
}