import Image from "next/image";

type Props = {
  animalData: any;
};

export default function AnimalDetails({ animalData }: Props) {
  const breedInfo = animalData.breeds[0];
  return (
    <div className="flex flex-col items-center border-2 border-gray-500 rounded-lg w-full md:w-3/4 lg:w-1/2 max-h-[80%]   shadow-lg pb-6 md:pb-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl p-6 md:p-8 lg:p-10 font-bold bg-gray-600 w-full text-center text-white">
        {breedInfo.name}
      </h1>
      <div className="w-content flex justify-center items-center overflow-hidden ">
        <Image
          src={animalData.url}
          alt="cat"
          width={animalData.width}
          height={animalData.height}
        
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-5 mt-5">
        <p className="font-bold text-xs md:text-sm lg:text-base mb-10 text-center">
          {`Temperament: ${breedInfo.temperament}`}
        </p>
        <p className="font-bold text-xs md:text-sm lg:text-base">
          {`Origin: ${
            breedInfo.origin ? breedInfo.origin : "No origin specified"
          }`}
        </p>
      </div>
    </div>
  );
}
