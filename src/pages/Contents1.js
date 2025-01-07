import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../css/main.css';

function Contents1() {
    const navigate = useNavigate(); // React Routerのフック

    const goToAbout = () => {
        navigate('/main'); // ページ遷移
    };
    return (
        <div className="top">

            <header>
                <p>Happy Birhday!!</p>
            </header>

            <main>
                <h2>プレゼント1の内容が入ります</h2>
            </main>
            <button onClick={goToAbout}>Go to Main Page</button>

        </div>

    );
}

export default Contents1;