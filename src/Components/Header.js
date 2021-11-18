import { useState } from "react";
import { useHistory } from "react-router";
import './Header.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Header({inventory, checkAnswer, goBack, goForward}){
    const [answer, setAnswer] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        checkAnswer(answer);
    }

    return(
        <div className="header" style={{display: 'flex'}}>
            <div className="header-half">
                <h1 className="inventory-label">Inventory</h1>
                <div className="inventory-container">
                    <div className="inventory-box">{inventory.slot1}</div>
                    <div className="inventory-box">{inventory.slot2}</div>
                    <div className="inventory-box">{inventory.slot3}</div>
                    <div className="inventory-box">{inventory.slot4}</div>
                </div>
            </div>
            <div className="header-half">
                <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'space-around', width: '80%', height: '50%'}}>
                    <input 
                        className="input-bar" 
                        placeholder="Enter answer..."
                        autoComplete="off"
                        onChange={event => setAnswer(event.target.value)}>
                    </input>
                    <button className="submit-button" type='submit'>Submit</button>
                </form>
                <div className="arrows">
                    <ArrowBackIosIcon onClick={() => goBack()} style={{ color: "lightGreen",  transform: "scale(1.5)" }}/>
                    <ArrowForwardIosIcon onClick={() => goForward()} style={{ color: "lightGreen", transform: "scale(1.5)"}}/>
                </div>
            </div>
        </div>
    )

}

export default Header