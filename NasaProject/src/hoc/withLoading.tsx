export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({ isLoading, ...props }: { isLoading: boolean } & P) => {
    if (isLoading) return <div>Loading...</div>;

    return <WrappedComponent {...(props as P)} />;
  };
};
