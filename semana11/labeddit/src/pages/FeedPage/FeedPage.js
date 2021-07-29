import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import { goToPostPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import { MainContainer } from './styled'
import {postVote} from '../../services/postVote'
import PostForm from './PostForm';


const FeedPage = () => {

  useProtectedPage()

  const posts = useRequestData([], `${BASE_URL}/posts`)
   const history = useHistory()
  


  const onClickCard = (id) => {
    goToPostPage(history, id)
  }


  const onClickVote = (id, direction, userVote) => {
    postVote(id, direction, userVote)
    

  }
 

  const postCards = posts.map((post) => {
    return <PostCard
      onClick={() => onClickCard(post.id)}
      key={post.id}
      username={post.username}
      title={post.title}
      body={post.body}
      voteSum={post.voteSum}
      commentCount={post.commentCount}
      onClickUp={() => onClickVote(post.id, 1, post.userVote ) }
      onClickDown={() => onClickVote(post.id, -1, post.userVote) }
    />
  })

  return <MainContainer>

    <PostForm />

    {postCards}


  </MainContainer>
}

export default FeedPage 