import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/main.css';

function Top() {
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
                <h2>ここに誕生日おめでとうの画像を入れます</h2>
            </main>
            <footer>
                <p>&copy; 愛しのさやかより</p>
            </footer>
            <button onClick={goToAbout}>Go to Main Page</button>

        </div>

    );
}

export default Top;
