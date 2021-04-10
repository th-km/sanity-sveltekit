<script context="module">
  import client from '$lib/client'

  export async function load() {
    const query = `*[_type == "movie" && defined(slug)]|order(releaseDate desc){
      title,
      "slug": slug.current,
      "poster": poster.asset,
    }`

    const movies = await client.fetch(query)

    return {
      props: { movies }
    }
  }
</script>

<script>
  import { urlFor } from '$lib/image-url'
  export let movies
</script>

<h1>Movies</h1>
<ul>
  {#each movies as { slug, title, poster }}
    <li>
      <a href="/{slug}">
        <figure class="ratio">
          <img src={urlFor(poster).width(600).height(400)} alt={title} />
        </figure>
      </a>
      <h2>{title}</h2>
    </li>
  {/each}
</ul>

<style>
  h1 {
    font-size: 2rem;
    font-weight: 800;
  }

  h2 {
    margin-top: 0.25rem;
    font-size: 1.25rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 2rem;
    margin-top: 1rem;
  }

  li > * + * {
    margin-top: 0.25rem;
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
</style>
