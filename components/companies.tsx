import Image from "next/image";
import { aadl, naftal, sakan, baraka, GCB, eclirage } from "@/lib/utils";
import BATIMETAL from "@/public/BATIMETAL.jpg";
import INFRAFER from "@/public/infrafer.png";
export default function Companies() {
  const companies = [
    aadl,
    naftal,
    sakan,
    baraka,
    GCB,
    eclirage,
    BATIMETAL,
    INFRAFER,
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Trusted Partners
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            J’ai eu eu le privilège de collaborer avec certaines des meilleures
            entreprises du secteur.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 items-center justify-center gap-6 md:grid-cols-5 lg:gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="mx-auto flex w-full items-center justify-center"
              key={index}
            >
              <Image
                key={index}
                alt="Acme Inc"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src={`/companies/logo${index + 1}.png`}
                width="140"
              />
            </div>
          ))}
          {companies.map((company, index) => (
            <div
              className="mx-auto flex w-full items-center justify-center"
              key={index}
            >
              <Image
                alt="Acme Inc"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src={company}
                width="140"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
