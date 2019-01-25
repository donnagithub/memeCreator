const fs = Npm.require('fs'),
      gm = Npm.require('gm');
      
Meteor.methods({
	'upload': function(fileinfo, filedata) {  

    	var path = process.env['METEOR_SHELL_DIR'] + '/../../../public/backgrounds';
    
    	console.log("server: file: " + path+fileinfo);    	

    	fs.writeFile(path+fileinfo, filedata, {encoding: 'binary'});
    	
    	// resize image 
 		gm(path+fileinfo)
		.resize(800, 600)
		.autoOrient()
		.write(writeStream, function (err) {
 			if (!err) console.log(' hooray! ');
		});
      
    	return (path+fileinfo);
 	},
 
    'add-text-to-image': function(filename, x, y, text) {
    	
		gm(filename).drawText(x, y, text, function (err) {
			if (!err) console.log( ' add-text-to-image successful ');
		});
    },
});