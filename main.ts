//jizda
radio.setGroup(54);
radio.setFrequencyBand(7);

let x = 0;
let y = 0;

radio.onReceivedString(function (receivedString: string) {
    if (receivedString === "STOP") {
        PCAmotor.MotorStop(PCAmotor.Motors.M1);
        PCAmotor.MotorStop(PCAmotor.Motors.M4);
    } else {
        let arr = [];
        arr.push(receivedString.charCodeAt(0)); // znak 1 - dimenze x
        arr.push(receivedString.charCodeAt(1)); // znak 2 - dimenze y

        for (let i = 2; i <= 7; i++) {
            arr.push(parseInt(receivedString.charAt(i)));
        }

        x = Math.round((arr[0] / 255) * 2048 - 1024);
        y = Math.round((arr[1] / 255) * 2048 - 1024);

        if (y < -50) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 150);
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 150);
        } else if (y > 50) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -150);
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -150);
        } else if (x < -50) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -150);
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 150);
        } else if (x > 50) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 150);
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -150);
        } else {
            PCAmotor.MotorStop(PCAmotor.Motors.M1);
            PCAmotor.MotorStop(PCAmotor.Motors.M4);
        }
    }

    // basic.forever(function () {
//     if (x > 100) {
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, 150);
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, -150);
//     } else if (x < -100) { 
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, -150);
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, 150);
//     } else if (y < -100) { 
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, 150);
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, 150);
//     } else if (y > 100) {
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, -150);
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, -150);
//     } else {
//         // PCAmotor.MotorStop(PCAmotor.Motors.M1);
//         // PCAmotor.MotorStop(PCAmotor.Motors.M4);
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, 0);
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, 0);
//     }
// })

// basic.forever(function() {
//     if (y > 0) {
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, 100);
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, 100);
//     } else if (y < 0) {
//         PCAmotor.MotorRun(PCAmotor.Motors.M1, -100);
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, -100);
//     } else {
//         PCAmotor.MotorStop(PCAmotor.Motors.M1);
//         PCAmotor.MotorStop(PCAmotor.Motors.M4);
//     }
// })

})