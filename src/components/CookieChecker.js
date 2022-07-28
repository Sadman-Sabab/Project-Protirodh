import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from "./App"

function CookieChecker({ setLoggedinUser }) {


    const { state, dispatch } = useContext(UserContext)
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch("http://localhost:4000/app/cookieCheck", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
            .then((res) => {
                res.json();
                if (res.staus !== 200) {
                    dispatch({ type: "USER", payload: false })
                }
                else dispatch({ type: "USER", payload: true })

            })
            .then((data) => {
                // setUser(data)
                console.log(data.userDataFromBackend)
                // setLoggedinUser(data.userDataFromBackend)
                // console.log(data.userDataFromBackend)

            })

        // console.log(list)
        // console.log(setList)
    })


    return (
        <></>
    )
}

export default CookieChecker