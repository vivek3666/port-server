const path = require("path");
const fs = require("fs");
const multiparty = require("multiparty");
exports.uploadProfileImage = (req,res) => {
    let pathToTempFolder = path.resolve() + '/public/profileImages';
    fs.existsSync(pathToTempFolder) ? fs.existsSync(pathToTempFolder) : fs.mkdirSync(pathToTempFolder, {recursive: true});
    if (req !== null && pathToTempFolder !== null) {
        __dirname = pathToTempFolder;
        let form = new multiparty.Form({uploadDir: __dirname});
        form.parse(req, (error, fields, result) => {
            if (error) {
                return res.status(400).json({
                    message: "Failed to upload Profile image",
                    error,
                });
            } else {
                res.status(201).json({
                    filePath: result.file[0].path
                });
            }
        });
    } else {
        res.status(400).json({
            message: "File not found"
        });
    }
}