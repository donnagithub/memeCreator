const fs = Npm.require('fs');
Meteor.methods({
'upload': function(fileinfo, filedata) {  
	//get user info based on current logged in user
//    var user_info = Meteor.users.findOne({"_id": this.userId}, {fields: {"_id": 1}}); 
//	 if(!user_info){
//       return "Nope, not happening";
//    }
	//path can be any directory you like, I decided to upload to public
	/*if you want to create directories on the fly,
         you'll need to add some extra code, its really easy.*/
    var path = process.env['METEOR_SHELL_DIR'] + '/../../../public/';
	 
	//add user id to file name and move 
    //fs.writeFile(path+user_info._id+fileinfo, filedata, {encoding: 'binary'});
    console.log("server: file: " + path+fileinfo);
    fs.writeFile(path+fileinfo, filedata, {encoding: 'binary'});
 },
});