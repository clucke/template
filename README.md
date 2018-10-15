# Plantilla servicio rest mongodb
Modelos y archivos de configuracion
## Requerimientos:
* Nodejs
* Loopback (windows)
* Node-gyp (linux)
* Strongloop (linux)
* MongoDB
## Instalacion
1. Ejecutar lb(windows), slc loopback(linux)
2. Crear un proyecto vacio (empty-server)
3. Descargar este repositorio, copiar las carpetas common y server en la raiz del proyecto
4. En la raiz ejecutar en consola `npm install loopback-connector-mongodb --save`
5. Modificar el archivo datasources.json que se encuentra en la carpeta server
6. Listo para ejecutar `node .`
