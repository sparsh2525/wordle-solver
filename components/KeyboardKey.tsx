import { ButtonMapping, ColourMapping } from '@/lib/constants';
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
                ${isActionKey ? 'bg-slate-400 px-3' : `${ColourMapping['black']} ${demo ? 'w-4' : 'w-[30px]'} text-slate-200`}
                ${demo ? 'h-6 text-xs' : 'h-12'}
                `}
            unselectable='on'
        onClick={() => onClickHandler && onClickHandler(keyCode)}
        >
            {isActionKey ? ButtonMapping[keyCode.split(":")[1]] ?? keyCode.split(":")[1] : keyCode}
        </button>

    );
};

export default KeyboardKey;