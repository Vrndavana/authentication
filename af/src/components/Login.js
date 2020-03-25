import React from 'react'; 
import axiosWithAuth from '../utils/axiosWithAuth';    // 5 import your axios and connect it to your form using login


const Login = props => {     // 1
    // LOGIN LOGIC
    const [form, setForm] = React.useState({username:"", password:""});                // <- Using React.useState() is the samething as importing React, {useState}
    const handleChanges = e => {setForm({...form, [e.target.name]: e.target.value})};// 3
    const login = e => {    // 4

        e.preventDefault(); // this prevents page from refreshing to let the login run
        axiosWithAuth()
        .post("/api/login", form) // 6 posting your form to the API~~~
        .then(res => {console.log(res); localStorage.setItem("token", res.data.payload); props.history.push("/");}) // 1.0 only console.log
          // 7 .THEN - above - add localStorage to the .then to save token - NOW PASS PROPS!
        .catch(err => {console.log(err.response); setForm({ username: "", password: ""});})  // Wrap console.log in curlies and add setForm
    };
    // LOGIN RETURN - Form Display  
    return (  // 2 - Username, Password, Submit Button
    <form onSubmit={login}>  
 
        <input type="text" name="username" onChange={handleChanges} value={form.username}/>     
        <input type="password" name="password"onChange={handleChanges} value={form.password}/>
        <button type="submit"> Login </button>

    </form>
    )
}
export default Login; 

// Form Notes 
     // value on input syncs to the form, initializing form  with something in it's state /
    //* name in the input is what targets the state in form. form.username applies it  */
   // setForm clears the input fields when the browser is refreshed so the user can retype credentials

   // axios 
   // .post = api/login, form
   // .then = log; setItem; push;
   // .catch = log; setForm;

