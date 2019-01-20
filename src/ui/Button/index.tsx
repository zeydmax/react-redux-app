import * as React from "react";

export const Button = (props: any) => {
  const { className, type, desc, handleClick } = props;

  return (
    <button className={className} type={type} onClick={handleClick}>
      {desc}
    </button>
  );
};
