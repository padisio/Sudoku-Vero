# VeruchiDoku — PWA con guardado de partida (localStorage)

## Qué incluye
- index.html (título VeruchiDoku, botón Instalar, persistencia de partida, hooks PWA)
- manifest.webmanifest (name/short_name VeruchiDoku)
- service-worker.js (offline + cache v2)
- icons/ (192, 512)
- vercel.json (cabeceras correctas)

## Despliegue en Vercel
1) Repo nuevo → subir todos los archivos a la raíz.
2) Vercel → New Project → Preset: Other/Static → Build: (vacío) → Output: / → Deploy.

## Instalación Android
- Abre la URL → verás el botón “Instalar” cuando la PWA sea instalable (o menú ⋮ → Instalar aplicación).
- Para forzar actualización: cambiar CACHE_NAME en service-worker.js y recargar.

## Guardado de partida
- Se guarda automáticamente tras interacciones (celdas/botones).
- Al abrir, restaura si hay partida guardada. Puedes llamar a `clearSavedGame()` en consola para reiniciar.
