import Event from "@/components/AllEvents";
import Circle from "@/components/Circle";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import Square from "@/components/Square";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Divider from "@/components/divider";

import banner from "@/images/banner.png";
import blueDivider from "@/images/dividers/blue-banner.png";
import greenDivider from "@/images/dividers/green-banner.png";
import TextContainer from "@/components/text-container";

import EventCard from "@/components/event-card";
import { events as events2 } from "@/data/events";
import TeamMemberCard from "@/components/team-member-card";
import { teamMembers } from "@/data/team";
import placeholderAvatar from "@/images/team/placeholderAvatar.png";
import Title from "@/components/title";
import { socials, campus } from "@/data/socials";
import { icons } from "@/lib/bg-icons";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

import Link from "next/link";
import { EventTypes } from "@/lib/types";

const color = "#4285F4";

const generateUniquePositions = (count: number) => {
  const positions: { left: number; top: number }[] = [];
  const size = 5; // Grid cell size in vw
  const maxRows = Math.floor(100 / size); // Maximum number of rows
  const maxCols = Math.floor(100 / size); // Maximum number of columns

  while (positions.length < count) {
    const row = Math.floor(Math.random() * maxRows);
    const col = Math.floor(Math.random() * maxCols);
    const leftPosition = col * size; // Calculate left position based on column
    const topPosition = row * size; // Calculate top position based on row

    // Check for collision
    const collision = positions.some(
      (pos) => pos.left === leftPosition && pos.top === topPosition
    );

    if (!collision) {
      positions.push({ left: leftPosition, top: topPosition });
    }
  }

  return positions;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const renderIcons = () => {
    const positions = generateUniquePositions(50);
    return positions.map((pos, index) => {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      const size = Math.random() * 30 + 20; // Random size between 20 and 50px
      const rotation = Math.random() * 90 - 45; // Random rotation between -45 and +45 degrees

      return (
        <Icon
          key={index}
          className="absolute opacity-10 pointer-events-none"
          style={{
            left: `${pos.left}vw`,
            top: `${pos.top}vh`,
            fontSize: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        />
      );
    });
  };

  const chunkArray = (array: any[], chunkSize: number): any[][] => {
    const result: any[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const rows: Event[][] = chunkArray(events2, 3); // Group events into rows of 3

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <div>
      <section
      id='home'
      className='relative m-auto grid h-[60vh] place-items-center md:h-screen'
    >
      <h1 className='text-mainTitle z-10 flex translate-y-24 flex-col gap-3 md:gap-5 xl:gap-6 [&>*]:[clipPath:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]'>
        <p className='h1-anim'>Powered by Intellect,</p>
        <p className='h1-anim'>Driven by Values</p>
      </h1>
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none object-contain object-top opacity-75 xl:-translate-y-96'
      />
      <div>
        <Image
          priority
          src='/images/gradients/gradientMain.png'
          alt='Google Color Gradients'
          fill
          className='pointer-events-none object-contain object-bottom'
        />
        <Image
          priority
          src='/images/elements/gdscLines.png'
          alt='Google Color Lines'
          fill
          className='pointer-events-none z-[-1] translate-y-56 object-contain object-bottom px-8 md:translate-y-[27rem] lg:translate-y-[30rem]'
        />
        <Image
          id='gdsc-glass-logo'
          priority
          src='/images/elements/gdscLogoGlass.png'
          alt='GDSC Logo Glass'
          height={500}
          width={1200}
          className='pointer-events-none absolute bottom-0 -right-4 translate-y-1/2 scale-90 opacity-0'
        />
        <Image
          id='arrow-down'
          priority
          src='/images/elements/arrowDown.png'
          alt='Arrow Down'
          height={300}
          width={300}
          className='pointer-events-none absolute -left-[5.5rem] -bottom-5 translate-y-1/2 scale-[0.3] opacity-0 mix-blend-overlay sm:bottom-10 sm:-left-12 sm:scale-[0.5] md:bottom-48 xl:left-0 xl:scale-[0.7] 2xl:left-32 2xl:scale-[.80]'
        />
      </div>
    </section>




      </div>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div>
          <Square
            block={true}
            color={color}
            top={"18rem"}
            left={"-8rem"}
            rotate={"15deg"}
            small={false}
          ></Square>
          <Square
            block={false}
            color={color}
            top={"34rem"}
            left={"10rem"}
            rotate={"20deg"}
            small={true}
          ></Square>
          <Circle
            block={false}
            color={"#34A853"}
            top={"24rem"}
            right={"10rem"}
            rotate={"15deg"}
            small={true}
          ></Circle>
          <Circle
            block={true}
            color={"#34A853"}
            top={"24rem"}
            right={"-10rem"}
            rotate={"15deg"}
            small={false}
          ></Circle>
        </div>

        <Hero />

        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Stay Upto Date with All Latest Events from GDSC
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Participate in the Developer Events and get a chance to win
              Goodies fron Google
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/images/google.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <div>
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
            {renderIcons()}
          </div>
          <div className="relative z-10">
            <div className="flex flex-wrap justify gap-4 my-20">
              <div className="grid grid-cols-1 md:m-auto lg:m-auto md:grid-cols-2 gap-4 w-full md:w-5/6 mt-10">
                <TextContainer title="Who are we?" variant="red">
                  Welcome to Google Developer Groups on Campus {campus}. As part
                  of the global Google Developer Groups initiative, we are a
                  vibrant and inclusive community of students passionate about
                  technology, innovation, and collaboration.
                </TextContainer>

                <TextContainer title="Our Mission" variant="blue">
                  At Google Developer Groups on Campus {campus}, our mission is
                  to foster a thriving environment where students from all
                  fields-whether they&apos;re seasoned developers or complete
                  beginners-can come together to learn, build, and grow.
                </TextContainer>

                <TextContainer title="What We Do" variant="green">
                  We are committed to empowering students by providing
                  opportunities to develop technical skills through hands-on
                  projects, workshops, and events led by industry professionals
                  and peers.
                </TextContainer>

                <TextContainer title="Join Us" variant="yellow">
                  Join us in our journey to make technology accessible, share
                  knowledge, and create impactful solutions to real-world
                  problems, all while building lifelong connections within the
                  tech community.
                </TextContainer>
              </div>
            </div>
            <Divider image={blueDivider} altText="Blue Divider" />
            <Title id="events" className="bg-gray-100 text-center">
              Our Events
            </Title>
            <div className="py-8 bg-gray-100">
              {rows.map((row: Event[], rowIndex: number) => (
                <div key={rowIndex} className="flex justify-center">
                  <div className="flex flex-wrap space-x-4 justify-center w-full">
                    {row.map((event: EventTypes, index: number) => (
                      <EventCard
                        key={index}
                        bannerImage={event.bannerImage}
                        title={event.title}
                        slug={event.slug}
                        description={event.description}
                        date={event.date}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Divider image={greenDivider} altText="Green Divider" />
            <Title id="team" className="bg-gray-100 text-center">
              Our Team
            </Title>
            <div className="flex flex-wrap justify-center items-start py-8 bg-gray-100">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex-none w-[240px] mx-4 mb-8">
                  <TeamMemberCard
                    avatar={member.avatar ? member.avatar : placeholderAvatar}
                    name={member.name}
                    surname={member.surname}
                    title={member.title}
                    variant={member.variant}
                    linkedinUrl={member.linkedinUrl ?? undefined}
                    instagramUsername={member.instagramUsername ?? undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Search for Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
