# 파이썬 db 전용
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://test:sparta@cluster0.wsolap1.mongodb.net/?retryWrites=true&w=majority',
                     tlsCAFile=ca)
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/miniproject", methods=["POST"])
def project_post():
    comment_list = list(db.comments.find({}, {'_id': False}))
    count = len(comment_list) + 1

    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']

    doc = {
        'comment': comment_receive,
        'names': name_receive,
        'num': count,
    }
    db.comments.insert_one(doc)
    return jsonify({'msg': '댓글이 작성되었습니다.'})


@app.route("/miniproject", methods=["GET"])
def project_get():
    comment_list = list(db.comments.find({}, {'_id': False}))
    return jsonify({'comments': comment_list})


@app.route("/miniproject/delete", methods=["POST"])
def project_delete():
    num_receive = request.form['num_give']
    db.comments.delete_one({'num': int(num_receive)})
    return jsonify({'msg': '댓글이 삭제되었습니다.'})


@app.route("/miniproject/update", methods=["POST"])
def project_update():
    comment_receive = request.form['comment_give']
    num_receive = request.form['num_give']
    comment_update = db.comments.update_one({'num': int(num_receive)}, {'$set':{'comment': comment_receive}})
    return jsonify({'comment': comment_update})




if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)