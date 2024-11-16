import { MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function WorksSection() {
  return (
    <section className="h-fit w-full overflow-hidden px-5 sm:px-0">
      <div className="relative m-auto w-full max-w-6xl">
        <Image
          src="/Circle.svg"
          alt="Background Banner"
          className="absolute -right-80 top-96 object-cover md:-right-96 md:top-20 2xl:top-56"
          width={700}
          height={700}
        />
        <Image
          src="/Circle.svg"
          alt="Background Banner"
          className="absolute -left-36 top-[48rem] object-cover md:top-[38rem]"
          width={200}
          height={200}
        />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-5 sm:min-h-screen sm:flex-row sm:items-center sm:justify-between md:px-24">
        <div className="relative mb-9 mt-10 grid grid-cols-2 gap-10 sm:mr-10 sm:mt-0">
          <div className="absolute bottom-0 top-0 z-0 m-auto h-80 w-80 rounded-r-full border-4 border-l-0 border-dashed border-coral"></div>

          <div className="z-10 flex h-40 w-40 flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg duration-200 hover:scale-105">
            <Image
              src="/items/reserve.svg"
              alt="Reserve"
              width={50}
              height={50}
            />
            <p className="font-medium text-gray">Reserve</p>
          </div>
          <div className="z-10 mt-44 flex h-40 w-40 flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg duration-200 hover:scale-105">
            <Image src="/items/match.svg" alt="Match" width={50} height={50} />
            <p className="font-medium text-gray">Match</p>
          </div>
          <div className="z-10 flex h-40 w-40 flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg duration-200 hover:scale-105">
            <Image src="/items/relax.svg" alt="Relax" width={50} height={50} />
            <p className="font-medium text-gray">Relax</p>
          </div>
        </div>

        <div className="mb-32 flex flex-col items-center gap-5 text-center text-coral sm:items-start sm:text-left">
          <h1 className="mb-2 text-4xl font-semibold sm:text-5xl">
            How it Works
          </h1>
          <p className="text-base font-light text-mediumGray sm:text-lg">
            Because finding a good pet sitter shouldn’t be <br /> a hassle. With
            Fetch! It’s as easy as…
          </p>
          <p>
            <b>Enter Your Location and Fetch Our Services</b>
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <form
              className="flex justify-between gap-1 rounded-full bg-white p-1 shadow-md"
              aria-label="Newsletter Signup"
            >
              <label htmlFor="zip-code" className="sr-only">
                Zip Code
              </label>
              <input
                id="zip-code"
                type="email"
                placeholder="Zip Code"
                className="w-32 bg-transparent ps-3 text-gray outline-none"
              />
              <button
                type="submit"
                className="flex h-10 min-w-10 items-center justify-center rounded-full bg-coral text-white"
                aria-label="Submit Email"
              >
                <MoveRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative m-auto h-full w-full max-w-4xl overflow-hidden rounded-lg bg-blue/90 md:mt-32 xl:mt-10">
        <div className="relative flex h-full w-full flex-col md:flex-row">
          <div className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-blue/50 to-transparent"></div>
          <div className="absolute left-[10rem] h-96 w-96 rounded-full bg-gradient-to-r from-blue/60 to-transparent"></div>
          <div className="absolute left-[20rem] h-96 w-96 rounded-full bg-gradient-to-r from-blue/70 to-transparent"></div>
          <div className="absolute left-[30rem] h-96 w-96 rounded-full bg-gradient-to-r from-blue/80 to-transparent"></div>
          <div className="absolute left-[40rem] h-96 w-96 rounded-full bg-gradient-to-r from-blue/90 to-transparent"></div>
          <div className="absolute left-[50rem] h-96 w-96 rounded-full bg-gradient-to-r from-blue/100 to-transparent"></div>
          <div className="absolute left-[60rem] h-96 w-96 rounded-full bg-gradient-to-r from-blue to-transparent"></div>
        </div>

        <div className="relative z-20 flex h-full flex-col items-center justify-start gap-10 p-5 md:flex-row">
          <Image
            src="/Dog.svg"
            alt="Background Banner"
            className="object-cover"
            width={220}
            height={220}
          />
          <div className="z-10 mb-5 flex h-full w-full flex-col items-center justify-center gap-5 text-center text-yellow sm:items-start sm:text-left">
            <h1 className="text-3xl font-semibold">Make Fetch! Happen</h1>
            <p className="text-base font-light text-white sm:text-lg">
              If you love pets and want exciting work, apply to be a Fetch!{' '}
              <br className="hiddem sm:block" /> Pet Care Provider! We train
              every team member and provide <br className="hiddem sm:block" />{' '}
              ongoing support to help you get the most from your experience.
            </p>
            <button className="rounded-full bg-white p-3 px-5 text-sm font-semibold text-coral shadow-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
