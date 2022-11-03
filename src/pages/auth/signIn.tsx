import type { NextPage } from 'next';
import Head from 'next/head';
import { signIn } from 'next-auth/react';

import { GoogleIcon } from '@/icons/Google';

const SignInPage: NextPage & { requireAuth: boolean } = () => {
  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold text-center">Sign In for Web OAuth.</h2>
                </div>
                <div className="mt-16 grid space-y-4">
                  <button
                    onClick={() => signIn('google')}
                    className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div className="relative flex items-center space-x-4 justify-center">
                      <div className="absolute left-0 w-5">
                        <GoogleIcon />
                      </div>
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        SignIn with Google
                      </span>
                    </div>
                  </button>
                </div>

                <div className="mt-20 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">
                    By proceeding, you agree to our{' '}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{' '}
                    and confirm you have read our{' '}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignInPage.requireAuth = false;

export default SignInPage;
