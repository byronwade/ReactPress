module.exports = async function setup() {
	console.log("Setting up database...");
};
// import { useState } from "react";
// import { MongoClient } from "mongodb";
// import firebase from "firebase/app";
// import "firebase/firestore";

// Initialize Firebase
//const serviceAccount = require("path/to/serviceAccountKey.json");
// firebase.initializeApp({
// 	credential: firebase.credential.cert(serviceAccount),
// });

// function DatabaseForm() {
// 	const [databaseType, setDatabaseType] = useState("");
// 	const [databaseName, setDatabaseName] = useState("");

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		try {
// 			let db;
// 			let prefix = "np_";

// 			if (databaseType === "m") {
// 				// Connect to MongoDB and create the database
// 				const uri = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net";
// 				const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
// 				db = client.db(databaseName);
// 			} else if (databaseType === "f") {
// 				// Get a Firestore instance and create the database
// 				const dbRef = firebase.firestore().collection(databaseName);
// 				await dbRef.doc("init").set({ initialized: true });
// 				db = dbRef;
// 			} else {
// 				throw new Error("Invalid input");
// 			}

// 			// Create collections/collections groups
// 			await db.collection(`${prefix}comments`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}commentmeta`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}links`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}options`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}postmeta`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}posts`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}termmeta`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}terms`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}term_relationships`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}term_taxonomy`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}usermeta`).doc("init").set({ initialized: true });
// 			await db.collection(`${prefix}users`).doc("init").set({ initialized: true });

// 			console.log("Database and collections created successfully");
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<label>
// 				Choose a database:
// 				<select value={databaseType} onChange={(e) => setDatabaseType(e.target.value)}>
// 					<option value="">-- Select --</option>
// 					<option value="m">MongoDB</option>
// 					<option value="f">Firebase</option>
// 				</select>
// 			</label>
// 			<br />
// 			<label>
// 				Enter a database name:
// 				<input type="text" value={databaseName} onChange={(e) => setDatabaseName(e.target.value)} />
// 			</label>
// 			<br />
// 			<button type="submit">Create database</button>
// 		</form>
// 	);
// }
