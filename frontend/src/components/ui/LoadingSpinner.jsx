const LoadingSpinner = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Container for the spinner to give it more presence */}
      <div className="relative flex items-center justify-center">
        {/* The Outer Spinning Ring */}
        <div className="h-10 w-10 border-4 border-green-100 border-t-emerald-500 rounded-full animate-spin"></div>
        
        {/* The Inner Static Pulse (Signature Gradient) */}
        <div className="absolute h-4 w-4 bg-linear-to-br from-green-500 to-teal-600 rounded-full animate-pulse shadow-sm shadow-green-200"></div>
      </div>

      {/* Themed Text */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold bg-linear-to-r from-green-600 to-teal-700 bg-clip-text text-transparent animate-pulse">
          {text}
        </span>
        
        {/* Animated Dots */}
        <span className="flex gap-1">
          <span className="w-1 h-1 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1 h-1 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1 h-1 bg-teal-500 rounded-full animate-bounce"></span>
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;