import "../styles/Navbar.scss"

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <a href="#" className="logo">JianWei</a>
                <nav>
                    <a href="">About</a>
                    <a href="">Skills</a>
                    <a href="">Portfolio</a>
                    <a href="">Experience</a>
                </nav>
            </div>
        </>
    )
}