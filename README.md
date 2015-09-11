# strava-upload
script to upload (fit) files to strava

## Usage
Install strava-v3 and stdio modules
> $ npm install strava-v3  
> $ npm install stdio  

USAGE: node strava-file-upload.js [OPTION1] [OPTION2]... arg1 arg2...

The following options are supported:  
-f, --file <ARG1> 	input fit filename (mandatory)

### Example
> $ NODE_PATH=/usr/local/lib/node_modules/  node strava-file-upload.js  -f 895146395.fit

note: NODE_PATH might not be required on your system.


## Strava API access
Follow the instruction from here: https://github.com/UnbounDev/node-strava-v3#quick-start


In case of an 'Authorization Error' (no write permission) follow these steps: https://github.com/UnbounDev/node-strava-v3#running-the-tests  
The url returned from getRequestAccessURL() is bascically the link you can find on the strava page
https://www.strava.com/settings/api under the 'Update Application' section named 'OAuth Authorization page' but make sure the scope is set appropriately ('view_private,write').
Put the token returned by strava.oauth.getToken() into the code:  
```
strava.uploads.post({
    access_token: 'WRITE_ACCESS_TOKEN HERE',
    data_type:    'fit',
    file:         args.file,
 ...
```
