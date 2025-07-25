<script>
    export let data;
    import ArticleLink from '$lib/components/ArticleLink.svelte';
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>
  
<div class="pb-12 px-0 md:pt-3 md:px-6 flex flex-col items-center">
    <!--
    <div>
      <img　class="h-96 w-full object-cover rounded-lg"　src={`/thumbnails/${data.metadata.thumbnail}`}/>
    </div>
    -->
    <h1 class="text-3xl font-semibold mt-8">{data.metadata.title}</h1>
    <div class="flex justify-center items-center w-full mt-4">
      <p class="inline-flex items-center px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs mr-2">
        {data.metadata.category}
      </p>
      <p class="text-md text-gray-700 ml-2">{data.metadata.date}</p>
      <p class="text-md text-gray-700 ml-2">by {data.metadata.author}</p>
    </div>
</div>
  
<div class="grid grid-cols-1 md:grid-cols-[3fr,auto] gap-4 mx-auto max-w-[1280px]">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <article class="markdown-body mb:pr-4 overflow-auto">{@html data.htmlContent}</article>
    <aside class="md:w-[360px] md:pl-4 md:pt-0 pt-4">
        <h2 class="text-2xl font-semibold mb-4">More Articles</h2>
        <ul>
            {#each data.articles as article}
            <li>
                <ArticleLink {article} />
            </li>
            {/each}
        </ul>
    </aside>
</div>