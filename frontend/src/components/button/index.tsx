import { tw } from 'twind';
import {MouseEventHandler} from "react";

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  onClick?: MouseEventHandler;
}

const Button = ({ primary, modifier, children, onClick, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button onClick={onClick} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
