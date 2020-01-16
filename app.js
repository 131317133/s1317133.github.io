// app.js
var speech = new webkitSpeechRecognition();
var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();

//言語を日本語に設定
speech.lang = "ja";
btn.addEventListener( 'click' , function() {
speech.start();
    
} );

speech.addEventListener( 'result' , function( e ) {
 console.log( e );
 var text = e.results[0][0].transcript
content.textContent = text;
    if( text === "ゲーム" ) getVideo();
    if( text === "カメラ" ) getSearch();

} );
function getVideo() {
     var URL = '<iframe width="1000" height="1000" src="http://127.0.0.1:50184/game.html" </iframe>'
         
         
       content.innerHTML = URL;
    
}
function getSearch() {
    var iframe = document.createElement('iframe');
    
    iframe.width = '2000px';
    iframe.height = '2000px';
    iframe.src = 'http://127.0.0.1:50184/snow.html';
    content.appendChild(iframe);
}
