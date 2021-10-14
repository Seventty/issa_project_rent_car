import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './Login.css';
import Header from './Header';
import { Link } from "@mui/material";
import Button from '@mui/material/Button';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div style={{ marginBottom: 10, padding: 90, margin: 10}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header/>
                <input {...register("user")} placeholder="username" />
                <input {...register("password")} placeholder="password" type="password"/>
                {/* <input type="submit" /> */}
                <Button className="inputButton" component={Link} to="/">Login</Button>
            </form>
        </div>
    )
}

export default Login
