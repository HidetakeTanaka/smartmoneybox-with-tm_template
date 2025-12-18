bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    basic.showString(receivedString)
    if (receivedString == "blue") {
        sum += blue
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.showNumber(sum)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    if (receivedString == "red") {
        sum += blue
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.showNumber(sum)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    if (receivedString == "yellow") {
    	
    }
    if (receivedString == "other") {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showNumber(sum)
        basic.pause(2000)
    }
})
let receivedString = ""
let blue = 0
let sum = 0
sum = 0
blue = 1
let red = 1
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
