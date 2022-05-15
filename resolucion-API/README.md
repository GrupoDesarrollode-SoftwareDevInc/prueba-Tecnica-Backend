# EME Technologies 'resolucion-API'

**Directrices:**

- Usted debe crear una api con typescript usando las mejores prácticas de código y una estructura basada en DDD
- Se dará una base de código sobre el cual usted deberá escribir y resolver los requerimientos
- Usted No puede modificar los archivos fuera de la carpeta src
- Para que su solución pueda ser aceptada totalmente debe ejecutarse sin problemas con el comando npm start
- Las configuraciones del linter no deben dar ningún error
- No se permiten variable de tipo any asi que debes tipar todas tus variables según corresponda
- Para resolver el ejercicio de la mejor manera consideré que la base de datos está en cero
- El proyecto debe correr sin ningún problema en cualquier entorno
- Se proporcionara una base de código, si usted considera que este está mal hecho, mal estructurado o que se podría optimizar tiene completa disposición para cambiarlo, siempre y cuando no entre en conflicto con los puntos anteriores
- Si considera que la estructura de carpetas está mal hecha puede cambiarla
(opcional) Para esta parte de la prueba técnica dentro de la carpeta src dejar un archivo readme donde explique de manera sencilla como soluciono los problemas dados

**requerimentos tecnicos obligatorios**

- passport
- typescript
- MongoDB
- Buen manejo en la estructura DDD
- JWT
- bcrypt
- express

## Explicacion del ejercicio

Usted debe contruir una API que haga uso de una base de datos no relacional(MongoDB).
Se dispondra de 2 schemas: **usuarios** y **posts**

**Las funcionalidades para usuarios seran:**

- Un login que haga uso de las practicas de JWT y passport
- Un register de usuarios
- El modelo de usuario queda a su criterio, pero es obligatiorio que tengan: name, email, password. Puede añadir parametros a su conveniencia

**Las funcionalidades para postsseran:**

- Los usuarios pueden crear post y leerlos
- si no eres el autor de post no puedes leerlo
- **(opcional)** borrar post
- **(opcional)** editar post
- El modelo de posts queda a su criterio, pero es obligatiorio que tengan: titulo, autor, descripcion, contenido. Puede añadir parametros a su conveniencia

**Cosas a tener en cuenta**

- Las respuestas de la api deben mantener una misma estructura
- Los codigos de respuesta deben ser los adecuados para cada situacion

**Nota:** Ten en cuenta practicas de seguridad si las conoces. Si necesitas instalar un modulo que necesites consultalo al entrevistador.
