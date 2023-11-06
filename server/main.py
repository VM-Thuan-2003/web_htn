from fastapi import FastAPI, HTTPException, Body
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pydantic import BaseModel
from bson import ObjectId
from fastapi.middleware.cors import CORSMiddleware

config = dotenv_values(".env")

app = FastAPI()

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()