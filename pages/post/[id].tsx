import { useRouter } from 'next/router'
import React from 'react'
import { useStore } from '@app/domain/modules/infrastructure/storeContext'
import { observer } from 'mobx-react'

const Post = observer(() => {
  const router = useRouter()

  const { id } = router.query

  return <p>Post: {id}</p>
})

export default Post
