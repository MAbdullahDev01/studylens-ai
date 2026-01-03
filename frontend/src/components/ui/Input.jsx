const Input = ({ 
  label, 
  id, 
  icon, 
  className = "", 
  type = "text", 
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="text-xs sm:text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {/* Icon container - only renders if icon prop is provided */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {icon}
            </svg>
          </div>
        )}
        
        <input
          id={id}
          type={type}
          className={`
            block w-full border border-gray-300 rounded-lg
            p-2.5 sm:p-3 text-sm sm:text-base
            placeholder-gray-400 text-gray-900
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:opacity-50 disabled:bg-gray-50
            transition duration-150
            ${icon ? "pl-9 sm:pl-10" : "pl-3"} 
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;