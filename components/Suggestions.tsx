export default function Suggestions({ suggestions, wordListLength }: { suggestions: string[], wordListLength: number }) {
    return (
        <>
            {!suggestions.length ?
                <h5 className="text-1xl text-slate-200 italic text-center">No word exists?</h5>
                :
                suggestions.length === wordListLength ?
                    <h5 className="text-1xl text-slate-200 italic text-center">Enter some values?</h5>
                    :
                    <div className="flex flex-col gap-3 relative max-w-80">
                        <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar pl-3">
                            {suggestions.map((suggestion, index) => (
                                <SuggestionPill key={index} suggestion={suggestion} />
                            ))}
                        </div>
                        <div className="absolute bg-gradient-to-r from-neutral-950 from-20% to-transparent to-60% z-10 w-10 h-[60%] -left-2 top-0" />
                        <div className="absolute bg-gradient-to-r from-transparent from-40% to-neutral-950 to-80% z-10 w-10 h-[60%] -right-2 top-0" />
                        <h5 className="text-1xl text-slate-200 italic text-center">{suggestions.length} guesses (scroll if needed)</h5>
                    </div>
            }
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