import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col gap-6">
        <h1 className="font-redaction-35 font-bold uppercase text-6xl sm:text-[10rem] leading-30 tracking-widest text-red-CoralRed">
          404
        </h1>
        <p className="font-lexend text-lg max-w-md">
          Yieks, how the hell did you end up here?
          <br />
          Sorry, but no page lives here.
        </p>
        <Link
          href="/"
          className="font-lexend uppercase text-sm tracking-widest underline underline-offset-4 lg:hover:text-red-CoralRed"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}