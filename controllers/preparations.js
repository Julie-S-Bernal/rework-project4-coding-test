// const Preparation = require('../models/preparation');
//
// function preparationsIndex(req, res, next) {
//   Preparation
//     .find()
//     .exec()
//     .then(preparations => res.json(preparations))
//     .catch(next);
// }
//
// function preparationsCreate(req, res, next) {
//
//   if(req.file) req.body.image = req.file.filename;
//
//   Preparation
//     .create(req.body)
//     .then(preparation => res.status(201).json(preparation))
//     .catch(next);
// }
//
// function preparationsShow(req, res, next) {
//   Preparation
//     .findById(req.params.id)
//     .exec()
//     .then((preparation) => {
//       if(!preparation) return res.notFound();
//       res.json(preparation);
//     })
//     .catch(next);
// }
//
// function preparationsUpdate(req, res, next) {
//
//   if(req.file) req.body.image = req.file.filename;
//
//   Preparation
//     .findById(req.params.id)
//     .exec()
//     .then((preparation) => {
//       if(!preparation) return res.notFound();
//       preparation = Object.assign(preparation, req.body);
//       return preparation.save();
//     })
//     .then(preparation => res.json(preparation))
//     .catch(next);
// }
//
// function preparationsDelete(req, res, next) {
//   Preparation
//     .findById(req.params.id)
//     .exec()
//     .then((preparation) => {
//       if(!preparation) return res.notFound();
//       return preparation.remove();
//     })
//     .then(() => res.status(204).end())
//     .catch(next);
// }
//
// module.exports = {
//   index: preparationsIndex,
//   create: preparationsCreate,
//   show: preparationsShow,
//   update: preparationsUpdate,
//   delete: preparationsDelete
// };
