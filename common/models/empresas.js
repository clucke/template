'use strict';

module.exports = function(Empresas) {
  let util = require('../../server/util');

  Empresas.insertar = function(companyName, cb) {
    let _id = Empresas._id;
    Empresas.create({_id, companyName}, (err, obj)=>{
      cb(null, err ? err : obj);
    });
  };

  Empresas.remoteMethod(
    'insertar',
    {
      http: {path: '/insertar', verb: 'post'},
      accepts: {arg: 'companyName', type: 'string'},
      returns: {arg: 'respuesta', type: 'Object'},
    }
  );

  Empresas.beforeRemote('insertar', function(context, unused, next) {
    util.id(Empresas, next);
  });
};
