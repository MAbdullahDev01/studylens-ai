const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;