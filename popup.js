document.addEventListener('DOMContentLoaded', function(){
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function(){
		chrome.tabs.getSelected(null, function(tab){
				var i = document.createElement("img");
				var url = 'http://127.0.0.1:8000/api/download_videos?url='+tab.url;
				i.src = url
				alert(i.src);	
		});
	},false);
},false);