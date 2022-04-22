import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import './styles.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ error = null, ...props }, ref) => {
  return (
    <div className="input">
      <input 
        className={`${error && 'error'}`} 
        {...props}
        ref={ref} 
      />
      {error &&
        <span>{error.message}</span>
      }
    </div>
  );
}

export const Input = forwardRef(InputBase);