const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter{
    constructor(curSpeed, warning){
        privateSpeed.set(this, curSpeed);
        privateWarning.set(this, warning);
    }
    accelerate(value){
        const maxSpeed = 200;
        let curSpeed = privateSpeed.get(this);
        curSpeed += value;
        console.log(`Current speed: ${curSpeed} km/h`);
        privateSpeed.set(this, curSpeed);

        if (curSpeed > maxSpeed) {
            privateWarning.get(this)();
            privateSpeed.set(this, maxSpeed);
            console.log(`Current speed: ${privateSpeed.get(this)} km/h`);
        }
    }
}