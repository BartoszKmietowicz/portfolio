import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string
  description: string
  tags: string[]
  image: string,
  link: string
}

const Project: React.FC<ProjectProps> = ({ title, description, tags, image, link }) => {
  return (
    <Link href={link} target='_blank' className="group block h-full">
      <div className="overflow-hidden h-full rounded-lg bg-zinc-900 transition-all duration-300 group-hover:bg-zinc-800">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="mt-2 text-zinc-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400 group-hover:bg-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;