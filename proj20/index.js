let speech = new SpeechSynthesisUtterance();
let btn= document.querySelector('button')
let voiceSelect = document.querySelector('select')
let voices = []

// speechSynthesis is an API
btn.addEventListener('click',()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech)
})

window.speechSynthesis.onvoiceschanged=()=>{
    voices= window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)) )
}

voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value];
})

/* 
1. SpeechSynthesisUtterance Initialization

let speech = new SpeechSynthesisUtterance();
let: Declares a block-scoped variable named speech.
SpeechSynthesisUtterance: Creates an instance of the SpeechSynthesisUtterance interface, which represents a speech request. This object will contain the text and voice properties for the speech synthesis engine.
5. Adding Click Event Listener to the Button
javascript
Copy code
btn.addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
btn.addEventListener('click', ...): Adds an event listener to the button (btn) that listens for the click event.
speech.text = document.querySelector('textarea').value:
speech.text: Sets the text that will be spoken.
document.querySelector('textarea'): Selects the first <textarea> element in the DOM.
.value: Retrieves the text entered in the <textarea> element.
window.speechSynthesis.speak(speech):
window.speechSynthesis: The Web Speech API's speechSynthesis object, which controls speech output.
.speak(speech): Queues the speech object for playback, causing the browser to speak the text.
6. Handling the voiceschanged Event
javascript
Copy code
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};
window.speechSynthesis.onvoiceschanged:
An event that fires when the list of available voices changes or becomes ready.
voices = window.speechSynthesis.getVoices():
getVoices(): Retrieves an array of SpeechSynthesisVoice objects, each representing an available voice.
Assigns this array to the voices variable.
speech.voice = voices[0]:
Sets the default voice to the first available voice in the voices array.
voices.forEach((voice, i) => ...):
Loops through the voices array.
For each voice:
voice.name: Retrieves the name of the voice.
i: The index of the current voice in the array.
new Option(voice.name, i): Creates a new <option> element for the dropdown with:
voice.name: Displayed as the option's text.
i: Used as the option's value.
voiceSelect.options[i]: Assigns this new <option> to the i-th position in the dropdown.
7. Handling Voice Selection from the Dropdown
javascript
Copy code
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});
voiceSelect.addEventListener('change', ...):
Adds an event listener to the voiceSelect dropdown that listens for the change event (when a different option is selected).
speech.voice = voices[voiceSelect.value]:
voiceSelect.value: Retrieves the selected option's value (the index of the voice in the voices array).
voices[voiceSelect.value]: Selects the corresponding voice object.
Assigns this voice object to speech.voice, changing the voice that will be used for speech synthesis.
How It Works Together
When the page loads, the onvoiceschanged event populates the dropdown with available voices.
The user enters text in the <textarea> and clicks the button:
The click event triggers, and the text is spoken with the currently selected voice.
The user can change the voice by selecting a different option in the dropdown:
The change event updates the speech.voice property to the newly selected voice.

*/