## Clase 122 BD Mongo con Docker compose

- Tenemos más control y se trabaja de manera más rápida
- Docker compose ayuda a trabajar más facil que con comandos de docker y ayuda a agrupar diferentes servicios
- Creo archivo `docker-compose.yaml`
- Es necesario asignar un volumen (espacio físico de almacenamiento) para guardar los datos, porque si elimino la imagen se borraría la data por eso es necesario especificar el volumen
- Levantar imagen

```
docker-compose up -d
```

- El -d significa **detached**, es decir, que el proceso no se detiene al finalizar ni al cerrar la terminal (corre en background)

## Clase 125 Variables de entorno

- Para variables de entorno en frontend debe inicar con NEXT*PUBLIC* `NEXT_PUBLIC_XXXXX`
- Para variables de entorno en backend `XXXXX`

## Clase 127 Diferencia entre backend nextjs y node con mongo

- Al definir el esquema y que no se vuelva a definir lo correcto seria

```
const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);
```
