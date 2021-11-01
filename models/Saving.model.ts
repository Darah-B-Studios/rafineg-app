export interface ISaving {
  id: number;
  user: string;
  package: string;
  telephone: string;
  amount: number;
  createOn: Date;
  updateOn: Date;
}

export const emptySaving: ISaving = {
  id: 0,
  user: "",
  package: "",
  telephone: "",
  amount: 0,
  createOn: new Date(),
  updateOn: new Date(),
};
