const fs = require('fs');
const path= require('path');

function deleteImagesInFolder(foldername){
const imageExtension = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp']
//read the contents of the folder
fs.readdirr(foldername , (err,files)=>{
    if (err) {
        console.error(`Error reading directory: ${foldername}`);
        return;
    }
})
}