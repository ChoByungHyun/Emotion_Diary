import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";
import MyButton from "../components/MyButton";
import Myheader from "./../components/MyHeader";
import { useEffect } from "react";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);
  return (
    <div>
      <DiaryEditor />
    </div>
  );
};
export default New;
