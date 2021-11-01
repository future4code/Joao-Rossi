import * as bcrypt from 'bcryptjs';

export default class HashManager {
  hash = async (plainText: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    return (await bcrypt.hash(plainText, salt)).toString()
  }

  compare = async (plainText: string, cypherText: string): Promise<boolean> => {
    console.log(`plainText: ${plainText}, cypherText: ${cypherText}`)
    return bcrypt.compare(plainText, cypherText)
  }
}