# MineCraft Quiz

Un juego de preguntas sobre Minecraft desarrollado como una Progressive Web App (PWA) que puede instalarse y jugarse sin conexión a internet.

## Características

- Pantalla de carga atractiva
- Menú principal con puntuación acumulada
- Orientación horizontal para mejor experiencia de juego
- Sistema de 3 vidas
- Gana 5 puntos por cada respuesta correcta
- Preguntas variadas sobre el universo de Minecraft
- Funciona sin conexión a internet
- Instalable como aplicación (PWA)

## Cómo jugar

1. Espera a que cargue el juego
2. En el menú principal, presiona el botón "JUGAR"
3. Responde correctamente las preguntas sobre Minecraft
4. Cada respuesta correcta suma 5 puntos a tu puntuación
5. Tienes 3 vidas, pierdes una por cada respuesta incorrecta
6. Cuando pierdes todas las vidas, el juego termina y tu puntuación se guarda

## Cómo instalar como aplicación

### En Android:
1. Abre el juego en Chrome
2. Pulsa en los tres puntos del menú
3. Selecciona "Añadir a pantalla de inicio" o "Instalar aplicación"

### En iOS:
1. Abre el juego en Safari
2. Toca el icono de compartir
3. Selecciona "Añadir a pantalla de inicio"

### En PC:
1. Abre el juego en Chrome o Edge
2. Verás un icono de instalación en la barra de direcciones
3. Haz clic en él y sigue las instrucciones

## Requisitos para desarrolladores

- Un servidor web para probar la aplicación (Apache, Nginx, etc.)
- Se recomienda utilizar HTTPS para probar todas las características de PWA

## Archivos necesarios

Para que el juego funcione correctamente, debes añadir los siguientes archivos:

- `images/minecraft-logo.png` - Logo de Minecraft para la pantalla de carga
- `images/minecraft-bg.jpg` - Fondo de pantalla temático
- `icons/icon-192x192.png` - Icono para la instalación (192x192px)
- `icons/icon-512x512.png` - Icono para la instalación (512x512px)
- `fonts/minecraft.woff2` - Fuente estilo Minecraft

## Cómo convertir a APK

Puedes convertir esta PWA a una APK utilizando herramientas como:

1. **PWA2APK** (https://pwa2apk.com/)
2. **Bubblewrap** (https://github.com/GoogleChromeLabs/bubblewrap)
3. **PWA Builder** (https://www.pwabuilder.com/)

Siguiendo estos pasos:
1. Sube tu PWA a un servidor con HTTPS
2. Verifica que el manifest.json esté correctamente configurado
3. Usa cualquiera de las herramientas mencionadas para generar la APK
4. Instala la APK en tu dispositivo Android 