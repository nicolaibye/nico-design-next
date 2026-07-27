// app/(website)/about/page.tsx
import AboutContent from "@/app/(website)/comp/about/AboutContent";

export const metadata = {
  title: "NICO Design | About",
  description:
    "Nicolai (Nico) is a Norwegian designer specializing in brand identity and web design.",
  openGraph: {
    title: "NICO Design | About",
    description:
      "Nicolai (Nico) is a Norwegian designer specializing in brand identity and web design.",
    images: [
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778532550/square_solo_camera_vwge5m_00c126.webp",
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
