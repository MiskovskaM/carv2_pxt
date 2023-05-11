// //servo S1
// //levý motor M1
// //pravý motor M4

// /*senzory 
// center:P15
// pravý senzor :P13
// levý senzor: P14*/

// /*
// P16 4x RGB
// ECHO oranžová P1
// TRIGR bílá P2*/
// let leftIdx = 0
// let rightInx = 0
// const speeds = [0, 30, 50, 70, 85, 100]

// input.onButtonPressed(Button.A, function () {
//     PCAmotor.MotorRun(PCAmotor.Motors.M1,
//         speeds[++leftIdx % speeds.length])
//     basic.showNumber(speeds[leftIdx])
//     basic.clearScreen()
// })

// input.onButtonPressed(Button.B, function () {
//     PCAmotor.MotorRun(PCAmotor.Motors.M4,
//         speeds[++rightInx % speeds.length])
//     basic.showNumber(speeds[rightInx])
//     basic.clearScreen()
// })
// input.onButtonPressed(Button.AB, function () {
//     PCAmotor.MotorStopAll()
//     leftIdx = rightInx = 0
// })



//funkce pro motory
function car_motor(lw: number = 0, rw: number = 0) {
    const ul = Math.map(lw, -100, 100, -255, 255)
    const ur = Math.map(rw, -100, 100, -255, 255)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, ur)
}

// function dopredu() {
//     PCAmotor.MotorRun(PCAmotor.Motors. M1 && M4)
//     basic.pause(4000);
//     PCAmotor.MotorStopAll;
// }



//jizda
radio.setGroup(22)
radio.setFrequencyBand(6)

const speeds = [0, 50, 100, 255];
let levyIndex = 0;
let pravyIndex = 0;
let x = 0;
let y = 0;
let a = 0;
let b = 0;
let l = 0;

radio.onReceivedString(function(receivedString: string) {
    let array = [];

    array.push(recievedString.charCodeAt(0)) // znak 1 - dimenze x
    array.push(recievedString.charCodeAt(1)) // znak 2 - dimenze y

    for (let i = 2; i <= 7; i++) {
        array.push(parseInt(recievedString.charAt(i)));
    }
}

basic.forever(function() {
    if (array[4] == 1) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speeds[2])
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speeds[2])
    }

    if (array[2] == 1) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speeds[2])
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speeds[0])
    } else {

    }

    if (array[3] == 1) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speeds[2])
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speeds[0])
    } else {

    }
})