import { ReactChild } from 'react';
import './styles.css';

type Variant = 'primary' | 'secondary' | 'dark';

export type ButtonProps = {
  children: ReactChild;
  variant?: 'primary' | 'secondary' | 'dark';
  onClick?: () => void;
}

function Button({
  children,
  variant = 'primary',
  onClick = () => { },
}: ButtonProps) {
  return (
    <button type="button" className={`${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
