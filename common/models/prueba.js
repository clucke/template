'use strict';

module.exports = function(Prueba) {
  Prueba.nombre = function(nombre, cb) {
    cb(null, 'El nombre es ' + nombre);
  };
  Prueba.buscar = function(cb) {
    Prueba.find({}, (err, ins)=>{
      cb(null, ins);
    });
  };
  Prueba.consulta = function(obj, cb) {
    let respuesta = 'Su nombre es ' + obj.nombre + ' y tiene ' + obj.edad +
      ' años';
    cb(null, respuesta);
  };
  Prueba.insertar = function(nombre, cb) {
    let id = Prueba.id;
    Prueba.create({id, nombre}, (err, obj)=>{
      cb(null, obj);
    });
  };
  Prueba.remoteMethod(
    'nombre',
    {
      http: {
        path: '/nombre',
        verb: 'get',
      },
      accepts: {
        arg: 'nombre',
        type: 'string',
      },
      returns: {
        arg: 'respuesta',
        type: 'string',
      },
    }
  );
  Prueba.remoteMethod(
    'consulta',
    {
      accepts: {
        arg: 'obj',
        type: 'Object',
      },
      returns: {
        arg: 'respuesta',
        type: 'string',
      },
    }
  );
  Prueba.remoteMethod(
    'buscar',
    {
      http: {
        path: '/buscar',
        verb: 'get',
      },
      returns: {
        arg: 'respuesta',
        type: 'array',
      },
    }
  );
  Prueba.remoteMethod(
    'insertar',
    {
      accepts: [
        {
          arg: 'nombre',
          type: 'string',
        },
      ],
      returns: {
        arg: 'respuesta',
        type: 'obj',
      },
    }
  );
  Prueba.beforeRemote('insertar', function(context, next) {
    Prueba.id = 1;
    next();
  });
};
