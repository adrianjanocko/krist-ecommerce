import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type FallbackBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
};

export default function FallbackBoundary({
  children,
  fallback = <GridSkeleton />,
  errorFallback = <p>Failed to retrieve data.</p>,
}: FallbackBoundaryProps) {
  return (
    <Suspense fallback={fallback}>
      <ErrorBoundary fallback={errorFallback}>{children}</ErrorBoundary>
    </Suspense>
  );
}

function GridSkeleton() {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}
