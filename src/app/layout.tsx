import NoSSR from "@/hooks/NoSSR";
import "@/styles/globals.css";
import "@/styles/css/style.css"
import "@/styles/vendor/aos/aos.css";
import "@/styles/vendor/bootstrap/css/bootstrap.min.css";
import "@/styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/styles/vendor/boxicons/css/boxicons.min.css";
import "@/styles/vendor/glightbox/css/glightbox.min.css";
import "@/styles/vendor/remixicon/remixicon.css";
import "@/styles/vendor/swiper/swiper-bundle.min.css";

import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import Nav from "@/components/Nav";
const inter = Poppins({ weight: "400", subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Build.Your.Resume online",
//   description:
//     "Generate a perfect resume online, select the 100% accepting templates , personalize it, and get more interviews in 2024, in Maggi time.",
//   keywords: [
//     "resume",
//     "cover letter examples",
//     "resume builder",
//     "resume templates",
//     "resume examples",
//     "build.your.resume",
//     "build a resume",
//     "making a resume",
//     "make a resume",
//     "create resume",
//     "resume writing",
//     "professional resume",
//     "resume help",
//     "job resume",
//     "resume services",
//     "service resume",
//     "resume top",
//     "resume writing professional",
//     "best resume",
//     "best resume building",
//     "its resume",
//     "basic resume",
//     "build a professional resume",
//     "build my resume",
//     "resume building services",
//     "resume writing help",
//     "resume easy",
//     "resume assistance",
//     "make professional resume",
//     "help building a resume",
//     "build a resume easy",
//     "how to make resume",
//     "where to make resume",
//     "which resume to make",
//   ],
//   authors: [
//     { name: "rishi23root" },
//     { name: "Rishabh Jain", url: "https://github.com/rishi23root" },
//   ],
//   icons: {
//     icon: ["/favicon.ico?v=1"],
//     apple: ["/logo.png?v=1"],
//     shortcut: ["/logo.png?v=1"],
//     // openGraph: ["/og.png?v=1"],
//   },
//   openGraph: {
//     type: "website",
//     title: "Build.Your.Resume",
//     description:
//       "Generated Your Resume online free, fast and easy with simple clicks.",
//     url: "https://buildyourresume.online",
//     siteName: "Build.Your.Resume",
//     images: [
//       {
//         url: "https://buildyourresume.online/opengraph-image.jpg",
//         alt: "Build.Your.Resume",
//         width: 500,
//         height: 160,
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextTopLoader height={3} color="#3b82f6" />
        <Nav />
        {children}
        {/* <TwScreenInfo /> */}
      </body>
    </html>
  );
}
