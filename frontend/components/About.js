import '../App.css';

export default function About(){
    localStorage.removeItem("user");
    return (
        <>
        <div className="about-container">
            <h1>About the App</h1>
            <p>PegasusX is a modern day voting app empowered by blockchain.
            Its goal is to eliminate the vulnerabilites present in electronic
            voting machine system. It makes the voting system tamper-proof with the help of blockchain.
            It's primarily based on the immutable feature of blockchain!
            This is the best solution to the problems faced by the EVM.
            </p>
        </div>
        </>
    );
}