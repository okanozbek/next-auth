'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginPanel() {
  const { data: session } = useSession();

  return (
    <div className="space-y-4 text-center">
      {!session ? (
        <>
          <p className="text-lg">Giriş yapmadınız.</p>
          <button
            onClick={() => {
              signIn('auth0');
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Auth0 ile Giriş Yap
          </button>
        </>
      ) : (
        <>
          <p className="text-lg">Hoş geldin, {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Çıkış Yap
          </button>
        </>
      )}
    </div>
  );
}
