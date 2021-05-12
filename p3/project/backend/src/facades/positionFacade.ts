import path from "path"
require('dotenv').config({ path: path.join(__dirname, "..", "..", '.env') })
import { Db, Collection, ObjectID } from "mongodb";
import IPosition from '../interfaces/IPosition'
import FriendsFacade from './friendFacade';
import { DbConnector } from "../config/dbConnector"
import { ApiError } from "../errors/errors";
import { IFriend } from "../interfaces/IFriend";
import { positionCreator, getLatitudeInside, getLatitudeOutside } from "../utils/geoUtils"


class PositionFacade {
  db: Db
  positionCollection: Collection
  friendFacade: FriendsFacade;

  constructor(db: Db) {
    this.db = db;
    this.positionCollection = db.collection("positions");
    this.friendFacade = new FriendsFacade(db);
  }

  async addOrUpdatePosition(email: string, longitude: number, latitude: number): Promise<IPosition> {
    const friend: IFriend = await this.friendFacade.getFriendFromEmail(email)
    const name = `${friend.firstName} ${friend.lastName}`
    const postion: IPosition = positionCreator(longitude, latitude, email, name, false)

    const result = await this.positionCollection.findOneAndUpdate({ email }, { $set: postion }, { upsert: true, returnOriginal: false })
    return result.value
  }

  async findNearbyFriends(email: string, password: string, longitude: number, latitude: number, distance: number): Promise<Array<IPosition>> {
    const friend = this.friendFacade.getVerifiedUser(email, password)

    this.addOrUpdatePosition(email, longitude, latitude)
    const res = await this.positionCollection.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: distance,
        }
      }, email: {$ne: email}
    }).toArray()
    return res
  }

  async getAllPositions(): Promise<Array<IPosition>> {
    return this.positionCollection.find({}).toArray();
  }


}

export default PositionFacade;

async function tester() {
  const client = await DbConnector.connect()
  const db = client.db(process.env.DB_NAME)
  const positionFacade = new PositionFacade(db)
  await positionFacade.addOrUpdatePosition("pp@b.dk", 5, 5)
  process.exit(0)
}

//tester()