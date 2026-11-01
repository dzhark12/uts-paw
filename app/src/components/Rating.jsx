import useKoleksi from "../hooks/useKoleksi";
import { KoleksiProvider } from "../context/KoleksiProvider";

export default function Rating({ itemId }) {
    const { items, beriRating } = useKoleksi()
    const item = items.find((item) => item.id === itemId)
    let rating = 0
    if (item && item.rating !== null) {
        rating = item.rating
    }

    return (
        <section>
            <h2>Beri Rating</h2>
            {[1, 2, 3, 4, 5].map((nilai) => (
                <button key={nilai} type="button" aria-label={`${nilai} bintang`} onClick={() => beriRating(itemId, nilai)}>
                    {nilai <= rating ? '*' : ""}
                </button>
            ))}
            <p> Rating: {rating}/5</p>
        </section>
    )
}