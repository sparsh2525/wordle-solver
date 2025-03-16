import { useEffect, useState } from "react";
import { initState, LetterState, status } from "./constants";
import { parsingFn, range } from "./utils";

export const useAppState = (wordList: string[], length = 5) => {
  const [letters, setLetters] = useState<{ [key: string]: LetterState }>(initState);
  const [word, setWord] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<LetterState[][]>([]);
  const [tutorialOpen, setTutorialOpen] = useState(true);

  useEffect(() => {
    createGuesses();
  }, [letters, word]);

  const handleKeyPress = (key: string) => {
    if (key.split(":")[0] === "BUTTON") {
      switch (key.split(":")[1]) {
        case "RESET":
          setLetters(initState);
          setWord([]);
          break;
        case "BACK":
          word[word.length - 1] && setLetterState(word[word.length - 1], "black");
          setWord(word.slice(0, word.length - 1));
          break;
      }
      navigator.vibrate?.(100);
    } else if (word.length < length) {
      setWord([...word, key]);
    }
  };

  const handleLongKeyPress = (key: string) => {
    if (!letters[key]) return;
    navigator.vibrate?.(100);
    setLetterState(key, letters[key].status === "grey" ? "black" : "grey");
  };

  const wordState = range(0, 5).map((i) => {
    return word[i] && letters[word[i]]
      ? letters[word[i]]
      : { value: "", status: "black" };
  }) as LetterState[];

  const handleStatusChange = (index: number) => {
    if (!word[index]) return;
    navigator.vibrate?.(100);
    const nextStatus =
      status[(status.indexOf(letters[word[index]].status) + 1) % status.length];
    setLetterState(word[index], nextStatus);
  };

  const createGuesses = () => {
    setGuesses([]);
    const newGuesses = wordList.filter((guessWord) =>
      Object.values(letters).every((letter) => {
        const index = word.indexOf(letter.value);
        return parsingFn(guessWord.toUpperCase(), letter, index);
      })
    );
    const finalGuessesArray = newGuesses.map((guessWord) =>
      guessWord
        .toUpperCase()
        .split("")
        .map((letter, i) =>
          letters[letter].status === "green" && word[i] !== letter
            ? ({ value: letter, status: "yellow" } as LetterState)
            : letters[letter]
        )
    );
    setGuesses(finalGuessesArray);
  };

  const setLetterState = (letter: string, status: LetterState["status"]) => {
    setLetters((prev) => ({
      ...prev,
      [letter]: { value: letter, status },
    }));
  };

  const closeTutorial = () => { setTutorialOpen(false)};

  const openTutorial = () => setTutorialOpen(true);

  return {
    letters,
    wordState,
    guesses,
    handleKeyPress,
    handleStatusChange,
    handleLongKeyPress,
    tutorialOpen,
    closeTutorial,
    openTutorial,
  };
};
