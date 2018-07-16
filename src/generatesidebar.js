var fs = require('fs');
var path = require('path');
var basePath = path.join(__dirname, '..', 'docs');

var files = fs.readdirSync(basePath);

files = files.filter((f) => fs.lstatSync(path.join(basePath, f)).isDirectory());

fileLines = files.map((folder) =>  {
    let lines = [ ];
    var mdfiles = fs.readdirSync(path.join(basePath, folder));
    var hasReadme = false;
    if (mdfiles) {
        let idx = mdfiles.indexOf('readme.md');
        lines.push(headerify(folder, idx >= 0));
        var mdLines = mdfiles.filter((md) => md).filter((md) => md.endsWith('.md') && md != "readme.md").map((md) => linkify(folder, md));
        lines = lines.concat(mdLines);        
    }

    return lines.join("\n") + "\n";
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

function headerify(foldername, hasReadme) {
    var name = nameify(foldername);
    if (hasReadme) {
        return "* [**" + name + "**](" + foldername + "/readme.md)";
    } else {
        return "* " + name;
    }
}

function linkify(folder, filename) {
    var name = nameify(filename);
    return "  * [" + name + "](" + folder + "/" + filename + ")";
}