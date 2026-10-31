import { useContext } from "react";
import { koleksiContext } from "../context/KoleksiContext";

export default function useKoleksi() {
    const context = useContext(koleksiContext)
    if (!context) throw new Error('useKoleksi harus diapakai di dalam <koleksiProvider')
    return context
}