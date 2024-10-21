import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Form } from "./shared/Form";

export default function CertificateBox() {
  return (
    <section className="min-h-screen py-10 lg:py-20 relative font-google-reg pb-40">
      <Image
        height={250}
        width={250} // Added width
        src="/images/kite.svg" // Use path directly
        alt="Kite"
        className="absolute pointer-events-none hidden xl:block top-96 left-44 z-40"
      />
      <Image
        height={320}
        width={320} // Added width
        src="/images/firebase.png" // Use path directly
        alt="Firebase logo"
        className="absolute md:top-20 top-[55%] scale-75 lg:scale-100 z-20"
      />
      <Image
        height={360}
        width={360} // Added width
        src="/images/mask.png" // Use path directly
        alt="MassKara mask"
        className="absolute md:right-10 right-0 scale-75 lg:scale-100 z-20 md:top-0 top-[55%]"
      />
      <Image
        height={280}
        width={280} // Added width
        src="/images/sugarcane.png" // Use path directly
        alt="Sugarcane"
        className="absolute right-20 bottom-0 z-40 pointer-events-none hidden lg:block"
      />
      <div className="glassmorph min-h-fit z-30 relative w-[90%] px-7 md:w-3/4 mx-auto">
        <div className="gap-5 flex flex-col items-center pt-28 pb-56">
          <div className="lg:text-7xl text-6xl font-google-mid space-y-6 hidden md:block">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-60% from-secondary-100 to-black">
              A Tribute to Innovation
            </h1>

            <div className="flex">
              <h1 className="whitespace-no">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-60% from-secondary-100 to-black">
                  and{" "}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-70% from-primary-100 to-secondary-100">
                  Achievement
                </span>
              </h1>

              <Image
                priority
                src="/images/star.png"
                alt="star"
                height={120}
                width={120}
                className="object-contain -mt-6 ml-4"
              />
            </div>
          </div>
          {/* <form className="flex flex-col gap-2 mt-8 w-full sm:max-w-[400px] max-w-[350px] text-black"> */}
          <Form />
          {/* </form> */}
        </div>
      </div>

      <div className="absolute overflow-hidden left-0 bottom-0 right-0">
        <Image
          height={400} // Set an appropriate height
          width={1900} // Set an appropriate width
          src="/images/wave.svg" // Use path directly
          alt="RGBY Wave"
          priority
          className="pointer-events-none object-cover object-left z-20 relative"
        />
      </div>
    </section>
  );
}
