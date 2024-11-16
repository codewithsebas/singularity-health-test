import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Slider from '../components/Slider';

export default function ServicesSection() {
  return (
    <section className="relative h-fit w-full">
      <Image
        src="/Services.svg"
        alt="Background Banner"
        className="absolute left-0 h-[40rem] w-full object-cover md:-top-40 md:h-fit"
        width={1000}
        height={1000}
      />
      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-5 pt-16 sm:min-h-screen sm:flex-row sm:items-center sm:justify-between md:px-20">
        <div className="mb-32 flex flex-col items-center gap-5 text-center text-coral sm:items-start sm:text-left">
          <h1 className="mb-2 text-4xl font-semibold sm:text-5xl">
            Our Services
          </h1>
          <p className="text-base font-light text-mediumGray sm:text-lg">
            National Brand With a Local Feel. <br /> Experience the Fetch!
            Difference
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

        <div className="mb-9 mt-10 grid grid-cols-2 gap-6 sm:mr-10 sm:mt-0">
          <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg duration-200 hover:scale-105 sm:h-44 sm:w-44 xl:h-48 xl:w-48">
            <Image
              src="/items/dog.svg"
              alt="Dog Walking"
              width={50}
              height={50}
            />
            <p className="font-medium text-gray">Dog Walking</p>
          </div>
          <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg duration-200 hover:scale-105 sm:h-44 sm:w-44 xl:h-48 xl:w-48">
            <Image
              src="/items/cat.svg"
              alt="Pet Sitting"
              width={50}
              height={50}
            />
            <p className="font-medium text-gray">Pet Sitting</p>
          </div>
          <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg duration-200 hover:scale-105 sm:h-44 sm:w-44 xl:h-48 xl:w-48">
            <Image
              src="/items/home.svg"
              alt="Overnight Care"
              width={50}
              height={50}
            />
            <p className="font-medium text-gray">Overnight Care</p>
          </div>
          <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg duration-200 hover:scale-105 sm:h-44 sm:w-44 xl:h-48 xl:w-48">
            <Image
              src="/items/paw.svg"
              alt="Other Services"
              width={50}
              height={50}
            />
            <p className="font-medium text-gray">Other Services</p>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
}
