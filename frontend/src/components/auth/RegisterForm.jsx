import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/auth";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card"; // Imported the Card component

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Icon paths for the Input component
  const userIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  );
  const emailIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  );
  const lockIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  );
  const checkIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    const { data, error: signUpError } = await signUp(email, password);

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      setLoading(false);
      alert("Registration successful! Please login.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Create your account</h1>
            <p className="text-sm sm:text-base text-gray-600">Join StudyLens and start learning today</p>
          </div>

          <Card>
            {error && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-xs sm:text-sm text-red-700 flex-1">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <Input
                id="name"
                label="Full name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                icon={userIcon}
                required
              />

              <Input
                id="email"
                label="Email address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={emailIcon}
                required
              />

              <div>
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={lockIcon}
                  required
                />
                <p className="mt-1 text-[10px] sm:text-xs text-gray-500">Must be at least 6 characters</p>
              </div>

              <Input
                id="confirmPassword"
                label="Confirm password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={checkIcon}
                required
              />

              <Button
                type="submit"
                loading={loading}
                className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:ring-blue-500"
              >
                {loading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <div className="mt-5 sm:mt-6 text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition duration-150">
                  Sign in
                </a>
              </p>
            </div>
          </Card>

          {/* Footer */}
          <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 px-2">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-gray-700 hover:text-gray-900 underline">Terms</a>
            {" "}and{" "}
            <a href="#" className="text-gray-700 hover:text-gray-900 underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;