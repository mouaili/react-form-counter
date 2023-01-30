import { memo } from 'react';
import style from '../css/Button.module.css';

function Button(props, { type = 'submit', onClick }) {
  return (
    <button className={`${style.button}`} onClick={onClick} type={type}>
      {props.children}
    </button>
  );
}

export default memo(Button);
