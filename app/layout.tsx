// import RootContainer from "@/components/containers/root";
import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Font files can be colocated inside of `app`
export const francico = localFont({
  src: "../public/fonts/francico/francico.otf",
  display: "swap",
});

export const metadata = {
  title: {
    template: "Farzam-Remix - %s",
    default: "Farzam-Remix",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-hidden ${poppins.className}`}>
        {/* <RootContainer>{children}</RootContainer> */}
      </body>
    </html>
  );
}
