'use strict';

module.exports = {
  // Consulta documento que contenga el numero mayor y le suma 1
  // para asignar el siguiente id
  id: function(modelo, next) {
    modelo.find(
      {where: {_id: {gt: 0}}, order: '_id DESC', limit: 1},
      (err, res) => {
        modelo._id = 0;
        if (res && res.length) {
          modelo._id = res[0]._id + 1;
        } else {
          modelo._id = 1;
        }
        next();
      });
  }
};
