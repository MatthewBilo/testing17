input.onButtonPressed(Button.A, function () {
	
})
let dist = 0
let light2 = 0
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
basic.forever(function () {
    light2 = input.lightLevel()
    dist = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Inches
    )
    if (light2 < 150) {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (dist < 15 && dist != 0) {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
    } else {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    basic.pause(500)
})
