import { getFirestore, collection, query, where, getDocs, setDoc, doc, updateDoc, FieldValue, increment } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import express from 'express';
import cors from "cors"
const expressapp = express();
expressapp.use(cors())
const port = 3000;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDemK_VxdFSkAuEegDJ5FnaJYq0sYszEfo",
    authDomain: "esexplore-9fc9f.firebaseapp.com",
    projectId: "esexplore-9fc9f",
    storageBucket: "esexplore-9fc9f.appspot.com",
    messagingSenderId: "643298327792",
    appId: "1:643298327792:web:a05be6e84ce084923c1635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



async function get_names(path) {
    var names = [];
    const q = query(collection(db, path));
    const docs = await getDocs(q);
    docs.forEach((x) => {
        names.push(x.data().name);
    })
    return names;
}



expressapp.get("/Creatures/AshCreatures/creatures/", (req, res) => {
    get_names("Creatures/AshCreatures/creatures/").then((x) => {res.send(x)});


})


expressapp.listen(port, "10.0.0.66", () => {
    console.log(`App is running on ${port}...`)
})
