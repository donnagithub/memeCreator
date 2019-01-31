let gFilename = "";

Template.upload.events({

	//call upload function when the file-input element changes
    'change #file-input': function(event){
        upload_function(event);
    },

});


Template.body.events({

    'submit .add-text': function(event) {
    	event.preventDefault();
		add_text_function(event);
	},
	
});

//upload function

upload_function = function (event) {

	var renderedImg = document.getElementById('canvas-img'); //img tag in html
	var file = event.target.files[0];
	var reader = new FileReader();

	console.log("client: file: " + file.name);

	reader.onload = function(fileLoadEvent) {
	
		// call server's upload method (which saves the file in the images/background folder)
		// and pass file name, and filereader info
		var filename = Meteor.call('upload', file.name, reader.result, function(error, result) {
        	console.log("client: upload_function: result: " + result);
        	gFilename = result;
  			
  			var preview = document.getElementById('preview');
  			preview.src = result;
        	//console.log('before resize : preview.height : ' + preview.naturalHeight + ' preview.width : ' + preview.naturalWidth);

  			var tmpImg = new Image();
  			tmpImg.src = preview.src;

      		var img = tmpImg;
			var pic_real_width, pic_real_height;
			$("<img/>") // Make in memory copy of image to avoid css issues
    			.attr("src", $(img).attr("src"))
   				.load(function() {
        			pic_real_width = this.width;   // Note: $(this).width() will not
        			pic_real_height = this.height; // work for in memory images.

/*
 * RESIZING CODE to resize image to max 500x500 - not working yet
 *         			
        		console.log('before resize : img.height : ' + img.height + ' img.width : ' + img.width);

         		var maxWidth = 500;
        		var maxHeight = 500;
        		
 				// set the correct accepted dimensions on the canvas
    			if (pic_real_width == pic_real_width) {
    				img.width = maxWidth;
    				img.height = maxHeight;
    			} 
    			else if (pic_real_width > pic_real_height) {
        			console.log('Image is landscape');
        			if (pic_real_width > maxWidth) {
        				// maintain aspect ratio
            			img.height = pic_real_height * maxWidth / pic_real_width;	
            			img.width = maxWidth;
            			console.log('Image resized');
        			}
    			} 
    			else {
        			if (pic_real_height > maxHeight) {
            			console.log('Image is portrait');
            			img.width = pic_real_width * maxHeight / pic_real_height;
           				img.height = maxHeight;
            			console.log('Image resized');
        			}
    			}
				
				console.log('after resize : img.height : ' + img.height + ' img.width : ' + img.width);
        		
	       		console.log('resize : image.src: ' + img.src);
*
* END RESIZING CODE
*/
	       		
				var canvas = document.getElementById('canvas-img');
				canvas.height = img.height;
    			canvas.width = img.width;
    			canvas.style="border:1px solid #000000;";

 				// draw image on canvas  			
       			const ctx = canvas.getContext('2d');
       			ctx.drawImage(img, 10, 10);
        	});

		});
	}
	
    reader.readAsBinaryString(file);
    
}

//addtext function
add_text_function = function (event) {
	const target = event.target;
	console.log("client: target: " + target);
	const quote = target.quote.value;
	console.log("client: quote: " + quote);
	console.log("client: filename: " + gFilename);
	
	//call server's upload method and pass file name, and file-reader info
	Meteor.call('add-text-to-image', gFilename, 50, 50, quote, function(error, result) {
        console.log("client: result: " + result);
		});	
}
