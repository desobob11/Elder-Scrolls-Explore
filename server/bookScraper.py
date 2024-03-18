import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from google.cloud import firestore
from google.cloud.firestore_v1.base_query import FieldFilter
from bs4 import BeautifulSoup
import base64
import requests as req
import bs4

import os

cli = firestore.Client(project="esexplore-9fc9f")
#ash_collection = cli.collection("Creatures/AshCreatures/creatures")

url = "https://en.uesp.net/wiki/Morrowind:Books"
resp = req.get(url)
soup = BeautifulSoup(resp.text, "html.parser")

table = soup.find("table")
rows = table.find_all("tr")







for i in rows[1:-1]:
    try:
        tds = i.find_all("td")
        img = tds[0].find("img")
        
        if img is None:
            img = ""
        else:
            img = img.attrs["src"].replace("//i", "i")

        title = tds[1].find("a").attrs["title"].replace("Morrowind:", "").replace("(book)", "")
        price = tds[2]
        if price is None:
            price = "NA"
        else:
            price = price.text
        author = tds[3].find("a")
        if author is None:
            author = "Anonymous"
        else:
            author = author.text
        descr = tds[4].text

        doc = {"author":author, "price":price, "title":title, "img":img, "lore":descr}
        cli.collection(rf"Books").document(author).set({"name":author})
        cli.collection(rf"Books/{author}/Books").document(title).set(doc)
        print(title + " done")
        








    except Exception as e:
        print(str(e))
