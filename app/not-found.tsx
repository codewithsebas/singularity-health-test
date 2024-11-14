import { Undo2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <div className="background-img absolute inset-0 z-10 bg-cover bg-center"></div>

      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative -top-16 z-20 mb-8 flex items-center justify-center rounded-full bg-white p-6 shadow-md transition-all duration-200 md:-top-10 md:h-52 md:w-52 lg:h-60 lg:w-60">
          <Image
            src="/pet.svg"
            alt="Pet"
            width={150}
            height={150}
            className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36"
          />
        </div>

        <h1 className="mb-4 text-5xl font-bold md:text-7xl md:text-white">
          404
        </h1>
        <p className="px-3 text-center text-lg md:text-xl md:text-gray-200">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <Link
          href="/home"
          className="mt-10 flex items-center gap-3 rounded-full bg-red-500 p-3 px-5 font-semibold text-white hover:bg-gray-50 md:bg-white md:p-3 md:px-6 md:text-gray-700"
        >
          <Undo2 className="md:text-gray-800" /> Regresar al inicio
        </Link>
      </div>
    </div>
  );
}
