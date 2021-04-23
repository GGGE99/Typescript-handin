/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { IFriend } from "../interfaces/IFriend"
import { gql, useMutation, ApolloClient } from "@apollo/client"
import {ALL_FRIENDS} from './AllFriends'

const ADD_FRIEND = gql`
mutation 
createFriend($friend : FriendInput){
  createFriend(input:$friend){
   firstName
    lastName
    email
    role
    id
  }
}`

type AddFriendProps = {
  initialFriend?: IFriend,
  allowEdit: true
}

interface IKeyableFriend extends IFriend {
  [key: string]: any
}

interface FriendData {
  getAllFriends: IFriend[]
}

const AddFriend = ({ initialFriend }: AddFriendProps) => {
  const EMPTY_FRIEND: IFriend = { firstName: "", lastName: "", password: "", email: "" }
  let newFriend = initialFriend ? initialFriend : { ...EMPTY_FRIEND }

  const [friend, setFriend] = useState({ ...newFriend })

  const [addFriend, { data }] = useMutation(
    ADD_FRIEND, {
      update(cache, { data }) {
        const addedFriend = data.createFriend;
        const d: any = cache.readQuery({ query: ALL_FRIENDS })
        if (!d) {
          return
        }
        let allFriends = d.allFriends
        cache.writeQuery({
          query: ALL_FRIENDS,
          data: { allFriends: [...allFriends, addedFriend] }
        })
      }
  })

  const handleChange = (event: any) => {
    const id = event.currentTarget.id;
    let friendToChange: IKeyableFriend = { ...friend }
    if (id === "age") {
      friendToChange[id] = Number(event.currentTarget.value);
    } else {
      friendToChange[id] = event.currentTarget.value;
    }
    setFriend({ ...friendToChange })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addFriend({ variables: { friend: { ...friend } } })
    setFriend({ ...EMPTY_FRIEND })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName<br />
        <input type="text" id="firstName" value={friend.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        LastName <br />
        <input type="text" id="lastName" value={friend.lastName} onChange={handleChange} />
      </label>
      <br />
      Email <br />
      <input type="email" id="email" value={friend.email} onChange={handleChange} />
      <br />
      <label>
        Password <br />
        <input type="password" id="password" value={friend.password} onChange={handleChange} />
      </label>
      <br /><br />
      <input type="submit" value="Save Friend" />
    </form>
  );
}

export default AddFriend;