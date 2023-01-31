/*
1. Create a module which will take in a file and create a copy of the file
*/

const fs = require('fs');
const path = require('path');

// fs.copyFile('text1.txt', 'text2.txt', (err) => {
//     if (err) {
//         console.log("Failed to create copy of text1.txt")
//     } else {
//         console.log('Successfully created copy of text1.txt');
//     }
// });

/*
2. Clone a directory and its child files
cloneDirectory(path to a directory); return me the cloned directory name
*/

// function cloneDirectory(sourceDirectory) {
//     var destDirectory = sourceDirectory + '_Copy';
//     fs.mkdir(path.join(destDirectory), (err) => {
//         if (err) {
//             console.log("Error in creating the dir" + err);
//         } else {
//             console.log("Directory created successfully");            
//             fs.cp(sourceDirectory, destDirectory, { recursive: true }, (err) => {
//                 if (err) {
//                     console.log("Error while cloning the directory " + err);
//                 } else {
//                     console.log("Directory cloned successfully");
//                     return destDirectory;
//                 }
//             });
//         }
//     })
//     // 
    
// }

// var newDirectory = cloneDirectory("./masterFolder");
// console.log(newDirectory);


/*
3. Function to Check for existence of a file
doesFileExist(pathtothefile); return a boolean value
*/

function doesFileExist(filePath) {
    fs.stat(filePath, (err, data) => {
        if (err) {
            console.log('File not found!');
        } else {
            console.log('File found! ' + data.isFile() );
            return data.isFile();
        }
    });
}

var fileExist = doesFileExist('./text1.txt');
console.log(fileExist);
