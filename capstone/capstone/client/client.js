let filename = "";

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

	var renderedImg = document.getElementById('c1'); //img tag in html
	var file = event.target.files[0];
	console.log("client: file: " + file.name);
	var reader = new FileReader();
	reader.onload = function(fileLoadEvent) {
		//call server's upload method and pass file name, and file-reader info
		filename = Meteor.call('upload', file.name, reader.result,function(error, result) {
        	console.log("client: result: " + result)
		});
		
		var img = new Image();
        var tmpImg = new Image();
        img.src = fileLoadEvent.target.result;
        renderedImg.src = img.src;
        console.log('Starting resize');
        tmpImg.src = resize(img, 500, 500, function() {
        	console.log('OK, image ready');
        });
        tmpImg.onload = function() {
        	console.log('Tmp img loaded');
            renderedImg.src = tmpImg.src;
        } 
    }
    reader.readAsDataURL(file);
}

/*
* Uses a canvas to shrink/scale an image
 */
var resize = function (image, maxWidth, maxHeight, img, callback) {
    var cb = callback;
    // setup the canvas
    var canvas = document.createElement('canvas');
    console.log('Creating canvas');
    canvas.height = image.height;
    canvas.width = image.width;
    console.log('Canvas created');
            
    // set the correct accepted dimensions on the canvas
    if (image.width > image.height) {
        console.log('Image is landscape');
        if (image.width > maxWidth) {
            canvas.height = image.height * maxWidth / image.width;	        // maintain aspect ratio
            canvas.width = maxWidth;
            console.log('Canvas resized');
        }
    } else {
        if (image.height > maxHeight) {
            console.log('Image is portrait');
            canvas.width = image.width * maxHeight / image.height;
            canvas.height = maxHeight;
            console.log('Canvas resized');
        }
    }
            
    // draw the image
    console.log('Drawing...');
    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
    console.log('Drawn successfully');
                    
    var result = canvas.toDataURL();
                    
    if (typeof cb === 'function') {
        console.log('Calling back...')
            cb(result, img);
    }
                        
    return result;
            
};

//addtext function
add_text_function = function (event) {
	const target = event.target;
	console.log("client: target: " + target);
	const quote = target.quote.value;
	console.log("client: quote: " + quote);
	
	//call server's upload method and pass file name, and file-reader info
	Meteor.call('add-text-to-image', filename, 0, 0, quote, function(error, result) {
        console.log("client: result: " + result)
		});	
}