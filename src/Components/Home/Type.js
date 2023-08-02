import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "“Haz de tu cuidado personal una prioridad”",
          "“Deja que tu piel hable por tí”",
          "“Que la belleza sea consecuencia de tu salud”",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
