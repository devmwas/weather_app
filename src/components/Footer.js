import React from "react";

function Footer() {
  return (
    <div className="font-mono my-4 shadow-md mx-4 text-center">
      <div>Now You Know Thy Weather</div>
      <div>{String.fromCodePoint(0x00a9)}devmwas</div>
    </div>
  );
}

export default Footer;
