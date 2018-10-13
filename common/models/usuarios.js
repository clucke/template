'use strict';

module.exports = function(Usuarios) {
  let util = require('../../server/util');

  Usuarios.insertar = function(password, email, name, firstSurname,
    secondSurname, companyId, status, profileld, cb
  ) {
    let _id = Usuarios._id;
    Usuarios.create({_id, password, email, name, firstSurname,
      secondSurname, companyId, status, profileld}, (err, obj)=>{
      cb(null, err ? err : obj);
    });
  };

  Usuarios.eliminar = function(_id, cb) {
    Usuarios.remove({_id}, (err, obj) =>{
      cb(null, err ? err : obj);
    });
  };

  Usuarios.consultarPorNombre = function(name, firstSurname, secondSurname,
    cb
  ) {
    Usuarios.find({where: {name, firstSurname, secondSurname}}, (err, obj)=>{
      cb(null, err ? err : obj);
    });
  };

  Usuarios.consultarPorId = function(_id, cb) {
    Usuarios.findById(_id, function(err, obj) {
      console.log({_id});
      cb(null, err ? err : obj);
    });
  };

  Usuarios.remoteMethod(
    'insertar',
    {
      http: {path: '/insertar', verb: 'post'},
      accepts: [
        {arg: 'password', type: 'string'},
        {arg: 'email', type: 'string'},
        {arg: 'name', type: 'string'},
        {arg: 'firstSurname', type: 'string'},
        {arg: 'secondSurname', type: 'string'},
        {arg: 'companyId', type: 'number'},
        {arg: 'status', type: 'string'},
        {arg: 'profileld', type: 'number'},
      ],
      returns: {arg: 'respuesta', type: 'Object'},
    }
  );

  Usuarios.remoteMethod(
    'eliminar',
    {
      http: {path: '/eliminar', verb: 'delete'},
      accepts: {arg: '_id', type: 'number'},
      returns: {arg: 'respuesta', type: 'Object'},
    }
  );

  Usuarios.remoteMethod(
    'consultarPorNombre',
    {
      http: {path: '/consultarPorNombre', verb: 'post'},
      accepts: [
        {arg: 'name', type: 'string'},
        {arg: 'firstSurname', type: 'string'},
        {arg: 'secondSurname', type: 'string'},
      ],
      returns: {arg: 'respuesta', type: 'array'},
    }
  );

  Usuarios.remoteMethod(
    'consultarPorId',
    {
      http: {path: '/consultarPorId', verb: 'get'},
      accepts: {arg: '_id', type: 'number'},
      returns: {arg: 'respuesta', type: 'array'},
    }
  );

  Usuarios.beforeRemote('insertar', function(context, unused, next) {
    util.id(Usuarios, next);
  });
};
