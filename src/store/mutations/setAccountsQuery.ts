import { AccountData, userQuery } from "src";

export async function setAccountsQuery(
  _link: any,
  { ...nextState }: AccountData,
  { cache }: any,
) {
  const prev = await cache.readQuery({ query: userQuery })

  await cache.writeQuery({
    query: userQuery,
    data: { ...prev, ...nextState }
  })
  return null
}