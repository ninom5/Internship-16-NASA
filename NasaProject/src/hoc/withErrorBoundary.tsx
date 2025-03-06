import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components";

export const withErrorBoundary = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const handleError = (error: Error, info: React.ErrorInfo) => {
      console.error("Error: ", error, info);
    };

    return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};
