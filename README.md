# laboratorio_mod_2

# Principales dificultades enfrentadas en el desarrollo del proyecto
## Comprender la herencia prototípica
Una de las mayores dificultades fue entender cómo aplicar la herencia en JavaScript utilizando Object.create() y call() para que las funciones constructoras Ingreso y Egreso heredaran correctamente de Movimiento. Esta forma de herencia
resulta más compleja que el uso de class y extends, ya que requiere un entendimiento profundo del sistema de prototipos de JavaScript.

## Manejo de tipos y validaciones de entrada
Validar que el usuario ingrese una descripción válida y un monto numérico mayor que cero también presentó desafíos. Fue necesario usar parseFloat, isNaN y estructuras de control como if y return para garantizar que los datos sean consistentes
y evitar errores en tiempo de ejecución.

## Implementación de programación funcional
La utilización de métodos funcionales como filter, reduce y forEach para organizar, agrupar y resumir los movimientos representó una dificultad adicional. Estos métodos requieren comprender claramente su funcionamiento, 
qué tipo de datos retornan y cómo encadenarlos correctamente para obtener los resultados esperados.

## Organización del flujo del programa (estructura imperativa)
Controlar el flujo del programa mediante prompt, bucles while, condiciones y funciones implicó una planificación lógica cuidadosa. Coordinar correctamente las entradas del usuario, el almacenamiento de los datos y la ejecución de funciones
en el orden correcto fue clave para que la aplicación funcionara de manera coherente y sin errores.

# Explicación de la arquitectura de prototipos implementada
El proyecto utiliza un enfoque de herencia prototípica para estructurar las entidades relacionadas con los movimientos financieros. Esta arquitectura se basa en una función constructora principal llamada Movimiento, que representa cualquier
tipo de transacción, ya sea ingreso o egreso. Esta entidad base contiene propiedades y comportamientos comunes que serán compartidos por sus derivados.

A partir de Movimiento se derivan dos subtipos: Ingreso y Egreso. Ambos utilizan el mecanismo de llamada al constructor padre para heredar sus propiedades. Luego, mediante el uso de la creación de prototipos, estos subtipos también heredan 
los métodos definidos en Movimiento, como por ejemplo la visualización de los datos del movimiento.

Este tipo de arquitectura promueve la reutilización de código, ya que evita la duplicación de lógica común, y permite una clara organización jerárquica del comportamiento. Además, facilita la escalabilidad, pues si se requiere agregar nuevos 
tipos de movimientos en el futuro, solo sería necesario extender el prototipo base.

La elección de este enfoque, en lugar del uso de clases modernas, responde al objetivo del proyecto de aplicar conceptos fundamentales de JavaScript como Object.create() y el manejo explícito del prototipo.

# Sitio desplegado:
https://laurasalas-dev.github.io/laboratorio_mod_2/
