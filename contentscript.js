



 
   var top_nav = document.getElementsByClassName('top-nav')[0];
   var newli = document.createElement('li');
   newli.innerHTML = "<a href=\"http://www.sammyrulez.com\">Sammy!</a>"
   console.log(newli);
   console.log(top_nav);
   top_nav.appendChild(newli);
   console.log(top_nav);
   chrome.extension.sendRequest({}, function(response) {});

