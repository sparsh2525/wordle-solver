import { ColourMapping, LetterState } from '@/lib/constants';
import React, { RefObject } from 'react';

interface LetterBoxProps {
    index: number;
    letter: LetterState;
    handleChange?: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
    inputsRef?: RefObject<(HTMLInputElement | null)[]>;
    disabled: boolean;
    demo: boolean;
}

export default function LetterBox({ index, letter, handleChange, inputsRef, disabled, demo }: LetterBoxProps) {
    return (
        <input
            className={`${demo ? 'w-8 h-8 text-2xl' : 'w-16 h-16 text-5xl'} ${ColourMapping[letter.status]} text-slate-200 font-sans font-bold text-center`}
            type="text"
            maxLength={1}
            value={letter.value}
            tabIndex={0}
            onChange={(event) => handleChange && handleChange(index, event)}
            ref={(el) => {
                if (inputsRef)
                    inputsRef.current[index] = el;
            }}
            disabled={disabled}
        />
    );
};