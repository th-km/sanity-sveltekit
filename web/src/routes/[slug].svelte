<script context="module">
  import client from '$lib/client'

  export async function load({ page }) {
    const query = `*[_type == "movie" && slug.current == $slug][0] {
      title,
      "poster": poster.asset,
      overview,
    }`

    const movie = await client.fetch(query, { slug: page.params.slug })

    return {
      props: { movie }
    }
  }
</script>

<script>
  import BlockContent from '$lib/portable-text'
  import { urlFor } from '$lib/image-url'

  export let movie
  export const customSerializers = {}

  $: ({ title, poster, overview } = movie)
</script>

<div>
  <a href="/">&larr; Back to home</a>
  <h1>{title}</h1>
  <img src={urlFor(poster).width(600).height(400)} alt={title} />

  <div>
    <BlockContent blocks={overview} serializers={customSerializers} />
  </div>
</div>

<style>
  :global(a) {
    color: black;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  a {
    display: flex;
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
  }

  div > * + * {
    margin-top: 1.5rem;
  }
</style>
