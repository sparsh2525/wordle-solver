import { useEffect, useState } from "react";
import { buildInitState, LetterState, status } from "./constants";
import { parsingFn } from "./utils";

export const useAppState = (wordList: string[], length = 5, guesses = 5) => {
  const [words, setWords] = useState<LetterState[][]>(
    buildInitState(length, guesses)
  );
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [tutorialOpen, setTutorialOpen] = useState(true);

  useEffect(() => {
    createGuesses();
  }, [words]);

  const handleKeyPress = (key: string) => {
    if (key.split(":")[0] === "BUTTON") {
      switch (key.split(":")[1]) {
        case "RESET":
          resetHandler();
          break;
        case "BACK":
          backspaceHandler();
          break;
      }
      navigator.vibrate?.(100);
    } else {
      keyHandler(key);
    }
  };

  const backspaceHandler = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setWordsState({ value: "", status: "black" }, index - 1);
  };

  const resetHandler = () => {
    setIndex(0);
    setWords(buildInitState(length, guesses));
  };

  const keyHandler = (key: string) => {
    if (index === length * guesses) return;
    setIndex(index + 1);
    setWordsState({ value: key, status: "black" }, index);
  };

  // const handleLongKeyPress = (key: string) => {
    // if (!letters[key]) return;
    // navigator.vibrate?.(100);
    // setLetterState(key, letters[key].status === "grey" ? "black" : "grey");
  // };

  const handleStatusChange = (letter: LetterState, i: number, j: number) => {
    if(letter.value === "") return;
    const index = i * length + j;
    const nextStatus =
      status[(status.indexOf(letter.status) + 1) % status.length];
    setWordsState({ ...letter, status: nextStatus }, index);
  };

  const createGuesses = () => {
    const newSuggestions = wordList.filter((guessWord) =>
      words
        .flatMap((a) => a)
        .every((letter, i) => {
          const index = i % length;
          return parsingFn(guessWord.toUpperCase(), letter, index);
        })
    );
    setSuggestions(newSuggestions);
  };

  const setWordsState = (
    { value, status }: LetterState,
    indexToUpdate: number
  ) => {
    const [row, col] = [Math.floor(indexToUpdate / length), indexToUpdate % length];
    const newWords = words.map((word, i) => {
      if (i === row) {
        return word.map((l, j) => {
          if (j === col) {
            return { value, status };
          }
          return l;
        });
      }
      return word;
    });
    setWords(newWords);
  };

  const closeTutorial = () => {
    setTutorialOpen(false);
  };

  const openTutorial = () => setTutorialOpen(true);

  return {
    words,
    suggestions,
    handleKeyPress,
    handleStatusChange,
    tutorialOpen,
    closeTutorial,
    openTutorial,
  };
};
