import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwords = ['123456789', 'picture1', 'password', '12345678',
    '11111111', '123123123', '1234567890', 'qwerty123',
    'abc123def456', 'Million2', '00000000', 'iloveyou',
    'password1', 'qqww1122'];


    function validateForm() {
        return email.length >= 8 && password.length >= 8;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (passwords.includes(password)) {
            window.location.href="https://en.wikipedia.org/wiki/List_of_the_most_common_passwords";
        } else {
            alert("Incorrect username or password");
        }
    }

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
        </Form>
        </div>
    );
}