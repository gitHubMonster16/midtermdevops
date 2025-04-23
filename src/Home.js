import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const name = location.state?.name || 'Guest';

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome to the Home Page, {name}!</h1>
        </div>
    );
}

export default Home;
