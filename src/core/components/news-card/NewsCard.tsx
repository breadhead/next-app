import * as React from 'react';
import styled from 'styled-components';

import { News } from '@app/types/News';
import { Link } from '@app/core/primitives';
import { useImageSrc } from '@app/core/libs/useImageSrc/useImageSrc';

import { ResponsivePicture } from '../responsive-picture/ResponsivePicture';

interface NewsCardProps {
  data: News;
  promoted?: boolean;
}

export const NewsCard = ({ data, promoted }: NewsCardProps) => {
  const date = new Date(data.date).toLocaleDateString();
  const image = useImageSrc(data.image[0]);

  return (
    <Wrapper
      passHref
      href="/"
      isNextLink
      className={promoted ? 'promoted' : ''}
    >
      <a>
        <Image src={image || ''} />
        <Content>
          <Title>{data.title}</Title>
          <DateDecal>{date}</DateDecal>
        </Content>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled(Link)``;
const Image = styled(ResponsivePicture)``;
const Content = styled.div``;
const Title = styled.h3``;
const DateDecal = styled.time``;
