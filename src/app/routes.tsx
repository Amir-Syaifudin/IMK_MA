import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Homepage } from './pages/Homepage';
import { SearchPage } from './pages/SearchPage';
import { FAQPage } from './pages/FAQPage';
import { NotFound } from './pages/NotFound';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { JadwalSidang } from './pages/JadwalSidang';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Homepage },
      { path: 'pencarian', Component: SearchPage },
      { path: 'faq', Component: FAQPage },
      { path: 'jadwal', Component: JadwalSidang },
      {
        path: 'tentang',
        element: (
          <PlaceholderPage
            title="Tentang Mahkamah Agung"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      {
        path: 'kontak',
        element: (
          <PlaceholderPage
            title="Kontak"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      {
        path: 'kepaniteraan',
        element: (
          <PlaceholderPage
            title="Layanan Kepaniteraan"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      {
        path: 'pengumuman',
        element: (
          <PlaceholderPage
            title="Pengumuman"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      { path: '*', Component: NotFound },
    ],
  },
]);

