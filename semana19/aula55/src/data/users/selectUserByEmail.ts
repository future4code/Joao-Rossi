const selectUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
   }
 