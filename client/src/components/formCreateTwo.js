import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormTwo() {
  const [answer, setAnswer] = useState("");

  return (
    <div>
      Are you pregnant?
      <input
        checked={answer === "yes"}
        value="yes"
        type="radio"
        onChange={e => setAnswer(e.target.value)}
      />{" "}
      Yes
      <input
        checked={answer === "no"}
        value="no"
        type="radio"
        onChange={e => setAnswer(e.target.value)}
      />{" "}
      No
      <div>
        {answer === "yes" ? (
          <div>
            How far along are you?
            <input
              checked={answer === "yes"}
              value=""
              preview="test"
              type="text"
              onChange={e => setAnswer(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
