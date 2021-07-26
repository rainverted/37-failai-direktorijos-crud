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

lib.create = (dir, file, data, callback) => {
    fs.open(fullPath(dir, file), 'wx', (err, fileDescriptor) => {
        if (err || !fileDescriptor) {
            return callback('Nepavyko sukurti failo, nes jis turbut jau egzistuoja.')
        }

        const stringData = JSON.stringify(data);

        fs.writeFile(fileDescriptor, stringData, (err) => {
            if (err) {
                return callback('Turinio irasymo metu ivyko klaida.');
            }

            fs.close(fileDescriptor, (err) => {
                if (err) {
                    return callback('Nepavyko uzdaryti failo.');
                }

                return callback(false);
            })
        })
    })
}

module.exports = lib;