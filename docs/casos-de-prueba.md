# Casos a automatizar

## Consideraciones generales

Las instrucciones son para realizar un E2E y los pasos a seguir son dependientes uno de los otros. Por lo que, los casos de prueba a automatizar se van a enfocar en validar pasos de flujos claves para continuar con el E2E y van a ser consecutivos.

### Casos de Pruebas

#### Caso 1

**Descripción:**
- Usuario abre un navegador.
- Ingresa a la URL [https://www.latamairlines.com/co/es](https://www.latamairlines.com/co/es).
- Se espera que el navegador muestre la página para LATAM Colombia.

**Pasos:**
1. Abrir un navegador.
2. Ingresar a la URL [https://www.latamairlines.com/co/es](https://www.latamairlines.com/co/es).

**Resultados Esperados:**
- El navegador debe mostrar la página para LATAM Colombia.

#### Caso 2

**Descripción:**
- Usuario ejecuta el Caso 1.
- Selecciona la opción ‘Solo ida’.
- Se espera que el navegador muestre ‘Solo ida’ en las opciones de búsqueda.

**Pasos:**
1. Ejecutar el Caso 1.
2. Seleccionar la opción ‘Solo ida’.

**Resultados Esperados:**
- El navegador debe mostrar ‘Solo ida’ en las opciones de búsqueda.


### Caso 3

**Descripción:**
- El usuario ejecuta el Caso 1.
- Selecciona la opción "Premium Class".
- Se espera que el navegador muestre "Premium Class" en las opciones de búsqueda.

**Pasos:**
1. Ejecutar el Caso 1.
2. Seleccionar "Premium Class".
3. Verificar que el navegador muestra "Premium Class" en las opciones de búsqueda.

**Resultados Esperados:**
- Confirmar que el navegador muestra la opción "Premium Class" en las opciones de búsqueda.

### Caso 4

**Descripción:**
- El usuario ejecuta el Caso 1.
- Selecciona "Agregar pasajero".
- Agrega un niño como pasajero.
- Se espera que el navegador muestre "2 pasajeros" en las opciones de búsqueda.

**Pasos:**
1. Ejecutar el Caso 1.
2. Seleccionar "Agregar pasajero".
3. Agregar un niño como pasajero.
4. Verificar que el navegador muestra "2 pasajeros" en las opciones de búsqueda.

**Resultados Esperados:**
- Confirmar que el navegador muestra "2 pasajeros" en las opciones de búsqueda.

### Caso 5

**Descripción:**
- El usuario ejecuta el Caso 1.
- Ingresa como origen de viaje "Medellín".
- Se espera que el navegador muestre una única opción de origen, siendo esta "Medellín".

**Pasos:**
1. Ejecutar el Caso 1.
2. Ingresar como origen de viaje "Medellín".
3. Verificar que el navegador muestra una única opción de origen, siendo esta "Medellín".

**Resultados Esperados:**
- Confirmar que el navegador muestra una única opción de origen, siendo esta "Medellín".

### Caso 6

**Descripción:**
- El usuario ejecuta el Caso 5.
- Ingresa como destino de viaje "Bogotá".
- Se espera que el navegador muestre una única opción de destino, siendo esta "Bogotá".

**Pasos:**
1. Ejecutar el Caso 5.
2. Ingresar como destino de viaje "Bogotá".
3. Verificar que el navegador muestra una única opción de destino, siendo esta "Bogotá".

**Resultados Esperados:**
- Confirmar que el navegador muestra una única opción de destino, siendo esta "Bogotá".

### Caso 7

**Descripción:**
- El usuario ejecuta el Caso 1.
- Selecciona tipo de cabina "Premium Class" y tipo de viaje "Solo ida".
- Agrega un niño como pasajero.
- Selecciona vuelo Medellín-Bogotá.
- Selecciona una fecha de vuelo válida.
- Hace clic en el botón "buscar".
- Se espera que el navegador se redirija a otra pantalla y muestre opciones de vuelo que se adapten a lo requerido.

**Pasos:**
1. Ejecutar el Caso 1.
2. Seleccionar tipo de cabina "Premium Class" y tipo de viaje "Solo ida".
3. Agregar un niño como pasajero.
4. Seleccionar vuelo Medellín-Bogotá.
5. Seleccionar una fecha de vuelo válida.
6. Hacer clic en el botón "buscar".
7. Verificar que el navegador se redirige a otra pantalla y muestra opciones de vuelo adecuadas.

**Resultados Esperados:**
- Confirmar que el navegador se redirige a otra pantalla y muestra opciones de vuelo que se adaptan a lo requerido.

### Caso 8

**Descripción:**
- El usuario ejecuta el Caso 8.
- Selecciona el primer vuelo disponible.
- Confirma la selección.
- Se espera que el navegador se dirija al "Resumen del viaje" y la pantalla tenga un botón de "Ir a asientos".

**Pasos:**
1. Ejecutar el Caso 8.
2. Seleccionar el primer vuelo disponible.
3. Confirmar la selección.
4. Verificar que el navegador se dirige al "Resumen del viaje" y la pantalla tiene un botón de "Ir a asientos".

**Resultados Esperados:**
- Confirmar que el navegador se dirige al "Resumen del viaje" y la pantalla tiene un botón de "Ir a asientos".

### Caso 9

**Descripción:**
- El usuario ejecuta el Caso 8.
- Hace clic en el botón "Ir a asientos".
- Se espera que el navegador se dirija a la sección de elegir asientos.

**Pasos:**
1. Ejecutar el Caso 8.
2. Hacer clic en el botón "Ir a asientos".
3. Verificar que el navegador se dirige a la sección de elegir asientos.

**Resultados Esperados:**
- Confirmar que el navegador se dirige a la sección de elegir asientos.

### Caso 10

**Descripción:**
- El usuario ejecuta el Caso 9.
- Selecciona dos asientos disponibles.
- Se espera que el navegador muestre los pasajes con sus respectivos asientos seleccionados.
- Se habilitará el botón "Agregar y Continuar".

**Pasos:**
1. Ejecutar el Caso 9.
2. Seleccionar dos asientos disponibles.
3. Verificar que el navegador muestra los pasajes con sus respectivos asientos seleccionados.
4. Confirmar que se habilita el botón "Agregar y Continuar".

**Resultados Esperados:**
- Confirmar que el navegador muestra los pasajes con sus respectivos asientos seleccionados.
- Confirmar que se habilita el botón "Agregar y Continuar".

### Caso 11

**Descripción:**
- El usuario ejecuta el Caso 10.
- Hace clic en el botón "Agregar y Continuar".
- Se espera que el navegador se dirija a la sección de Equipajes.
- Se podrá agregar equipajes adicionales.

**Pasos:**
1. Ejecutar el Caso 10.
2. Hacer clic en el botón "Agregar y Continuar".
3. Verificar que el navegador se dirige a la sección de Equipajes.
4. Confirmar que se puede agregar equipajes adicionales.

**Resultados Esperados:**
- Confirmar que el navegador se dirige a la sección de Equipajes.
- Confirmar que se puede agregar equipajes adicionales.

### Caso 12

**Descripción:**
- El usuario ejecuta el Caso 11.
- Agrega un equipaje adicional.
- Se espera que se impacte en la cantidad de equipajes.

**Pasos:**
1. Ejecutar el Caso 11.
2. Agregar un equipaje adicional.
3. Verificar que se impacta en la cantidad de equipajes.

**Resultados Esperados:**
- Confirmar que se impacta en la cantidad de equipajes.

### Caso 13

**Descripción:**
- El usuario ejecuta el Caso 11.
- Despliega la sección de equipaje especial.
- Se espera que el navegador muestre la opción de agregar equipaje especial.
- Mostrará el link para visitar las características de este tipo de equipaje.

**Pasos:**
1. Ejecutar el Caso 11.
2. Desplegar la sección de equipaje especial.
3. Verificar que el navegador muestra la opción de agregar equipaje especial.
4. Confirmar que muestra el link para visitar las características de este tipo de equipaje.

**Resultados Esperados:**
- Confirmar que el navegador muestra la opción de agregar equipaje especial.
- Confirmar que muestra el link para visitar las características de este tipo de equipaje.

### Caso 14

**Descripción:**
- El usuario ejecuta el Caso 13.
- Selecciona el link de ‘Ver características’.
- Se espera que el navegador abra la página con la información solicitada.

**Pasos:**
1. Ejecutar el Caso 13.
2. Seleccionar el link de ‘Ver características’.
3. Verificar que el navegador abre la página con la información solicitada.

**Resultados Esperados:**
- Confirmar que el navegador abre la página con la información solicitada.

### Caso 15 - Error

**Descripción:**
- El usuario ejecuta el Caso 1.
- Hace clic en el botón ‘buscar’.
- Se espera que el navegador muestre el icono de error y no se realice la búsqueda.

**Pasos:**
1. Ejecutar el Caso 1.
2. Hacer clic en el botón ‘buscar’.
3. Verificar que el navegador muestra el icono de error y no realiza la búsqueda.

**Resultados Esperados:**
- Confirmar que el navegador muestra el icono de error y no realiza la búsqueda.

### Caso 16 - Advertencia

**Descripción:**
- El usuario ejecuta el Caso 1.
- Ingresa como destino de viaje ‘Bogotá’.
- Se espera que el navegador muestre un mensaje de advertencia y no se pueda ingresar el destino.

**Pasos:**
1. Ejecutar el Caso 1.
2. Ingresar como destino de viaje ‘Bogotá’.
3. Verificar que el navegador muestra un mensaje de advertencia y no se puede ingresar el destino.

**Resultados Esperados:**
- Confirmar que el navegador muestra un mensaje de advertencia y no se puede ingresar el destino.

### Caso 17 - Error

**Descripción:**
- El usuario ejecuta el Caso 1.
- Ingresa como origen de viaje ‘Medellín’.
- Ingresa como destino de viaje ‘Bogotá’.
- Hace clic en el botón ‘buscar’.
- Se espera que el navegador muestre el icono de error y no se realice la búsqueda.

**Pasos:**
1. Ejecutar el Caso 1.
2. Ingresar como origen de viaje ‘Medellín’.
3. Ingresar como destino de viaje ‘Bogotá’.
4. Hacer clic en el botón ‘buscar’.
5. Verificar que el navegador muestra el icono de error y no realiza la búsqueda.

**Resultados Esperados:**
- Confirmar que el navegador muestra el icono de error y no realiza la búsqueda.
