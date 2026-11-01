import mahasiswa from '../../mahasiswa.json'
import "./Tentang.css"

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/dzhark12/uts-paw'

export default function Tentang() {
    const { nama, nim, kelas, tema } = mahasiswa
    return (
        <section className='tentang'>
            <h1>Tentang</h1>
            <div id="fotoprofil">
                <img src={`${import.meta.env.BASE_URL}avatargithub.jpg`} alt={nama} id="profilgithub" />
            </div>
            <dl id="identitas-tugas">
                <dt>Nama</dt>
                <dd>{nama}</dd>
                <dt>NIM</dt>
                <dd>{nim}</dd>
                <dt>Kelas</dt>
                <dd>{kelas}</dd>
                <dt>Tema</dt>
                <dd>{tema}</dd>
            </dl>
            <p>
                Kode sumber: <a id="link-repo" href={REPO}>{REPO}</a>
            </p>
        </section>
    )
}