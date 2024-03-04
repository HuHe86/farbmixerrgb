let blau = 0
let Farbwert = 0
let rot = 0
let gruen = 0
function Farbe_blau_einstellen3 () {
    blau = Farbwert
}
function Farbe_rot_einstellen () {
    rot = Farbwert
}
function Farbe_gruen_einstellen2 () {
    gruen = Farbwert
}
basic.forever(function () {
    Farbwert = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 255)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        Farbe_rot_einstellen()
        basic.showNumber(Math.round(rot))
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        Farbe_gruen_einstellen2()
        basic.showNumber(Math.round(gruen))
    } else if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        Farbe_blau_einstellen3()
        basic.showNumber(Math.round(blau))
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.setLedColor(basic.rgb(Math.round(rot), Math.round(gruen), Math.round(blau)))
    } else {
        basic.setLedColor(basic.rgb(0, 0, 0))
    }
})
