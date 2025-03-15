'use client';

import { RenderLimit } from "@/lib/constants";
import WordRow from "./WordRow";
import Keyboard from "./Keyboard";
import { useAppState } from "@/lib/useAppState";
import TutorialModal from "./TutorialModal";
import Heading from "./Heading";

interface MasterProps {
    length?: number;
    wordList: string[];
}

export default function Master({ wordList, length = 5 }: MasterProps) {

    const { guesses,
        handleKeyPress,
        handleStatusChange,
        letters,
        wordState,
        handleLongKeyPress,
        closeTutorial,
        tutorialOpen,
        openTutorial } = useAppState(wordList, length);

    return (
        <div className="flex justify-start pb-3 pt-7 gap-5 items-center flex-col h-dvh">
            <TutorialModal closeTutorial={closeTutorial} openTutorial={openTutorial} tutorialOpen={tutorialOpen} />
            <Heading/>
            <WordRow word={wordState} handleStatusChange={handleStatusChange} />
            {/* <Divider /> */}

            {!guesses.length ?
                <h5 className="text-1xl text-slate-200 italic text-center">No word exists?</h5>
                :
                guesses.length <= RenderLimit ?
                    <>
                        <div className="flex flex-col gap-2 max-h-[40vh] overflow-y-auto no-scrollbar">
                            {guesses.map((guess, index) => (
                                <WordRow key={index} word={guess} disabled />
                            ))}
                        </div>

                        <h5 className="text-1xl text-slate-200 italic text-center">{guesses.length} guesses (scroll if needed)</h5>
                    </>
                    :
                    <h5 className="text-1xl text-slate-200 italic text-center">Too many guesses to show ({guesses.length}), try narrowing it down.</h5>
            }
            <Keyboard onClickHandler={handleKeyPress} onLongPressHandler={handleLongKeyPress} letters={letters} />
        </div>
    );
}