"use client";

import { Rubik } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

/**To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function landingPage() {
  const [zoomedOutImages, setZoomedOutImages] = useState([
    false,
    false,
    false,
    false,
  ]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      imageRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target as Node)) {
          setZoomedOutImages((prev) => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
          });
        }
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const images = [
    { src: "/PriceImageref.png", alt: "Price", title: "Affordable" },
    {
      src: "/TrackingImageref.png",
      alt: "Tracking",
      title: "Real-Time Tracking",
    },
    { src: "/VersatileImageref.png", alt: "Versatile", title: "Versatile" },
    { src: "/OnthegoImageref.png", alt: "On the go", title: "On-the-Go" },
  ];

  const getTransformOrigin = (index: number) => {
    switch (index) {
      case 0:
        return "left top";
      case 1:
        return "right top";
      case 2:
        return "left bottom";
      case 3:
        return "right bottom";
      default:
        return "center";
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <LeafIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Meal Planner</span>
          </Link>
          <nav className="hidden md:flex gap-4 items-center absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Meal Plans
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="w-full pt-8 md:pt-16 lg:pt-24 pb-12 md:pb-24 lg:pb-32">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12">
                Effortless Meal Planning
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl mb-8 md:mb-12">
                Let our meal planner create personalized, affordable, and
                healthy meal plans for you.
              </p>
              <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    className={`aspect-[4/3] overflow-hidden rounded-xl relative cursor-pointer w-full h-full ${
                      index === 0 && zoomedOutImages[0]
                        ? "absolute inset-0 z-10"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedOutImages((prev) => {
                        const newState = [...prev];
                        if (index === 0) {
                          // Toggle the zoom for the first image to cover all
                          const isZoomedOut = !newState[0];
                          newState.fill(isZoomedOut, 0, 4); // Set all to the same zoom state
                        } else {
                          newState[index] = !newState[index]; // Keep existing functionality for other images
                        }
                        return newState;
                        //newState[index] = !newState[index];
                        //return newState;
                      });
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={`object-cover transition-transform duration-300" ${
                        zoomedOutImages[0] && index === 0
                          ? "scale-100"
                          : "scale-150"
                      }`} // Adjust scale based on zoom state
                      style={{
                        transform: zoomedOutImages[index]
                          ? "scale(1)"
                          : "scale(1.5)",
                        transformOrigin: getTransformOrigin(index),
                      }}
                    />
                    <div className="absolute inset-0 bg-[#00563F] opacity-75"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                        {image.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row justify-center mt-8">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Affordable Ingredients
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Sourced for the Best Prices
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our meal planner scans the market in real-time to find the
                    most affordable and healthy ingredients for your meals. You
                    get the best value without sacrificing nutrition.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Affordable Ingredients"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Dynamic Pricing</h3>
                        <p className="text-muted-foreground">
                          Our AI constantly monitors the market to provide you
                          with the best prices on ingredients.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Seasonal Produce</h3>
                        <p className="text-muted-foreground">
                          We prioritize locally-sourced, seasonal produce to
                          ensure maximum freshness and nutrition.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Bulk Discounts</h3>
                        <p className="text-muted-foreground">
                          By purchasing ingredients in bulk, we pass on the
                          savings to you for even more affordable meals.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Personalized Meal Plans
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered meal planner takes into account your dietary
                  preferences, health goals, and budget to create a personalized
                  plan that fits your needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Try It Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Get Started with Meal Planner
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up now to experience the convenience and affordability of
                  our AI-powered meal planning service.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Sign up to get started.{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-2"
                    prefetch={false}
                  >
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" prefetch={false}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Products</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" prefetch={false}>
                    Meal Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Grocery List
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Nutrition Tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" prefetch={false}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" prefetch={false}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Contact</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" prefetch={false}>
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Sales
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

/** 

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >

          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
**/
