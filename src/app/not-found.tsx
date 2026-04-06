import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <h1 className="text-8xl font-bold tracking-tight text-ink">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-ink/85 mb-5">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-sm  text-ink/85">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-button bg-ink px-6 py-2.5 text-sm font-medium text-surface transition-opacity hover:opacity-90"
      >
        Return Home
      </Link>
    </div>
  );
}
