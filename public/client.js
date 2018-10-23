var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;';

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.continuous = true;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

console.table(recognition);
console.table(speechRecognitionList);

window.onclick = function() {
  recognition.start();
  console.log('Ready...');
}

recognition.onresult = function(res) {
  const confidence = event.results[0][0].confidence;
  const transcript = event.results[event.results.length - 1][0].transcript;
  
  console.log('Result Obj',res);
  console.log('confidence',confidence);
  console.log(transcript);
}

recognition.onspeechend = function() {
  console.log('Stopped!');
  recognition.stop();
}

recognition.onnomatch = function(event) {
  console.log('Matched', event);
}

recognition.onerror = function(event) {
  console.log('Error occurred in recognition:', + event.error);
}
