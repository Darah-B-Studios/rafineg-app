export interface IContract {
  id: number | null,
  name: string,
  code: string,
  description: string,
  startDate: Date,
  endDate: Date,
  updatedOn: Date,
  createdOn: Date
}

export const emptyContract: IContract = {
  id: null,
  name: "",
  code: "",
  description: "",
  startDate: new Date(),
  endDate: new Date(),
  updatedOn: new Date(),
  createdOn: new Date()
}