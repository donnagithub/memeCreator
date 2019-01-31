const fs = Npm.require('fs'),
      gm = Npm.require('gm');

var path = process.env['METEOR_SHELL_DIR'] + '/../../../public/';
 
      
Meteor.methods({
	'upload': function(filename, filedata) {  

    	console.log("server: upload: file: " + path+"backgrounds/"+filename);    	

    	fs.writeFile(path+"backgrounds/"+filename, filedata, {encoding: 'binary'});

	  	return (filename);
	  	//return (filedata);
 	},
 
    'add-text-to-image': function(filename, x, y, text) {
    
    	console.log("server: add-text-to-image: file: " + path+"memes/"+filename);    	
    	
    	console.log("server: add-text-to-image: " + path+"memes/"+filename + " " + text);
    	 
    	// draw text on image   	
		gm(path+"memes/"+filename)
		.drawText(x, y, text)
		.write(path+"memes/"+filename, function(err){
    		if (err) return console.dir(arguments);
    		console.log(this.outname + ' created  :: ' + arguments[3]);
  		})
    },
});