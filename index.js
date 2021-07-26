const _data = require('./lib/data');

_data.read('users', 'petras', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }

    const obj = JSON.parse(data);
    console.log(obj);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.car);
    console.log(obj.married);
})

// _data.read('users', 'maryte', (err, data) => {
//     if (err || !data) {
//         console.log('Nepavyko perskaityti failo...');
//         return false;
//     }

//     console.log(data);
// })

const pazymiai = [10, 2, 8, 4, 6];
_data.create('marks', 'onute', pazymiai, (err) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log('Failas sekmingai sukurtas!');

    _data.read('marks', 'onute', (err, data) => {
        if (err || !data) {
            console.log('Nepavyko perskaityti Onutes failo...');
            return false;
        }

        const obj = JSON.parse(data);
        console.log(obj);
    })
});