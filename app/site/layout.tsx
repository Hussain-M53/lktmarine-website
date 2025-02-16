import WhatsappButton from "../_components/WhatsappButton";
import { Footer } from "../_components/footer";
import Navbar from "../_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <WhatsappButton />
        <Navbar />
        {children}
        <Footer/>
      </div>
  );
}
