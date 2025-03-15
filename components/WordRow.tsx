import { RefObject } from "react";
import LetterBox from "./LetterBox";
import { LetterState } from "@/lib/constants";
import StatusButton from "./StatusButton";
import { SwitchIcon } from "@/icons/icons";

interface WordRowProps {
    word: LetterState[];
    handleInputChange?: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleStatusChange?: (index: number) => void;
    inputsRef?: RefObject<(HTMLInputElement | null)[]>;
    disabled?: boolean;
    demo?: boolean;
}


export default function WordRow({ word, handleInputChange, handleStatusChange, inputsRef, disabled = false, demo = false }: WordRowProps) {
    return (
        <div className="flex justify-center items-center gap-2">
            {word.map((letter, index) => (
                <div className="flex flex-col gap-5 items-center" key={index}>
                    <LetterBox
                        index={index}
                        letter={letter}
                        handleChange={handleInputChange}
                        inputsRef={inputsRef}
                        disabled={disabled || !!!handleInputChange}
                        demo={demo}
                    />
                    {!disabled &&
                        <StatusButton
                            onClick={() => handleStatusChange && handleStatusChange(index)}
                            Icon={<SwitchIcon />}
                        />}
                </div>
            ))}
        </div>
    );
}