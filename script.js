const clock = document.getElementById('tic-tac');

function WatchDisplay() {
    function watch(){
        let  ourTime = new Date();
        let hr = ourTime.getHours();
        let mm = ourTime.getMinutes(); 
        let sc = ourTime.getSeconds();
        if (hr < 10) hr = '0' + hr;
        if (mm < 10) mm = '0' + mm;
        if (sc < 10) sc = '0' + sc;
        return ourTime = `${hr} : ${mm} : ${sc}`;
    }

    function secondWatch(){ 
        let usTime = new Date();
        return usTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    }
    
    function firstTypeOfWatch() {
        oneInterval = setInterval(() => {
            clock.textContent = watch();
        }, 0);
    }

    function secondTypeOfWatch() {
        twoInterval = setInterval(() => {
            clock.textContent = secondWatch();
        }, 0);
    }
    
    return {
        firstTypeOfWatch,
        secondTypeOfWatch
    };
}

const twelfthHour = document.getElementById('twelfth-hour');
const twentyFourHour = document.getElementById('twentyfour-hour');
const watchDisplayed = new WatchDisplay();

twelfthHour.addEventListener('click', function(e) {
    e.preventDefault();
    watchDisplayed.secondTypeOfWatch();
    clearInterval(oneInterval);
})

twentyFourHour.addEventListener('click', function(e) {
    e.preventDefault();
    watchDisplayed.firstTypeOfWatch();
    clearInterval(twoInterval);
});



