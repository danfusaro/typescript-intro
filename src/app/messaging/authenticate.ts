export interface Authenticate {
    isAuthenticated(): boolean;
    // Authenticate the user and return an auth token
    authenticate(username: string, password: string): boolean;
}
