import { useState } from 'react';

function CreateUserForm(){
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/users',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: { username, password } })
    })
    .then(response => response.json())
    .then(result => console.log(result))
}





    return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="username" 
        label="username"
        name="username" 
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        />
        <input type="password" 
        placeholder="password"
        label="password"
        name="password"
        value={password} 
        onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="login" />
    </form>
    )
}

export default CreateUserForm;