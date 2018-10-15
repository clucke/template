# Plantilla servicio rest mongodb
Plantilla para levantar un servicio sencillo con el framework loopback
## Requerimientos:
* Nodejs
* Loopback (windows)
* Node-gyp (linux)
* Strongloop (linux)
* Loopback-connector-mongodb
* MongoDB
## Instalacion
1. Ejecutar lb(windows), slc loopback(linux)
2. Crear un proyecto vacio (empty-server)
3. Descargar este repositorio, copiar las carpetas common y server la raiz del proyecto
4. En la raiz del proyecto ejecutar en consola `npm install loopback-connector-mongodb --save`
5. Modificar el archivo datasources.json que se encuentra en la carpeta server
6. Listo para ejecutar `node .`
