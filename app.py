from flask import (Flask, flash, redirect, render_template, url_for, send_from_directory)
import os


app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SESSION_TYPE']  = 'filesystem'


UPLOAD_FOLDER = 'static/mundos'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/sobre', methods=['GET'])
def sobre():
    return render_template('sobre.html')

@app.route('/parceiros', methods=['GET'])
def parceiros():
    return render_template('parceiros.html')

@app.route('/baixar', methods=['GET'])
def baixar():
    return render_template('baixar.html')

@app.route('/download/<path:filename>', methods=['GET'])
def download(filename):
    if filename:
        return send_from_directory(UPLOAD_FOLDER, filename, as_attachment=True) 
    flash('Erro ao baixar arquivo.')
    return redirect('download')


if __name__ == "__main__":
    app.run("0.0.0.0", port=5002, debug=True)

