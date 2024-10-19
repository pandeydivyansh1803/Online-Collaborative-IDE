import React from "react";

const Home = () => {
    return (
        <div className="homepagewrapper">
            <div className="formwrapper">
                <img src="codev.png" alt="Logo" className="logo"/>
                <h4 className="heading">Enter the Room ID to start collaborating</h4>
                <div className="inputwrapper">
                    <input type="text" className="inputbox" placeholder="Room ID"/>
                    <input type="text" className="inputbox" placeholder="Username"/>
                    <button className="btn joinBtn">Join Now</button>

                    <span className="newroom">Don't have a Room ID? &nbsp; 
                        <a href="" className="createnewBtn">
                            create new room
                        </a>
                    </span>
                    
                </div>
            </div>
            <footer>
                <h4>Built by &nbsp; 
                    <a href="https://www.linkedin.com/in/aadityatripathi/">
                        Aaditya Tripathi
                    </a>
                </h4>
            </footer>
        </div>
    );
}

export default Home;