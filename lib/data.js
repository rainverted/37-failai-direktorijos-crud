//Failu sistemos(fs) CRUD

const fs = require('fs');                   //nurodome globalu faila esanti js'e
const path = require('path');

const lib = {}

//absoliuti kelio nuoroda iki folderio, kuriame bus talpinami duomenu failai
lib.baseDir = path.join(__dirname, '../.data/')

function fullPath(dir, file) {
    return `${lib.baseDir}${dir}/${file}.json`
}

//funckija, kuri skaito failo turini
lib.read = (dir, file, callback) => {
    fs.readFile(fullPath(dir, file), 'utf-8', (err, data) => {
        if (err || !data) {
            return callback(err, data)
        }

        return callback(false, data);
    })
}


module.exports = lib;