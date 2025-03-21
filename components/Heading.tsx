import { WordleHeading } from "@/lib/constants";
import WordRow from "./WordRow";

export default function Heading() {
    return (
        <div className="flex items-center gap-1 flex-col">
            <WordRow word={WordleHeading} demo disabled />
            <p className="text-2xl font-sans font-bold text-slate-200">Solver</p>
        </div>
    )
}