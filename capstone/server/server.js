const fs = Npm.require('fs'),
      gm = Npm.require('gm');

var path = process.env['METEOR_SHELL_DIR'] + '/../../../public/';
 
      
Meteor.methods({
	'upload': function(filename, filedata) {  

    	console.log("server: upload: file: " + path+filename);    	

    	fs.writeFile(path+filename, filedata, {encoding: 'binary'});

	  	return (filename);
 	},
 
    'add-text-to-image': function(filename, x, y, text, font, color) {
    
    	console.log("server: add-text-to-image: file: " + path+filename);    	
    	
		console.log("server: add-text-to-image: quote: " + text + " font : " + font + " color : " + color);

    	// draw text on image   	
		gm(path+filename)
		.fontSize(36)
		.font(font)
		.fill(color)
		.drawText(x, y, text)
		.write(path+filename, function(err){
    		if (err) return console.dir(arguments);
    		console.log(this.outname + ' created  :: ' + arguments[3]);
  		})
    },
    
});