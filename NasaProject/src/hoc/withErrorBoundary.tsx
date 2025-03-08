import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@components/index";

export const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
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
