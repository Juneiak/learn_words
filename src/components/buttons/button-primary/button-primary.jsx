import React from "react";
import styles from './button-primary.module.css';

function ButtonPrimary({
  buttonText,
  clickHandler,
  buttonIcon=false,
  buttonWidth='max-content',
  buttonHeight='max-content',
}) {
  return (
    <button 
      style={{width: buttonWidth,
      height: buttonHeight}}
      type="button"
      onClick={clickHandler}
      className={`${styles.button} text-button `}
    >
      {buttonIcon && <img src={buttonIcon}></img>}
      <span className={styles.text}>{buttonText}</span>
    </button>
  )
}

export default ButtonPrimary;
