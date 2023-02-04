// Callback functions

const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false

    if (error) {
      return onError(new Error('Não foi possível logar o usuário'))
    }

    console.log('Usuário logado')
    onSuccess({ email })
  }, 1500)
}

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(['Vídeo1', 'Vídeo2', 'Vídeo3'])
  }, 1500)
}

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: 'Aula de JS Assíncrono' })
  }, 2000)
}

const user = loginUser(
  'teste@gmail.com',
  '123456',
  user => {
    getUserVideos(user.email, videos => {
      console.log({ videos })
      getVideoDetails(videos[1], videoDetails => {
        console.log(videoDetails)
      })
    })
  },
  error => {
    console.log(error)
  }
)
