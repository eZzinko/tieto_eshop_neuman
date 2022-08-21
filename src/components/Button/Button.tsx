import React, { FunctionComponent, PropsWithChildren } from "react";
import { isDefined } from "../../helpers/common";
import { ButtonProps } from "./Button.types";

/**
 * Button component
 * @return JSX.Element
 */
const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  variant,
  size = "normal",
  icon,
  iconPosition = "start",
  link,
  disabled,
  children,
  ...props
}) => {
  const buttonStyles = `w-full max-w-full text-center font-bold transition flex text-white items-center justify-center hover:no-underline truncate
  
  // disable state
  ${disabled && "opacity-50 cursor-not-allowed"}
  
  // button sizes
  ${size === "normal" && "px-[0.6rem] py-[0.4rem] rounded-md text-sm"}
  ${size === "large" && "px-5 py-3 rounded-lg"}
  
  //  button variants
  ${
    variant === "primary" &&
    "bg-sky-500 hover:bg-sky-600 hover:focus:ring-sky-500 focus:ring-sky-500"
  }
  ${
    variant === "secondary" &&
    "bg-green-500 hover:bg-green-600 hover:focus:ring-green-500 focus:ring-green-500"
  }
  ${
    variant === "danger" &&
    "bg-rose-500 hover:bg-rose-600 hover:focus:ring-rose-500 focus:ring-rose-500"
  }
  ${
    variant === "ghost" &&
    "font-normal bg-transparent hover:bg-neutral-300/90 text-neutral-500 focus:ring-neutral-300/10"
  }
  ${props.className}`;

  const contentNode = (
    <React.Fragment>
      {isDefined(icon) && iconPosition === "start" && (
        <div className={`${isDefined(children) ? "mr-2" : ""}`}>{icon}</div>
      )}
      {isDefined(children) && <span className="truncate">{children}</span>}
      {isDefined(icon) && iconPosition === "end" && (
        <div className={`${isDefined(children) ? "ml-2" : ""}`}>{icon}</div>
      )}
    </React.Fragment>
  );

  const buttonNode = (
    <button
      {...props}
      type="button"
      className={buttonStyles}
      disabled={disabled}
    >
      {contentNode}
    </button>
  );

  return buttonNode;
};

/**
 * Button component default export
 * @default
 */
export default Button;
