from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def indexPage():
	return render_template('index.html')

@app.route("/mail") #Get a list of messages
def mailList():
    l = []
    ml = json.load(open('inbox.json'))
    for m in ml:
        l.append({"id":m["id"],"subject":m["subject"],"from":m["from"]})
    return json.dumps(l)

@app.route("/mail/<id>") #Get a single messages
def mailItem(id):
    mm = None
    ml = json.load(open('inbox.json'))
    for m in ml:
        if m['id'] == id:
        	mm = m
    return json.dumps(mm)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5036,debug=True)








