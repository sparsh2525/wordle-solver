export default function Suggestions({ suggestions, wordListLength }: { suggestions: string[], wordListLength: number }) {

    let message = ''
    if (wordListLength === 0)
        message = 'Loading...'
    else if (suggestions.length === 0)
        message = 'No word exists?'
    else if (suggestions.length === wordListLength)
        message = 'Enter some values?'
    else if (suggestions.length > 0)
        message = `${suggestions.length} guesses (scroll right if needed)`

    const showSuggestions = suggestions.length > 0 && suggestions.length < wordListLength
    return (
        <>
            {showSuggestions && <div className="relative max-w-80">
                <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar px-3">
                    {suggestions.map((suggestion, index) => (
                        <SuggestionPill key={index} suggestion={suggestion} />
                    ))}
                </div>
                <div className="absolute bg-linear-to-r from-neutral-950 from-20% to-transparent to-60% z-10 w-10 h-full -left-2 top-0" />
                <div className="absolute bg-linear-to-r from-transparent from-40% to-neutral-950 to-80% z-10 w-10 h-full -right-2 top-0" />
            </div>}
            <h5 className="text-1xl text-slate-200 italic text-center">{message}</h5>
        </>
    )
}


const SuggestionPill = ({ suggestion }: { suggestion: string }) => {
    return (
        <p className="text-sm text-slate-200 italic text-center px-2 py-1 bg-slate-800 rounded-lg">
            {suggestion}
        </p>
    )
}