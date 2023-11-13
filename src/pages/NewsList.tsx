import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import { GetArticlesData } from "@/interface";
import { NewsListItem } from '@/components/NewsListItem';

const GET_ARTICLES = gql`
  query GetArticles($skip: Int!, $take: Int!) {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
      lang: "ru",
      skip: $skip,
      take: $take
    ) {
      id
      title {
        short
      }
      thumbnail
      description{
        intro
      }
      url
    }
  }
`;

const NewsListContainer = styled.div`
    max-width: 100%;
    padding: 24px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    
    h1{
        margin-bottom: 24px;
        color: rgb(15, 23, 42);
        font-weight: 700;
        font-size: 28px;
        margin-top: 0px;
    }
`;

const NewsList: React.FC = () => {
    const [loadingMore, setLoadingMore] = useState(false);
    const { loading, error, data, fetchMore } = useQuery<GetArticlesData>(GET_ARTICLES, {
        variables: { skip: 0, take: 10 },
    });

    useEffect(() => {
        const handleScroll = () => {
            if (
                !loadingMore &&
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                handleLoadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [data, loadingMore]);

    const handleLoadMore = async () => {
        setLoadingMore(true);

        await fetchMore({
            variables: { skip: data?.contents.length, take: 10 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    contents: [...prev.contents, ...fetchMoreResult.contents],
                });
            },
        });

        setLoadingMore(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <NewsListContainer>
            <h1>Новости</h1>
            {data?.contents.map((article) => (
                <NewsListItem key={article.id} {...article} />
            ))}
        </NewsListContainer>
    );
};

export default NewsList;
