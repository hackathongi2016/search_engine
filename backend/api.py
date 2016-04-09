from flask import Flask
from flask_restful import Resource, Api, reqparse
from db import Db_mysql

app = Flask(__name__)
api = Api(app)


class Travels(Resource):
    db = None
    conn = None

    def __init__(self):
        self.db = Db_mysql()
        self.conn = self.db.connect()

    def get(self, user_id):
        try:
            user_travels = self.db.get_user_travels(self.conn, user_id)
            return user_travels
            # return {'user_id': user_id}
        except Exception, e:
            print e

api.add_resource(Travels, '/travels/my/<int:user_id>')

if __name__ == '__main__':
    app.run(debug=True)