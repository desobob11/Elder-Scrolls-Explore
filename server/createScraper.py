import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from google.cloud import firestore
from google.cloud.firestore_v1.base_query import FieldFilter
from bs4 import BeautifulSoup
import base64
import requests as req

import os

cli = firestore.Client(project="esexplore-9fc9f")
#ash_collection = cli.collection("Creatures/AshCreatures/creatures")


collections = ["Beast", "Daedra", "Dwemer_Centurions", "Kwarma", "Undead", "Special_Creatures"]



for coll in collections:
    try:

        no_under = coll.replace("_", "")


        collection = rf"https://en.uesp.net/wiki/Morrowind:{coll}"
        resp = req.get(collection)

        soup = BeautifulSoup(resp.text, "html.parser")

        objs = {}

        for i in soup.find_all("span", {"class":"mw-headline"}):
            name = i.text
            objs[name]={}
            objs[name]["name"] = name




        for i in soup.find_all("div", {"class":"thumb tright"}):
            name = i.find_next().text.strip()
            img_uri = "https:%s" % i.find("img", {"class":"thumbimage"})["src"]
            img_data = base64.b64encode(req.get(img_uri).content)

            objs[name]["lore"] = i.find_next("p").text
            objs[name]["img"] = img_data


        for i in objs.keys():
            cli.collection(rf"Creatures/{no_under}/creatures").document(i).set(objs[i])
        print(coll)
    except:
        pass

