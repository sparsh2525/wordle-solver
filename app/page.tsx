import Master from "@/components/Master";
import { WordLength, WordsURL } from "@/lib/constants";


export default async function Home() {
  const res = await fetch(WordsURL);
  const wordObj = await res.json() as {words: string[]};
  console.log(wordObj);
  return (
    <div className="bg-neutral-950 w-screen h-dvh">
      <Master length={WordLength} wordList= {wordObj.words}/>
    </div>
  );
}
