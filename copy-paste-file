# copy paste

> this is function for copy paste file in nativescript

### using module
- [https://github.com/k4ng-fork/nativescript-node-compat](NSnode)
- [https://docs.nativescript.org/ns-framework-modules/file-system](file-system)


### syntax
```javascript
function execo(filename, from_dir, to_dir){
    if (!fileSystem.Folder.exists(to_dir)) {
        nsNode.mkdir(to_dir, null, function (err) { });
    }

    let a_path = fileSystem.path.join(from_dir, filename);
    let a_file = fileSystem.File.fromPath(a_path);

    let b_path = fileSystem.path.join(to_dir, "");
    let b_fp = fileSystem.Folder.fromPath(b_path).getFile(filename);

    if (b_fp) {
        let binaryfile = a_file.readSync(err => {
            console.log("Error Readsync " + err.stack)
        });
        b_fp.writeSync(binaryfile, err => {
            console.log("Error " + err)
        });
    }
}
```
