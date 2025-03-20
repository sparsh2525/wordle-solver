import { ColourMapping, LetterState } from '@/lib/constants';
import { motion } from 'framer-motion';
import React from 'react';

interface LetterBoxProps {
    index: number;
    letter: LetterState;
    // handleChange?: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
    // inputsRef?: RefObject<(HTMLInputElement | null)[]>;
    onClick?: () => void;
    disabled: boolean;
    demo: boolean;
    animate?: boolean;
}

const variants = {
    initial: { scale: 1 },
    animate: {
        scale: 1.1,
        transition: {
            delay: 0.2
        }
    }
};

export default function LetterBox({ letter, onClick, disabled, demo }: LetterBoxProps) {
    // const [animateBool, setAnimateBool] = React.useState(animate);
    // React.useEffect(() => {
    //     if (animate) {
    //         const id = setTimeout(() => setAnimateBool(false), 1000)
    //         return () => clearTimeout(id);
    //     }
    // });
    return (
        <motion.div
            initial='initial'
            variants={variants}
            // animate={animate ? 'animate' : 'initial'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
                `${demo ? 'w-8 h-8 text-xl' : 'w-14 h-14 text-4xl'} 
                ${ColourMapping[letter.status]} 
                ${disabled ? 'select-none-all' : ''}
                text-slate-200 font-sans font-bold flex items-center justify-center `
            }
            //type="text"
            //maxLength={1}
            //value={letter.value}
            //tabIndex={0}
            //onChange={(event) => handleChange && handleChange(index, event)}
            // ref={(el) => {
            //     if (inputsRef)
            //         inputsRef.current[index] = el;
            // }}
            //readOnly={disabled}
            onClick={() => onClick?.()}
        >
            <p className='mt-1'>{letter.value}</p>
        </motion.div>
    );
};