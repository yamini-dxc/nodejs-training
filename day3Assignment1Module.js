// Read from 3 files and add all the contents of 3 files into file4 using writeFile and readFile

var fs = require("fs");

console.log("Assignment 1====================================================================");
fs.readFile("file1.txt", (err, data) => {
    if (err) {
        console.log("file1 read completed with error " + err);
    } else {
        console.log("file1 read completed successfully");
        fs.writeFile("file4.txt", data,{flag:'a'}, (err) => {
            if (err) {
                console.log("Error while writing the contenet of file 1 to file 4 " + err);
            } else {
                console.log("Successfully Written to file4 from file 1.");
            }
        });
    }
});

fs.readFile("file2.txt", (err, data) => {
    if (err) {
        console.log("file2 read completed with error " + err);
    } else {
        console.log("file2 read completed successfully");
        fs.writeFile("file4.txt", data,{flag:'a'}, (err) => {
            if (err) {
                console.log("Error while writing the contenet of file 2 to file 4 " + err);
            } else {
                console.log("Successfully Written to file 4 from file 2.");
            }
        });
    }
});

fs.readFile("file3.txt", (err, data) => {
    if (err) {
        console.log("file3 read completed with error " + err);
    } else {
        console.log("file3 read completed successfully");
        console.log(data);
        fs.writeFile("file4.txt", data,{flag:'a'}, (err) => {
            if (err) {
                console.log("Error while writing the contenet of file 3 to file 4" + err);
            } else {
                console.log("Successfully Written to file 4 from file 3.");
            }
        });
    }
});



