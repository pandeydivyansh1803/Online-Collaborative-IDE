import React, { useEffect, useRef, useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { initSocket } from "../../socket";
import {ACTIONS} from "../Actions";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";


const Editorpage = () => {
    const socketRef = useRef(null);
    const location = useLocation();
    const { roomId } = useParams();
    const reactNavigator = useNavigate();
    useEffect(()=>{
        const init = async()=>{
            socketRef.current = await initSocket();
            socketRef.current.on("connect_error", (err)=> handleErrors(err));
            socketRef.current.on("connect_failed", (err)=> handleErrors(err));

            function handleErrors(err){
                console.log("socket error", err);
                toast.error("Socket connection failed, try again later");
                reactNavigator('/');
            }


            socketRef.current.emit(ACTIONS.JOIN, {
                roomId,
                username: location.state?.username
            })
        };
        init();
    },[]);


    const [clients, setClients] = useState([
        {socketId: 1, username: "Aaditya T"},
        {socketId: 2, username: "Momo Mami"},
    ])

    if(!location.state){
        return <Navigate to="/"/>;  
    }

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