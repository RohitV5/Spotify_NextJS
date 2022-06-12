import NextAuth, { User } from 'next-auth';
import { getToken, JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify';

// import FacebookProvider from 'next-auth/providers/facebook';
// import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';

const refreshAccessToken = async (token: JWT) => {
  try {
    spotifyApi.setAccessToken(token.access_token as string);
    spotifyApi.setRefreshToken(token.refresh_token as string);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      // if first value exist use that otherwise fallback
    };
  } catch (error) {
    // console.error(error);
    return { ...token, error: 'RefreshAccessTokenError' };
  }
};

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || '',
      authorization: LOGIN_URL,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID || '',
    //   clientSecret: process.env.APPLE_SECRET || '',
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID || '',
    //   clientSecret: process.env.FACEBOOK_SECRET || '',
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID || '',
    //   clientSecret: process.env.GOOGLE_SECRET || '',
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>',
    // }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial sign in
      if (account && user) {
        return {
          ...getToken,
          refreshToken: account.refresh_token || '',
          accessToken: account.access_token || '',
          username: account.provideAccountId || '',
          accessTokenExpires: (account.expires_at || 0) * 1000 || 0,
          // handling expiry time in milliseconds
        };
      }
      //  else {
      //   return {
      //     ...getToken,
      //     refreshToken: '',
      //     accessToken: '',
      //     username: '',
      //     accessTokenExpires: 0, //handling expiry time in milliseconds
      //   };
      // }

      // return previous token if the access token not expired yet
      if (Date.now() < (token?.accessTokenExpires as number)) {
        return token;
      }

      // console.error('ACCESS TOKEN HAS EXPIRED, REFRESHING....');
      return refreshAccessToken(token);

      // Access token has expired
    },

    async session({ session, token }) {
      const sessionReturn = session;
      sessionReturn.user = token?.user as User;
      sessionReturn.accessToken = token.accessToken;
      sessionReturn.accessToken = token.accessToken;
      sessionReturn.error = token.error;

      return sessionReturn;
    },
  },
});
