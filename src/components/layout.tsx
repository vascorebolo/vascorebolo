import React, { FC } from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link';

import SHeader from '@/components/header';
import MainWrapper from './containers/main-wrapper/main-wrapper';

const SMain = styled.main`
  min-height: 10vh;
  padding-top: 10vh;
`

interface IBodyProps {
  title?: string;
  children: React.ReactNode;
};

export default function Layout<IBodyProps>({ title = '', children = <></> }) {
  return (
    <>
      <Head>
        <title>Vasco Rebolo</title>
        <meta name="description" content="personal website for the photography projects and works" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SHeader>
        <MainWrapper>
          <h1>
            <Link href="/">Vasco Rebolo</Link>
            <span> / { title ? title : '~' }</span>
          </h1>
        </MainWrapper>
      </SHeader>
      <SMain>
        { children }
      </SMain>
    </>
  )
};
