import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';

const login = ({
  providers,
}: {
  providers: { name: string; id: string }[];
}) => (
  <>
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img
        className="mb-5 w-52"
        src="https://links.papareact.com/9xl"
        alt="spotify logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            type="button"
            className="rounded-full bg-[#18D860] p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider?.name}
          </button>
        </div>
      ))}
    </div>
    ;
  </>
);
export default login;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
