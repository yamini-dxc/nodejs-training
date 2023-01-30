// Read from 3 files and write in a particular order(file1, file2 , file3) into file4
console.log("Assignment 2====================================================================");
var fs = require("fs");
fs.readFile("file1.txt", (err, data1) => {
    if (err) {
        console.log("file1 read completed with error " + err);
    } else {
        var finaldata;
        console.log("file1 read completed successfully");
        finaldata = data1;
        fs.readFile("file2.txt", (err, data2) => {
            if (err) {
                console.log("file2 read completed with error " + err);
            } else {
                console.log("file2 read completed successfully");
                finaldata = finaldata + data2;
                fs.readFile("file3.txt", (err, data3) => {
                    if (err) {
                        console.log("file3 read completed with error " + err);
                    } else {
                        console.log("file3 read completed successfully");
                        finaldata = finaldata + data3;
                        fs.writeFile("file5.txt", finaldata, { file: 'a' }, (err) => {
                            console.log("Successfully Written to file5");
                        })
                    }
                })
            }
        })
    }
});