export interface CurrentDTO {
  isSelected: boolean|null;
  datum: Date | null;
  sifra: string | null;
  exchangeRate: BigInteger | null;
  oznaka: string | null;
  rateDay: number | null;
  rateWeek: number | null;
  rateMonth: number | null;
  rateYear: number | null;
  rateFiveYear: number | null;
  rateAllTime: number | null;

}
