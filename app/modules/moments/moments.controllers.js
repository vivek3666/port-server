const Moment = require("../moments/data-access/schemas/moment.schema");
const mongoose = require("mongoose");
exports.getAllMoments = (req, res) => {
  Moment.find({createdBy: new mongoose.Types.ObjectId(req.user._id.toString()),isDeleted:false},
      (error, moments) => {
    if (error)
      return res.status(400).json({
        message: "Failed to retrieve moments",
        error,
      });
    res.status(201).json({
      momentsData: moments,
    });
  });
};

exports.createMoment = (req, res) => {
  const {profileImage, title, tags} = req.body;
  const project = new Moment({profileImage,title,tags,createdBy:req.user._id});
  project.save()
      .then(()=> {
        res.status(201).json({ result: 'Moment created' });
      })
      .catch((error=> res.status(400).json({ error })));
};

exports.updateMoment = (req, res) => {
  const moment = req.body;
  const momentId = req.params.momentId;
  Moment.findOneAndUpdate({_id: new mongoose.Types.ObjectId(momentId.toString())}, moment, (error, resMoment) => {
        if (error) {
          return res.status(400).json({message: "Failed to update moment", error});
        }
        res.status(201).json({message: "Moment Updated", resMoment});
      }
  );
};

exports.deleteMoment = (req, res) => {
    const momentId = req.params.momentId;
    Moment.findOneAndUpdate({_id: new mongoose.Types.ObjectId(momentId.toString())}, {isDeleted:true}, {},
        (error, resMoment) => {
            if (error) {
                return res.status(400).json({message: "Failed to delete moment", error});
            }
            res.status(201).json({message: "Moment Delete", resMoment});
        }
    );
};

