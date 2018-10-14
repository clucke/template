'use strict';

module.exports = function(Empresas) {
  let util = require('../../server/util');

  Empresas.insertar = function(companyName, cb) {
    let _id = Empresas._id;
    Empresas.create({_id, companyName}, (err, res)=>{
      cb(null, err ? err : res);
    });
  };

  Empresas.remoteMethod('insertar', {
    http: {path: '/insertar', verb: 'post'},
    accepts: {arg: 'companyName', type: 'string'},
    returns: {arg: 'respuesta', type: 'object'},
  });

  Empresas.beforeRemote('insertar', function(context, unused, next) {
    util.id(Empresas, next);
  });
};
