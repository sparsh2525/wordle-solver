import { CloseIcon, HelpIcon, SwitchIcon } from "@/icons/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Heading from "./Heading";
import KeyboardKey from "./KeyboardKey";
import { GithubLink, ProfileLink, status, TutorialKeys } from "@/lib/constants";
import StatusButton from "./StatusButton";
import LetterBox from "./LetterBox";

const TutorialModal = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <Backdrop close={handleClose}>
            <Dialog close={handleClose}>
                <Heading />
                <div className="flex flex-col gap-3">
                    <h4 className="text-2xl font-bold">How To Use?</h4>
                    <p>
                        This app helps you solve Wordle puzzles by suggesting possible words based on your inputs.
                    </p>
                    <ol className="list-disc list-outside pl-4">
                        <li>
                            Use the keyboard {'KEYS'.split('').map((key, i) => <KeyboardKey demo keyCode={key} key={i} />)} to type in your guessed word.
                        </li>
                        {/* <li>
                            Long tap a key <KeyboardKey demo keyCode='W' /> to change status into <KeyboardKey demo keyCode='W' /> if the word doesn&apos;t contain the letter.
                        </li> */}
                        <li>
                            Tap a box 
                            <div className="inline-flex gap-2 items-center px-1">
                                <LetterBox index={0} letter={{ value: 'W', status: 'black' }} demo disabled />
                            </div>
                             to change the status of a letter.
                        </li>
                        <li>
                            Status switch
                            <div className="inline-flex gap-2 items-center px-1">
                                {status.map((status, i) => <LetterBox index={0} letter={{ value: 'W', status }} key={i} demo disabled />)}
                            </div>
                            with each status having same significance as in the original game.
                        </li>
                        <li>Changes to the word typed and letter status will create new possible guesses.</li>
                    </ol>
                    <p className="text-xl">Good luck and have fun!</p>
                </div>
                <div className="self-center italic text-sm text-neutral-400">
                    Created by <a target="_blank" href={ProfileLink} className="underline underline-offset-2 hover:text-slate-300">Sparsh Gupta</a> &bull; <a target="_blank" href={GithubLink} className="underline underline-offset-2 hover:text-slate-300">Code on GitHub</a>
                </div>
            </Dialog>
        </Backdrop>
    );
};

const Backdrop = ({ children, close }: { children: React.ReactNode, close: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute top-0 left-0 w-full h-full bg-opacity-90 flex justify-center items-center bg-black"
            onClick={close}>
            {children}
        </motion.div>
    );
}

const Dialog = ({ children, close }: { children: React.ReactNode, close: () => void }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-800 relative p-7 pb-3 rounded-xl flex flex-col gap-5 h-fit w-[_clamp(370px,55vw,600px)] text-slate-200 border-2 border-slate-500">
            <div
                className="absolute top-1.5 right-1 p-2 cursor-pointer"
                onClick={close}
            >
                <CloseIcon />
            </div>
            {children}
        </motion.div>
    );
}

interface TutorialModalWrapperProps {
    openTutorial: () => void;
    closeTutorial: () => void;
    tutorialOpen: boolean;
}

const TutorialModalWrapper = ({ openTutorial, tutorialOpen, closeTutorial }: TutorialModalWrapperProps) => {
    return (
        <>
            <button className="absolute top-3 right-3 bg-black rounded-full" onClick={openTutorial}>
                <HelpIcon />
            </button>
            <AnimatePresence mode="wait">
                {tutorialOpen && <TutorialModal handleClose={closeTutorial} />}
            </AnimatePresence>
        </>)
}

export default TutorialModalWrapper;