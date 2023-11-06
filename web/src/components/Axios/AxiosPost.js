import axios from "../../../config/AxiosConfig"

export const Post = async (path,content) =>{
    let res =  await axios.post(path,content)
    return res
}