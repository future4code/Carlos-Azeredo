export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastrar')
}

export const goToFeedPage = (history) => {
    history.push('/')
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}