'use client';
import WordRow from "./WordRow";
import Keyboard from "./Keyboard";
import { useAppState } from "@/lib/useAppState";
import TutorialModal from "./TutorialModal";
import Heading from "./Heading";
import Suggestions from "./Suggestions";

interface MasterProps {
    length?: number;
    wordList: string[];
}

export default function Master({ wordList, length = 5 }: MasterProps) {

    const {
        suggestions,
        words,
        handleKeyPress,
        handleStatusChange,
        closeTutorial,
        tutorialOpen,
        openTutorial,
        indexToAnimate } = useAppState(wordList, length);

    return (
        <div className="flex justify-start pb-3 pt-7 gap-5 items-center flex-col h-dvh">
            <TutorialModal closeTutorial={closeTutorial} openTutorial={openTutorial} tutorialOpen={tutorialOpen} />
            <Heading />
            <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar">
                {words.map((word, index) => (
                    <WordRow 
                    word={word} 
                    handleStatusChange={handleStatusChange} 
                    rowNumber={index} 
                    indexToAnimate={indexToAnimate - 1}
                    length={length}
                    key = {index}  />
                ))}
            </div>

            {/* <Divider /> */}
            <Suggestions suggestions={suggestions} wordListLength={wordList.length} />
            
            <Keyboard onClickHandler={handleKeyPress} />
        </div>
    );
}