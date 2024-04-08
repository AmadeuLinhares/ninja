export type AddNewConsentsBody = {
  name: string
  email: string
  consents: string[]
}

export interface AddNewConsentsResponse extends AddNewConsentsBody {
  id: number
}

export type ConsentsResponse = {
  entries: AddNewConsentsResponse[]
  totalItems: number
  currentPage: number
}

export type PaginationParams = {
  pageSize: number
  pageNumber: number
}
