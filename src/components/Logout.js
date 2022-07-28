import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from "./App"

function Logout({ setLoggedinUser }) {

    const { state, dispatch } = useContext(UserContext)

    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:4000/app/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: "USER", payload: false })
            history.push("/")
            if (res.staus !== 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((error) => {
            console.log(error);
        })
    })
    return (
        <>
        </>
    )
}
export default Logout