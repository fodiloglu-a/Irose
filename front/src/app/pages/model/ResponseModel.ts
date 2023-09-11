import {CurrentDTO} from "./CurrentDTO";

export interface ResponseModel {
  oznakaFirs: string|null;
  oznakaSecont: string|null;
  startDate: Date|null;
  endDate: Date|null;
  currencyDTO: CurrentDTO|null;
  currencyDTOs: CurrentDTO[]|null;
  weekGraph: { [key: number]: string };
  monthGraph: { [key: number]: string };
  yearGraph: { [key: number]: string };
  fiveYearGraph: { [key: number]: string };
  allTimeGraph: { [key: number]: string };
  profitAndLose: { [key: string]: number };
  firstGraph: { [key: number]: string };
  secondGraph: { [key: number]: string };





}
