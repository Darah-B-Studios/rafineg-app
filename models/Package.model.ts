export interface IPackage {
  id: string,
  name: string,
  code: string,
  description: string,
  lowInvestmentLimit: number,
  highInvestmentLimit: number,
  createdOn: Date,
  updatedOn: Date
}