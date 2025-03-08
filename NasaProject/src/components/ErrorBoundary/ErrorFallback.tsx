import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const handleGoBack = () => {
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-100 h-50 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-4">{error?.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-500 text-white w-30 h-10 rounded-lg cursor-pointer"
        >
          Try Again
        </button>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-gray-500 text-white w-30 h-10 rounded-lg cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
