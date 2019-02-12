/*		
const fs = Npm.require('fs'),
      gm = Npm.require('gm');

var path = process.env['METEOR_SHELL_DIR'] + '/../../../memes/';
var imageStore = new FS.Store.GridFS("images", {

	transformWrite: function(fileObj, readStream, writeStream) {
		if (fileObj.metadata) {
			gm(readStream, fileObj.name)
				.fontSize(36)
				.font(fileObj.metadata.font)
				.fill(fileObj.metadata.color)
				.drawText(10, 10, fileObj.metadata.quote)
				.stream()
				.pipe(writeStream);
		}
	} //transformWrite
		
});

Images = new FS.Collection("images", {
	stores: [imageStore],

    filter: {
		maxSize: (1048576 * 4), // 5 mb in bytes
		allow: {
            contentType: ['image/*']
        }
    } // filter

});

*/
/*
			gm(readStream, fileObj.name())
				.fontSize(36)
				.font(fileObj.metadata.font)
				.fill(fileObj.metadata.color)
				.drawText(10, 10, fileObj.metadata.quote)
				.stream()
				.pipe(writeStream);
*/
/*
Images.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});
      
Meteor.methods({
	'upload': function(fileObjId) { 
	
		console.log("upload : fileObjId : " + fileObjId );
		
//		var img = Images.findOne( { '_id': "nX9mAKugBxhv9JEeM" }, function(err, result) {
		var img = Images.findOne( { 'meme_name' : fileObjId } );

		console.log("Images.find : img : fileObjId " + img._id  + " quote : " + img.quote);
		
		//var fileObj = new FS.File(img);
		var fileObj = img;
		
		//console.log("Images.find : img : fileObj " + Object.keys(fileObj.original));
		//console.log("Images.find : img : fileObj " + Object.values(fileObj.original));
		console.log("Images.find : img : fileObj.original.name " + fileObj.original.name);
/*		
		// output all available image properties
gm('/Users/dmorgan/Donna/Training Courses/Responsive Websites/Responsive Website Development and Design Capstone/assessment_pie.png')
.identify(function (err, data) {
  if (!err) console.log(data)
});
	
		var read = fileObj.createReadStream(fileObj.original.name, { encoding: null });
		var write = fileObj.createWriteStream(fileObj.original.name);

			gm(read, fileObj.name())
				.fontSize(36)
				.font(fileObj.font)
				.fill(fileObj.color)
				.drawText(10, 10, fileObj.quote)
				.stream()
				.pipe(write);
		
/*
		var fileObj = new FS.File(file);
		Images.insert(fileObj, function (err, fileObj) {
			if (err){
             	console.log("in upload : err: " + err);
			} else {
                    
				fileObj.once("uploaded", function () {

		           	console.log("in upload : once uploaded");
		           	
					return fileObj.url(); //$('#preview').attr('src', fileObj.url());
				});
			}
		});
*/		
/*
    	console.log("server: upload: file: " + path+filename);    	

    	fs.writeFile(path+filename, filedata, {encoding: 'binary'});

	  	return (path+filename);
* /
 	},
 	
 	'retrieve_image': function() {
 	
 		return Images.find();
 	},
/* 
    'add-text-to-image': function(filename, x, y, text, font, color) {
    
    	console.log("server: add-text-to-image: file: " + path+filename);    	
    	
		console.log("server: add-text-to-image: quote: " + text + " font : " + font + " color : " + color);
		
		// get the image data
		var imageRec = Images.findOne({ _id : filename });
		var filedata = imageRec.getFileRecord();
		console.log("server: add-text-to-image: filedata: " + filedata);
		
		fs.writeFile(path+filename, filedata, {encoding: 'binary'});


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
  		
  		fs.readFileSync
  		var reader = new FileReader();

		console.log("server: file: " + path+filename);

		reader.onload = function(fileLoadEvent) {
	
	  		return (reader.result);
		}
 
	    reader.readAsDataURL(path+filename);
	},
* /	    
});
*/	