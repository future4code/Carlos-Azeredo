import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import CommentsCard from '../../components/ComentsCard/ComentsCard';
import PostCard from '../../components/PostCard/PostCard';
import useForm from '../../hooks/useForm'
import { createComment } from '../../services/create';
import { commentVote } from '../../services/commentVote'
import { postVote } from '../../services/postVote'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MainContainer, InputsContainer } from './styled'


const PostPage = () => {
  useProtectedPage()

  const params = useParams()
  const [form, onChange, clear] = useForm({ body: "" })
  const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
  const post = useRequestData([], `${BASE_URL}/posts`)

  const onClickPostVote = (id, direction, userVote) => {
    postVote(id, direction, userVote)


  }

  const thisPost = post.filter((post) => {
    return post.id === params.id
  }).map((post) => {
    return <PostCard
      key={post.id}
      username={post.username}
      title={post.title}
      body={post.body}
      voteSum={post.voteSum}
      userVote={post.uservote}
      onClickUp={() => onClickPostVote(post.id, 1, post.userVote)}
      onClickDown={() => onClickPostVote(post.id, -1, post.userVote)}
    />
  })

  const onClickVote = (id, direction, userVote) => {
    commentVote(id, direction, userVote)


  }





  const mapedComments = postComments.map((comment) => {
    return <CommentsCard
      key={comment.id}
      username={comment.username}
      body={comment.body}
      voteSum={comment.voteSum}
      onClickUp={() => onClickVote(comment.id, 1, comment.userVote)}
      onClickDown={() => onClickVote(comment.id, -1, comment.userVote)}
    />

  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    createComment(params.id, form, clear)

  }



  return <MainContainer>

    {thisPost}
    <InputsContainer>
      <form onSubmit={onSubmitForm}>

        <TextField
          name={'body'}
          value={form.body}
          onChange={onChange}
          label={"Titulo"}
          placeholder={'Título'}
          fullWidth
          margin={'dense'}
          required
        />

        <Button
          type={'submit'}
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
        >Comentar</Button>

      </form>
    </InputsContainer>
    {mapedComments}

  </MainContainer>
}

export default PostPage