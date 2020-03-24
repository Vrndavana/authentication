import React from 'react'; 
// import axios from 'axios';



const Login = () => {

    const [form, setForm] = React.useState({username:"", password:""});                // <- Using React.useState() is the samething as importing React, {useState}


    const handleChanges = e => {
        setForm({...form, [e.target.nam]: e.target.value})
    }

    const login = e => {
        e.preventDefault(); // this prevents page from refreshing to let the login run
        

    }




    return (
    <form onSubmit={login}>
            {/* value on input syncs to the form, initializing form  with something in it's state */}
            {/* name in the input is what targets the state in form. form.username applies it  */}
        <input type="text" name="username" onChange={handleChanges} value={form.username}/>   
        <input type="password" name="password"onChange={handleChanges} value={form.password}/>
        <button type="submit"> Login </button>
    </form>)
}

export default Login;