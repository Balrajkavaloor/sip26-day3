// import Image from "next/image";
// import Link from "next/link";

// export function UserData({name,role,component}) {
//   return (
//     <div>
//      <h3>{name}</h3>
//      <h2>{role}</h2>
//      <h1>{component}</h1>
//     </div>
//   )
// }
// export default function page() {
//   return (
//   <div>
//   < UserData name="Mr.Balu.kavaloor" role="developer" component="Next.js" />
//   <img src="/monkey.png" alt="Monkey Image" width={200} height={200} />
//   <br/>
//   <UserData name="ms.sahana" role="developer" component="React.js" />
//   <img src="/monkey.png" alt="Monkey Image" width={200} height={200} />
//   </div>
//   )
// }


// // export default function page() {
// //   let name = "Mr.Balu.kavaloor";

// //   return (
// //     <div style={{ backgroundColor: "black", fontStyle: "italic", color: "white" }}>
// //       {`hello ${name}`}
// //       <br />

// //       {/* <Image
// //         src="/monkey.png"   // starts with /
// //         alt="Monkey Image"
// //         width={200}
// //         height={200}
// //       /> */}
// //       <h1>Welcome to Next.js 13</h1>
// //       <p>This is a simple page about me </p>
// //       <Link href="https://tse3.mm.bing.net/th/id/OIP.Afq8_E_Klz-tqfmp4D7SogHaE7?pid=Api&P=0&h=180">click on me its image </Link>
// //       <div><Link href="/about">Go to About Page</Link></div>
// //       <Link href="/contanct">Go to Contanct Page</Link>
// //     </div>
// //   );
// // }

// import React from 'react'

// export function UserData({title}) {
//   return (
//     <div>
//      <h3>{title}</h3>
//     </div>
//   )
// }
// export default function page() {
//   return (
//   <div>
//   < UserData title="dashboard" />
//   </div>)
// }

// import React from 'react'

// export function Greeting({name,age}) {
//   return (
//     <div>
//      <h3>{`hello ${name} your age is ${age}`}</h3>
//     </div>
//   )
// }
// export default function page() {
//   return (
//     <div>
//       <Greeting name="John" age="22"/>
//     </div>
//   )
// }

// import React from 'react'
// export function PriceTag({price}) {
//   return (
//     <div>
//      <h3>{`USD ${price}`}</h3>
//     </div>
//   )
// }
// export default function page() {
//   return (
//     <div>
//       <PriceTag price="1000" />
//     </div>
//   )
// }

// export function UserStatus({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <h2>Welcome Back!</h2>;
//   } else {
//     return <h2>Please Login</h2>;
//   }
// }



// export default function page() {
//   return (
//     <div>
//       <UserStatus isLoggedIn={true} />
//       <UserStatus isLoggedIn={false} />
//     </div>
//   );
// }

// export function Button({ label, onClick }) {
//   return (
//     <button onClick={onClick}>
//       {label}
//     </button>
//   );
// }

// export default function page() {

//   function handleClick() {
//     console.log("Button clicked");
//   }

//   return (
//     <div>
//       <Button label="Click Me" onClick={handleClick} />
//     </div>
//   );
// }


// // useState example (count)
// 'use client'
// import {useState} from 'react'

// export default function page() {
//   const [count,setCount] = useState(0)
//     return (
//       <button onClick = {() => setCount(count + 1)}>count is {count}</button>
//   )
// }

//useState example (change text)
// 'use client'
// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [text, setText] = useState("hello world");

//   const changeText = () => {
//     setText("welcome to next.js 13");
//   };

//   return (
//     <div>
//       <button onClick={changeText}>{text}</button>
//     </div>
//   );
// }


// // 
// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [text, setText] = useState("hello world");

//   const changeText = () => {
//     setText("welcome to next.js 13");
//   };

//   return (
//     <div>
//       <button onClick={changeText}>{text}</button>
//     </div>
//   );
// }

// //
// 'use client'
// import {useState} from 'react'

// export default function page() {
//   const [text,setText] = useState("hello world")
//   return (
//     <div>page</div>
//   )
// }


// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h2>Hello, {name}</h2>
//     </div>
//   );
// }

// example of useState with count
// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Click Me
//       </button>

//       <h2>Clicked: {count} times</h2>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide Message" : "Show Message"}
//       </button>

//       {show && <h2>Welcome Participants!</h2>}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [color, setColor] = useState("red");

//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <button onClick={() => setColor(color === "red" ? "yellow" : "red")}>
//         Change Color
//       </button>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [likes, setLikes] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setLikes(likes + 1)}>
//         ❤️ Like
//       </button>

//       <h2>Likes: {likes}</h2>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <textarea
//         placeholder="Type something..."
//         onChange={(e) => setText(e.target.value)}
//       />

//       <h2>Characters: {text.length}</h2>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [age, setAge] = useState("");

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Enter age"
//         onChange={(e) => setAge(e.target.value)}
//       />

//       {age !== "" && (
//         <h2>{age >= 18 ? "Adult" : "Minor"}</h2>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <input
//         type={show ? "text" : "password"}
//         placeholder="Enter password"
//       />

//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide" : "Show"}
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOn(!isOn)}>
//         {isOn ? "Turn OFF" : "Turn ON"}
//       </button>

//       <h2>Status: {isOn ? "ON" : "OFF"}</h2>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//         <br/>
//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>
// <br/>
//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (task !== "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((t, index) => (
//           <li key={index}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [quantity, setQuantity] = useState(0);

//   return (
//     <div>
//       <h2>Product: Mobile Phone</h2>
 
//       <button onClick={() => setQuantity(quantity + 1)}>
//         +
//       </button>

//       <h3>Quantity: {quantity}</h3>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [cart, setCart] = useState([
//     {
//       id: 1,
//       name: "Apple iPhone 15 (128 GB)",
//       price: 59999,
//       qty: 1,
//       image:
//         "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
//     },
//     {
//       id: 2,
//       name: "Apple AirPods (2nd Generation)",
//       price: 12999,
//       qty: 1,
//       image:
//         "https://m.media-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg",
//     },
//   ]);

//   const increaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id && item.qty > 1
//           ? { ...item, qty: item.qty - 1 }
//           : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const subtotal = cart.reduce(
//     (total, item) => total + item.price * item.qty,
//     0
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//         {/* LEFT – CART ITEMS */}
//         <div className="md:col-span-2 bg-black p-6 rounded shadow">
//           <h1 className="text-2xl font-semibold border-b pb-4">
//             Shopping Cart
//           </h1>

//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex gap-4 py-6 border-b last:border-b-0"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-28 object-contain"
//               />

//               <div className="flex-1">
//                 <h2 className="font-medium text-lg">{item.name}</h2>
//                 <p className="text-green-600 text-sm">In Stock</p>

//                 {/* Quantity */}
//                 <div className="flex items-center gap-3 mt-3">
//                   <button
//                     onClick={() => decreaseQty(item.id)}
//                     className="border px-3 rounded"
//                   >
//                     −
//                   </button>

//                   <span className="font-semibold">{item.qty}</span>

//                   <button
//                     onClick={() => increaseQty(item.id)}
//                     className="border px-3 rounded"
//                   >
//                     +
//                   </button>

//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-blue-600 text-sm ml-4 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>

//               <div className="font-semibold">
//                 ₹{item.price}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT – SUMMARY */}
//         <div className="bg-black p-6 rounded shadow h-fit">
//           <h2 className="text-lg font-semibold mb-4">
//             Order Summary
//           </h2>

//           <p className="mb-4 text-lg">
//             Subtotal ({cart.length} items):{" "}
//             <span className="font-bold">₹{subtotal}</span>
//           </p>

//           <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold">
//             Proceed to Buy
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";

const FOCUS_TIME = 25 * 60;

export default function Page() {
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [running, setRunning] = useState(false);
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [sessions, setSessions] = useState([]);
  const [dark, setDark] = useState(false);
  const [streak, setStreak] = useState(0);

  /* TIMER */
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setTimeLeft(v => v - 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  /* END SOUND */
  useEffect(() => {
    if (timeLeft === 0) {
      setRunning(false);
      setTimeLeft(FOCUS_TIME);
      new Audio("/bell.mp3").play();
    }
  }, [timeLeft]);

  /* STORAGE */
  useEffect(() => {
    setSessions(JSON.parse(localStorage.getItem("sessions")) || []);
    setStreak(JSON.parse(localStorage.getItem("streak")) || 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
    localStorage.setItem("streak", JSON.stringify(streak));
  }, [sessions, streak]);

  const saveSession = () => {
    if (!before || !after) return;
    setSessions([...sessions, {
      date: new Date().toLocaleDateString(),
      after
    }]);
    setStreak(s => s + 1);
    setBefore(""); setAfter("");
  };

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-gray-100"} min-h-screen flex justify-center`}>
      
      {/* PHONE FRAME */}
      <div className="w-[375px] bg-white dark:bg-gray-900 min-h-screen flex flex-col">

        {/* HEADER */}
        <div className="p-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Focus & Mood</h1>
          <button onClick={() => setDark(!dark)}>
            {dark ? "🌙" : "☀️"}
          </button>
        </div>

        {/* TIMER */}
        <div className="flex flex-col items-center mt-6">
          <div className="text-5xl font-mono mb-4">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
          </div>

          <button
            onClick={() => setRunning(!running)}
            className="bg-blue-500 text-white px-10 py-3 rounded-full text-lg"
          >
            {running ? "Stop" : "Start"}
          </button>
        </div>

        {/* MOOD INPUT */}
        <div className="p-4 mt-6">
          <Mood title="Mood Before" value={before} set={setBefore} />
          <Mood title="Mood After" value={after} set={setAfter} />

          <button
            onClick={saveSession}
            className="w-full bg-green-500 text-white py-3 rounded-xl mt-3"
          >
            Save Session
          </button>

          <p className="text-center mt-3 font-semibold">
            🔥 Streak: {streak}
          </p>
        </div>

        {/* MOOD CHART */}
        <div className="p-4">
          <h2 className="font-semibold mb-2">Mood Trend</h2>
          <div className="flex gap-2">
            {sessions.map((s, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full ${
                  s.after === "😊" ? "bg-green-400"
                  : s.after === "😐" ? "bg-yellow-400"
                  : "bg-red-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="mt-auto border-t flex justify-around py-3 text-sm">
          <span className="font-semibold">⏱ Focus</span>
          <span>📊 Stats</span>
          <span>⚙️ Settings</span>
        </div>

      </div>
    </div>
  );
}

/* MOOD PICKER */
function Mood({ title, value, set }) {
  return (
    <div className="mb-3">
      <p className="font-semibold mb-1">{title}</p>
      <div className="flex justify-around">
        {["😊", "😐", "😔"].map(m => (
          <button
            key={m}
            onClick={() => set(m)}
            className={`text-3xl ${value === m && "ring-2 ring-blue-400 rounded-full"}`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}