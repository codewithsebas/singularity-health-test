import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      <Image
        src="/banner/Banner.svg"
        alt="Background Banner"
        className="absolute top-0 h-full w-full object-cover"
        width={1000}
        height={1000}
      />
      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 px-5 pt-28 sm:flex-row sm:items-center sm:justify-between md:px-0">
        <div className="flex flex-col items-center gap-5 text-center text-white sm:items-start sm:text-left">
          <h1 className="mb-2 text-4xl font-semibold sm:text-5xl">
            We Get Pet Care!
          </h1>
          <p className="text-base sm:text-lg">
            For over 17 Years, Fetch! Pet Care has been a trusted{' '}
            <br className="hidden sm:block" /> partner in keeping pets healthy
            and happy!
          </p>
          <div className="flex flex-col-reverse items-center gap-3 sm:flex-row">
            <button className="rounded-full bg-blue px-6 py-3 text-sm shadow-lg shadow-blue/15 duration-200 hover:bg-blue/85">
              Schedule Service
            </button>
            <Link href="#" className="mt-2 hover:underline sm:mt-0">
              Or Call 866.338.2463
            </Link>
          </div>
        </div>

        <div className="mt-10 h-80 w-80 rounded-full sm:mr-10 sm:mt-0 xl:h-96 xl:w-96">
          <Image
            src="/banner/dog_golden.svg"
            alt="Dog"
            className="h-full w-full object-contain"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
