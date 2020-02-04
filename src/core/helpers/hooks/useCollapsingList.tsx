import { MutableRefObject } from 'react';
import { useSpring } from 'react-spring';

import { useMeasure } from '@app/core/helpers/hooks/useMeasure';

export const useCollapsingList = (
  ref: MutableRefObject<HTMLElement | undefined>,
  isDown?: boolean,
) => {
  const {
    bounds: { height: viewHeight },
  } = useMeasure(ref);
  const { transform: innerTransform, height: outerHeight } = useSpring({
    height: isDown ? viewHeight : 0,
    transform: `translate3d(0, ${isDown ? 0 : -30}px, 0)`,
  });
  return {
    outerHeight,
    innerTransform,
  };
};
