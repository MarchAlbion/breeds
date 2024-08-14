import AnimalDetails from "@/app/components/AnimalDetails/AnimalDetails";
import { getRequestFunction, apiAuth } from "../../utils/getData";
import Link from "next/link";

interface AnimalPageProps {
  params: { id: string; animalType: "cat" | "dog" };
}

export default async function AnimalPage({ params }: AnimalPageProps) {
  const apiUrl = `https://api.the${params.animalType}api.com/v1/images/${params.id}`;
  const apiToken = apiAuth[params.animalType];

  const getData = getRequestFunction(apiToken);
  const animalData = await getData(apiUrl);
  console.log(animalData, 'data');

  return (
<main className="p-4 sm:p-6 md:p-10 flex flex-col items-center  h-full w-full gap-5" >
  <Link
    href="/"
    className="text-base sm:text-lg md:text-2xl font-bold text-blue-500 bg-white border-2 border-gray-600 rounded-md self-start p-2 text-center hover:bg-gray-600 hover:text-white transition ease-in-out duration-300"
  >
    🢠 Back
  </Link>
  <AnimalDetails animalData={animalData} />
</main>
  );
}
