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


factions = rf"https://en.uesp.net/wiki/Morrowind:Factions"
fac_resp = req.get(factions)

soup = BeautifulSoup(fac_resp.text, "html.parser")
collections = []

for i in soup.find_all("th", {"scope" : "row"}):
    try:
        title = i.find("a")
        if title.text not in collections:
            collections.append(title.text)
    except:
        pass

for i in range(len(collections)):
    collections[i] = collections[i].replace(" ", "_")





for coll in collections:


    no_under = coll.replace("_", "")


    collection = rf"https://en.uesp.net/wiki/Morrowind:{coll}"
    resp = req.get(collection)


    soup = BeautifulSoup(resp.text, "html.parser")

    for i in soup.find_all("table"):
        i.extract()

    objs = {}

    objs["name"] = coll.replace("_", " ")

    objs["lore"] = soup.find("div", {"id" : "mw-content-text"}).find("p").text
    objs["img"] = "none"

    print(im)

    '''
    for i in soup.find_all("div", {"class":"thumb tright"}):
        try:
            name = i.find_next().text.strip().split("\n")[0]
            img_uri = "https:%s" % i.find("img", {"class":"thumbimage"})["src"]
            img_data = base64.b64encode(req.get(img_uri).content)



            objs[name]["lore"] = i.find_next("p").text
            objs[name]["img"] = img_data
        except:
            pass
    '''

    for i in objs.keys():
        
        cli.collection(rf"Factions").document(i.replace("_", "")).set(objs[i])
        print(i)




