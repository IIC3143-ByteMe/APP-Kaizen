# KaizenApp

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

```json
{
  ...
    "main": "expo-router/entry"
  ...
}
```

### Crear estructura de carpetas para file-based routing

Crear carpeta `app/` en la raíz y dentro los archivos:

- `_layout.tsx`: Define el stack global
- `index.tsx`: Pantalla *Home*

### Esto lo hago por si llegamos a user Firebase en vez de FastAPI

Crear un proyecto en la consola de Firebase y registrar la app web para obtener el objeto `firebaseConfig`

```bash
npx expo install firebase
```

Crear `firebaseConfig.ts` y reemplazar los valores con los del proyecto

En Expo managed:
- No hay que trabajar los archivos nativos de Firebase como google-services.json o GoogleService-Info.plist
- No necesitas instalar plugins nativos ni modificar tu app.json o crear carpetas android//ios/ para Firebase
- Puedes exportar auth y db en cualquier parte:

```typescript
import { auth, db } from "../firebaseConfig";

// Ejemplo: registrar un usuario
const signUp = async (email: string, pass: string) => {
  try {
    const userCred = await auth.createUserWithEmailAndPassword(auth, email, pass);
    console.log("Usuario creado:", userCred.user.uid);
  } catch (err) {
    console.error("Error al registrar:", err);
  }
};

// Ejemplo: leer una colección de Firestore
import { collection, getDocs } from "firebase/firestore";

const fetchHabits = async () => {
  const habitsCol = collection(db, "habits");
  const snapshot  = await getDocs(habitsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

```

Toda la comunicación y llamadas HTTP se hacen a través del SDK de JavaScript, que Expo ya incluye y empaqueta correctamente. Por eso basta con importar e inicializar.

### Configuración para FastAPI

Instalar dependencias para fetch de datos, variables de entorno y almacenamiento seguro de tokens

```bash
npm install axios react-native-dotenv
npx expo install expo-secure-store
```

Crear un archivo `.env` (asegurarse de que exista con anterioridad un archivo .gitignore) que mantenga la misma forma que `.env.example`

```bash
cp .env.example .env
```

Agregar el plugin de `.env` en `babel.config.js`:

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true
      }]
    ]
  };
};
```

Crear y configurar `apiConfig.ts` para poder importar la BASE_URL en el proyecto

Crear y configurar `api.ts` para guardar el token de usuario e interceptar las llamadas a la api inyectándolo

