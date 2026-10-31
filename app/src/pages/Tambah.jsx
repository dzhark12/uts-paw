import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Restoran', alamat: '', hargaRataRata: '', jamBuka: '' }

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })


    const simpan = (e) => {
        e.preventDefault()
        if (form.judul.trim().length < 3) {
            setGalat('judul wajib diisi, minimal 3 karakter.')
            return
        }
        if (form.hargaRataRata !== '' && Number(form.hargaRataRata) < 0) {
            setGalat('Harga rata-rata wajib diisi dan tidak boleh kurang dari 0')
            return
        }
        tambah({
            ...form,
            judul: form.judul.trim(),
            alamat: form.alamat.trim(),
            // jamBuka: form.jamBuka.trim(),
            jamBuka: form.jamMulai && form.jamSelesai ? `${form.jamMulai}-${form.jamSelesai} WIB` : '',
            hargaRataRata: Number(form.hargaRataRata)
        })
        navigate('/koleksi')
    }

    return (
        <form className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Direktori Kuliner</h1>

            <label htmlFor="judul">Judul</label>
            <input id="judul" name="judul" value={form.judul} onChange={ubah} />

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
                <option>Restoran</option>
                <option>Coffee Shop</option>
                <option>Bakery</option>
            </select>

            <label htmlFor="alamat">Alamat </label>
            <input id="alamat" name="alamat" placeholder="Jl. Airan Raya, Way Hui, Jati Agung, Lampung Selatan" value={form.alamat} onChange={ubah} />

            <label htmlFor="hargaRataRata">Harga Rata-rata</label>
            <input id="hargaRataRata" name="hargaRataRata" type='number' value={form.hargaRataRata} onChange={ubah} />

            <label htmlFor="jamBuka">Jam Buka</label>
            {/* <input id="jamBuka" name="jamBuka" placeholder="Contoh: 09:00 - 22:00 WIB" value={form.jamBuka} onChange={ubah} /> */}
            <div className="jam-buka">
                <label htmlFor="jamMulai">Dari</label>
                <input id="jamBuka" name="jamMulai" type="time" value={form.jamMulai} onChange={ubah} />
                <label htmlFor="jamSelesai">Sampai</label>
                <input id="jamBuka2" name="jamSelesai" type="time" value={form.jamSelesai} onChange={ubah} />
            </div>






            {galat && <p role="alert">{galat}</p>}
            <button type="submit">Simpan</button>
        </form>


    )
}