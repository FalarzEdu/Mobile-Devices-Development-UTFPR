export function filterCategory(data: Array<any>): Array<string> {
  let set = new Set(
    data.map((dataPiece) => dataPiece && dataPiece.destination)
  );

  const result = Array.from(set);
  return result.sort();
}

import { SectionListData } from "react-native";

interface Passenger {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
}

interface Section extends SectionListData<Passenger> {
  title: string;
  data: Passenger[];
  passengerCount: number;
}

import data from "../services/data-passengers";

export default function filterList(data: Array<Passenger>): Array<Section> {
  const categories: Array<string> = filterCategory(data);
  const result: Array<Section> = categories.map((category) => ({
    title: category,
    data: [],
    passengerCount: 0,
  }));

  console.log(categories);
  console.log(result);

  data.forEach((passenger) => {
    categories.forEach((category, index) => {
      if (passenger.origin === category || passenger.destination === category) {
        result[index].data.push(passenger);
        result[index].passengerCount += 1;
      }
    });
  });

  return result;
}

filterList(data);
