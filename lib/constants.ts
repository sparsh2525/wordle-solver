export const WordLength = 5;

export const RenderLimit = 30;

export const WordsURL =
  "https://cheaderthecoder.github.io/5-Letter-words/words.json";

export const status = ["green", "yellow", "grey", "black"] as const;

export const keyboard = [
  "q,w,e,r,t,y,u,i,o,p",
  "a,s,d,f,g,h,j,k,l",
  "BUTTON:RESET,z,x,c,v,b,n,m,BUTTON:BACK",
];

export const initState = keyboard
  .flatMap((row) =>
    row.split(",").map((key) => {
      if (!key.includes("BUTTON"))
        return {
          [key.toUpperCase()]: {
            value: key.toUpperCase(),
            status: "black",
          } as LetterState,
        };
    })
  )
  .filter((key) => key !== undefined)
  .reduce((acc, curr) => ({ ...acc, ...curr }), {});

export interface LetterState {
  value: string;
  status: (typeof status)[number];
}

export const ColourMapping: Record<LetterState["status"], string> = {
  green: "bg-green-700",
  yellow: "bg-yellow-600",
  // grey: "bg-gray-500",
  // black: "bg-slate-700",
  grey: "bg-slate-800",
  black: "bg-gray-600",
};

export const WordleHeading: LetterState[] = [
  { value: "W", status: "green" },
  { value: "O", status: "black" },
  { value: "R", status: "yellow" },
  { value: "D", status: "green" },
  { value: "L", status: "grey" },
  { value: "E", status: "black" },
];

export const TutorialKeys = [{value:'K',status:'black'},{value:'E',status:'black'},{value:'Y',status:'black'},{value:'S',status:'black'}] as LetterState[];

export const ProfileLink = 'https://sparshgupta.vercel.app'

export const GithubLink = 'https://github.com/sparsh2525/wordle-solver'