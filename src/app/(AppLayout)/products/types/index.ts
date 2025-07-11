// type CustomResponse<D> = {
//   state: boolean;
//   message: string;
//   statusCode: number;
//   data?: D;
// };
interface TableURLParams {
  page: number;
  per_page: number;
  search: string | number;
}
type TablePaginationParams = {
  [key: string]: number;
};
type MetaData = {
  page: number;
  per_page: number;
  search: string | number;
  total: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
};
type SuccessResponse<Response> = {
  state: true;
  statusCode: number;
  data: Response;
  message: string;
  meta?: MetaData;
  pagination?: TablePaginationParams;
  selected_employee_ids?: string[];
};
type ValidationErrors = {
  [field: string]: string[];
};
type RedirectionErrors = {
  tab: number;
  status: string;
  redirect_tab: string;
};
type ErrorResponse = {
  state: false;
  statusCode: number;
  message: string;
  errors?: ValidationErrors;
  data?: RedirectionErrors | null;
};

type CustomResponse<Response> = SuccessResponse<Response> | ErrorResponse;
export type { CustomResponse, TablePaginationParams, MetaData, TableURLParams };
export interface TableURLParamsTest {
  page: number;
  per_page: number;
  search?: string | number;
}
