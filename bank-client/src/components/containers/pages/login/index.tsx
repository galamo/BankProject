import React, { useState } from "react"
import { Form, Col, Button } from "react-bootstrap"
import { changePasswordAction } from "../../../../store/async-actions/changePassword"
import axios from "axios"




export function Login() {
    const cpd: any = {
        email: "",
        password: "",

    }
    const [loginDetails, setChangePasswordDetails] = useState(cpd)
    function onChangePassword(key: string, value: string) {
        setChangePasswordDetails({ ...loginDetails, [key]: value })
    }

    // if you want something more build in - use form validation in react


    async function sendLoginReuqest() {
        const result: any = await axios.post("http://localhost:5000/auth/login", loginDetails)
        localStorage.setItem("token", result.data.token)
        console.log(result)
    }
    return <div>
        <h1> Login </h1>
        <div style={{ width: "600px" }}>
            <Form >
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>User Email</Form.Label>
                        <Form.Control name="email" onChange={(event) => {
                            onChangePassword(event?.target.name, event?.target.value)
                        }}
                            type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={(event) => onChangePassword(event?.target.name, event?.target.value)} placeholder="Password" />
                    </Form.Group>
                </Form.Row>


                <Button variant="primary" onClick={sendLoginReuqest} type="button">
                    Save
  </Button>
            </Form>
        </div>
    </div>

}
