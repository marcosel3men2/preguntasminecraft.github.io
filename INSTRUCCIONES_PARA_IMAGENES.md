# Instrucciones para imágenes requeridas

Para que tu PWA de MineCraft Quiz funcione correctamente y pueda ser convertida a APK usando PWA Builder, necesitas crear y añadir las siguientes imágenes:

## 1. Iconos
Estos iconos son necesarios para que la aplicación se pueda instalar correctamente en diferentes plataformas:

### Iconos para PWA y Android
- `icons/icon-192x192.png` - Icono de 192x192 píxeles (ambos propósitos: maskable y any)
- `icons/icon-512x512.png` - Icono de 512x512 píxeles (ambos propósitos: maskable y any)

### Iconos para iOS
- `icons/apple-icon-152x152.png` - Icono para iPad
- `icons/apple-icon-167x167.png` - Icono para iPad Pro
- `icons/apple-icon-180x180.png` - Icono para iPhone

### Favicon para navegadores
- `icons/favicon-16x16.png` - Favicon pequeño
- `icons/favicon-32x32.png` - Favicon estándar

### Guía para iconos enmascarables (purpose: maskable)
Para crear un icono maskable:
1. El elemento principal del icono debe estar dentro de la "zona segura" (el 60% central de la imagen)
2. El fondo debe extenderse hasta los bordes de la imagen (sin transparencia)
3. Debe tener un color de fondo sólido que armonice con tu app

Puedes usar herramientas como [Maskable.app](https://maskable.app/editor) para convertir tus iconos existentes a formato maskable.

## 2. Capturas de pantalla
Estas capturas son necesarias para el manifest.json y tiendas de aplicaciones:

- `images/screenshot1.png` - Captura de la pantalla de menú (1280x720 píxeles)
- `images/screenshot2.png` - Captura de la pantalla de juego (1280x720 píxeles)

Es recomendable crear capturas adicionales en diferentes tamaños:
- Versión horizontal: 1280x720 o 2048x1152 píxeles
- Versión para móvil: 750x1334 píxeles

## 3. Imágenes del juego
Estas imágenes son necesarias para el funcionamiento del juego:

- `images/minecraft-logo.png` - Logo de Minecraft para la pantalla de carga
- `images/minecraft-bg.jpg` - Imagen de fondo para el juego

## 4. Fuente tipográfica
- `fonts/minecraft.woff2` - Fuente estilo Minecraft

## Recomendaciones

1. Para las imágenes del juego, usa recursos libres de derechos o crea versiones simplificadas que no infrinjan derechos de autor.
2. Para la fuente tipo Minecraft, hay versiones gratuitas como "Minecrafter" o "Minecraft Font" que puedes descargar y convertir a formato WOFF2.
3. Optimiza todas las imágenes para reducir su tamaño sin perder calidad usando herramientas como [TinyPNG](https://tinypng.com/).
4. Cuando generes los iconos, guárdalos en formato PNG con fondo transparente (excepto los maskable que necesitan fondo sólido).
5. Para mejores resultados en la tienda de aplicaciones, usa imágenes de alta calidad para las capturas de pantalla. 