//jizda
radio.setGroup(54)
radio.setFrequencyBand(7)

let x = 0
let y = 0

radio.onReceivedString(function (receivedString: string) {
    let arr = []
    arr.push(receivedString.charCodeAt(0)) // znak 1 - dimenze x
    arr.push(receivedString.charCodeAt(1)) // znak 2 - dimenze y

    for (let i = 2; i <= 7; i++) {
        arr.push(parseInt(receivedString.charAt(i)));
    }
    x = arr[0]
    y = arr[1]
})

basic.forever(function () {
    if (y > 200) { //ověřit a poladit úhel, nejsem si jistej
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 250)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -250)
    } else if (y < -200) { //ověřit a poladit úhel, nejsem si jistej
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -250)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
    } else if (x > 200) { //ověřit a poladit úhel, nejsem si jistej
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 250)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
    } else if (x < -200) { //ověřit a poladit úhel, nejsem si jistej
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -250)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -250)
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
    }
})