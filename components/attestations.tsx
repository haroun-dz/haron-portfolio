"use client";
import Image from "next/image";
import Link from "next/link";
import { attestationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
export default function Atestation() {
  const { ref } = useSectionInView("Attesstations");
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32"
      id="attestations"
      ref={ref}
    >
      <div className="">
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Attestations
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              View PDF attestations. Click on a preview to open the full
              document.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {attestationsData.map((attestation, index) => (
              <Link
                className="group"
                href={attestation.url}
                key={index}
                target="_blank"
              >
                <div className="relative h-[200px] overflow-hidden rounded-lg border border-gray-200 bg-gray-100 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800">
                  <Image
                    alt={attestation.title}
                    className="h-full w-full object-cover object-center"
                    height={500}
                    src={attestation.imageUrl}
                    style={{
                      aspectRatio: "400/500",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
                    <p className="text-sm font-medium truncate group-hover:underline">
                      {attestation.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
