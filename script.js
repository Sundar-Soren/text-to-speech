const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const stopButton = document.getElementById('stop')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

playButton.addEventListener('click', () => {
    playText(textInput.value)
})


pauseButton.addEventListener('click', () => {
    if (speechSynthesis.speaking) {
        speechSynthesis.pause()
    }
})

stopButton.addEventListener('click', () => {
    speechSynthesis.resume()
    speechSynthesis.cancel()
})

speedInput.addEventListener('input', () => {
    speechSynthesis.cancel()
    playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance(text)
utterance.addEventListener('end', () => {
    textInput.disabled = false
})
utterance.addEventListener('boundary', (e) => {
    currentCharacter = e.charIndex
})

function playText(text) {

    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    utterance.text = text
    utterance.rate = speedInput.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utterance)

}