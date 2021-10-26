export type authenticationData = {
    id: string,
    role: USER_ROLES
 }

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
 }

export class User {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly role: USER_ROLES
  ) {}

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }

    getRole(): string {
        return this.role as string
    }

}
