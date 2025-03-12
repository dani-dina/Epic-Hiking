const Button = ({ title, Child, href, onClick,className }) => {
    return (
      <button className={`${className} cursor-pointer`} onClick={onClick}>
        <Child /> 
        {title} 
      </button>
    );
  };
  
  export default Button;
  