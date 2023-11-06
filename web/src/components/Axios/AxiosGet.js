import axios from "../../../config/AxiosConfig"

export const Get = async (path) =>{
    let res = await axios.get(path)
    return res
}