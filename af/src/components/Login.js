import React from 'react'; 
import axiosWithAuth from '../utils/axiosWithAuth';    // 5 import your axios and connect it to your form using login


const Login = () => {     // 1

    const [form, setForm] = React.useState({username:"", password:""});                // <- Using React.useState() is the samething as importing React, {useState}

    const handleChanges = e => {    // 3
        setForm({...form, [e.target.name]: e.target.value})
    }

    const login = e => {    // 4

        e.preventDefault(); // this prevents page from refreshing to let the login run

        axiosWithAuth()
        .post("/api/login", form) // 6 posting your form to the API~~~
        .then(res => {console.log(res)})
        .catch(err => console.log(err.response));
    }


 return (  // 2
    <form onSubmit={login}>  

        {/* Username */}
        <input type="text" name="username" onChange={handleChanges} value={form.username}/>  

        {/* Password  */}
        <input type="password" name="password"onChange={handleChanges} value={form.password}/>

        {/* Submit Button */}
        <button type="submit"> Login </button>

    </form>
 )
}
export default Login; 



// Form Notes 

     // value on input syncs to the form, initializing form  with something in it's state /
    //* name in the input is what targets the state in form. form.username applies it  */