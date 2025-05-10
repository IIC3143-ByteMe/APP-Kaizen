## Proceso de configuración

### Prerrequisitos

- Node.js (v14 o superior)
- npm (v6+) o Yarn (recomendado)
- npx (incluido con Node)
- Cuenta de Firebase (gratuita, plan Spark)
- Expo Go instalado en tus dispositivos iOS/Android

### Crear proyecto Expo + TS
```bash
npx create-expo-app KaizenApp --template blank-typescript
```

### Instalar y configurar expo-router
```bash
cd KaizenApp
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### Ajustar punto de entrada
Abrir `package.json` y cambiar la propiedad `main`:
```bash
{
    "main": "expo-router/entry"
}
```

### Crear estructura de carpetas para file-based routing

Crear carpeta `app/` en la raíz y dentro los archivos:
- `_layout.tsx`: Define el stack global
- `index.tsx`: Pantalla *Home*