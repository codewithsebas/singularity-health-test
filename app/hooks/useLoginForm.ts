'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../utils/api';

export default function useLoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [formValid, setFormValid] = useState<boolean>(false);
  const router = useRouter();

  const validateForm = (emailValue: string, passwordValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(emailValue);
    const passwordValid = passwordValue.length >= 4;
    setFormValid(emailValid && passwordValid);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateForm(e.target.value, password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validateForm(email, e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await loginUser(email, password);

      if (data?.token) {
        localStorage.setItem('authToken', data.token);
        router.push('/home');
      }
    } catch {
      setError('Credenciales de login inválidas');
      setTimeout(() => {
        setError('');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    loading,
    error,
    formValid,
    handleEmailChange,
    handlePasswordChange,
    onSubmit,
  };
}
