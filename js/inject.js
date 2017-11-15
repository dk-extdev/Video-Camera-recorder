	// just place a div at top right
	var newdiv = document.createElement('div');
	newdiv.id="draggable";
  newdiv.setAttribute("class", "ui-widget-content");
	var iframe = document.createElement('iframe');
	iframe.id = "video-iframe";
	iframe.src = 'chrome-extension://fimailgmjakdbgocipeheghdlohbnkcf/camera.html';
	newdiv.appendChild(iframe);
	/*newdiv.style.position = 'fixed';
	newdiv.style.top = 0;
	newdiv.style.right = 0;
	newdiv.textContent = 'Injected!';*/
	document.body.appendChild(newdiv);
  $( "#draggable" ).draggable({
            containment : "body",
            iframeFix: true 
         });
	//alert('inserted self... giggity');

