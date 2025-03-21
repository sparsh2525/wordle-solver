import { ColourMapping, LetterState } from '@/lib/constants';
import { motion } from 'framer-motion';
import React from 'react';

interface LetterBoxProps {
    index: number;
    letter: LetterState;
    onClick?: () => void;
    disabled: boolean;
    demo: boolean;
}

export default function LetterBox({ letter, onClick, disabled, demo }: LetterBoxProps) {
    const filled = letter.value !== '';

    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
                `${demo ? 'w-8 h-8 text-xl' : 'w-14 h-14 text-4xl'} 
                ${ColourMapping[letter.status]} 
                ${disabled ? 'select-none-all' : ''}
                ${filled ? 'animate-cell-reveal border-slate-200 border-solid border-2' : ''}
                text-slate-200 font-sans font-bold flex items-center justify-center rounded-xs select-none-all`
            }
            onClick={() => onClick?.()}
        >
            <span>{letter.value}</span>
        </motion.div>
    );
};