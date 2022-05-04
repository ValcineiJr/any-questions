import { InputHTMLAttributes, useState, useRef } from 'react';

import ProfileSVG from '@assets/icons/profile.svg';
import LockSVG from '@assets/icons/lock.svg';

import { InputItem, InputContainer } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input({ placeholder, value, type, ...rest }: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  return (
    <InputContainer isFocus={isFocus} value={value}>
      <div className="icon-container">
        {type === 'password' && <LockSVG />}
        {type === 'text' && <ProfileSVG />}
      </div>
      <p className="placeholder" onClick={() => inputRef.current.focus()}>
        {placeholder}
      </p>
      <InputItem
        {...rest}
        ref={inputRef}
        isFocus={isFocus}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        type={type}
      />
    </InputContainer>
  );
}
