# Sudoku PWA FINAL (v14)

- index.html → con botón "Instalar" (beforeinstallprompt) y SW register.
- manifest.webmanifest → incluye "id": "/" y iconos 192/512 reales.
- service-worker.js → con fetch handler y cache v9.
- vercel.json → cabeceras correctas.

Despliegue:
1) Repo nuevo → subir estos ficheros a la raíz.
2) Vercel → New Project → Preset: Other/Static → build: (vacío) → output: / → Deploy.
3) Abre la URL → debería aparecer el botón "Instalar" cuando sea instalable (o menú ⋮ → Instalar app).
4) Si no aparece: borra datos del sitio en Chrome y vuelve a entrar.
