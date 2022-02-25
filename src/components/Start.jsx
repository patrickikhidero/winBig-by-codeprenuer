import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
    <h1>Do you want to be a Millionaire?</h1><br/>
      <input
        className="startInput"
        placeholder="Then enter your name"
        ref={inputRef}
      /><br/>
      <button className="startButton" onClick={handleClick}>
        Start
      </button><br />
      
      <p>with <img src="https://img.icons8.com/color/48/000000/like--v3.png" alt="heart-icon"/> by codepreneur</p>
    </div>
  );
}
