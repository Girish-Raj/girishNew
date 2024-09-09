import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { api } from "../Utils/fetch";

function QuickQuiz() {

  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="inline-block align-baseline h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <div className="mx-4 font-bold">Redirecting to Quiz</div>
    </div>
  );
}

export default QuickQuiz;
