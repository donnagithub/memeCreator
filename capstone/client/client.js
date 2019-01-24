Template.upload.events({
	//call upload function when the file-input element changes
    'change #file-input': function(event){
        upload_function(event);
    },
});

//upload funtion
upload_function = function (event) {
	var file = event.target.files[0];
	console.log("client: file: " + file.name);
	var reader = new FileReader();
	reader.onload = function(fileLoadEvent) {
	//call created upload method and pass file name, and file-reader info
	Meteor.call('upload', file.name, reader.result,function(error, result) {
        console.log(result)
		});
	};
  reader.readAsBinaryString(file);
}