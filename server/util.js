'use strict';

module.exports = {
  id: function(modelo, next) {
    modelo.find(
      {where: {_id: {gt: 0}}, order: '_id DESC', limit: 1},
      (err, obj) => {
        modelo._id = 0;
        if (obj && obj.length) {
          modelo._id = obj[0]._id + 1;
        } else {
          modelo._id = 1;
        }
        next();
      });
  },
};
