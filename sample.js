let fs=require('fs')
for(let q=0; q<=10; q++){
    fs.writefilesSync('faith${q}.txt',"content to report")
}