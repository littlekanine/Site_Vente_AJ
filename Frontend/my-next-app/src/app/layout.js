import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { roboto, montserrat } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "L'atelier de la luciole",
    description: "Boutique de créateur en ligne",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={`${inter.className} ${roboto.variable} ${montserrat.variable}`}>
                {" "}
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
