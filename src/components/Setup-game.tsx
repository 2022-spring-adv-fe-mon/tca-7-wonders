import Logo from '../assets/Logo.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/New-game.css';

const SetupGame = () => {
    const nav = useNavigate();
    
    return (
        <>
           <Button onClick={() => nav("/")}><img src={Logo} className="Small-logo" alt="logo" /></Button>
           <h1>Game set up page</h1>
           <Button variant="contained" size="large" color="success" onClick={() => nav("/game-stage1")}>Play Game</Button>
        </>
    );
};

export default SetupGame;