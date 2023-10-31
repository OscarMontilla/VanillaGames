Escenario del proyecto
Vanilla Games S.L. es una empresa de desarrollo de minijuegos para navegadores web, creados con vanillaJS, es decir, desarrollados exclusivamente con Javascript como lenguaje de programación (sin frameworks)

En esta empresa trabajan 10 desarrolladores y, habitualmente, suelen tener a tres alumnos/as en prácticas, de los cuales, al menos uno, tendrá muchas posibilidades de formar parte del equipo de desarrollo al acabar su etapa de formación.

El método de trabajo que se utiliza en dicha empresa consiste en proponer a cada uno de los miembros del equipo el desarrollo de un minijuego que, al acabar, deberán compartir con el resto de sus compañeros. Estos, a su vez, deben comentar y valorar cada una de las propuestas. Finalmente, en la empresa hay un equipo responsable de seleccionar aquellas propuestas que muestran un mayor potencial, para ser desarrolladas de manera definitiva por todo el equipo de trabajo, con el fin de crear una aplicación para su posterior comercialización.

Hasta la fecha, para el proceso de publicación de proyectos, comentarios y valoración utilizaban algunas herramientas ofimáticas, tipo hoja de cálculo de google. Actualmente pretenden crear una aplicación web tipo intranet para llevar a cabo este propósito.

Como alumno en prácticas, tu trabajo consiste en crear una aplicación web que permitirá a los desarrolladores de Vanilla Games, publicar sus propuestas de minijuegos, de manera que el resto de compañeros podrá hacer comentarios y emitir una valoración de cada proyecto publicado en esta plataforma.

Requisitos del proyecto y casos de uso general
Los casos de uso son una técnica de modelado utilizada en el desarrollo de software para describir las interacciones entre un sistema y sus usuarios. En términos simples, los casos de uso describen cómo los usuarios interactúan con un sistema y qué resultados esperan obtener de él.

INFO
Los casos de uso son útiles para ...
Casos de uso general
Esta aplicación web debe permitir a un usuario registrarse (con su nombre, apellidos, email y contraseña) y posteriormente iniciar y cerrar sesión. Un usuario registrado debe poder ver un listado de proyectos publicados por los desarrolladores. También podrá editar su perfil y subir una imagen de tipo avatar.

Si el usuario registrado tiene el perfil de ‘desarrollador’ , además, debe poder publicar proyectos con información del tipo: nombre de proyecto, una descripción, una imagen representativa y dos enlaces, el del proyecto desplegado en un servidor de pruebas y el del repositorio del código correspondiente, el estado del proyecto, etc. También debe poder eliminar o editar sus proyectos.

Por otro lado, el perfil desarrollador debería poder realizar comentarios de cada uno de los proyectos publicados y añadir una valoración en forma de estrellas.

Finalmente, habrá un administrador que podrá adminstrar el perfil de cada uno de los usuarios registrados en la plataforma (editar, borrar, etc) así como modificar el rol de cada uno de estos. También tendrá control total sobre los comentarios y valoraciones.

Fases de desarrollo.
Necesitamos organizarnos un poco. Vamos a planificar como vamos a llevar a cabo las diferentes fases para cumplir con nuestros objetivos:

Definición del proyecto y requisitos básicos: En primer lugar debemos tener muy claro qué se espera de nuestra aplicación, por lo que anotaremos cada funcionalidad teniendo en cuanta los diferentes actores (roles de acceso). Esto es lo hemos hecho en el apartado anterior.
Definición de las versiones: Una vez conocemos los requisitos del proyecto, dividiremos el trabajo en diferentes versiones, de manera que todas ellas serán operativas, aunque cada una ampliando las funcionalidades.
Planificación del proyecto: Basandonos en la metodología Agile devidiremos todo el proceso en diferentes historias/tareas (para cada una de las versiones definidas) que: agruparemos, temporizaremos y representaremos mediante diagramas.
Diseño de la interficie: Basandonos en el diseño centrado en el usuario (DCU):
Realizaremos un Benchmarking (para copiarnos de la competencia)
Crearemos un modelo de usuarios
Diseñaremos los prototipos de bajo nivel(bocetos, wireframes)
Diseñaremos el mockup (prototipo de alto nivel) junto a la guía de estilos (usaremos la aplicación Figma)
Haremos pruebas de usabilidad y rediseñaremos los prototipos.
Programación del frontend (html/css/js):Maquetaremos los prototipos (html/css) y diseñaremos la lógica de validación de cliente
Programación del backend: Utilizaremos un backend como servicio (SUPABASE) para:
Crear las bases de datos
Diseñar consultas sql y funciones postgres
Programaremos un ORM en javascript para el mapping de la bd.
Integración de frontend y backend en la aplicación:
Programaremos la SPA a partir de los prototipos
Programaremos la lógica de acceso a la bd empleando el ORM
Programaremos el resto de funcionalidades (sesiones y roles de acceso, etc)
Analisis usabilidad II: Haremos pruebas de usabilidad (test de usuarios) y solucionaremos los posibles conflictos detectados.
Testing y despliegue en producción:
Diseñaremos un sistema de testing para crear tests unitarios
Configuraremos un entorno DevOps para trabajar con Integración continua y despliegue continuo (CI/CD)
Desplegaremos en producción cada una de las versiones.
Versiones
Vamos a dividir el desarrollo del proyecto en diferentes versiones a partir de las funcionalidades que podrá realizar:

VERSIÓN 1.0: Implementación de la publicación de proyectos
VERSIÓN 2.0: Implementación de los comentarios de los proyectos
VERSIÓN 3.0: Implementación del sistema de valoración mediante estrellas
VERSIÓN 4.0: Implementación del sistema de valoración basado en rúbricas o criterios de valoración.
Arquitectura y tecnologías
A la hora de decidir la arquitectura a implementar en el desarrollo de nuestro proyecto debemos tener en cuenta una serie de consideraciones previas, como la velocidad de carga inicial, el SEO, la experiencia de usuario, etc. pero también debemos considerar aspectos técnicos. Vamos a analizar primero algunas de las posibilidades que podemos elegir para la implementación de nuestro proyecto:

ARQUITECTURAS
Server-side rendering (SSR)
Client-side rendering (CSR)
Static site generation (SSG)
Incremental static regeneration (ISR)
Server-side rendering (SSR):
En SSR, el servidor procesa la petición del cliente y devuelve una página web completamente renderizada. Esto significa que el servidor envía HTML, CSS y JavaScript al navegador web del cliente, y el navegador solo necesita renderizar el contenido. SSR es beneficioso para el SEO y la velocidad de carga inicial de la página.*

Aquí Tienes más información sobre las diferentes arquitecturas.

¿Que arquitectura vamos a utilizar en nuestro proyecto?
En nuestro caso nos basaremos en CSR, es decir, renderizamos todo el código html en el navegador. El cliente solo se encargará de responder a las peticiones devolviendo los datos solicitados (en formato json). De esta manera podemos dividir la implementación del proyecto en FRONTEND y BACKEND, separando cada funcionalidad y desarrollándola de manera independiente.

¿Como diseñaremos nuestro FrontEnd ?
Diseño de la interficie
En primer lugar, para el diseño de la interficie, crearemos los bocetos de nuestra aplicación (con papel y lapiz, como se ha hecho siempre).

Más tarde, éstos evolucionarán hacia el Wireframe (Diseño de alambres carente de estilo) que finalmente se convertirá en un Mockup (diseño con colores y tipografías definitivas). Para el diseño de este último y para implementación de la guía de estilos utilizaremos la herramienta FIGMA.

Maquetación del frontend
En primer lugar crearemos los prototipos utilizando html5, css3 y el framework Bootstrap 5. Utilizaremos una plantilla Bootswatch que adaptaremos a nuestro diseño mediante SASS.

Una vez tenemos los prototipos html creados, los integraremos en la SPA e implementaremos la lógica de programación utilizando VanillaJS , es decir, con Javascript puro (ES6, sin usar frameworks)

Tranquilo, es normal que no hayas entendido nada aún... pero ten paciencia, porque todo esto se explica en el Módulo 9 - Diseño de interficies y en el Módulo 6 - Programación del lado del cliente (javascript).

¿Como implementaremos las funcionalidades del BackEnd?
Usaremos SUPABASE como servicio de Backend
En el lado del backend utilizaremos Supabase como servicio backend.

Este servicio nos permite almacenar la información en bases de datos relacionales en un entorno basado en postgreSQL.

También nos ofrece, entre otros::

Un sistema de autenticación basado en proveedores como google, github, etc.

Un sistema de control de accesos según roles a través de las políticas de permisos.

Un storage de almacenamiento de archivos (para las imágenes) en los buckets que nos permite configurar.

Una API en javascript para las peticiones más frecuentes que atacan a las tablas de la bd (CRUD) así como un sistema de funciones personalizadas (con sus correspondiente api en js) para hacer consultas específicas (por ejemplo, consultas multitabla)

Nos va a tocar desenpolvar nuestros conocimientos de SQL y Posgree que aprendimos en el Módulo 4 - Base de datos... pero tranquilo, iremos iremos refrescando la memória mientras explicamos el resto de conceptos.

Nuestro entorno de desarrollo: VSCODE
En el entorno de desarrollo tendremos a VSCode trabajando sobre Nodejs y su gestor de paquetes npm.

Configuraremos el IDE con los plugins necesarios para facilitar un buen flujo de trabajo.

Formatearemos el código siguiendo el estándar 'Standard' mediante herramientas de verificación de código como 'Eslint'.

Para el control de versiones trabajaremos con un repositorio Git que sincronizaremos con una cuenta de Github.

En el proceso de desarrollo emplearemos el flujo de trabajo ‘Flujo de rama de funcionalidad’. Es decir, crearemos ramas específicas para cada funcionalidad que integraremos en la rama principal una vez testadas las funcionalidades. Así, nuestro repositorio reflejará todo el proceso de trabajo, las diferentes versiones, etc.

Y para el despliegue de nuestras aplicaciones
Desplegaremos el proyecto en github pages (en la fase de pruebas) y utilizaremos un servicio como por ejemplo RailWay, Netlify, etc para el despliegue en producción.

Requesitos y diagrama de casos de uso
En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

Por lo tanto, vamos a comenzar por la versión 1.0.

Lo primero es definir los casos de uso para esta versión. Una primera aproximación podría ser la siguiente:

RECUERDA QUE...
Los casos de uso son una herramienta esencial para comprender y especificar los requisitos de un sistema, y para garantizar que el software desarrollado satisfaga las necesidades de los usuarios finales.

Casos de uso para la V1.0 - Definición básica
Registrar usuario: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
Recuperar contraseña: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
Iniciar sesión: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
Cerrar sesión: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
Editar perfil: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
Ver proyectos: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
Publicar proyecto: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
Editar proyecto: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
Eliminar proyecto: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
Ver/Editar usuarios: Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.
Eliminar usuario: Un administrador puede eliminar cualquier usuario registrado en la plataforma.
Diagrama de casos de uso
Para tener la información de manera gráfica vamos a utilizar uno de los diagramas UML que aprendimos a hacer el curso pasado:

INFO
¿Qué es un diagrama UML?
UML, que significa Lenguaje de Modelado Unificado (Unified Modeling Language, en inglés), es un lenguaje estándar utilizado en el desarrollo de software para visualizar, especificar, construir y documentar los artefactos de un sistema. Los diagramas UML son representaciones gráficas utilizadas en UML para modelar diferentes aspectos del sistema.

Existen varios tipos de diagramas UML, cada uno de los cuales se enfoca en un aspecto específico del sistema y proporciona diferentes niveles de detalle. Algunos de los diagramas UML más comunes son:

Diagrama de casos de uso: describe las interacciones entre los actores y el sistema, mostrando qué funcionalidades proporciona el sistema a los usuarios.

Diagrama de clases: representa la estructura estática del sistema, mostrando las clases, sus atributos, métodos y las relaciones entre ellas.

Diagrama de secuencia: muestra la interacción entre los objetos en una secuencia temporal, describiendo cómo los objetos se comunican y colaboran entre sí.

Diagrama de actividades: describe el flujo de trabajo o los procesos empresariales en un sistema, mostrando las actividades y las decisiones que se toman en cada etapa.

Diagrama de componentes: muestra la estructura de componentes de un sistema, identificando los componentes y las dependencias entre ellos.

Diagrama de despliegue: representa la arquitectura física del sistema, mostrando cómo los componentes se distribuyen en el hardware y la red.

Estos son solo algunos ejemplos de los diagramas UML más utilizados, pero hay otros diagramas, como el diagrama de estados, el diagrama de objetos y el diagrama de comunicación, que también se utilizan para modelar diferentes aspectos de un sistema. En general, los diagramas UML proporcionan una representación visual clara y sistemática del sistema, lo que facilita la comprensión, la comunicación y el diseño del software.

📖 Aquí encontrarás más información sobre los diagramas UML 📖

¿Qué es un diagrama de casos de uso?
Un diagrama de casos de uso es una herramienta utilizada en el análisis y diseño de sistemas de software para representar las interacciones entre los actores (usuarios o sistemas externos) y el sistema en sí. Es una representación visual que describe cómo se utilizará el sistema desde la perspectiva del usuario.

En un diagrama de casos de uso, los actores se representan mediante figuras externas al sistema, como personas, otros sistemas o incluso dispositivos. Los casos de uso, por otro lado, se representan como elipses y describen las diferentes acciones o funciones que el sistema proporciona a los actores.

El diagrama muestra las relaciones entre los actores y los casos de uso a través de líneas que conectan las figuras correspondientes. Estas líneas representan las interacciones entre los actores y el sistema, indicando qué casos de uso son accesibles para cada actor.

Los casos de uso se utilizan para capturar los requisitos funcionales del sistema y proporcionar una visión general de cómo interactúan los diferentes actores con el sistema. También ayudan a identificar los distintos escenarios de uso y las relaciones entre ellos.

El diagrama de casos de uso es una herramienta valiosa para comunicar y comprender las funcionalidades clave del sistema entre los desarrolladores, los usuarios y otros interesados en el proyecto de software.

📖 Aquí encontrarás más información sobre los diagramas de casos de uso 📖

Vamos a crear nuestro diagrama de casos de uso.

TIP
Para dibujar el diagrama de casos de uso una herramienta interesante puede ser FIGMA..

Figma es una herramienta de diseño de interfaces de usuario (UI) y experiencia de usuario (UX) basada en la nube. Permite a los diseñadores crear, prototipar y colaborar en diseños interactivos de alta calidad de forma colaborativa.

El diagrama de casos de uso para la versión 1.0 sería el siguiente:

Diagrma de casos de uso para la versión 1.0
diagrama de casos de uso V1.0
![diagrama](uml-version1.png)
Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestro aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo lo que debe hacer la versión 1.0, nuestra misión ahora es planificar el trabajo que se nos viene encima...