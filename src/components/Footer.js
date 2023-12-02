import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer({ loading, data }) {
  // We dont want do display anything on the first mount
  if (!loading && !data) return null;
  return (
    <div className="font-mono m-4 p-4 shadow-md text-center text-sm md:text-lg">
      <div>Now You Know Thy Weather</div>
      <div>
        Copyright <CopyrightIcon fontSize="small" color="success" /> devmwas
        2023
      </div>
    </div>
  );
}

export default Footer;
