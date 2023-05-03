//servo S1
//levý motor M1
//pravý motor M4

/*senzory 
center:P15
pravý senzor :P13
levý senzor: P14*/

/*
P16 4x RGB
ECHO oranžová P1
TRIGR bílá P2*/

let leftIdx = 0
let rightInx = 0
const speeds = [0, 30, 50, 70, 85, 100]
input.onButtonPressed(Button.A, function () {
    PCAmotor.MotorRun(PCAmotor.Motors.M1,
        speeds[++leftIdx % speeds.length])
    basic.showNumber(speeds[leftIdx])
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    PCAmotor.MotorRun(PCAmotor.Motors.M4,
        speeds[++rightInx % speeds.length])
    basic.showNumber(speeds[rightInx])
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStopAll()
    leftIdx = rightInx = 0
})


//intervaly
console.log(String.fromCharCode(64))
const data = "&\fgfgdf";
console.log(data.charCodeAt(1))
console.log(data.charCodeAt(0))

function pack(x: number, y: number, z: number): number {
    let xmod = x + 1024; //posun do kladneho intervalu
    xmod = Math.floor(xmod / 0); //redukce intervalu  <0; 255>

    let ymod = y + 1024;
    let zmod = z + 1024;

    String.fromCharCode(64);
    "&\fgfgdf".charCodeAt(1);

    return 0;
}

input.onButtonPressed(Button.A, function () {
    // let x = 1022; //<-1023; 1024>
    // let y = 950;
    // let z = 12;
    
    let x = input.acceleration(Dimension.X);
    let y = input.acceleration(Dimension.Y);
    let z = input.acceleration(Dimension.Z);

    //radio.sendString(**);
    radio.sendNumber(pack(x, y, z));
    
})