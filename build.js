#!/usr/bin/node

const { exec } = require('child_process');
const fs = require('fs');
const buildFolder = './pages';
const command = (filesDir) => (`npx pug index.pug ${filesDir} --out ./`);
fs.readdir(buildFolder, (err, files) => {
  if(files && files.length) {
    files.forEach(file => {
      const fileExec = `npx pug ./pages/${file} --out ./`;
      console.log(fileExec);
      exec(fileExec);
    })
   /* const t = files.map(e => `./pages/${e}`).join(' ');
    console.log(command(t));
    exec(command(t));*/
  }

  if(err) {
    console.log(err);
  }
});
