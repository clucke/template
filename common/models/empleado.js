'use strict';

module.exports = function(Empleado) {
  Empleado.nombre = function(nombre, cb) {
    cb(null, 'Su nombre es ' + nombre);
  };
};
