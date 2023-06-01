# Restify-FFmpeg

Servidor NodeJS con Restify que usa FFmpeg para cambiar el formato y mutear únicamente los videos ubicados en `/src/files`

## Requisitos Previos

- Node.js
- NPM
- FFmpeg

## Instalación

1. Clona este repositorio: `git clone https://github.com/GersoZz/restify-ffmpeg`
2. Ve al directorio del proyecto: `cd restify-ffmpeg`
3. Instala las dependencias: `npm install`
4. Corre el comando: `npm run dev`
5. Prueba los endpoints
    - http://localhost:8000/api/services/ffmpeg/webm-to-mp4
    - http://localhost:8000/api/services/ffmpeg/mp4-to-webm
    - http://localhost:8000/api/services/ffmpeg/mute-videos