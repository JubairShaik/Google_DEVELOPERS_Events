import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { Form } from "@/components/shared/Form";
import { About } from "@/components/shared/About";
import { Certificate } from "crypto";
import CertificateBox from "@/components/CertificateBox";

export default function Certificates() {
  return (
    <>
      <div className="bg-img ">
        <Image
          src="/images/bg.jpg"
          width={1920}
          height={1080}
          alt="Grid bg"
          priority
          className="pointer-events-none object-cover absolute h-full top-0 left-0 z-10 opacity-50"
        />
        <CertificateBox />
      </div>
      <main className="md:mt-44 mt-20">
        <Container>
          <Image
            priority
            src="/images/glow.png"
            alt="glow"
            fill
            className="opacity-20 w-[1500px] h-full absolute top-0 -z-10"
          />

          <Image
            priority
            src="/images/line.png"
            alt="line"
            quality={100}
            height={400}
            width={400}
            className=" hidden dark:block opacity-0 dark:opacity-20 object-contain mix-blend-difference -z-20 rotate-180 absolute xl:right-44 md:-right-20 -right-44 top-80 hidden md:block"
          />

          <Image
            priority
            src="/images/line.png"
            alt="line"
            quality={100}
            height={400}
            width={400}
            className=" hidden dark:block opacity-0 dark:opacity-20 object-contain mix-blend-difference -z-20 absolute right-0 top-[-800px] hidden lg:block"
          />

          {/* SM ViewPort */}
          {/* <div className="block md:hidden">
            <Image
              priority
              src="/images/star.png"
              alt="star"
              height={120}
              width={120}
              className="object-contain mx-auto"
            />
            <h1 className="text-[3rem] leading-tight font-google-mid space-y-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-60% from-secondary-100 to-black">
                A Tribute to Innovation
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-60% from-secondary-100 to-black">
                and
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-70% from-primary-100 to-secondary-100">
                {" "}
                Achievement
              </span>
            </h1>
          </div> */}
          {/* <p className="md:text-2xl text-secondary-100 md:text-left text-center md:mx-0 md:w-3/4 lg:w-[60%] mx-auto max-w-[450px] md:max-w-full text-lg leading-normal mt-4">
            By honoring outstanding individuals, we inspire a ripple effect of
            innovation, empower dreams, and shape a brighter future together.
          </p>

          <Form /> */}
        </Container>

        <About />
      </main>
    </>
  );
}
