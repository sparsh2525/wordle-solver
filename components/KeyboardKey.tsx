import { ColourMapping, LetterState } from '@/lib/constants';
import useLongPress from '@/lib/useLongPress';
import React from 'react';

interface KeyboardKeyProps {
    letter: LetterState | string;
    onLongPressHandler?: (letter: string) => void;
    onClickHandler?: (letter: string) => void;
    demo?: boolean;
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({ letter, onLongPressHandler, onClickHandler, demo = false }) => {

    const onLongPress = () => { onLongPressHandler && onLongPressHandler(typeof letter === 'string' ? letter : letter.value) };
    const onClick = () => { onClickHandler && onClickHandler(typeof letter === 'string' ? letter : letter.value) };
    const longPressEventHandlers = useLongPress(onLongPress, onClick);

    return (
        <button
            className={`m-[3px] rounded select-none-all active:brightness-150 transition-all
                ${typeof letter === 'string' ? 'bg-slate-400 px-1' : ColourMapping[letter.status] + ` ${demo ? 'w-4' : 'w-[30px]'} text-slate-200`}
                ${demo ? 'h-6 text-sm' : 'h-12'}
                `}
            unselectable='on'
            {...longPressEventHandlers}
        //onClick={() => onClickHandler && onClickHandler(letter.value)}
        >
            {typeof letter === 'string' ? letter.split(":")[1] : letter.value}
        </button>
        // :
        // <button
        //     className="p-2 m-1 rounded bg-slate-400 select-none"
        //     {...longPressEventHandlers}
        // //onClick={() => onClickHandler && onClickHandler(letter)}
        // >
        //     {letter.split(":")[1]}
        // </button>

    );
};

export default KeyboardKey;