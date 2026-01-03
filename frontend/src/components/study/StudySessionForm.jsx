import { useState } from "react";

const StudySessionForm = () => {
  const [formData, setFormData] = useState({
    duration: "",
    focusLevel: 3,
    subject: "",
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.duration || Number(formData.duration) <= 0) {
      newErrors.duration = "Duration must be greater than 0";
    }

    if (
      !formData.focusLevel ||
      formData.focusLevel < 1 ||
      formData.focusLevel > 5
    ) {
      newErrors.focusLevel = "Focus level must be between 1 and 5";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const sessionData = {
      subject: formData.subject,
      duration: Number(formData.duration),
      focus_level: formData.focusLevel,
      notes: formData.notes,
      user_id: "placeholder-user-id",
    };

    console.log("Study Session:", sessionData);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Reset form
      setFormData({
        duration: "",
        focusLevel: 3,
        subject: "",
        notes: ""
      });
      setErrors({}); // Clear errors after successful submission
      alert("Study session logged successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Log Study Session</h1>
          <p className="text-sm sm:text-base text-gray-600">Track your study habits to get smarter insights</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
          {/* Only show error box if there are actual errors */}
          {Object.keys(errors).length > 0 && Object.values(errors).some(error => error !== "") && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div className="text-xs sm:text-sm text-red-700 flex-1">
                {Object.values(errors).filter(error => error !== "").map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g., Mathematics, History, Programming"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base border ${errors.subject ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 text-gray-900 placeholder-gray-400`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>

            {/* Duration Input */}
            <div>
              <label htmlFor="duration" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Duration (minutes) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  id="duration"
                  name="duration"
                  type="number"
                  placeholder="e.g., 30, 60, 120"
                  value={formData.duration}
                  onChange={handleChange}
                  min="1"
                  step="1"
                  onKeyDown={(e) => {
                    // Prevent typing 'e', 'E', '+', '-', '.'
                    if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-' || e.key === '.') {
                      e.preventDefault();
                    }
                  }}
                  className={`block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base border ${errors.duration ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 text-gray-900 placeholder-gray-400`}
                />
                {errors.duration && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.duration}
                  </p>
                )}
              </div>
            </div>

            {/* Focus Level Input */}
            <div>
              <label htmlFor="focusLevel" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Focus Level: <span className="font-semibold text-blue-600">{formData.focusLevel}/5</span>
              </label>
              <div className="relative pt-1">
                <input
                  id="focusLevel"
                  name="focusLevel"
                  type="range"
                  min="1"
                  max="5"
                  value={formData.focusLevel}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                {errors.focusLevel && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.focusLevel}
                  </p>
                )}
                <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
            </div>

            {/* Notes Input */}
            <div>
              <label htmlFor="notes" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Notes (Optional)
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Add any notes about this study session..."
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2.5 sm:py-3 px-4 text-sm sm:text-base rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 shadow-lg hover:shadow-xl active:transform active:scale-[0.98] sm:hover:-translate-y-0.5"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging session...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Log Study Session
                </span>
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <div className="flex gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-xs sm:text-sm text-blue-700">
                Consistent logging helps us provide better insights into your study patterns and productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySessionForm;