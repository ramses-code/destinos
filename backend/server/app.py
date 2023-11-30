from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc, json

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_destinations():
  connected = False
  try:
    connection = pyodbc.connect('DSN=' + 'viajes')
    connected = True
  except Exception as error:
    return jsonify({'error': 'Error al conectarse a la base de datos.'}), 500

  if connected:
        try:
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM lugar')
            rows = cursor.fetchall()
            
            # Agarrar los nombres de las columnas de la tabla que se encuentra en el 
            # index 0 de cursor.description
            # y crear una lista de tuples con ello
            columns = [column[0] for column in cursor.description]
            # Crear un dict de cada registro con la columna como llave y la row 
            # como valor para serializar los resultados
            rows_as_dicts = [dict(zip(columns, row)) for row in rows]

        except Exception as error:
          return jsonify({'error': 'Error al ejecutar la consulta'}), 500
        finally:
          cursor.close()
          connection.close()

        # Convertir a JSON con ensure_ascii=False para manejar Unicode characters
        # y que las letras con acento aparescan correctamente
        json_response = json.dumps(rows_as_dicts, ensure_ascii=False)
        return json_response, 200

if __name__ == '__main__':
  app.run(debug=True)