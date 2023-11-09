from fastapi import FastAPI, HTTPException, Body
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json
import firebase_admin
from firebase_admin import credentials,db
app = FastAPI()

# For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebaseConfig = {
    "apiKey": "AIzaSyB34_KNcAW5KI2JrcU7_4F_OEpctzn_yWw",
    "authDomain": "firebas-htn.firebaseapp.com",
    "databaseURL": "https://firebas-htn-default-rtdb.firebaseio.com",
    "projectId": "firebas-htn",
    "storageBucket": "firebas-htn.appspot.com",
    "messagingSenderId": "640676408163",
    "appId": "1:640676408163:web:5848a87b09350557578156",
    "measurementId": "G-1VLQBH5G6T"
}

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred,firebaseConfig)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

USER_MONGO = "data_htn"
PASS_MONGO = "162003"

# MongoDB connection URI
uri = "mongodb+srv://"+USER_MONGO+":"+PASS_MONGO+"@htnuser.gxkuzbv.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
app.client = MongoClient(uri, server_api=ServerApi('1'))
# Select the database and collection
app.collection = app.client["data"]["users"]

class UserCreate(BaseModel):
    username: str
    password: str
    fullname: str

@app.get("/")
def read_root():
    ref = firebase_admin.db.reference("test/")
    print(ref.get())
    # check connect firebase done
    return "this is Page Home in Server"

@app.post("/create_user")
async def create_user(user:UserCreate):
    print(user)
    cursor  = app.collection.find({"username" : user.username})
    count = len(list(cursor))
    if count == 0:
        app.collection.insert_one({
            "fullname" : user.fullname,
            "username" : user.username,
            "password" : user.password
        })
        return "done_create_register"
    else:
        return "overlap"

@app.get("/login_user/{username}/{password}")
async def login_user(username: str, password: str):
    cursor  = app.collection.find({"username" : username})
    count = len(list(cursor))
    print(username,"-",password)
    if count == 0:
        return {"state": "flase_login"}
    else :
        dd = app.collection.find({"username" : username})
        if password==dd[0]["password"]:
            return {
                "state" : "true_login",
                "data_user" : {
                    "fullname" : dd[0]["fullname"],
                    "username" : dd[0]["username"]
                }
            }
        else:
            return {
                "state" : "flase_login"
            }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
