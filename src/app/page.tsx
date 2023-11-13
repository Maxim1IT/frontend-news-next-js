"use client"

import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import NewsList from "@/pages/NewsList";
import styled from "styled-components";
import Image from 'next/image'

const Wrapper = styled.div`
    margin: 0px auto;
    display: grid;
    width: 100%;
    max-width: 1240px;
`;

const Logo = styled.div`
    display: grid;
    max-width: 1240px;
    margin: 0px auto 36px;
    
    p{
        color: rgb(128, 128, 128);
        font-size: 12.1px;
    }
`;

const Home: React.FC = () => {
  return (
      <ApolloProvider client={client}>
          <Wrapper>
              <Logo>
                  <a href="/"><Image width={170} height={48} alt="logo" src="https://point.md/static/svg/new-point-logo.svg" /></a>
                  <p>Думай и решай свободно</p>
              </Logo>
              <NewsList/>
          </Wrapper>
      </ApolloProvider>
  );
};

export default Home;
