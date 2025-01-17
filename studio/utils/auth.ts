import { AuthToken } from "@/types/auth";

export const generateToken = (username: string): AuthToken => {
  return {
    value: Buffer.from(`${username}-${Date.now()}`).toString('base64'),
    expires: Date.now() + 3600000 // 1 hour from now
  };
};

export const isTokenValid = (token: AuthToken): boolean => {
  return Date.now() < token.expires;
}; 