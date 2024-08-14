import { getRequestFunction } from "./utils/getData";
import { apiAuth } from "./utils/getData";
import { Card } from "./components/Card/Card";
import { UpdatedAnimal } from "./types/animalsType";
import { combineAnimals } from "./utils/combineAnimall";

export default async function Home() {
  const getData = getRequestFunction(apiAuth.cat);
  const getData2 = getRequestFunction(apiAuth.dog);

  const dogs = await getData2("https://api.thedogapi.com/v1/breeds?limit=6");
  const cats = await getData("https://api.thecatapi.com/v1/breeds?limit=6");

  const dogsAndCats = combineAnimals(cats, dogs);

  return (
    <main className="grid p-5 gap-5 grid-rows-12  box-border w-full  sm:grid-cols-2 sm:grid-rows-6 sm:p-5 sm:gap-5 md:grid-cols-2 md:grid-rows:6  md:p-10 md:gap-10  lg:grid-cols-3 lg:grid-rows-4 lg:p-10 lg:gap-10 xl:grid-cols-4 xl:grid-rows-3 xl:p-16 md:h-auto lg:h-full">
      {dogsAndCats.map((animal: UpdatedAnimal) => (
        <Card
          id={animal.image.id}
          key={animal.id}
          url={animal.image.url}
          breed={animal.name}
          width={animal.image.width}
          height={animal.image.height}
          animalType={animal.animalType}
        />
      ))}
    </main>
  );
}
