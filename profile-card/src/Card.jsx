import React from "react";
import "./Card.css"

export default function Card() {
    return (
        <div className="card">
           <img src="/uzui.JPG" alt="close up pic of me as Uzui"/>
            <h1>Salmane</h1>
            <p>
                “Behold! I am the flamboyant and unstoppable ninja—striking with style,
                 power, and flair. Bow before Uzui!”
            </p>
            <h2>Some Hobbies</h2>
            <ul>
                <li>Coding</li>
                <li>Basketball</li>
                <li>Dancing</li>
            </ul>
        </div>
    )
}