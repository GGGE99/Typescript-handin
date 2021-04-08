import { MongoClient, Db, Collection } from "mongodb"
import connect from "./connect";
import setupTestData from "./setupTestData"

(async function Tester() {
  const client = await connect();
  const db = client.db("day1ex1")
  const collection = db.collection("inventory")
  const status = await setupTestData(collection)
  
  //Add your play-around code here

  // db.collection('inventory').insertOne({name: 'dasdadsasd'})  
  await collection.insertOne({
    name: 'sue',
    age: 26,
    status: 'pending'
  })

  // const demo = db.collection('Demo')
  // await demo.insertOne({name: 'kurt'})

  // const all = await demo.find({}).toArray()
  
  // console.log(all)

  client.close()
})()
