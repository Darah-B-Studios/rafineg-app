export interface IPackage {
  id: "",
  name: string,
  code: string,
  description: string,
  lowInvestmentLimit: number,
  highInvestmentLimit: number,
  createdOn: Date,
  updatedOn: Date
}

export const emptyPackage: IPackage = {
  id: "",
  name: "",
  code: "",
  description: "",
  lowInvestmentLimit: 0,
  highInvestmentLimit: 0,
  createdOn: new Date(),
  updatedOn: new Date()
}