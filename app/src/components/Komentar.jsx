import { useState } from "react";
import useKoleksi from "../hooks/useKoleksi";
import './Komentar.css'

export default function Komentar({ itemId }) {
    const { items, tambahKomen } = useKoleksi()
    const [teks, setTeks] = useState('')
    const item = items.find((item) => String(item.id) === String(itemId))
    let komentar = []
    if (item && item.komentar) {
        komentar = item.komentar
    }

    const kirim = (e) => {
        e.preventDefault()
        if (!teks.trim()) return
        tambahKomen(itemId, teks.trim())
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

            <ul className="komentar-daftar">
                {komentar.map((isi, index) => (
                    <li key={index} > {isi} </li>
                ))}
            </ul>
        </section >
    )
}