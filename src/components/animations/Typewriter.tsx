import { useEffect, useState } from 'react'

type Props = { text: string; speed?: number; loop?: boolean }
export function Typewriter({ text, speed = 45, loop = false }: Props) {
    const [i, setI] = useState(0)
    useEffect(() => {
        if (i < text.length) {
            const id = setTimeout(() => setI(i + 1), speed)
            return () => clearTimeout(id)
        } else if (loop) {
            const id = setTimeout(() => setI(0), 1200)
            return () => clearTimeout(id)
        }
    }, [i, text, speed, loop])
    return <span aria-label={text}>{text.slice(0, i)}<span className="animate-pulse">▌</span></span>
}