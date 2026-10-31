import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : initialValue
    })

    useEffect(() => {
        if (value === null) localStorage.removeItem(key)
        else localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}
