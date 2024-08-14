import { Animal } from "../types/animalsType";

export const apiAuth = {
  dog: "live_bHR3DMJt7F4IRlteC6ShIy93TLsbC8VymXtrJPbmQQisOXtBCUZ7u6pRht6RUiFT",
  cat: "live_gZuFFCqK08BevPB9x4UuZ8mrQy0LhFXCWM4tU8EPieeDimuRajyREVlWtn1UE5jE"
}

type RequestOption = {
  method: string;
  headers: Headers;
};

type GetRequestFunction = (url: string) => Promise<Animal[]>

export function getRequestFunction<T>(auth: string): GetRequestFunction {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": `${auth}`,
  });

  const requestOptions: RequestOption = {
    method: "GET",
    headers: headers,
  };

  const getData = async (url: string): Promise<Animal[]> => {

    try {
        const response = await fetch(url, requestOptions);
        const data: Animal[] = await response.json();
        return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return getData;
};
