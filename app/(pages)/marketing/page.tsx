import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://vibe-template.com"),
  keywords: [""],
  title: "Vibe Template",
  openGraph: {
    description: "Vibe Template",
    images: [""],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Template",
    description: "Vibe Template",
    siteId: "",
    creator: "@saas-garden",
    creatorId: "",
    images: [""],
  },
}

export default async function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen items-center mt-[2.5rem] p-3 w-full">
      <h1 className="scroll-m-20 max-w-[600px] text-5xl font-bold tracking-tight text-center">
        Example Marketing Page with Video & CTA
      </h1>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
        Use this static page to have an explainer video with CTA and some copy. Great for marketing your product and
        getting sales.
      </p>
      <div className="flex gap-2 mt-2">
        <Link href="/dashboard" prefetch={true} className="mt-2">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="/dashboard" prefetch={true} className="mt-2">
          <Button size="lg" variant="outline">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="flex flex-col min-h-screen max-w-[900px] items-center mb-[2rem]">
        <article className="w-full mx-auto pb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Lorem ipsum dolor sit amet</h1>

          <section className="mb-8">
            <p className="text-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Lorem ipsum
            </h2>
            <p className="text-md mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-md mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-md mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Lorem ipsum
            </h2>
            <p className="text-md mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <ol className="flex flex-col gap-1 list-decimal ml-8 mb-4">
              <li className="mb-2">
                <strong>Lorem ipsum dolor sit amet:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="mb-2">
                <strong>Lorem ipsum dolor sit amet:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="mb-2">
                <strong>Lorem ipsum dolor sit amet:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Lorem ipsum
            </h2>
            <p className="text-md mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <ul className=" flex flex-col gap-1 list-disc ml-8 mb-4">
              <li className="mb-2">
                <strong>Lorem ipsum dolor sit amet:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="mb-2">
                <strong>Lorem ipsum dolor sit amet:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="mb-2">
                <strong>Lorem ipsum dolor sit amet:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Lorem ipsum
            </h2>
            <p className="text-md mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-md mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
