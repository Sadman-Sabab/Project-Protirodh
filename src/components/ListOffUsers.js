import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function ListOffUsers() {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/app/listOfUsers", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => setList(data))

        // console.log(list)
        // console.log(setList)
    }, [])

    return (


        <>

            <div className='p-5'>
                <div className='p-5'>
                    <h2 className='mb-5'>List of Who Registered</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Center</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((row) => (
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.vaccinationCenter}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}

export default ListOffUsers