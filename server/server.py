from fastapi import FastAPI, HTTPException, Body
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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
