//servo S1
//levý motor M1
//pravý motor M4

/*senzory 
center:P15
pravý senzor :P13
levý senzor: P14*/

/*
P16 4x RGB
ECHO oranžov
TRIGR bílá*/

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
