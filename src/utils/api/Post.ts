import { API } from './API'

export const getPosts = async (): Promise<any> => {
  try {
    const { data } = await API.get('/posts')
    return data
  } catch (error) {
    console.log('Error no request')
  }
}
