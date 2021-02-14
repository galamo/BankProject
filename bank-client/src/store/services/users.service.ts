import axios from "axios"
import { BASE_URL } from "./register.service"


const API_URL = `${BASE_URL}/user`
export default async function getUsersService() {
    const { data } = await axios.get(`${API_URL}`)
    return data.users
}




