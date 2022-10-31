import React, { useState } from "react";
export default function Index() {
    const [text, setText] = useState("");
    return (
        <div className="App">
            <h1>Tugas Modul 4 Praktikum RPLBK Kelompok 02</h1>
            <p>Defin Friko Fahdani 21120119130054</p>
            <p>Muhammad Abinaya Isaqofi 21120119130039</p>
            <p>Ega Oktabrianto 21120119130066</p>
            <p>Nurhaidah 21120119120003</p>
            <input className="TextArea"
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
                placeholder="Masukkan teks"
            />
            {
                text ? <h3>Teks hasil input menggunakan useState adalah {text}</h3>
                    :
                    ''
            }
        </div>

    )
}