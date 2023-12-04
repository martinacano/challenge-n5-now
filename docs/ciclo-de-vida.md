# Ciclo de Vida de la Automatización

## 1. Análisis de requerimientos y planificación de casos
En primer lugar, se identificaron los requerimientos solicitados y se idearon los casos de pruebas a automatizar con el fin de abarcar los requisitos funcionales y no funcionales.

## 2. Investigación de las herramientas a utilizar
Debido a que, en los requerimientos, se especificó las herramientas a utilizar, fue necesario realizar una investigación y práctica de las mismas. Este proceso fue esencial, ya que no se había tenido experiencia previa con las mismas.

## 3. Configuración de entorno y organización de proyecto
Se realizaron tareas de organización, estructurando las carpetas y archivos necesarios para la ejecución de los casos planificados. Se adoptó el modelo de diseño Page Object Model. Además, se configuró el entorno para ejecutar correctamente las herramientas solicitadas.

## 4. Identificación de elementos a utilizar y escritura de scripts
Se identificaron los elementos a utilizar durante las pruebas, dando prioridad al uso de atributos como 'data-testid' y 'id' sobre otros. Con esta información, se procedió a la creación de scripts y funciones.

## 5. Problema en abrir URL
Después de haber creado el primer script, al intentar ejecutar el primer flujo automatizado, Cypress presentó el siguiente error.

```javascript
cy.visit() failed trying to load:
https://www.latamairlines.com/co/es
We attempted to make an http request to this URL but the request failed without a response.
We received this error at the network level:
  > Error: ESOCKETTIMEDOUT
```

Para abordar el error, se llevó a cabo una investigación que condujo a la solución de agregar headers: { "Accept-Encoding": "gzip, deflate" } en la función cy.visit.

## 6. Localización de la página

Dado que me encuentro en Argentina y las instrucciones requerían específicamente que la página sea de Colombia, fue necesario agregar un paso adicional para evitar que la página se reubique en el país desde el cual se ejecutan los casos. Por cuestiones de recursos y tiempo, se ha dejado como una mejora futura realizar el cierre dinámico de esa pantalla, ya que si la pantalla no existe, el test mostrará un error debido a cómo se estructuraron los casos.

## 7. Definición de fecha a utilizar
Debido a que la fecha de vuelo no estaba inicialmente contemplada en los requisitos, se optó por realizar su búsqueda de manera dinámica durante un periodo específico de tiempo a partir del día en que se ejecutan los casos. Esta estrategia asegura que la búsqueda sea sostenible a lo largo del tiempo y reduce la necesidad de mantenimiento constante de fechas. En este enfoque, la fecha se estableció automáticamente para el próximo mes con respecto al mes actual.

## 8. Problema en seguir flujo por botón ‘buscar’

En el contexto de hacer clic en el botón 'buscar' para continuar con el flujo del vuelo, se observó que el navegador se redirige a la página de reserva de hoteles, separando el flujo del vuelo en una nueva pestaña. El problema radicaba en que Cypress no manejaba adecuadamente este cambio de pestañas. La solución implementada fue prevenir la redirección a la nueva pestaña, almacenar la URL con la búsqueda del vuelo en una variable y luego dirigirse a esa URL específica para mantener el control del flujo.

## 9. Definiciones en validaciones a utilizar

Dado que las instrucciones detallaban un flujo E2E, se estableció la ubicación de las validaciones clave para dar continuidad al flujo. Para optimizar el uso de tiempo y recursos, se decidió capturar las pantallas de las nuevas ventanas a las que se dirige el flujo y validar los datos iniciales de la búsqueda. Estas capturas se incorporan a los reportes generados por la herramienta solicitada.

## 10. Definiciones para asignar asientos

Dado que el flujo E2E es dinámico y, específicamente, la asignación de asientos no puede realizarse de manera estática, se optó por implementar una búsqueda dinámica de asientos mediante el filtro '[data-available="true"]'.

## 11. Priorización en los flujos

Después de la selección de asientos, surgió la interrogante de "¿qué sucede si no hay asientos disponibles?" Dadas las limitaciones de tiempo y recursos, no fue posible incorporar una validación o un flujo específico para este caso. No obstante, es crucial tomar nota de ello y considerar la automatización cuando los recursos estén disponibles. En este conjunto de pruebas, se dio prioridad al escenario ideal y a las validaciones de datos específicos.

## 12. Nuevamente se abre otra pestaña

Como se mencionó anteriormente, el flujo se redirige a una nueva pestaña, y Cypress no es compatible con esta acción. A diferencia del caso anterior, la pestaña anterior permanece igual que antes. Por lo tanto, fue necesario eliminar ciertos atributos para poder validar la nueva pestaña.

## 13. Gestión y análisis de Resultados:

Después de completar la automatización de todos los casos contemplados, se procedió a gestionar la herramienta de reportes solicitada y analizar los fallos, mejorando así los scripts realizados.

## 14. Documentación y oportunidad de mejora:

Se completó la documentación requerida para el challenge y, al mismo tiempo, se dedicaron esfuerzos constantes para perfeccionar el trabajo realizado.
