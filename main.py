light2 = 0
dist = 0

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global light2, dist
    light2 = input.light_level()
    dist = sonar.ping(DigitalPin.P3, DigitalPin.P4, PingUnit.INCHES)
    if True:
        pins.servo_write_pin(AnalogPin.P0, 180)
        pins.servo_write_pin(AnalogPin.P1, 0)
        basic.pause(2000)
basic.forever(on_forever)
