interface WithLoadingProps {
  isLoading: boolean;
  LoadingComponent?: React.ComponentType;
}

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({ isLoading, LoadingComponent, ...props }: WithLoadingProps & P) => {
    if (isLoading)
      return LoadingComponent ? <LoadingComponent /> : <div>Loading...</div>;

    return <WrappedComponent {...(props as P)} />;
  };
};
