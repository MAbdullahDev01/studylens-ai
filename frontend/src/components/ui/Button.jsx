const Button = ({
  children,
  type = "button",
  loading = false,
  disabled = false,
  className = "",
  icon,
  ...props
}) => {
  // Check if the user is passing a custom background or gradient in the className prop
  const hasCustomBg = className.includes("from-") || className.includes("bg-");

  // Default "Emerald Study" styles
  const defaultStyles = "bg-linear-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:ring-green-500";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        ${hasCustomBg ? "" : defaultStyles} 
        text-white font-semibold 
        px-4 sm:px-6 py-2 sm:py-2.5 
        text-sm sm:text-base rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        transition duration-200 shadow-lg hover:shadow-xl 
        active:transform active:scale-[0.98] 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {loading ? (
          "Loading..."
        ) : (
          <>
            {icon && (
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {icon}
              </svg>
            )}
            {children}
          </>
        )}
      </span>
    </button>
  );
};

export default Button;