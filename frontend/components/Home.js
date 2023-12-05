import logo from "../assets/img1.png";
import '../App.css';

export default function Home(){
    return (
        <>
            
            <div className="home-container">
                    <img id="logo" height={250} src={logo} alt="logo"></img>
                    <h1>Blockchain Voting App</h1>
            </div>
        </>
    );
}