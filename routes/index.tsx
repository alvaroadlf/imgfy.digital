import HomeIsland from "@/islands/Home.tsx";
import PhotoIcon from "@/components/PhotoIcon.tsx";
import BuyMeACoffee from "@/components/BuyMeACoffee.tsx";

export default function Home() {
  return (
    <>
      <header
        className="text-center mt-8"
        id="#top"
      >
        <PhotoIcon className="w-16 h-16 mx-auto" />
        <h1 className="text-xl md:text-2xl uppercase font-bold">
          IMGfy
        </h1>
      </header>
      <HomeIsland />
      <footer className="absolute bottom-0 w-full p-4 dark:bg-slate-800 bg-slate-200">
        <nav className="flex flex-col sm:flex-row flex-wrap justify-end items-center gap-2 sm:gap-4 text-sm">
          <a
            href="https://imgfy.digital"
            className="underline"
            target="_blank"
            rel="author"
          >
            © 2024 IMGfy. Made with love <span className="text-red-500">❤️</span>{" "}
            in Spain.
          </a>
        </nav>
      </footer>
    </>
  );
}
