<script>
    let { data } = $props();
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import ArticleLink from '$lib/components/ArticleLink.svelte';
    
    let showHeader = $state(false);
    let showContent = $state(false);
    let showSidebar = $state(false);

    onMount(() => {
        setTimeout(() => showHeader = true, 100);
        setTimeout(() => showContent = true, 400);
        setTimeout(() => showSidebar = true, 700);
    });
</script>

<svelte:head>
  <title>{data.metadata?.title || 'Article'}</title>
  <meta name="description" content={data.metadata?.description || data.metadata?.title || 'Article'} />
</svelte:head>
  
{#if showHeader}
<div class="pb-12 px-0 md:pt-3 md:px-6 flex flex-col items-center" in:fade="{{ duration: 600, delay: 0 }}">
    <!--
    <div>
      <img　class="h-96 w-full object-cover rounded-lg"　src={`/thumbnails/${data.metadata?.thumbnail}`}/>
    </div>
    -->
    <h1 class="text-3xl font-semibold mt-8">{data.metadata?.title || 'Untitled'}</h1>
    <div class="flex justify-center items-center w-full mt-4">
      {#if data.metadata?.category}
        {#if Array.isArray(data.metadata?.category)}
          {#each data.metadata.category as category}
            <p class="inline-flex items-center px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs mr-2">
              {category}
            </p>
          {/each}
        {:else}
          <p class="inline-flex items-center px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs mr-2">
            {data.metadata.category}
          </p>
        {/if}
      {/if}
      {#if data.metadata?.date}
        <p class="text-md text-gray-700 ml-2">{data.metadata.date}</p>
      {/if}
      {#if data.metadata?.author}
        {#if Array.isArray(data.metadata.author)}
          <p class="text-md text-gray-700 ml-2">by {data.metadata.author.join(', ')}</p>
        {:else}
          <p class="text-md text-gray-700 ml-2">by {data.metadata.author}</p>
        {/if}
      {/if}
    </div>
</div>
{/if}
  
<div class="grid grid-cols-1 md:grid-cols-[3fr,auto] gap-4 mx-auto max-w-[1280px]">
    {#if showContent}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <article class="markdown-body mb:pr-4 overflow-auto" in:fade="{{ duration: 800, delay: 0 }}">{@html data.htmlContent}</article>
    {/if}
    {#if showSidebar}
        <aside class="md:w-[360px] md:pl-4 md:pt-0 pt-4" in:fly="{{ x: 30, duration: 600, delay: 0 }}">
            <h2 class="text-2xl font-semibold mb-4">More Articles</h2>
            <ul>
                {#each (data.articles || []) as article}
                <li>
                    <ArticleLink {article} />
                </li>
                {/each}
            </ul>
        </aside>
    {/if}
</div>