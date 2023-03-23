

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getSession } from 'next-auth/react';
import { ParsedUrlQuery } from 'querystring';

export async function auth(
  context: GetServerSidePropsContext<ParsedUrlQuery>,
): Promise<GetServerSidePropsResult<{}>> {
  //if logged in dont access login page

  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
}