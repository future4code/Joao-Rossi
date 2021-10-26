import { connection } from "../connection";

export async function selectUserById(id: string): Promise<any> {
  const userTableName = '19_Users'
  const result = await connection
    .select("*")
    .from(userTableName)
    .where({ id });

  return result[0];
}