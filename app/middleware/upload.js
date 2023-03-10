const multer = require('multer');

const now = new Date();
now.toLocaleString('vn-VI', { timeZone: 'Asia/Ho_Chi_Minh' });
let imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload/images/');
    },
    filename: function(req, file, cb) {
        cb(null, `${now.getDate()}_${now.getHours()}_${now.getMinutes()}-${file.originalname}`);
    },
});

let imageValidate =  function fileFilter(req, file, cb) {
    if (file.mimetype.split('/')[1] === 'png' || file.mimetype.split('/')[1] === 'jpg' || file.mimetype.split('/')[1] === 'jpeg' ){
        cb(null, true);
    } else {
        cb(new Error("Not image"),false);
    }
}

let fileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload/files/');
    },
    filename: function(req, file, cb) {
        cb(null, `${now.getDate()}_${now.getHours()}_${now.getMinutes()}-${file.originalname}`);
    },
});

let imageSingleValidate =  function fileFilter(req, file, cb) {
    if (file.mimetype.split('/')[1] === 'docx' || file.mimetype.split('/')[1] === 'pdf'){
        cb(null, true);
    } else {
        cb(new Error("Not image"),false);
    }
}

let upload = multer({ storage: imageStorage, fileFilter: imageValidate});

let uploadFile = multer({ storage: fileStorage, fileFilter: imageSingleValidate});

module.exports = {
    upload,
    uploadFile
}