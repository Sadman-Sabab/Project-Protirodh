import axios from 'axios'
import React, { useState } from 'react'

function AddAdmin() {


    const [user, setUser] = useState({
        email: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    console.log(user.email)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        axios.post("http://localhost:4000/app/addAdmin", user)
            .then(res => {
                alert(res.data.message)
                console.log(res.data.message)
            })
            .catch(err => {
                console.log(err.response.data.error)
                alert(err.response.data.error)
            })
    }



    return (


        <>

            <div className='Container'>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddAdmin