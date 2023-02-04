// Async/Await

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false

    if (error) {
      return reject(new Error('Não foi possível logar o usuário'))
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
        return reject(new Error('Não foi possível acessar os vídeos'))
      }

      console.log('Vídeos obtidos')
      resolve(['Vídeo1', 'Vídeo2', 'Vídeo3'])
    }, 1500)
  })
}

const getVideoDetails = video => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false

      if (error) {
        return reject(new Error('Não foi possível obter detalhes do vídeo'))
      }

      console.log('Detalhes do vídeo obtidos')
      resolve({ title: 'Aula de JS Assíncrono' })
    }, 2000)
  })
}

// O async/await é, basicamente, uma forma de consumir Promises, muito utilizado para consuir APIs

const displayUser = async () => {
  try {
    const user = await loginUser('teste@gmail.com', '123456')
    // Essa linha coloca o `resolve` da `loginUser` na const `user`.
    // No `await` o JS espera o retorno da `loginUser` para seguir para a próxima linha,
    // Portanto, posso dar um comando que dependa do valor de `user`.
    const userVideos = await getUserVideos(user.email)
    const fisrtVideoDetails = await getVideoDetails(userVideos[0])
    console.log({ user, userVideos, fisrtVideoDetails })
  } catch (error) {
    console.log({ error })
  }
}

displayUser()
