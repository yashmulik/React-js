import { useNavigate } from "react-router-dom"

function Login(){
    const router =useNavigate();

    function gotoRegister(){
        router( '/Rgister ' )

    }

 
    return(
        <div>
            <h1>Login</h1>
            <button onClick={gotoRegister}>Register</button>
        </div>
    )
}

export default Login;