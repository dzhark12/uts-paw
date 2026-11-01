import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
    const { id, judul, kategori, alamat, jamBuka } = item
    return (
        <article className="kartu">
            <h3>
                <Link to={`/koleksi/${id}`}>{judul}</Link>
            </h3>
            <p>
                {kategori}
            </p>
            <p>
                Jam Buka : {jamBuka}
            </p>
            <p>
                Alamat : {alamat}
            </p>
        </article>
    )
}