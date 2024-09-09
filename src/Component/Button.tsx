import React, { ReactNode } from "react";
import { JsxElement } from "typescript";

type Props = {
  className?: string;
  onClick?: Function;
  disabled?: boolean;
  waiting?: boolean;
  children: ReactNode;
};

function Button({
  className,
  onClick,
  disabled = false,
  waiting = false,
  children,
}: Props) {
  return (
    <button
      disabled={disabled || waiting}
      className={`${
        className || "btn py-2 px-4"
      } bg-sky-800 hover:bg-sky-900 text-white rounded`}
      onClick={() => onClick && onClick()}
    >
      {children}
      {waiting ? (
        <>
          <div className="inline-block mx-2 h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
        </>
      ) : (
        <></>
      )}
    </button>
  );
}

export default Button;
