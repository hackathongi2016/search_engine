# -*- coding: utf-8 -*-
import MySQLdb

class Db_mysql():

    def connect(self):
        db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                             user="root",         # your username
                             passwd="hackaton",  # your password
                             db="viatgemjunts",
                             charset="utf8",
                             use_unicode=True)        # name of the data base
        return db

    def get_user_travels(self, conn, user_id):
        # you must create a Cursor object. It will let
        #  you execute all the queries you need
        try:
            cur = conn.cursor()

            result = []
            # Use all the SQL you like
            cur.execute("select tra_id, tra_origin, tra_destination, tra_num_days, tra_budget_min, "
                        "tra_budget_max, tra_date, tra_lat, tra_long,"
                        "tra_planning_limit, tra_persons_min, "
                        "tra_persons_max, tra_description, tra_usr_id "
                        "from Travel t join UserTravel ut on t.tra_id=ut.ust_tra_id where ust_usr_id=%s" % user_id)

            # print all the first cell of all the rows
            for row in cur.fetchall():
                result[row[0]] = {
                    'tra_id': row[0],
                    'tra_origin': row[1],
                    'tra_destination': row[2],
                    'tra_num_days': row[3],
                    'tra_budget_min': row[4],
                    'tra_budget_max': row[5],
                    'tra_date': row[6].strftime('%Y-%m-%d'),
                    'tra_lat': row[7],
                    'tra_long': row[8],
                    'tra_planning_limit': row[9].strftime('%Y-%m-%d'),
                    'tra_persons_min': row[10],
                    'tra_persons_max': row[11],
                    'tra_description': row[12],
                    'tra_usr_id': row[13]
                }
            self.close(conn)
            return result
        except Exception, e:
            raise e

    def get_user_travels(self, conn, user_id):
        # you must create a Cursor object. It will let
        #  you execute all the queries you need
        try:
            cur = conn.cursor()

            result = []
            # Use all the SQL you like
            cur.execute("select tra_id, tra_origin, tra_destination, tra_num_days, tra_budget_min, "
                        "tra_budget_max, tra_date, tra_lat, tra_long,"
                        "tra_planning_limit, tra_persons_min, "
                        "tra_persons_max, tra_description, tra_usr_id "
                        "from Travel t join UserTravel ut on t.tra_id=ut.ust_tra_id where ust_usr_id=%s" % user_id)

            # print all the first cell of all the rows
            for row in cur.fetchall():
                result.append({
                    'tra_id': row[0],
                    'tra_origin': row[1],
                    'tra_destination': row[2],
                    'tra_num_days': row[3],
                    'tra_budget_min': row[4],
                    'tra_budget_max': row[5],
                    'tra_date': row[6].strftime('%Y-%m-%d'),
                    'tra_lat': row[7],
                    'tra_long': row[8],
                    'tra_planning_limit': row[9].strftime('%Y-%m-%d'),
                    'tra_persons_min': row[10],
                    'tra_persons_max': row[11],
                    'tra_description': row[12],
                    'tra_usr_id': row[13]
                })
            self.close(conn)
            return result
        except Exception, e:
            raise e

    def search(self, conn, text):
        # you must create a Cursor object. It will let
        #  you execute all the queries you need
        try:
            cur = conn.cursor()

            result = []
            # Use all the SQL you like
            cur.execute("select tra_id, tra_origin, tra_destination, tra_num_days, tra_budget_min, "
                        "tra_budget_max, tra_date, tra_lat, tra_long,"
                        "tra_planning_limit, tra_persons_min, "
                        "tra_persons_max, tra_description, tra_usr_id "
                        "from Travel t "
                        "where lower(tra_destination) like lower('%"+text+"%') "
                        "or lower(tra_origin) like lower('%"+text+"%') "
                        "or lower(tra_description) like lower('%"+text+"%')")

            # print all the first cell of all the rows
            for row in cur.fetchall():
                result.append({
                    'tra_id': row[0],
                    'tra_origin': row[1],
                    'tra_destination': row[2],
                    'tra_num_days': row[3],
                    'tra_budget_min': row[4],
                    'tra_budget_max': row[5],
                    'tra_date': row[6].strftime('%Y-%m-%d'),
                    'tra_lat': row[7],
                    'tra_long': row[8],
                    'tra_planning_limit': row[9].strftime('%Y-%m-%d'),
                    'tra_persons_min': row[10],
                    'tra_persons_max': row[11],
                    'tra_description': row[12],
                    'tra_usr_id': row[13]
                })
            self.close(conn)
            return result
        except Exception, e:
            raise e

    def search_all(self, conn):
        # you must create a Cursor object. It will let
        #  you execute all the queries you need
        try:
            cur = conn.cursor()

            result = []
            # Use all the SQL you like
            cur.execute("select tra_id, tra_origin, tra_destination, tra_num_days, tra_budget_min, "
                        "tra_budget_max, tra_date, tra_lat, tra_long,"
                        "tra_planning_limit, tra_persons_min, "
                        "tra_persons_max, tra_description, tra_usr_id "
                        "from Travel t")

            # print all the first cell of all the rows
            for row in cur.fetchall():
                result.append({
                    'tra_id': row[0],
                    'tra_origin': row[1],
                    'tra_destination': row[2],
                    'tra_num_days': row[3],
                    'tra_budget_min': row[4],
                    'tra_budget_max': row[5],
                    'tra_date': row[6].strftime('%Y-%m-%d'),
                    'tra_lat': row[7],
                    'tra_long': row[8],
                    'tra_planning_limit': row[9].strftime('%Y-%m-%d'),
                    'tra_persons_min': row[10],
                    'tra_persons_max': row[11],
                    'tra_description': row[12],
                    'tra_usr_id': row[13]
                })
            self.close(conn)
            return result
        except Exception, e:
            raise e

    def close(self, conn):
        conn.close()