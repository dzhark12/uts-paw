import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Komentar({ itemId }) {
    const [teks, setTeks] = useState()
    const [komentar, setKomentar] = useLocalStorage(`uts-paw:komentar:${itemId}`, [])

    const kirim = (e) => {
        e.preventDefault()
        if (!teks.trim()) return

        setKomentar((sebelumnya) => [...sebelumnya, teks.trim()])
        setTeks('')
    }
    return (
        <section className="komentar">
            <h2>Komentar</h2>
            <form onSubmit={kirim}>
                <label htmlFor="komentar"> Tulis komentar</label>
                <br></br>
                <textarea className="komentar-input" id="komentar" value={teks} onChange={(e) => setTeks(e.target.value)} />
                <br></br>
                <button className="komentar-submit" type="submit"> Kirim </button>
            </form>

            <ul>
                {komentar.map((isi, index) => (
                    <li key={index} > {isi} </li>
                ))}
            </ul>
        </section >
    )
}