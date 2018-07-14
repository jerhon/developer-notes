var fs = require('fs');
var path = require('path');
var basePath = path.join(__dirname, '..', 'docs');

var files = fs.readdirSync(basePath);

files = files.filter((f) => fs.lstatSync(path.join(basePath, f)).isDirectory());

fileLines = files.map((folder) =>  {
    console.log(folder);
    let headerLine = [ headerify(folder) ];

    var mdfiles = fs.readdirSync(path.join(basePath, folder));
    console.log(mdfiles);
    if (mdfiles) {
        var mdLines = mdfiles.filter((md) => md).filter((md) => md.endsWith('.md')).map((md) => linkify(folder, md));
        console.log(mdLines);
        headerLine = headerLine.concat(mdLines);
    }
    return headerLine.join("\n") + "\n";
});

fileText = fileLines.join('\n');

fs.writeFileSync(path.join(__dirname, '..', 'docs', '_sidebar.md'), fileText);

function nameify(filename) {
    var name = filename;
    //if (filename.indexOf('-') >= 0) {
    //    name = filename.split('-')[1];
    //}
    if (name.endsWith('.md')) {
        name = name.substr(0, name.length - 3);
    }
    return name;
}

function headerify(filename) {
    var name = nameify(filename);
    return "* " + name;
}

function linkify(folder, filename) {
    var name = nameify(filename);
    return "  * [" + name + "](" + folder + "/" + filename + ")";
}