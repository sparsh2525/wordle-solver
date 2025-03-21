import LetterBox from "./LetterBox";
import { LetterState } from "@/lib/constants";

interface WordRowProps {
    word: LetterState[];
    // handleInputChange?: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleStatusChange?: (letter: LetterState, i: number, j: number) => void;
    // inputsRef?: RefObject<(HTMLInputElement | null)[]>;
    disabled?: boolean;
    demo?: boolean;
    rowNumber?: number;
}


export default function WordRow({ word, handleStatusChange, disabled = false, demo = false, rowNumber = 0 }: WordRowProps) {
    return (
        <div className="flex justify-center items-center gap-2">
            {word.map((letter, index) => (
                <div className="flex flex-col gap-5 items-center" key={index}>
                    <LetterBox
                        index={index}
                        letter={letter}
                        onClick={() => handleStatusChange && handleStatusChange(letter, rowNumber, index)}
                        disabled={disabled}
                        demo={demo}
                    />
                    {/* {!disabled &&
                        <StatusButton
                            onClick={() => handleStatusChange && handleStatusChange(index)}
                            Icon={<SwitchIcon />}
                        />} */}
                </div>
            ))}
        </div>
    );
}