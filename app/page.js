"use client";
import style from "./modeule.main.css";
import { useState } from "react";

export default function Home() {
  const [rollNumber, setRollNumber] = useState("Yousuf");

  const apple = () => {
    setRollNumber("Nadia");
  };

  const InnerComponent = () => {
    return (
      <main>
        <h1>Inner Component</h1>
         <div>
            
         </div>
      </main>
    );
  };

  return (
    <main>
      <h1>Events, function, and state</h1>
      <p>Current Roll Number: {rollNumber}</p>
      <button onClick={apple}>Click Me</button>
      <InnerComponent />
    </main>
  );
}
