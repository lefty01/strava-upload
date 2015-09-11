

var strava = require('strava-v3');
var stdio  = require('stdio');

var prg_version = '0.1';

var args = stdio.getopt({
    'file': {key: 'f', args: 1, mandatory: true, description: 'input fit filename'},
});

console.log("Strava fit file uploader - v" + prg_version);
console.log("uploading file: " + args.file);

strava.uploads.post({
    access_token: 'WRITE_ACCESS_TOKEN HERE',
    data_type:    'fit',
    file:         args.file,
    statusCallback: function(err,payload) {
	console.log("status callback payload:");
	console.log(payload);
	if (err) {
            console.log(err);
	}
    }
}, function(err,payload){
    if(!err) {
	console.log("done:");
        console.log(payload);
    }
    else {
	console.log("post error:")
	console.log(err);
        console.log(payload);
    }
});


