import { IPoint } from "./geoInterfaces"

export default interface IPosition {
  lastUpdated: Date,
  email: string,
  name: string,
  location: IPoint
}

export interface IPositionInput {
  email: string
  longitude: number,
  latitude: number
}

export interface IPostionsNearbyInput {
  email: string,
  password: string,
  longitude: number,
  latitude: number,
  distance: number
}

