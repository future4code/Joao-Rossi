import { UserRepository } from "../business/UserRepository";
import * as admin from "firebase-admin";
import User from "../model/User";

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://Aula-Lovelace.firebaseio.com'
});

export class FirestoreUserDatabase implements UserRepository {
    // aqui vem todo um código de conxão com firestore
    // Ao invés de conectar com SQL, usamos o firestore

    async create(user: User): Promise<User> {
        try {
            await admin.firestore().collection("labook_users").doc(user.getId()).set({
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })

            return user
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async findByEmail(email: string): Promise<User | null> {
        try {
            const result = await admin.firestore().collection("labook_users").where('email', '==', email).get()

            const userResult = result.docs[0] as any

            if (!userResult) {
                return null
            }

            return new User(
                userResult.id,
                userResult.name,
                userResult.email,
                userResult.password,
            )
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}