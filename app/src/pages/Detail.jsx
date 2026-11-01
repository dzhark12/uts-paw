import { Link, useNavigate, useParams } from 'react-router-dom'
import "./Detail.css"
import useKoleksi from '../hooks/useKoleksi.js'
import Komentar from '../components/Komentar.jsx'
import Rating from '../components/Rating.jsx'

export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { items, loading, hapus } = useKoleksi()
    const item = items.find((i) => String(i.id) === id)

    if (loading) return <p>Memuat data...</p>
    if (!item) {
        return (
            <section>
                <h1>Item tidak ditemukan</h1>
                <Link to="/koleksi">Kembali ke koleksi</Link>
            </section>
        )
    }

    const konfirmasiHapus = () => {
        if (window.confirm(`Hapus "${item.judul}"?`)) {
            hapus(item.id)
            navigate('/koleksi')
        }
    }

    return (
        <section>
            <h1>{item.judul}</h1>
            <dl id="detail-item">
                <dt>Kategori</dt>
                <dd>{item.kategori}</dd>
                <dt>Alamat</dt>
                <dd>{item.alamat}</dd>
                <dt>Harga Rata-rata</dt>
                <dd>Rp. {item.hargaRataRata.toLocaleString('id-ID')}</dd>
                <dt>Jam Buka</dt>
                <dd>{item.jamBuka}</dd>
            </dl>
            <div className="aksi">
                <button type="button" onClick={konfirmasiHapus}>
                    Hapus
                </button>
                <div id="linkkoleksi2">
                    <Link to="/koleksi">Kembali</Link>
                </div>
            </div>
            <Rating itemId={item.id} />
            <Komentar itemId={item.id} />
        </section>
    )
}