const jsmediatags = require("jsmediatags");
const fs = require("fs");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please select a directory', answer => {
    console.log(answer);
    new jsmediatags.Reader(fileallpath)
    .setTagsToRead(["album"])
    .read({
        onSuccess: (tag) => {
            console.log(tag.tags.album);
        },
        onError: (error) => {
            console.log(error.type, error.info);
        }
    });
    readline.close();
});
