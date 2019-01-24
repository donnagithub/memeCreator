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
	var file = event.target.files[0];
	console.log("client: file: " + file.name);
	var reader = new FileReader();
	reader.onload = function(fileLoadEvent) {
	//call created upload method and pass file name, and file-reader info
	Meteor.call('upload', file.name, reader.result,function(error, result) {
        console.log("client: result: " + result)
		});
	};
  reader.readAsBinaryString(file);
}

//addtext function
add_text_function = function (event) {
	const target = event.target;
	console.log("client: target: " + target);
	const quote = target.quote.value;
	console.log("client: quote: " + quote);
}