# Instrucciones para imágenes requeridas

Para que tu PWA de MineCraft Quiz funcione correctamente y pueda ser convertida a APK usando PWA Builder, necesitas crear y añadir las siguientes imágenes:

## 1. Iconos
Estos iconos son necesarios para que la aplicación se pueda instalar. Necesitas crear dos versiones de cada tamaño:

### Iconos normales (purpose: any)
- `icons/icon-192x192.png` - Icono de 192x192 píxeles
- `icons/icon-512x512.png` - Icono de 512x512 píxeles

### Iconos enmascarables (purpose: maskable)
El mismo archivo puede usarse para ambos propósitos, pero asegúrate de que el diseño cumple los requisitos de iconos enmascarables.

Para crear un icono maskable:
1. El elemento principal del icono debe estar dentro de la "zona segura" (el 60% central de la imagen)
2. El fondo debe extenderse hasta los bordes de la imagen
3. No debe tener transparencia en los bordes

Puedes usar herramientas como [Maskable.app](https://maskable.app/editor) para convertir tus iconos existentes a formato maskable.

## 2. Capturas de pantalla
Estas capturas son necesarias para el manifest.json:

- `images/screenshot1.png` - Captura de la pantalla de menú (1280x720 píxeles)
- `images/screenshot2.png` - Captura de la pantalla de juego (1280x720 píxeles)

Puedes tomar estas capturas cuando el juego esté funcionando, o crearlas como mockups.

## 3. Imágenes del juego
Estas imágenes son necesarias para el funcionamiento del juego:

- `images/minecraft-logo.png` - Logo de Minecraft para la pantalla de carga
- `images/minecraft-bg.jpg` - Imagen de fondo para el juego

## 4. Fuente tipográfica
- `fonts/minecraft.woff2` - Fuente estilo Minecraft

## Recomendaciones

1. Puedes buscar recursos gratuitos de Minecraft o crear versiones simplificadas que no infrinjan derechos de autor.
2. Para la fuente tipo Minecraft, hay versiones gratuitas como "Minecrafter" o "Minecraft Font" que puedes descargar en formatos TTF o WOFF2.
3. Asegúrate de que todas las imágenes tengan las dimensiones correctas para evitar problemas de visualización. 