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
    ? `bg-yellow-bright text-gray-900 border-yellow-300 hover:bg-yellow-dark hover:text-white`
    : `bg-white text-yellow-dark-900 border-gray-300 hover:bg-gray-900 hover:text-yellow-bright`;

  return (
    <button onClick={onClick} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
