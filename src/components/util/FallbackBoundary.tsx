import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type FallbackBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
};

export default function FallbackBoundary({
  children,
  fallback = <p>Loading...</p>,
  errorFallback = <p>Failed to retrieve data.</p>,
}: FallbackBoundaryProps) {
  return (
    <Suspense fallback={fallback}>
      <ErrorBoundary fallback={errorFallback}>{children}</ErrorBoundary>
    </Suspense>
  );
}
