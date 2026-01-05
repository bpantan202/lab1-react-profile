// src/App.jsx
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>My Team Portfolio</h1>

      {/* ลองส่ง Props ข้อมูลของตัวเองลงไป */}
      <ProfileCard
        name="Pannavich Tanyavichitkul"
        role="Student @ CEDT"
        bio="มีด"
      />

      {/* ลองเรียกใช้ซ้ำอีกครั้งด้วยข้อมูลที่ต่างออกไป */}
      <ProfileCard
        name="John Doe"
        role="Guest Developer"
        bio="I love coding and learning new things."
      />
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App