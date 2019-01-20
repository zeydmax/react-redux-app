import * as React from "react";
import { IButtonProps } from '../../types/types';

export const Button = (props: IButtonProps) => {
  const { className, type, desc, handleClick } = props;

  return (
    <button className={className} type={type} onClick={handleClick}>
      {desc}
    </button>
  );
};
