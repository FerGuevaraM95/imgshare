const path = require('path');
const { randomName } = require('../helpers/libs');
const fs = require('fs-extra');

ctrl = {};

ctrl.index = (req, res) => {
    
}

ctrl.create = async (req, res) => {
    const imgUrl = randomName();
    console.log(imgUrl);
    const imageTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();
    const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
        await fs.rename(imageTempPath, targetPath);
    }

    res.send('works!');
}

ctrl.like = (req, res) => {

}

ctrl.comment = (req, res) => {

}

ctrl.remove = (req, res) => {

}

module.exports = ctrl;