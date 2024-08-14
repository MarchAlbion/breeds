import { Animal } from "../types/animalsType";

export const combineAnimals = (cat: Animal[], dog: Animal[]) => {
    const updatedDogs = dog.map(dog => ({
        ...dog,
        animalType: 'dog'
      }));

      const updatedCats = cat.map(cat => ({
        ...cat,
        animalType: 'cat'
      }));

  const combinedAnimals = [...updatedCats, ...updatedDogs];

  return combinedAnimals;
};