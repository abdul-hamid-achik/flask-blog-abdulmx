from flask.ext.wtf import Form
from wtforms import TextField, TextAreaField, SubmitField

class ContactForm(Form):
  nombre = TextField("nombre")
  email = TextField("email")
  asunto = TextField("asunto")
  mensaje = TextAreaField("mensaje")
  enviar = SubmitField("enviar")