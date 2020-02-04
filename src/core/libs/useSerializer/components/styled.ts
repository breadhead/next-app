import styled from 'styled-components';

export const DetailText = styled.p`
  margin-bottom: 32px;

  & a {
    color: var(--color-secondary);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SecondaryTitleSmall = styled.h4`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const SecondaryTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
`;

export const ItalicText = styled(DetailText)`
  font-style: italic;
`;

export const StyledPrinciple = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

export const StyledId = styled.span`
  font-size: 120px;
  line-height: 1;
  margin-right: 32px;
`;

export const StyledText = styled.article`
  transition: color 0.3s ease-in;
`;

export const StyledPar = styled.p`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;
