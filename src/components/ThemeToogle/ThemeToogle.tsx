import { useState, useEffect } from "react";
import { CiSun } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {darkMode ? (
        <CiSun
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() => setDarkMode(false)}
        />
      ) : (
        <PiMoonLight
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() => setDarkMode(true)}
        />
      )}
    </>
  );
}
