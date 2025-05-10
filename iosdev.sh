#!/bin/bash

echo "🚀 Revisando paquetes..."
npm install
echo "🚀 Iniciando servidor..."
npx expo start --tunnel

# Comando para dar permiso de ejecución (copia y pega en la terminal)
# chmod +x iosdev.sh