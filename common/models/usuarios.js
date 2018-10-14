'use strict';

module.exports = function(Usuarios) {
  let util = require('../../server/util');

  Usuarios.agregar = function(data, cb) {
    data._id = Usuarios._id;
    Usuarios.create(data, (err, res)=>{
      cb(null, err ? err : res);
    });
  };

  Usuarios.eliminar = function(_id, cb) {
    Usuarios.remove({_id}, (err, res) =>{
      cb(null, err ? err : res);
    });
  };

  Usuarios.consultarPorNombre = function(name, firstSurname, 
    secondSurname, cb) {
      let condition = {name, firstSurname, secondSurname};
      Usuarios.find({where: condition}, (err, res)=>{
        cb(null, err ? err : res);
      });
  };

  Usuarios.consultarPorId = function(_id, cb) {
    let include = {include:['empresas','perfiles']};
    Usuarios.findById(_id, include, function(err, res) {
        cb(null, err ? err : res);
      });
  };

  Usuarios.actualizar = function(data, cb) {
    let _id = data._id;
    Usuarios.updateAll({_id}, data, function(err, res){
      cb(null, err ? err : res);
    });
  }

  Usuarios.remoteMethod('agregar',{
    http: {path: '/agregar', verb: 'post'},
    accepts: {
      arg: 'datos', 
      type: 'usuarios',
      http: {source: 'body'}},
    returns: {arg: 'respuesta', type: 'usuarios'},
  });

  Usuarios.remoteMethod('eliminar', {
    http: {path: '/eliminar', verb: 'delete'},
    accepts: {arg: '_id', type: 'number'},
    returns: {arg: 'respuesta', type: 'usuarios'},
  });

  Usuarios.remoteMethod('consultarPorNombre', {
    http: {path: '/consultarPorNombre', verb: 'post'},
    accepts: [
      {arg: 'name', type: 'string'},
      {arg: 'firstSurname', type: 'string'},
      {arg: 'secondSurname', type: 'string'}],
    returns: {arg: 'respuesta', type: 'array'},
  });

  Usuarios.remoteMethod('consultarPorId', {
    http: {path: '/consultarPorId', verb: 'get'},
    accepts: {arg: '_id', type: 'number'},
    returns: {arg: 'respuesta', type: 'array'},
  });

 Usuarios.remoteMethod('actualizar', {
  http: {path: '/actualizar', verb: 'put'},
  accepts: {
    arg: 'data', 
    type: 'usuarios',
    http: {source: 'body'},
  },
  returns: {arg: 'respuesta', type: 'usuarios'},
});

  Usuarios.beforeRemote('agregar', function(context, unused, next) {
    util.id(Usuarios, next);
  });
};
