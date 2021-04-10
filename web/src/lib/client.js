import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '',
  dataset: '',
  apiVersion: '2021-03-25',
  useCdn: false
})

export default client
