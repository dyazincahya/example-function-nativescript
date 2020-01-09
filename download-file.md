# download-file

> this is function for download file in nativescript

### using module
- [http module](https://docs.nativescript.org/ns-framework-modules/http)
- [file-system module](https://docs.nativescript.org/ns-framework-modules/file-system)


### example
```javascript
const fs = require('tns-core-modules/file-system');
const httpModule = require("tns-core-modules/http");

exports.download = function (args) {
    let data = args.object;

    context.set("xLoading", { "status": true, "text": "Downloading..." });
    
    // path download path directory in storage
    var androidDownloadsPath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString();
    // get root path directory in storage
    var directory = android.os.Environment.getExternalStorageDirectory().getAbsolutePath().toString();
    
    let url = data.get("url");
    let filename = url.substring(url.lastIndexOf('/') + 1);
    let saveLocation = fs.path.join(androidDownloadsPath, filename);

    httpModule.getFile(url, saveLocation).then(function (file) {
        context.set("xLoading", { "status": false, "text": "Downloading..." });
        alert("Successfully downloaded").then(() => { });
    }).catch(function (error) {
        context.set("xLoading", { "status": false, "text": "Downloading..." });
        alert("error occurred!").then(() => { });
    });
};
```


### usage
```xml
<Button text="Download" tap="download"/>
```
