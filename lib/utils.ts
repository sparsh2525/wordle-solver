import { LetterState } from "./constants";

export const range = (start:number, stop: number, step:number = 1) =>
    Array.from(
      { length: Math.ceil((stop - start) / step) },
      (_, i) => start + i * step,
    );

export const parsingFn = (
    guessWord: string,
    inputLetter: LetterState,
    index: number
  ): boolean => {
    const guessLetter = guessWord[index];
    switch (inputLetter.status) {
      case "black":
        return true;
      case "grey":
        return !guessWord.includes(inputLetter.value);
      case "yellow":
        return guessWord.includes(inputLetter.value) && guessLetter !== inputLetter.value;
      case "green":
        return guessLetter === inputLetter.value;
    }
  };