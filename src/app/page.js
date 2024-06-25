import Image from "next/image";
import CountdownTimer from "./pages/Countdowntimer";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center ">
       <header className="h-20 bg-[#3AA6B9] text-white  w-full flex items-center justify-center font-bold max-md:text-2xl  text-5xl">
          Countdown timer
       </header>
      <CountdownTimer/>
    </main>
  );
}
