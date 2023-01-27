// Promises

const loginUserPromisse = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false

    if (error) {
      reject(new Error('Não foi possível logar o usuário'))
    }

    console.log('Usuário logado')
    resolve({ email })
  })
}

const getUserVideos = email => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false

      if (error) {
        reject(new Error('Não foi possível acessar os vídeos'))
      }

      resolve(['Vídeo1', 'Vídeo2', 'Vídeo3'])
      console.log({ email })
    }, 1500)
  })
}

const getVideoDetails = video => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false

      if (error) {
        reject(new Error('Não foi possível obter detalhes do vídeo'))
      }

      resolve({ title: 'Aula de JS Assíncrono' })
      console.log({ video })
    }, 2000)
  })
}

loginUserPromisse('teste@gmail.com', '123456')
  .then(user => getUserVideos(user.email))
  .then(videos => getVideoDetails(videos[0]))
  .then(videoDetails => console.log({ videoDetails }))
  .catch(error => console.log({ error }))

// Promise.all

const yt = new Promise(resolve => {
  setTimeout(() => {
    resolve('Vídeos do YouTube')
  }, 1500)
})

const insta = new Promise(resolve => {
  setTimeout(() => {
    resolve('Vídeos do Instagram')
  }, 6500)
})

Promise.all([yt, insta]).then(result => console.log({ result })) // Executa quando todas as Promises forem executadas
