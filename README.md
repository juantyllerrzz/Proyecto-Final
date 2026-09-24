IncidentHub API es una API REST desarrollada con Node.js y TypeScript para la gestión de incidentes.

La aplicación permite crear, consultar, actualizar, cambiar estados y eliminar incidentes mediante endpoints HTTP, aplicando validaciones, manejo centralizado de errores, autenticación mediante tokens y control de permisos por roles.


## Tecnologías utilizadas

- Node.js
- TypeScript
- Express.js
- dotenv
- tsx


## Requisitos para ejecutar el proyecto

Antes de ejecutar la aplicación se requiere tener instalado:

- Node.js versión 18 o superior
- npm


Verificar instalación:

```bash
node -v
npm -v
# Middlewares implementados

## authMiddleware

Se encarga de validar la autenticación del usuario mediante el header:

Authorization: Bearer token

Permite identificar si la petición contiene un token válido antes de acceder a los recursos protegidos.


## adminMiddleware

Controla permisos administrativos.

Es utilizado principalmente para operaciones sensibles como eliminar incidentes.

El rol instructor tiene permisos completos, mientras que technician no puede realizar eliminaciones.


## validateIdMiddleware

Valida que los identificadores enviados en las rutas sean valores numéricos válidos.


## validateIncidentMiddleware

Verifica que los campos obligatorios de un incidente existan antes de procesar la solicitud.


## validatePriorityMiddleware

Controla que la prioridad recibida sea una de las permitidas:

- LOW
- MEDIUM
- HIGH
- CRITICAL


## validateTimeMiddleware

Valida el tiempo estimado del incidente.

Reglas aplicadas:

- Debe ser numérico.
- Debe ser mayor que cero.
- No puede superar 480 minutos.
- Los incidentes CRITICAL no pueden superar 60 minutos.


## loggerMiddleware

Registra información básica de cada solicitud HTTP realizada a la API.


## requestInfoMiddleware

Agrega información adicional de la petición como método, ruta y fecha.


## errorMiddleware

Centraliza el manejo de errores de la aplicación y devuelve respuestas uniformes al cliente.


## notFoundMiddleware

Gestiona rutas inexistentes y devuelve una respuesta indicando que el endpoint no fue encontrado.



# Diferencia entre Model y DTO

## Model

El modelo representa la estructura completa de un incidente dentro del sistema.

Contiene información generada por la aplicación como:

- id
- status
- createdAt


## DTO (Data Transfer Object)

El DTO representa únicamente los datos que el cliente puede enviar.

No incluye información generada automáticamente por el servidor.

Por ejemplo, al crear un incidente el usuario envía:

- title
- description
- reporter
- location
- priority
- estimatedMinutes

Mientras que la API genera:

- id
- status
- createdAt



# Reflexión final

Durante el desarrollo de IncidentHub API se aplicaron conceptos fundamentales de construcción de APIs REST utilizando Node.js, Express y TypeScript.

La separación por capas permitió organizar mejor la lógica del proyecto, separando responsabilidades entre rutas, controladores, validaciones y modelos.

El uso de middlewares permitió controlar autenticación, autorización, validación de datos y manejo de errores de una forma reutilizable.

Además, se implementaron reglas de negocio como las restricciones de incidentes críticos y las transiciones permitidas de estados, logrando que la API no solamente responda solicitudes sino que también controle correctamente el comportamiento del sistema.
