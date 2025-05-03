import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function SignIn() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length >= 4) {
            navigate('/home', { state: { name } }); // Pass name in state
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <h1>Enter Name</h1>
            <br /><br /><br /><br />
            <input
                style={{ width: '300px', height: '40px', borderWidth: '5px', borderRadius: '10px', border: 'solid' }}
                placeholder="enter name..."
                minLength={4}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/><br /><br /><br /><br /><br/>
            <button style={{ width: '100px', height: '30px', borderWidth: '3px', borderRadius: '5px' }} type="submit">
                submit
            </button>
        </form>
    );
}

export default SignIn;
