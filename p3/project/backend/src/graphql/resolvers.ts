import FriendFacade from '../facades/friendFacade';
import PostionFacade from '../facades/positionFacade';
import { IFriend } from '../interfaces/IFriend';
import { IPositionInput, IPostionsNearbyInput } from '../interfaces/IPosition';
import { ApiError } from '../errors/errors';
import { Request } from "express";
import fetch from "node-fetch"



let friendFacade: FriendFacade;
let postionFacade: PostionFacade;


/*
We don't have access to app or the Router so we need to set up the facade in another way
In www.ts IMPORT and CALL the method below, like so: 
      setupFacade(db);
Just before the line where you start the server
*/
export function setupFacade(db: any) {
  if (!friendFacade) {
    friendFacade = new FriendFacade(db)
  }
  if (!postionFacade) {
    postionFacade = new PostionFacade(db)
  }
}

// resolver map
export const resolvers = {
  Query: {
    getFriend: (_: any, { id }: { id: string }) => {
      return friendFacade.getFriendFromId(id)
    },
    getAllFriends: (root: any, _: any, context: any) => {

      if (!context.credentials || !context.credentials.role || context.credentials.role !== "admin") {
        throw new ApiError("Not Authorized", 401)
      }

      return friendFacade.getAllFriendsV2()

    },

    getAllFriendsProxy: async (root: object, _: any, context: Request) => {

      let options: any = { method: "GET" }

      //This part only required if authentication is required
      const auth = context.get("authorization");
      if (auth) {
        options.headers = { 'authorization': auth }
      }
      return fetch(`http://localhost:${process.env.PORT}/api/friends/all`, options).then(r => {
        if (r.status >= 400) { throw new Error(r.statusText) }
        return r.json()
      })
    }
  },
  Mutation: {
    createFriend: async (_: object, { input }: { input: IFriend }) => {
      return friendFacade.addFriendV2(input)
    },
    addPostions: async (_: object, { input }: { input: IPositionInput }) => {
      try {
        postionFacade.addOrUpdatePosition(input.email, input.longitude, input.latitude)
        return true
      } catch {
        return false
      }
    },
    findNearbyFriends: async (_: object, {input}: {input: IPostionsNearbyInput}) => {
      return postionFacade.findNearbyFriends(input.email, input.password, input.longitude, input.latitude, input.distance)
    }
  },
};