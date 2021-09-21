export interface IPackage {
  id: number | string,
  name: string,
  code: string,
  description: string,
  lowInvestmentLimit: number,
  highInvestmentLimit: number,
  image: string;
  createdOn?: Date,
  updatedOn?: Date
}

export const emptyPackage: IPackage = {
  id: 0,
  name: "",
  code: "",
  description: "",
  image: "",
  lowInvestmentLimit: 0,
  highInvestmentLimit: 0,
  createdOn: new Date(),
  updatedOn: new Date()
}