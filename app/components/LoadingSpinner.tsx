import { LoaderCircle } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2">
      <LoaderCircle className="animate-spin" />
      Cargando...
    </div>
  );
}
