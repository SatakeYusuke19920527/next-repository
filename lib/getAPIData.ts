import axios from 'axios'
import { UserType } from '../types/UserType';

export const getAPIData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = res.data
  JSON.stringify(data)
  return data
}

export async function getAPIDataIds() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = res.data
  
  return data.map((d: UserType) => {
    return {
      params: {
        id: d.id.toString()
      }
    }
  })
}

export async function getUserDataById(id: string) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = res.data
  return convertJson(data)
}

const convertJson = (data: UserType) => {
  return JSON.stringify(data)
}