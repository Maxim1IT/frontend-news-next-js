    import styled from "styled-components";
    import React from "react";
    import { Article } from "@/interface";
    import Image from 'next/image'

    const NewsListItemContainer = styled.div`
        display: flex;
        margin: 0px 0px 18px;

        @media (max-width: 850px) {
            margin: 0px;
        }
    `;

    const NewsListItemText = styled.div`
        height: 100%;
        margin-left: 16px;
        display: flex;
        max-width: 100%;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;

        @media (max-width: 850px) {
            margin-left: 24px;
        }
        
        @media (max-width: 480px), screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2){
            margin-left: 16px;
        }
        
        a {
            text-decoration: none;
            color: rgb(15, 23, 42);
        }

        h3:hover {
        color: rgb(255, 71, 0);
        }
        
        h3{
            font-size: 24px;
            line-height: 26px;
            position: relative;
            color: rgb(15, 23, 42);
            letter-spacing: 0px;
            margin: -2.5px 0px 8px;
            font-weight: 500;

            @media (max-width: 850px) {
                font-size: 20px;
                line-height: 28px;
            }
            
            @media (max-width: 480px), screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2){
                font-size: 14px;
                line-height: 16px;
                font-weight: 500;
            }
            
            }
        }

        p {
            line-height: 20px;
            font-size: 16px;
            font-weight: 400;
            margin: 0px 0px 10px;
            color: rgb(15, 23, 42);

            @media (max-width: 850px) {
              display: none;
            }
        }
    `;


    const NewsListItemImage = styled(Image)`
    @media (max-width: 480px) {
        width: 144px;
        height: max-content;
        margin-right: 0px;
    }
`;

    export const NewsListItem: React.FC<Article> = ({ id, title, thumbnail, description }) => (
        <NewsListItemContainer key={id}>
            <a href="#"><NewsListItemImage width={240} height={126} alt={title.short}
                               src={`https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`}/></a>
            <NewsListItemText>
                <a href="#"> <h3>{title.short}</h3></a>
                <p>{description.intro}</p>
            </NewsListItemText>
        </NewsListItemContainer>
    );