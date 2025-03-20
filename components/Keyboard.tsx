import React from 'react';
import KeyboardKey from './KeyboardKey';
import { keyboard } from '@/lib/constants';

interface KeyboardProps {
    onClickHandler?: (letter: string) => void;
}

const Keyboard = ({ onClickHandler }: KeyboardProps) => {
    return (
        <div className="flex flex-col mt-auto">
            {keyboard.map(row =>
                <div key={row} className="flex justify-center">
                    {row.split(",").map((key) => {
                        return <KeyboardKey
                            key={key}
                            keyCode={key.toUpperCase()}
                            onClickHandler={onClickHandler}
                        />;
                    })}
                </div>
            )}
        </div>
    )
}

export default Keyboard;