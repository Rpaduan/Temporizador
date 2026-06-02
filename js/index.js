import Controls from "./controls.js"
import Timer from "./timer.js"
import { 
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"
import Sound from "./sounds.js"

const controls = Controls({
    buttonPause,
    buttonSet,
    buttonPlay,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    
})

const sound = Sound()

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
})  

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.play()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sound.bgAudio.pause()
})

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.upadateMinutes(newMinutes)
    
})