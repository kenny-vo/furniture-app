var db = require('../models');

// GET /api/furnitures
function index(req, res) {
  db.Furniture.find({}, function(err, allFurnitures) {
    res.json(allFurnitures);
  });
}

// export public methods here
module.exports = {
  index: index,

};
