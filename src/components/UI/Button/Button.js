// import styled from 'styled-components';

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: ${props=>(props.isValid ? "#FF7276" : "#ac0e77")};
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   width: 100%;

//   @media(min-width : 768px) {
//     width : auto;
//   }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `;

import styles from './Button.module.css';

const Button = (props) => {
  let valid = props.isValid;
  return (
    <button
      type={props.type}
      className={`${styles.button} ${valid && styles.invalid}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;