'use strict';

module.exports = function(Perfiles) {
  let util = require('../../server/util');

  Perfiles.insertar = function(title, permissions, cb) {
    let _id = Perfiles._id;
    Perfiles.create({_id, title, permissions}, (err, obj)=>{
      cb(null, err ? err : obj);
    });
  };

  Perfiles.remoteMethod(
    'insertar',
    {
      http: {path: '/insertar', verb: 'post'},
      accepts: [
        {arg: 'title', type: 'string'},
        {arg: 'permissions', type: 'string'},
      ],
      returns: {arg: 'respuesta', type: 'Object'},
    }
  );

  Perfiles.beforeRemote('insertar', function(context, unused, next) {
    util.id(Perfiles, next);
  });
};
