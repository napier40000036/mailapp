from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def indexPage():
	return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5036,debug=True)