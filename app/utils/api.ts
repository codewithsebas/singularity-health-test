import axios from 'axios';

// Funcion para realizar el login
export const loginUser = async (email: string, password: string) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error?.response?.data?.error ||
          'Se ha producido un error durante el inicio de sesión',
      );
    } else {
      throw new Error('Se ha producido un error inesperado');
    }
  }
};
