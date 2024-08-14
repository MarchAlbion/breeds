"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  url: string;
  id?: string;
  breed: string;
  width: number;
  height: number;
  animalType: string;
};

export const Card: React.FC<Props> = ({
  url,
  breed,
  width,
  height,
  id,
  animalType,
}) => {
  const router = useRouter();
  return (
    <div
      className="group shadow-md w-full h-full bg-white rounded-lg relative cursor-pointer overflow-hidden transition-transform transform-gpu duration-500"
      onClick={() => router.push(`/${animalType}/${id}`)}
    >
      <div className="relative w-full h-full">
        <Image
          src={url}
          alt="cat"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          width={width}
          height={height}
        />
      </div>
      <p className="absolute bottom-0 left-0 text-sm md:text-xl text-gray-300 font-bold w-full bg-emerald-950 p-2 text-center group-hover:text-white transition-all duration-500 group-hover:bg-opacity-80">
        {breed}
      </p>
    </div>
  );
};
