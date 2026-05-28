# 08. Bitácora de Uso de IA

## Declaración de Interacciones

* Herramientas Utilizadas: Gemini AI, Claude y GitHub Copilot.
* Contexto de Uso: Configuración del entorno de desarrollo frontend, resolución de dependencias de NPM, estructuración del pipeline de PostCSS para Tailwind v4, consultas sobre las leyes N° 21.459 y N° 19.628 en Chile, y autocompletado de lógica repetitiva en React.

## Prompts Relevantes Utilizados (Flujo Cronológico Real)

1. [Claude]"estoy armando un proyecto con Vite y React desde CMD pero PowerShell me tira un error de políticas de ejecución de scripts y no me deja levantar el entorno. ¿Cómo lo soluciono rápido sin romper los permisos de Windows?"
2. [Gemini]"Instalé Tailwind CSS v4 pero me tira un error gigante de compilación en el css de Vite que dice que PostCSS no reconoce la directiva base. Dame el archivo postcss.config.js exacto y el plugin que tengo que bajar por npm para arreglar el quiebre de estilos."
3. [CHAT GPT]"Tengo que hacer un informe para INACAP sobre ciberseguridad enfocado en Chile. ¿Me sirve el hackeo de ransomware que le hicieron a Capcom en el 2020 para analizarlo con la nueva ley chilena de delitos informáticos 21.459 y ver si calza con el robo de datos?"
4. [Gemini]"Tengo creados unos archivos .md con la investigación del caso de Capcom en Chile. Necesito que me diseñes la estructura visual en código React (.jsx) usando componentes modulares y tarjetas con iconos de Lucide-react para meter la información limpia en pestañas usando Tailwind."
5. [Uso de GitHub Copilot]: "// generar el estado de React (useState) para controlar la pestaña activa del menú y la función Switch para renderizar condicionalmente los componentes del Marco Legal del 01 al 08."
6. [Claude]: "arregla este codigo para que quede bien ordenado y no queden acopladas una sobre otra sin perder la simetria de los cuadros"
7. [Claude]: "me tira error, tengo que cambiar otro archivo de la carpeta del vs code o el error va mas por coneccion de la pagina"
8. [CHAT GPT]: "agrega la informacion restante usada en prompts.jsx para poder visualizarlo en mi pagina"
9. [CHAT GPT] "hace que el texto calce con los recuadros y asi no tener vacios o espacios sin texto/informacion, todo basado en el codigo mandado anteriormente con su respectiva informacion/texto"
10. [Claude]: "enumera los prompts usados del 1 al ultimo, de manera ordenara sin perder el toque visual del codigo"
11. [Claude]: "quiero tener un boton clickeable que redireccione a mi github para tener en mi pagina"
12. [Claude]: "no se arreglo, quedo exactamente igual, mandame el codigo a como estaba antes del github y lo del boton, y asi yo borro el github.jsx, una especie de rollback
13. [Claude]: "hace que la fuente de los items mostrados en la foto se puedan dilucidar de meojr forma con el fondo y el contorno de la pagina, quizas ponerlos siempre en cursiva y no solo al pasar el mouse encima"


## Reflexión sobre el uso de la IA
El uso complementario de Gemini, Claude y GitHub Copilot se enfocó como un soporte de ingeniería inverso. Los modelos de chat permitieron destrabar errores críticos del sistema operativo en la consola de Windows, resolver incompatibilidades de PostCSS y agrupar el marco legal chileno. Por otro lado, GitHub Copilot optimizó los tiempos de desarrollo directamente en el editor mediante el autocompletado de código repetitivo (como la estructura de las pestañas, importaciones de iconos y el enrutamiento lógico), logrando un flujo de trabajo fluido y eficiente.