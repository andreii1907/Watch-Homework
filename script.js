
function WatchDisplay() {
    function watch(){
        let  today = new Date();
        let hr = today.getHours();
        let mm = today.getMinutes(); 
        let sc = today.getSeconds();
        if (hr < 10) hr = '0' + hr;
        if (mm < 10) mm = '0' + mm;
        if (sc < 10) sc = '0' + sc;
        today = `${hr} : ${mm} : ${sc}`;
        return today;
    }
        
    function ticTac() {
        const clock = document.getElementById('tic-tac');
        console.log(clock)
        setInterval(() => {
            clock.textContent = watch();
        }, 1000);
    }

    return ticTac();
}

const watchDisplayed = new WatchDisplay();




