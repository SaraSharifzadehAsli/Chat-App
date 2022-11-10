import React, { useState, useEffect, useContext} from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

// Components
import Navbar from "./Navbar";

// Styles
import styles from "./Chats.module.css";

// Contexts
import { AuthContext } from "../Contexts/AuthCotextProvider";

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "f93a2126-8117-4828-ad9e-c75b15992aa0",
                "user-name": user.email,
                "user-secret": user.uid,
                // "private-key": "d7c5b952-0ea0-4364-9243-d6f97f2085c5"
            }
        })
        .then(() =>{
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "d7c5b952-0ea0-4364-9243-d6f97f2085c5"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/");
    }

    if (!user || loading) return "Loading..."

    return (
        <div className={styles.container}>
            <Navbar LogoutHandler ={logoutHandler} />

            <ChatEngine 
                height="calc(100vh - 50px)"
                projectID="f93a2126-8117-4828-ad9e-c75b15992aa0"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;