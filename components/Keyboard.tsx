import React from 'react';
import KeyboardKey from './KeyboardKey';
import { keyboard, LetterState } from '@/lib/constants';

interface KeyboardProps {
    letters: { [key: string]: LetterState };
    onClickHandler?: (letter: string) => void;
    onLongPressHandler?: (letter: string) => void;
}

const Keyboard = ({ letters, onClickHandler, onLongPressHandler }: KeyboardProps) => {
    return (
        <div className="flex flex-col mt-auto">
            {keyboard.map(row =>
                <div key={row} className="flex justify-center">
                    {row.split(",").map((key) => {
                        return <KeyboardKey
                            key={key}
                            letter={letters[key.toUpperCase()] ? letters[key.toUpperCase()] : key}
                            onClickHandler={onClickHandler}
                            onLongPressHandler={onLongPressHandler}
                        />;
                    })}
                </div>
            )}
        </div>
    )
}

export default Keyboard;