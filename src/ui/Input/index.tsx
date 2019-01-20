import * as React from "react";
import { IInputProps } from '../../types/types';

export const Input = (props: IInputProps) => {
  const { editor, id, value, handleChange } = props;
  return (
    <>
      <label htmlFor={id}>{id.toUpperCase()}</label>
      {editor === "textbox" && (
        <input
          type="text"
          className={id + "Input form-control"}
          id={id}
          value={value}
          onChange={handleChange}
        />
      )}
      {editor === "multiline" && (
        <textarea
          className={{ id } + "Area form-control"}
          id={id}
          rows={3}
          value={value}
          onChange={handleChange}
        />
      )}
    </>
  );
};
