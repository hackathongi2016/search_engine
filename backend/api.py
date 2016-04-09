# -*- coding: utf-8 -*-
from flask import Flask
from flask_restful import Resource, Api, reqparse
from db import Db_mysql

app = Flask(__name__)
api = Api(app)


class TravelsUser(Resource):
    db = None
    conn = None

    def __init__(self):
        self.db = Db_mysql()
        self.conn = self.db.connect()

    def get(self, user_id):
        try:
            user_travels = self.db.get_user_travels(self.conn, user_id)
            if user_travels:
                return [user_travels], 201, {'Access-Control-Allow-Origin': '*'}
            else:
                return [], 201, {'Access-Control-Allow-Origin': '*'}
        except Exception, e:
            print e

class Travels(Resource):
        db = None
        conn = None

        def __init__(self):
            self.db = Db_mysql()
            self.conn = self.db.connect()

        def get(self, text):
            try:
                search = self.db.search(self.conn, text)
                if search:
                    return [search], 201, {'Access-Control-Allow-Origin': '*'}
                else:
                    return [], 201, {'Access-Control-Allow-Origin': '*'}
            except Exception, e:
                print e


class TravelsAll(Resource):
    db = None
    conn = None

    def __init__(self):
        self.db = Db_mysql()
        self.conn = self.db.connect()

    def get(self):
        try:
            search = self.db.search_all(self.conn)
            if search:
                return [search], 201, {'Access-Control-Allow-Origin': '*'}
            else:
                return [], 201, {'Access-Control-Allow-Origin': '*'}
        except Exception, e:
            print e

api.add_resource(TravelsUser, '/travels/user/<int:user_id>')
api.add_resource(Travels, '/travels/search/<string:text>')
api.add_resource(TravelsAll, '/travels/search/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)