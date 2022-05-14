## Clase 122 BD Mongo con Docker compose

- Tenemos más control y se trabaja de manera más rápida
- Docker compose ayuda a trabajar más facil que con comandos de docker y ayuda a agrupar diferentes servicios
- Creo archivo `docker-compose.yaml`
- Es necesario asignar un volumen (espacio físico de almacenamiento) para guardar los datos, porque si elimino la imagen se borraría la data por eso es necesario especificar el volumen
- Levantar imagen
```
docker-compose up -d
```
* El -d significa __detached__, es decir, que el proceso no se detiene al finalizar ni al cerrar la terminal (corre en background)
