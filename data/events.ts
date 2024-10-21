// data/events.ts
import { EventTypes } from '@/lib/types';
import image1_1 from "@/images/events/event-1/1.jpeg"
import image1_2 from "@/images/events/event-2/1.jpg"
import image2_2 from "@/images/events/event-2/2.jpg"
import image3_2 from "@/images/events/event-2/3.jpeg"
import image4_2 from "@/images/events/event-2/4.jpeg"
import image5_2 from "@/images/events/event-2/5.jpeg"
import image6_2 from "@/images/events/event-2/6.jpg"

export const events: EventTypes[] = [
  {
    bannerImage: image4_2,
    images: [image1_2, image2_2, image3_2, image4_2, image5_2, image6_2],
    title: 'Info Session',
    slug: "info-session",
    description: "Our members, both new and returning, gathered to discuss Google technologies, share exciting future projects, play fun games, and enjoy a memorable start to the new semester!",
    text: "At this introductory event, new and existing members came together to explore the world of Google technologies through inspiring conversations. The session included insightful discussions on cutting-edge innovations, practical applications, and future trends in the tech world. In addition to the tech talk, we engaged in interactive games and icebreakers, fostering a lively and welcoming atmosphere. It was a great opportunity for attendees to connect, share ideas, and learn more about the GDG on Campus community and its mission. We also gave participants an exclusive sneak peek into our upcoming projects and events for the semester. Whether it's hackathons, workshops, or collaborative coding sessions, there's a lot to look forward to this year! 🎯Overall, it was an evening filled with knowledge, fun, and a strong sense of community. We are excited for the journey ahead and look forward to growing together as a team. Stay tuned for more amazing events and opportunities to dive deeper into Google technologies! 🌟",
    date: 'September 27, 2024',
    location: "VIT B "
  },
  {
    bannerImage: image1_1,
    images: [image1_1],
    title: 'Orientation Days',
    slug: "orientation-days",
    description: "The promotional and orientation days are events where we set up stands in the school's café street to meet new students and invite them to join our school life and clubs.",
    text: "Promotional and orientation days are significant events held in our school's café street, where each club has its own stand. During these days, we aim to connect with new students and introduce them to school life and the opportunities our clubs offer. At each club's stand, we engage in one-on-one interactions with new students, answering their questions and providing information about clubs that match their interests. This way, students find an environment where they can express themselves more freely within our school. We also aim to gather new members at our stand and foster connections with others. Promotional and orientation days play a crucial role in strengthening school spirit and helping new students expand their social networks. By providing an enjoyable experience for both new and current students, we help them ease into school life. Through these events, we aim to build a stronger school community and create a dynamic atmosphere that everyone can participate in.",
    date: 'September 16, 2024',
    location: "VIT B "
  }
];

