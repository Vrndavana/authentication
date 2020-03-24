import axios from 'axios';

export default function axiosWithAuth() {
    
    return axios.create ({
        baseURL: "http://localhost:5000/api",
        headers: {Authorization: localStorage.getItem("token")}
    })
}



// Put Const on line 5 and make Authorization just Authorization: token --- if it is easier for you to read that way 
// const token = localStorage.getItem("token")  <- This is not needed if Authorization has localStorage w token
//   const token = localStorage.getItem("token") and  {Authorization: token} === Authorization: localStorage.getItm("token")


