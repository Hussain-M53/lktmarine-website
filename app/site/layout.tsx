import WhatsappButton from "../_components/WhatsappButton";
import { Footer } from "../_components/footer";
import Navbar from "../_components/navbar";
import TopBar from "../_components/topBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative max-w-7xl mx-auto">
      <TopBar />
      <WhatsappButton />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
