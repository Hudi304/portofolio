// import { TableFilter, TableResponse } from '@/api/api.types'
import { debounce } from 'lodash'

// const INVALID_IDENTIFIER =
//   '\nThe store you passed to the <Table/> component expects an API call that\n' +
//   'needs a uniqueIdentifier (id, hash, address etc...)\n' +
//   'looks like that Identifier is : ' +
//   'uniqueIdentifier='

// const INVALID_FUNCTION =
//   '\nThe store you passed to the <Table/> component expects a function \n' +
//   'that performs a HTTP request that has the type API_Call_ID_Body<M, F> or API_Call_type<M, F>:\n' +
//   'API_Call_ID_Body<M, F> = (uniqueIdentifier: string, body: TableFilter<F>) => Promise<TableResponse<M>>' +
//   'API_Call_Body<M, F> = (body: TableFilter<F>) => Promise < TableResponse < M >>' +
//   'where M is a DTO and F is a TableFiler'

// export type API_Call_ID_Body<M, F> = (
//   uniqueIdentifier: string,
//   body: TableFilter<F>,
// ) => Promise<TableResponse<M>>

// export type API_Call_Body<M, F> = (
//   body: TableFilter<F>,
// ) => Promise<TableResponse<M>>

// export type API_Call_type<M, F> = API_Call_ID_Body<M, F> | API_Call_Body<M, F>

// //TODO check this using in keyword
// export function is_API_Call_Body<M, F>(
//   apiCall: API_Call_ID_Body<M, F> | API_Call_Body<M, F>,
// ): apiCall is API_Call_Body<M, F> {
//   return apiCall.length === 1 //? number of parameters
// }

// export function is_API_Call_ID_Body<M, F>(
//   apiCall: API_Call_ID_Body<M, F> | API_Call_Body<M, F>,
// ): apiCall is API_Call_ID_Body<M, F> {
//   return apiCall.length === 2 //? number of parameters
// }

// /** This function checks the type of the apiCall function given as parameter and performs it
//  * with the appropriate parameters.
//  *  - apiCall(body : TableFilter)
//  *  - apiCall(uniqueIdentifier : string, body : TableFilter)
//  *   */
// export async function loadData<M, F>(
//   apiCall: API_Call_ID_Body<M, F> | API_Call_Body<M, F>,
//   filter: TableFilter<F>,
// ) {
//   //? check against the apiCall Type
//   if (is_API_Call_Body(apiCall)) {
//     return await apiCall(filter)
//   }

//   if (is_API_Call_ID_Body(apiCall)) {
//     const { uniqueIdentifier } = filter
//     if (uniqueIdentifier === undefined || uniqueIdentifier === null) {
//       throw new Error(INVALID_IDENTIFIER + uniqueIdentifier)
//     }
//     return await apiCall(uniqueIdentifier, filter)
//   }
//   //? I don't think it can get here
//   throw new Error(INVALID_FUNCTION)
// }
// /** lodash leading debounce 200ms */
// export function debounced(fn: any) {
//   return debounce(fn, 200, { leading: true })
// }
