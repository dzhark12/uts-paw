import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import mahasiswa from '../../mahasiswa.json'
import "./Beranda.css"

export default function Beranda() {
    const { items, loading } = useKoleksi()
    const jumlahKategori = new Set(items.map((item) => item.kategori)).size

    return (
        <section id='beranda-awal'>
            <h1>Direktori Kuliner Sekitar Kampus</h1>
            <p>Tema: {mahasiswa.tema}</p>
            {loading ? (
                <p>Memuat ringkasan...</p>
            ) : (
                <p>
                    Ada {items.length} tugas dalam {jumlahKategori} kategori.
                </p>
            )}
            <div className='link-koleksi'>
                <Link to="/koleksi">Lihat semua direktori kuliner sekitar kampus</Link>
            </div>

            <div className='foto-beranda'>
                <img src={`${import.meta.env.BASE_URL}beranda.jpg`} alt="foto beranda kuliner" />
            </div>
        </section>
    )
}