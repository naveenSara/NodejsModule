
const fs = require('fs')
const path = require('path');
var csv = require('csvtojson');
const uuidv1 = require('uuid/v1');

const convertCSVToJSON = (csvFileName = 'customer-data.csv', jsonFileName = 'customer-data.json') => {

    const folderName = uuidv1();
    fs.mkdirSync(folderName);

    csv().fromFile(csvFileName).then((Obj) => {
        fs.writeFileSync(path.join(__dirname, folderName, jsonFileName), JSON.stringify(Obj, null, "\t"), 'utf8', (error) => {
            if (error) {
                console.log("error: " + error);
                return console.error(error);
            } else {
                console.log("Writing of the json data into the file completed.");
            }
        })
        console.log(JSON.stringify(Obj, null, "\t"))
        console.log('Conversion complete and added file into folder ' + folderName);
    });
}

convertCSVToJSON(process.argv[2], process.argv[3]);
