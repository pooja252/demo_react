import { myAxios } from "./helper"


export const signup = (user) =>{
    return myAxios
    .post('patient/',user)
    .then((response) => response.data)
};