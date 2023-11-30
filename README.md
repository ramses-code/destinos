# Mini-Proyecto Full Stack Jr - Aplicación de Destinos Turísticos

### `Descripción del Proyecto`

Este proyecto consiste en una aplicación web que permite a los usuarios explorar destinos turísticos y seleccionar aquellos que desean visitar. Además, proporciona una funcionalidad de checkout donde los usuarios pueden revisar y confirmar sus selecciones, proporcionando también información personal como su nombre y lugar de origen.

# Interfaz de Usuario (Frontend) con React

### `Página de Destinos`

1. Visualización de Destinos Turísticos:

- Se presenta una lista de todos los destinos turísticos disponibles en forma de tarjetas.
- Los usuarios pueden explorar la información sobre cada destino en ambos lados le la tarjeta.

2. Selección de Destinos:

- Al reverso de la tarjeta se encuentra un botón para selecionar o remover destinos de la lista.
- Los usuarios pueden seleccionar uno o más destinos de la lista.
- La cantidad de destinos seleccionados se muestra en el carrito del navbar.

### `Página de Checkout`

1. Resumen de Destinos Seleccionados:

- Muestra un resumen de los destinos seleccionados por el usuario.

2. Formulario de Checkout:

- Incluye un formulario donde los usuarios pueden ingresar su nombre y lugar de origen (ciudad y estado).

# Backend con Python y Flask

### `Endpoint`

1. Endpoint de método `get`:

- Devuelve todos los destinos que se encuentran en la base de datos.

2. Base de datos `MySQL`:

- El backend se conecta a la base de datos con el driver `Connector/ODBC`.

# Estructura de Carpetas

detinos-turisticos

- /backend `folder principal del backend`
  - /env `entorno virtual del python`
  - /server `forlder del archivo backend`
    - /app.py `archivo backend`
  - /requirements.txt `archivo con lista de dependencias`
- /frontend `folder principal del frontend`
  - /destinos-turisticos `aplicación react`
    - /.env `archivo para variables de entorno (url del backend)`
    - /public
      - /index.html
    - /src
      - /components `componentes js`
      - /styles `archivos css`
      - /App.js `componente padre`

# Instrucciones de Ejecución

### Frontend

1. Instalación de dependencias:
   - Accede al directorio `/frontend/destinos-turisticos`.
   - Instalar dependencias y arrancar la aplicación.

```
npm install
npm start
```

### Backend

1. Configuración de entorno virtual para sistemas Windows:
   - Accede al directorio `backend`.
   - Crea y activa un entorno virtual con nombre `env`.

```
cd backend
py -m venv env
env\Scripts\activate.bat
```

2. Instalación de depencdencias:

```
pip install -r requirements.txt
```

3. Ejecución del backend:
   - Accede al directorio `server`.
   - Ejecuta el archivo `app.py`.

```
cd server
py app.py
```
