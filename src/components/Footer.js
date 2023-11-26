import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer({ loading, data }) {
  // We dont want do display anything on the first mount
  if (!loading && !data) return null;
  return (
    <div className="font-mono my-4 shadow-md mx-4 text-center text-lg">
      <div>Now You Know Thy Weather</div>
      <div>
        Copyright <CopyrightIcon fontSize="small" /> devmwas 2023
      </div>
    </div>
  );
}

export default Footer;
