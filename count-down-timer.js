console.log("Time is money... and this timer’s free!")
let countdown = 10;

function startCountdown() {
    let timer = setInterval(() => {
        console.log(`נשארו ${countdown} שניות...`);

        if (countdown <= 0) {
            clearInterval(timer); 
            console.log("הטיימר נגמר! 🎉");
        } else {
            countdown--;
        }
    }, 1000); 
}

startCountdown();