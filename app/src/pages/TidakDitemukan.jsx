import { Link } from 'react-router-dom'
import "./TidakDitemukan.css"

export default function TidakDitemukan() {
    return (
        <section id="hal404">
            <div className="pesan404">
                <h1>404</h1>
                <p>Halaman tidak ditemukan.</p>
            </div>

            <div className="link-beranda">
                <Link to="/">Kembali ke beranda</Link>
            </div>
            <div className="foto-404">
                <img src={`${import.meta.env.BASE_URL}404.png`} alt="404" />
            </div>
        </section>
    )
}