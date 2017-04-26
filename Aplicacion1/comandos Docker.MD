# Comandos Docker

# docker ps


## docker ps -a

Este comando listaba **TODOS** los contenedores que estan **instalados**

```
>> docker ps -a
```

## docker stop 'id' o 'nombre'

Este comando **detien los o el contenedor que este **corriendo**
```
>> docker stop 12mMC3234 micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```

## docker start 'id' o 'nombre'

Este comando **levanta** los o el contenedor que este **detenido**

```
>> docker start 12mMC3234 micontenedor
>> docker start 12
>> docker start m
>> docker start 12 mi
```


## docker rm 'id' o 'nombre'

Este comando **elimina** los o el contenedor que este **detenido**

```
>> docker rm 12mMC3234 micontenedor
>> docker rm 12
>> docker rm m
>> docker rm 12 mi
```


## Mysql

Para utilizar docker con mysql vamos a utilizar el siguiente comando:

```
>> docker run --name danilo -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=danilo -e MYSQL_USER=danilo -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```

### --name danilo
Nombre del contenedor

## -e MYSQL_DATABASE

-e Le dice al cocker que es una variable

## -e MYSQL_ROOT_PASSWORD

-e le dice al docker que es una variable de entorno
la vlave del usuario **root**

## -p 3306:3306
-p Es para el port binding con el sistema operativo **host**

-3306 de la izq es el puerto que se **usa** en el contenedor

-3306 de la derecha es el puerto para acceder en la maquina **host**


## POSTGRESQL
```
>>docker run --name postgresdanilo -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=danilo -e POSTGRES_DB=politecnica -p 5432=5432 -d postgres
```
## MongoDB

```
>> docker run --name danilomongo -p 27017:27017 -d mongo
```
maning--- docker
