function onDeviceReady() {
	var ref = window.open('https://tweetdeck.twitter.com/', '_blank', 'location=no,zoom=no,hardwareback=no');
	ref.addEventListener('loadstop', ()=>{
		$.get('js/main.js', (jsData)=>{
			ref.executeScript( { code: jsData }, ()=>{});
		});
		$.get('css/style.css', (cssData)=>{
			ref.insertCSS( { code: cssData }, ()=>{});
		});
	});
}
document.addEventListener("deviceready", onDeviceReady, false);