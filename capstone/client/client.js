
let gQuote = "default quote";
let gFont = "arial";
let gFontsize = "20";
let gColor = "black";
let gHeight = 500;
let gWidth = 500;

Template.upload.events({
   'change .myFileInput': function(event, template) {
   
		var file = event.target.files[0];

   		console.log("in change .myFileInput : file: " + file.name);
		
		var canvas = document.getElementById("canvas-img");

		var context = canvas.getContext("2d");

		var imageObj = new Image();
		imageObj.onload = function(){
		
			// determine aspect ratio for resizing image to fit on canvas
			var hRatio = canvas.width / imageObj.width;
			var vRatio = canvas.height / imageObj.height;
			var ratio  = Math.min ( hRatio, vRatio );
			context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 
				imageObj.width*ratio, imageObj.height*ratio);
			context.font = gFontsize + "px " + gFont;
			context.fillStyle = gColor;
			context.fillText(gQuote, 10, gFontsize);
		};
		
		var reader = new FileReader();

		console.log("client: upload_function: file: " + file.name);

		reader.onload = function(fileLoadEvent) {
		
			// display the image with text
			imageObj.src = reader.result; 
			
			document.getElementById("save-image-instruction").setAttribute("style", "inline");
		}
		
		reader.readAsDataURL(file);
     
	}, // change .myFileInput

}); // Template.upload.events

Template.body.events({

    'submit .add-text': function(event) {
	   	event.preventDefault();
		const target = event.target;
		gQuote = target.quote.value;
		gFont = target.font.value;
		gFontsize = target.fontsize.value;
		gColor = target.color.value;

		console.log("save_text_settings_function : quote: " + gQuote + " font : " + 
			gFont + " fontsize : " + gFontsize + " color : " + gColor);

	},
	
});

