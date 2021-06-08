import "./contact.scss"
import {useState} from "react";
import { SpaRounded } from "@material-ui/icons";

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
        <img src="assets/115-1151984_handshake-clipart-black-and-white-png-hand-shake.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message" ></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP:)</span> }
                </form>
            </div>
        </div>
    )
}
 