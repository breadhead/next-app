import * as React from 'react';

import { SerializerBlock } from './components/block';
import { SerializerEm } from './components/em';

interface SerializerTypesProps {
  block?: (props: any) => any;
  widgetButton?: (props: any) => any;
  principle?: (props: any) => any;
}

interface SerializerMarksProps {
  em?: (props: any) => any;
}

interface SerializerProps {
  types?: SerializerTypesProps;
  marks?: SerializerMarksProps;
}

export const useSerializer = ({ types, marks }: SerializerProps) => {
  const serializers = {
    types: {
      block: (props: any) => {
        if (!!types && !!types.block) {
          return types.block(props);
        }

        return <SerializerBlock props={props} />;
      },
    },
    marks: {
      em: (props: any) => {
        if (!!marks && marks.em) {
          return marks.em;
        }

        return <SerializerEm props={props} />;
      },
    },
  };

  return serializers;
};
