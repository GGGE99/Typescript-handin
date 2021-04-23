/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useQuery, gql } from "@apollo/client"
import { IFriend } from "../interfaces/IFriend";

interface IFriends {
  getAllFriends: IFriend[]
}

export const ALL_FRIENDS = gql`
{
  getAllFriends{
    id
    firstName
    lastName
    email
    role
  }
}
`
interface FriendData {
  getAllFriends: IFriend[]
}

export default function All() {
  const { loading, error, data , refetch} = useQuery<IFriends>(ALL_FRIENDS, {fetchPolicy: "cache-first"})
  //const {loading,error,data} = useQuery(ALL_FRIENDS)

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log("---->", error)
    console.log("--2->", error.graphQLErrors)
    console.log("--3->", error.graphQLErrors[0])
    console.log("--4->", error.networkError)
    console.log("--5->", error.message)
    console.log("--6->", error.name)
    console.log("--7->", error.extraInfo)

    console.log("-##->", JSON.stringify(error.toString()))
  }
  if (error) return <p>{error.toString()}</p>;

  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>ID</th><th>firstName</th><th>lastName</th><th>email</th><th>Role</th></tr>
        </thead>
        <tbody>
          {data && data.getAllFriends.map(f => (
            <tr key={f.id}><td>{f.id}</td><td>{f.firstName}</td><td>{f.lastName}</td><td>{f.email}</td><td>{f.role}</td></tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => refetch()}>Refetch</button>
    </div>
  )


}
// export default function All() {
//   return <h2>Fetch and show all friends here</h2>

// }