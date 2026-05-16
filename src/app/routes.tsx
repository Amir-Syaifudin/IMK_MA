import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";
import { SearchPage } from "./pages/SearchPage";
import { FAQPage } from "./pages/FAQPage";
import { NotFound } from "./pages/NotFound";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { InformationPage } from "./pages/InformationPage";
import { HomepageWF } from "./pages/wireframe/HomepageWF";
import { SearchPageWF } from "./pages/wireframe/SearchPageWF";
import { FAQPageWF } from "./pages/wireframe/FAQPageWF";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Homepage },
      { path: "perkara", Component: SearchPage },
      { path: "faq", Component: FAQPage },

      // Informasi Sub-pages
      {
        path: "id",
        children: [
          { path: "artikel", Component: InformationPage },
          { path: "berita", Component: InformationPage },
          { path: "keputusan", Component: InformationPage },
          { path: "pengumuman", Component: InformationPage },
        ],
      },

      {
        path: "profil",
        element: (
          <PlaceholderPage
            title="Profil Mahkamah Agung"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      {
        path: "kontak",
        element: (
          <PlaceholderPage
            title="Kontak"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      {
        path: "kepaniteraan",
        element: (
          <PlaceholderPage
            title="Layanan Kepaniteraan"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      {
        path: "pengumuman",
        element: (
          <PlaceholderPage
            title="Pengumuman"
            description="Halaman ini sedang dalam pengembangan. Kembali ke beranda untuk mengakses layanan lainnya."
          />
        ),
      },
      { path: "*", Component: NotFound },
    ],
  },

  // ── Wireframe Routes (standalone, no Layout wrapper) ──
  { path: "/wireframe", Component: HomepageWF },
  { path: "/wireframe/perkara", Component: SearchPageWF },
  { path: "/wireframe/faq", Component: FAQPageWF },
]);

