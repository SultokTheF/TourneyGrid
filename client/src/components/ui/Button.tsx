import React, { ReactNode } from "react";

import '../../assets/styles/ui/Button.css';

interface ButtonBody {
  body: string;
}

const Button: React.FC<ButtonBody> = ( { body } ) => {
  return (
    <>
      <div className="button">
        { body }
      </div>
    </>
  );
}

export default Button;