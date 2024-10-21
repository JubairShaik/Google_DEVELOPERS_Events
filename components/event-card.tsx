import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from 'next/link';

interface EventCardProps {
  bannerImage: StaticImageData;
  title: string;
  slug: string;
  description: string;
  date?: string;
}

const EventCard: React.FC<EventCardProps> = ({ bannerImage, title, slug, description, date }) => {
  return (
    <Link href={`/${slug}`} className="max-w-sm w-5/6 mt-4 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 flex-shrink-0">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={bannerImage} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 mt-2 text-sm">{description}</p>
        <div className="mt-4 text-gray-500 text-sm">
          <span>{date ? date : "UPCOMING"}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
