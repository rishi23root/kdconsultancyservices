"use client"
import { Metadata } from "next";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "404 - Build.Your.Resume",
  description:
    "Generated Your Resume online free, fast and easy with simple clicks. but not here",
};

export default function FourOhFour() {
  const router = useRouter()
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-zinc-900">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl shadow-white/20">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-zinc-900 text-9xl">404</h1>
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <div
              onClick={()=>{
                router.back()  
              }}
              className="px-8 py-3 text-2xl font-semibold text-white cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-500"
            >
              Go Back
            </div>
          </div>
        </div>
      </div>
    </>
  );
}