export function Loader() {
    return (
        <div className="flex items-center justify-center gap-2 text-neutral-400">
            <span className="size-2 rounded-full bg-primary-500 animate-bounce [animation-delay:0ms]"></span>
            <span className="size-2 rounded-full bg-primary-500 animate-bounce [animation-delay:150ms]"></span>
            <span className="size-2 rounded-full bg-primary-500 animate-bounce [animation-delay:300ms]"></span>
            <span className="ml-3">Loading…</span>
        </div>
    )
}