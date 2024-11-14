'use client';

import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '../components/LoadingSpinner';
import useLoginForm from '../hooks/useLoginForm';
import Input from '../components/Input';

export default function LoginPage() {
  const {
    email,
    password,
    loading,
    error,
    formValid,
    handleEmailChange,
    handlePasswordChange,
    onSubmit,
  } = useLoginForm();

  return (
    <main className="flex h-full w-full flex-col gap-10 md:min-h-screen md:flex-row md:gap-0">
      <section className="relative h-full w-full items-center md:flex md:min-h-screen">
        <div className="background-img"></div>
        <div className="relative left-20 top-10 z-20 flex h-28 w-28 items-center justify-center rounded-full bg-white p-5 duration-200 md:left-16 md:top-auto md:h-52 md:w-52 lg:left-36">
          <Image
            src="/pet.svg"
            alt="Pet"
            width={150}
            height={150}
            className="h-20 w-20 md:h-32 md:w-32"
          />
        </div>
      </section>

      <section className="mb-20 mt-60 flex h-full w-full items-center justify-center px-5 md:m-0 md:min-h-screen md:w-3/4 md:justify-start md:p-0 md:pe-5">
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-5 md:max-w-md"
          aria-labelledby="login-form"
        >
          <header className="mb-3 flex items-center gap-4">
            <span className="h-8 w-1.5 bg-red-400"></span>
            <h2
              id="login-form"
              className="text-xl font-semibold uppercase text-gray-600"
            >
              Bienvenido
            </h2>
          </header>

          <fieldset className="flex flex-col gap-2">
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="EMAIL"
              ariaDescribedBy="email-error"
              error={
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length > 0
                  ? 'Por favor, introduce un email válido.'
                  : ''
              }
            />

            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="CONTRASEÑA"
              ariaDescribedBy="password-error"
              error={
                password.length > 0 && password.length < 4
                  ? 'La contraseña debe tener al menos 4 caracteres.'
                  : ''
              }
            />

            {error && <p className="text-start text-red-400">{error}</p>}

            <Link href="#" className="mt-5 text-end text-sm text-gray-500">
              ¿Olvidaste tu contraseña?
            </Link>
          </fieldset>

          <div className="mt-3 flex flex-col items-center justify-between gap-10">
            <button
              type="submit"
              disabled={!formValid}
              className={`focus:shadow-outline flex w-44 items-center justify-center rounded-full bg-blue-600 p-4 px-8 text-sm font-medium uppercase text-white shadow-xl shadow-blue-300 duration-200 hover:bg-blue-700 focus:outline-none ${!formValid ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            >
              {loading ? <LoadingSpinner /> : 'Iniciar sesión'}
            </button>

            <div className="text-center text-sm uppercase">
              <span className="text-gray-400">
                Aún no tengo cuenta{' '}
                <Link href="#" className="text-blue-950">
                  Registrarse
                </Link>
              </span>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}