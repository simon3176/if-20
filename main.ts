input.onButtonPressed(Button.A, function () {
    if (age >= 16 && (Written_Test && G1)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let Written_Test = false
let G1 = false
let age = 0
age = 16
G1 = true
Written_Test = true
basic.forever(function () {
	
})
