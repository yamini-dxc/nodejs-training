/*
1. Create a module which will take in a file and create a copy of the file
*/

const fs = require('fs');

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
//     var destDirectory = "./copyFolder";
//     fs.cp(sourceDirectory, destDirectory, { recursive: true }, (err) => {
//         if (err) {
//             console.log("Error while cloning the directory " + err);
//         } else {
//             console.log("Directory cloned successfully");
//             return destDirectory;
//         }
//     });
// }

// var newDirectory = cloneDirectory("./masterFolder");
// console.log(newDirectory);


/*
3. Function to Check for existence of a file
doesFileExist(pathtothefile); return a boolean value
*/

function doesFileExist(filePath) {
    fs.exists(filePath, (doesExist) => {
        if (doesExist) {
            console.log('file found!');
            return doesExist;
        } else {
            console.log('file not found!');
            return doesExist;
        }
    });
}

console.log(doesFileExist('./text1.txt'));
