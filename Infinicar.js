bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
// vitesse pour tourner à droite
// Gestionnaire unique pour toutes les commandes Gamepad
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    // --- Variables de vitesses (0 à 16) ---
    // vitesse pour avancer
    speedUp = 0
    // vitesse pour reculer
    speedDown = 5
    // vitesse pour tourner à gauche
    speedLeft = 8
    // vitesse pour tourner à droite
    speedRight = 8
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "f") {
        // avancer : les deux moteurs en avant
        MotorDriver.MotorRun(Motor.A, Dir.forward, speedUp)
        MotorDriver.MotorRun(Motor.B, Dir.forward, speedUp)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (cmd == "r") {
        // marche arrière : les deux moteurs en arrière
        MotorDriver.MotorRun(Motor.A, Dir.backward, speedDown)
        MotorDriver.MotorRun(Motor.B, Dir.backward, speedDown)
        basic.showLeds(`
            # # # # .
            # . . . #
            # . . . #
            # . . . #
            # # # # .
            `)
    } else if (cmd == "l") {
        // tourner sur place à gauche (comme un tank)
        MotorDriver.MotorRun(Motor.A, Dir.backward, speedLeft)
        MotorDriver.MotorRun(Motor.B, Dir.forward, speedLeft)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    } else if (cmd == "b") {
        // tourner sur place à droite
        MotorDriver.MotorRun(Motor.A, Dir.forward, speedRight)
        MotorDriver.MotorRun(Motor.B, Dir.backward, speedRight)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . . # .
            `)
    } else if (cmd == "C") {
        // arrêt des deux moteurs quand on relâche un bouton
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let cmd = ""
let speedRight = 0
let speedLeft = 0
let speedDown = 0
let speedUp = 0
bluetooth.startUartService()
// Affichages initiaux
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.SmallDiamond)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
