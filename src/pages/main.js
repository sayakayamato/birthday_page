import '../css/main.css';
import { useNavigate } from 'react-router-dom';

function Main() {
        const navigate = useNavigate(); // React Routerのフック
    
        const goToContents1 = () => {
            navigate('/contents1'); // コンテンツ1へページ遷移
        };
        const goToContents2 = () => {
            navigate('/contents2'); // コンテンツ2へページ遷移
        };
        const goToContents3 = () => {
            navigate('/contents3'); // コンテンツ3へページ遷移
        };
    return (
        <div className="main">

            <header>
                <p>ウェブサイトのタイトル</p>
            </header>

            <main>
                <div className="message">
                    <h2 className='first_message'>ここにメッセージが入ります</h2>
                    <p>ここにメッセージを入れます</p>
                    <p>ここにメッセージを入れます</p>
                    <p>ここにメッセージを入れます</p>
                </div>
                <div className="present">
                    <h2>豪華プレゼント1</h2>
                    <button onClick={goToContents1}>プレゼント1</button>
                </div>
                <div className="present">
                    <h2>豪華プレゼント2</h2>
                    <button onClick={goToContents2}>プレゼント1</button>
                </div>
                <div className="present">
                    <h2>豪華プレゼント3</h2>
                    <button onClick={goToContents3}>プレゼント1</button>
                </div>
            </main>
            <footer>
                <p>&copy; 2025 ウェブサイト作成者</p>
            </footer>

        </div>

    );
}

export default Main;