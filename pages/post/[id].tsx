import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React from 'react';
import { compose } from 'recompose';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default compose(observer)(Post);
