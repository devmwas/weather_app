import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer({ loading, data }) {
  // We dont want do display anything on the first mount
  if (!loading && !data) return null;
  return (
    <div className="font-mono m-4 py-2 space-y-2 shadow-md text-center text-sm md:text-lg bg-blue-400">
      <div className="text-xs">Now you know thy weather!</div>
      <div>
        Copyright <CopyrightIcon fontSize="small" /> Devmwas 2023
      </div>
    </div>
  );
}

export default Footer;
