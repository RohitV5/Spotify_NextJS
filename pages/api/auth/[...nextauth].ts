import NextAuth, { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify';

// import FacebookProvider from 'next-auth/providers/facebook';
// import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';

const refreshAccessToken = async (token: JWT) => {
  try {
    spotifyApi.setAccessToken(token.accessToken as string);
    spotifyApi.setRefreshToken(token.refreshToken as string);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    // spotifyApi.setAccessToken(refreshedToken.access_token);
    // const userData = await spotifyApi.getMe();

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      // ...userData,
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
        // spotifyApi.setAccessToken(account.access_token as string);
        // const userData = await spotifyApi.getMe();
        return {
          ...token,
          accessToken: account.access_token || '',
          refreshToken: account.refresh_token || '',
          username: account.provideAccountId || '',
          accessTokenExpires: (account.expires_at || 0) * 1000 || 0,
          // ...userData,
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
      spotifyApi.setAccessToken(token.accessToken as string);
      const userData = await spotifyApi.getMe();
      const sessionReturn: Session = session;
      const images = userData.body.images ? userData.body.images : [];
      // sessionReturn.user = token?.username as User;
      sessionReturn.accessToken = token.accessToken;
      sessionReturn.error = token.error;
      sessionReturn.user = {
        email: userData.body.email,
        name: userData.body.display_name,
        image: images.length > 0 ? images[0].url : '',
      };

      return sessionReturn;
    },
  },
  debug: true,
});
