import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 bg-[#F2F2F2]">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">{title}</h1>
        <div className="h-1 w-24 bg-[#C9A84C] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-[#4A4A4A] mb-8">{description}</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1E3A2F] px-6 py-3 rounded-lg hover:bg-[#A8852A] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
