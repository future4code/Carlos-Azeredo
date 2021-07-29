import React from 'react';
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/create'
import { MainContainer, InputsContainer } from './styled'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const PostForm = () => {

    const [form, onChange, clear] = useForm({ title: "", body: "" })



    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form)
        clear()

    }
  

    return <MainContainer>
        <InputsContainer>
            <form onSubmit={onSubmitForm}>

                <TextField
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    label={"Titulo"}
                    placeholder={'Título'}
                    multiline
                    fullWidth
                    required
                />

                <TextField
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    label={"Post"}
                    placeholder={'Post'}
                    margin={'dense'}
                    fullWidth
                    required

                />

                <Button
                    type={'submit'}
                    variant="contained"
                    color="primary"
                    disableElevation
                    fullWidth
                >Postar</Button>


            </form>
        </InputsContainer>
    </MainContainer>
}

export default PostForm