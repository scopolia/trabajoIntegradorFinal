"""La línea de comando:
pip install Flask SQLAlchemy mysql-connector-python 

se utiliza para instalar
tres paquetes en tu entorno de Python. 
Aquí está una breve descripción de cada uno de ellos:

Flask: Flask es un framework ligero de desarrollo
web para Python. Facilita la creación de aplicaciones
web de manera rápida y sencilla. Con Flask, puedes
definir rutas, gestionar solicitudes HTTP, y construir
aplicaciones web de manera eficiente.

SQLAlchemy: SQLAlchemy es una biblioteca de
SQL en Python que proporciona un conjunto
de herramientas de alto nivel para interactuar
con bases de datos relacionales. Facilita la
creación, el acceso y la manipulación de bases
de datos utilizando objetos Python en lugar de escribir directamente SQL.

mysql-connector-python: Este paquete es un conector oficial
de MySQL para Python. Permite a tu aplicación Python conectarse y 
comunicarse con una base de datos MySQL. En el contexto de Flask
y SQLAlchemy, se utiliza para establecer la conexión entre tu 
aplicación y la base de datos MySQL ."""

# 3. Importar las herramientas
#Database host address:scopolia.mysql.pythonanywhere-services.com
#Username:scopolia
#scopolia$default
# Acceder a las herramientas para crear la app web
from flask import Flask, request, jsonify

# Para manipular la DB
from flask_sqlalchemy import SQLAlchemy 

# Módulo cors es para que me permita acceder desde el frontend al backend
from flask_cors import CORS

# 4. Crear la app
app = Flask(__name__)

# permita acceder desde el frontend al backend
CORS(app)


# 5. Configurar a la app la DB
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://usuario:contraseña@localhost:3306/nombre_de_la_base_de_datos'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://scopolia:root1234@scopolia.mysql.pythonanywhere-services.com/scopolia$default'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 6. Crear un objeto db, para informar a la app que se trabajará con sqlalchemy
db = SQLAlchemy(app)


# 7. Definir la tabla 
class Contacto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    dni = db.Column(db.String(10))
    telefono = db.Column(db.String(50))
    mail = db.Column(db.String(50))
    texto = db.Column(db.String(500))

    def __init__(self,nombre,apellido,dni,telefono,mail,texto):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.apellido=apellido
        self.dni=dni 
        self.telefono=telefono
        self.mail=mail
        self.texto=texto   
    

# 8. Crear la tabla al ejecutarse la app
with app.app_context():
    db.create_all()

# Crear ruta de acceso
# / es la ruta de inicio
@app.route("/")
def index():
    return f'App Web para registrar nombres de personas'

# Crear un registro en la tabla Persona
@app.route("/registro", methods=['POST']) 
def registro():
    # {"nombre": "Felipe"} -> input tiene el atributo name="nombre"
    nombre = request.json["nombre"]
    apellido = request.json["apellido"]
    dni=request.json["dni"]
    telefono = request.json["telefono"]
    mail = request.json["mail"]
    texto = request.json["texto"]
 

    # Creando registro en DB -> col = valor enviado
    nuevo_registro = Contacto(nombre,apellido,dni,telefono,mail,texto)
    db.session.add(nuevo_registro)
    db.session.commit()

    return "Solicitud de post recibida"
    

# Retornar todos los registros en un Json
@app.route("/contactos",  methods=['GET'])
def personas():
    # Consultar en la tabla todos los registros
    # all_registros -> lista de objetos
    all_registros = Contacto.query.all()

    # Lista de diccionarios
    data_serializada = []
    
    for objeto in all_registros:
        data_serializada.append({"id":objeto.id, "nombre":objeto.nombre,"apellido":objeto.apellido,"dni":objeto.dni,"telefono":objeto.telefono,"mail":objeto.mail,"texto":objeto.texto})

    return jsonify(data_serializada)


# Modificar un registro
@app.route('/update/<id>', methods=['PUT'])
def update(id):
    # Buscar el registro a modificar en la tabla por su id
    contacto= Contacto.query.get(id)

    # {"nombre": "Felipe"} -> input tiene el atributo name="nombre"
    nombre = request.json["nombre"]
    apellido = request.json["apellido"]
    dni = request.json["dni"]
    telefono = request.json["telefono"]
    mail = request.json["mail"]
    texto = request.json["texto"]

    contacto.nombre = nombre
    contacto.apellido = apellido
    contacto.dni = dni
    contacto.telefono = telefono
    contacto.mail = mail
    contacto.texto = texto
    db.session.commit()

    data_serializada = [{"id": contacto.id, "nombre": contacto.nombre,"apellido": contacto.apellido,"dni": contacto.dni,"telefono": contacto.telefono,"mail": contacto.mail,"texto": contacto.texto}]
    
    return jsonify(data_serializada)

   
@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):
    # Se busca a la persona por id en la DB
    contacto = Contacto.query.get(id)

    # Se elimina de la DB
    db.session.delete(contacto)
    db.session.commit()

    data_serializada = [{"id": contacto.id, "nombre": contacto.nombre,"apellido": contacto.apellido,"dni": contacto.dni,"telefono": contacto.telefono,"mail": contacto.mail,"texto": contacto.texto}]

    return jsonify(data_serializada)


if __name__ == "__main__":
    app.run(debug=True)
