import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const Editorpage = () => {
    const [clients, setClients] = useState([
        {socketId: 1, username: "Aaditya T"},
        {socketId: 2, username: "Momo Mami"},
    ])


    return (
        <div className="mainwrapper">
            <div className="sidepanel">
                <div className="sidepanel-inner">
                    <div className="logo2">
                        <img src="/codev.png" 
                        className="logo2img" 
                        alt="logo" 
                        />
                    </div>
                    <h3>Connected:</h3>
                    <div className="clientList">
                        {clients.map((client) => (
                            <Client 
                                key = {client.socketId}
                                username = {client.username}>
                            </Client>
                        ))}
                    </div>
                </div>
                <button className="btn copyBtn">Copy Room ID</button>
                <button className="btn leaveBtn">Leave Room</button>
            </div>
            <div className="editorwrapper">
                <Editor></Editor>
            </div>
        </div>
    );
}

export default Editorpage;