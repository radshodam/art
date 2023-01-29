import { setTheme } from "lib/store/themeSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TestChangeTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleThemeChange = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };
  console.log("theme", theme);
  return (
 
    <div>
       <p>{theme}</p>
      <button onClick={handleThemeChange}>Change Theme</button>
    </div>
  );
}

export default TestChangeTheme;
