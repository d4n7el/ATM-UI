# Instalación React con Vite

- Instalar globalmente nodejs con el manejador de versiones de su preferencia.

  > [NVM](https://github.com/nvm-sh/nvm)

  > [ASDF](https://asdf-vm.com/manage/core.html) Instalación recomendada **Bash & Homebrew** o **ZSH & Homebrew**

## Crear Proyecto Nuevo.

- Abrir una terminal
  - ¿ como abrir una terminal ? **Presiona Command (⌘) + Espacio para abrir Spotlight** después **Escribe “Terminal” y presiona Enter.**
- Crear la carpeta donde se alojara el proyecto. `mkdir proyectos_react`
- Dirigirnos a la carpeta creada `cd proyectos_react `
- En la raiz de esta ruta ejecuta `npm create vite@latest {{proyect-name}}` remplaza **{{proyect-name}}** con el nombre de tu proyecto, para este ejemplo usaremos **vite-react-doc**
- La consola te pedira confirmar la acción **OK to proceed ?** debes confirmar presionando **y** seguido de la tecla **enter**.
- Se te solicitara seleccionar entre un listado de frameworks disponibles, para nuestro ejemplo seleccionamos **React**
- Al continuar debes elegir una variante, para nuestro caso sera TypeScript swc.
  > Con esto la creación del proyecto a terminado los pasos que te indica la consola realizar son para la Inicialización del proyecto

## Inicialización Proyecto Nuevo.

- En la misma terminal dirígete abierta al proyecto `cd vite-react-doc`
- Instala dependencias `npm install` o `npm i`
- Levanta el proyecto `npm run dev`

## Configuración basica Proyecto Nuevo.

- npm i vite-tsconfig-paths
- npm i react-router-dom
- npm i -D vitest
- npm i -D happy-dom
- npm i -D @vitest/coverage-v8
- npm i -D @testing-library/react @testing-library/dom
- npm i -D @testing-library/user-event
- npm i -D @types/node
- npm i -D @vitest/ui
- npm i -D @vitest/coverage-istanbul
- npm i -D autoprefixer

### package.json

- En la raíz del proyecto busca el archivo package.json
  > Este archivo debe al menos tener la siguiente configuración en su sección de **scripts**

```json
	"scripts": {
		"dev": "vite --mode dev",
		"build": "tsc -b && vite build",
		"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
		"preview": "vite --mode prod",
		"test": "vitest",
		"test-ui": "vitest --ui",
		"coverage": "vitest run --coverage"
    },
```

> En la sección dependencies debes añadir al menos **react-router-dom** y **vite-tsconfig-paths**

```json
	"dependencies": {
		"react": "^18.3.1",
		"react-dom": "^18.3.1"
		"react-router-dom": "^6.24.0",
		"vite-tsconfig-paths": "^4.3.2"
	},
```

> En la seccion de devDependencies

```json
	"devDependencies": {
		"@testing-library/dom": "^10.2.0",
		"@testing-library/react": "^16.0.0",
		"@testing-library/user-event": "^14.5.2",
		"@types/node": "^20.14.9",
		"@types/react": "^18.3.3",
		"@types/react-dom": "^18.3.0",
		"@typescript-eslint/eslint-plugin": "^7.13.1",
		"@typescript-eslint/parser": "^7.13.1",
		"@vitejs/plugin-react-swc": "^3.5.0",
		"@vitest/coverage-v8": "^1.6.0",
		"@vitest/ui": "^1.6.0",
		"eslint": "^8.57.0",
		"eslint-plugin-react-hooks": "^4.6.2",
		"eslint-plugin-react-refresh": "^0.4.7",
		"happy-dom": "^14.12.3",
		"typescript": "^5.2.2",
		"vite": "^5.3.1",
		"vitest": "^1.6.0"
	}
```

Algunas de las lineas de este archivo se crearan por defecto al momento de crear el proyecto, pero las relacionadas con **Routes, Paths, Test** deben ser añadidas manualmente.

### vite.config.ts

> **Importaciones**

- defineConfig y loadEnv son funciones de Vite.
- react es el plugin para soportar React, específicamente usando el compilador swc.
- tsconfigPaths permite que Vite resuelva los caminos definidos en tsconfig.json.

> **Función de Configuración**

- La función defineConfig exporta la configuración de Vite.

> **Carga de Variables de Entorno**

- loadEnv carga las variables de entorno basadas en el modo (mode).
- mode es una variable que Vite pasa automáticamente y puede ser development, production, etc.
- process.cwd() obtiene el directorio de trabajo actual.
- El tercer parámetro '' asegura que todas las variables de entorno se carguen, no solo las prefijadas con VITE\_.

> **Pluging**

- react() permite usar React con Vite, utilizando el compilador swc.
- tsconfigPaths() resuelve las rutas de los módulos según lo definido en tsconfig.json.

> **Configuración de Pruebas**

- name: Nombre del entorno de pruebas, en este caso, happy-dom.
- root: Directorio raíz para los archivos de prueba, './test'.
- environment: Entorno de prueba utilizado, happy-dom es un entorno simulado para pruebas en DOM.
- setupFiles: Archivos de configuración que se ejecutan antes de las pruebas, './setupTests.js'. el archivo setupTests debe ser creado en la ruta especificada.

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/',
});
```

### vitest.config.ts

```ts
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      reporters: ['verbose', 'html'],
      name: 'happy-dom',
      environment: 'happy-dom',
      setupFiles: './test/setupTests.js',
      coverage: {
        provider: 'istanbul',
        enabled: true,
        reportsDirectory: '../coverage',
        reporter: ['text', 'html', 'json'],
        all: true,
        include: ['src/**/*.{js,jsx,ts,tsx}'],
        exclude: ['node_modules/**', 'test/**', 'coverage/**', 'src/routes'],
      },
    },
  })
);
```

### tsconfig.app.json

> El archivo tsconfig.app.json es una configuración específica de TypeScript para un proyecto de aplicación. Este archivo define varias opciones que TypeScript utiliza para compilar el proyecto.

- **baseUrl**: Define la base de las rutas relativas, aquí es el directorio raíz.
- **composite**: Indica que este proyecto puede formar parte de un proyecto mayor (usualmente para proyectos con múltiples tsconfig).
- **tsBuildInfoFile**: Define la ubicación del archivo de información de compilación incremental.
- **target**: Especifica la versión de ECMAScript a la que se debe compilar el código (ES2020 en este caso).
- **useDefineForClassFields**: Usar la sintaxis define para campos de clase.
- **lib**: Define las bibliotecas que se incluirán en la compilación (ES2020, DOM, DOM.Iterable, WebWorker).
- **module**: Especifica el sistema de módulos a utilizar (ESNext).
- **skipLibCheck**: Omite la comprobación de tipos en archivos de definición (.d.ts)
- **moduleResolution**: Define cómo se resuelven los módulos, en este caso utilizando el modo “bundler”.
- **allowImportingTsExtensions**: Permite importar archivos con extensiones TypeScript.
- **resolveJsonModule**: Permite la importación de módulos JSON.
- **isolatedModules**: Asegura que cada archivo se trate como un módulo independiente.
- **moduleDetection**: Forza la detección de módulos.
- **noEmit**: No emite archivos de salida (solo realiza la verificación de tipos).
- **jsx**: Define cómo se trata el código JSX (react-jsx).
- **types**: Incluye tipos adicionales, como los de vitest.
- **Configuraciones de Linting**:
- strict, noUnusedLocals, noUnusedParameters, noFallthroughCasesInSwitch: Son opciones para asegurar un código más robusto y limpio.

> La seccion de **paths** e **Includes** deben ser añadidas y modificadas según corresponde.

```json
	compilerOptions:{
		...
		"paths": {
			"src/*": ["./src/*"],
			"@views/*": ["./src/views/*"],
			"@components/*": ["./src/components/*"],
			"@routes/*": ["./src/routes/*"]
		}
	}
```

```json
	"include": ["src", "src/vite-env.d.ts", "test"]
```

### ENV files

> los archivos deben ser nombrados como **.env** - **.env.dev** - **.env.stag** de este modo la cantidad que requieras. La definicion de las variables debe iniciar con **VITE_APP**

```d
	VITE_APP_NAME  =  TEST_APP_DEV
```

### vite-env.d.ts

> contiene declaraciones de tipos TypeScript específicas para Vite y Vitest. Este archivo ayuda a TypeScript a entender ciertos aspectos del entorno de ejecución y a proporcionar una mejor experiencia de desarrollo, incluyendo autocompletado y verificación de tipos.

```ts
/// <reference  types="vite/client"  />
/// <reference  types="vitest"  />
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```
