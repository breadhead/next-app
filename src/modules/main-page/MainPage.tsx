import * as React from 'react';
import styled from 'styled-components';

import { useStore } from '@app/stores/root/helpers/storeContext';
import { SectionTitle } from '@app/core/primitives/section/Section';
import { useTranslation } from '@app/core/libs/WithTranslate';
import { NewsCard } from '@app/core/components/news-card/NewsCard';

export const MainPage = () => {
  const { data } = useStore();
  const { t } = useTranslation();
  return (
    <>
      <VideoContainer>
        <Video
          autoPlay
          muted
          playsInline
          playsinline
          loop
          src={data.mainPage.video}
        ></Video>
      </VideoContainer>

      <Section>
        <SectionTitle>{t('mainPage.whatsNew')}</SectionTitle>
        <NewsList>
          {data.news.map((newsItem, i) => (
            <NewsCard key={newsItem.title} data={newsItem} promoted={i === 0} />
          ))}
        </NewsList>
      </Section>
    </>
  );
};

const Section = styled.section``;
const NewsList = styled.div``;

const VideoContainer = styled.div`
  height: 37vw;
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
