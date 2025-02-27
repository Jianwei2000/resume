import "../styles/Navbar.scss"

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>JianWei</h1>
                </div>
                <ul>
                    <li>About</li>
                    <li>SKills</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                </ul>
            </div>
        </>
    )
}