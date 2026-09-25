# Preguntas
Es el momento de responder a ciertas preguntas por secciones, al final te explico cómo vas
a responderlas.

## Integración de código JavaScript
1. ¿En la integración de código JavaScript se ve el resultado del console.log() y del
alert() en Visual Studio Code? Si no es así, ¿cómo puedo comprobar que mi
console.log() y mi alert() realmente funciona?

<strong> 
Funciona dentro del modo "Preview" del archivo "Ander-FC.html". 
El alert sale al cargar y recargar la página. 
El console.log, se visualiza dentro del modo de Inspección (F12); y a su vez, en el apartado de Consola.
</strong>

## Script externo
1. ¿Se ve el resultado del console.log() y del alert() en Visual Studio Code? Si no es
así, ¿cómo puedo comprobar que mi console.log() y mi alert() realmente funciona? 

<strong>
Inserto el script proveniente de "script.js", al HTML, mediante la línea:

\<script src="script.js"\> 

Después de ello, hago las mismas comprobaciones y termino por confirmar que el resultado es el mismo.


</strong>

2. ¿En que parte del documento HTML deberíamos añadir el elemento script? ¿Y si
usáramos los atributos async o defer?

<strong>
En el primer caso (sin async/defer), la etiqueta "script" debería ir dentro del Body.

En el caso de añadir "async" o "defer", la etiqueta se incluiría dentro del Head.
</strong>