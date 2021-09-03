import React from "react";
import Vid from "../assets/vid.mp4";

const FrontPage: React.FC = () => {
  const preventClick = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div>
      <video onContextMenu={preventClick} autoPlay muted loop>
        <source src={Vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default FrontPage;
