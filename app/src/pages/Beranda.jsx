import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
    const { items, loading } = useKoleksi()
    const jumlahKategori = new Set(items.map((item) => item.kategori)).size

    return (
        <section>
            <h1>Direktori Kuliner Sekitar Kampus</h1>
            <p>Tema: {mahasiswa.tema}</p>
            {loading ? (
                <p>Memuat ringkasan...</p>
            ) : (
                <p>
                    Ada {items.length} tugas dalam {jumlahKategori} kategori.
                </p>
            )}
            <Link to="/koleksi">Lihat semua direktori kuliner sekitar kampus</Link>
        </section>
    )
}