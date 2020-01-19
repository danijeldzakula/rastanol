function ScrollIndicator() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById('scrollIndicator').style.width = scrolled + "%";
}

window.addEventListener('scroll', ScrollIndicator);


window.addEventListener('load',function(){
	window.scrollTo(0, 0);
	var el = document.querySelector('body');
	setTimeout(function() {
		el.classList.add("loaded");
	}, 700);	
});
