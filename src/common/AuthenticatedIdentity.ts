export interface AuthenticatedIdentity {
    name: string;
    id: string;
    email: string;
    emailVerified: boolean;
    provider: string;
    givenName: string;
    familyName: string;
    picture: string;
    locale: string;
    scope: string;
}
