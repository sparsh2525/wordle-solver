import { ColourMapping } from '@/lib/constants';
import React from 'react';

interface KeyboardKeyProps {
    keyCode: string;
    onClickHandler?: (letter: string) => void;
    demo?: boolean;
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({ keyCode, onClickHandler, demo = false }) => {

    const isActionKey = keyCode.includes(':');

    return (
        <button
            className={`m-[3px] rounded select-none-all active:brightness-150 transition-all
                ${isActionKey ? 'bg-slate-400 px-1' : ColourMapping['black'] + ` ${demo ? 'w-4' : 'w-[30px]'} text-slate-200`}
                ${demo ? 'h-6 text-sm' : 'h-12'}
                `}
            unselectable='on'
        onClick={() => onClickHandler && onClickHandler(keyCode)}
        >
            {isActionKey ? keyCode.split(":")[1] : keyCode}
        </button>

    );
};

export default KeyboardKey;