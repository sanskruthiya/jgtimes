<script>
    let { data } = $props();
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import ArticleLink from '$lib/components/ArticleLink.svelte';
    
    let showHeader = $state(false);
    let showContent = $state(false);
    let showSidebar = $state(false);
    let lang = $state('en');

    /** @type {Record<string, string>} */
    const langLabels = { en: 'EN', ja: '日本語', es: 'Español', fr: 'Français', pt: 'Português', zh: '中文', ko: '한국어' };

    const availableLanguages = $derived(['en', ...Object.keys(data.translations ?? {})]);
    const hasTranslations = $derived(Object.keys(data.translations ?? {}).length > 0);
    const currentMetadata = $derived(lang !== 'en' && data.translations?.[lang]?.metadata ? data.translations[lang].metadata : data.metadata);
    const currentContent = $derived(lang !== 'en' && data.translations?.[lang]?.htmlContent ? data.translations[lang].htmlContent : data.htmlContent);

    onMount(() => {
        setTimeout(() => showHeader = true, 100);
        setTimeout(() => showContent = true, 400);
        setTimeout(() => showSidebar = true, 700);
    });
</script>

<svelte:head>
  <title>{currentMetadata?.title || 'Article'}</title>
  <meta name="description" content={currentMetadata?.description || currentMetadata?.title || 'Article'} />
</svelte:head>
  
{#if showHeader}
<div class="pb-12 px-0 md:pt-3 md:px-6 flex flex-col items-center" in:fade="{{ duration: 600, delay: 0 }}">
    <!--
    <div>
      <img class="h-96 w-full object-cover rounded-lg" src={`/thumbnails/${data.metadata?.thumbnail}`}/>
    </div>
    -->
    <h1 class="text-3xl font-semibold mt-8">{currentMetadata?.title || 'Untitled'}</h1>
    <div class="flex justify-center items-center w-full mt-4 flex-wrap gap-y-2">
      {#if currentMetadata?.category}
        {#if Array.isArray(currentMetadata?.category)}
          {#each currentMetadata.category as category}
            <p class="inline-flex items-center px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs mr-2">
              {category}
            </p>
          {/each}
        {:else}
          <p class="inline-flex items-center px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs mr-2">
            {currentMetadata.category}
          </p>
        {/if}
      {/if}
      {#if currentMetadata?.date}
        <p class="text-md text-gray-700 dark:text-gray-300 ml-2">{currentMetadata.date}</p>
      {/if}
      {#if currentMetadata?.author}
        {#if Array.isArray(currentMetadata.author)}
          <p class="text-md text-gray-700 dark:text-gray-300 ml-2">by {currentMetadata.author.join(', ')}</p>
        {:else}
          <p class="text-md text-gray-700 dark:text-gray-300 ml-2">by {currentMetadata.author}</p>
        {/if}
      {/if}
    </div>
    {#if hasTranslations}
    <div class="flex items-center gap-1 mt-4">
      {#each availableLanguages as language}
      <button
        onclick={() => lang = language}
        class="px-3 py-1 text-sm rounded-full border transition-colors duration-200 {lang === language ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border-gray-800 dark:border-gray-200' : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-gray-500'}"
      >{langLabels[language] ?? language.toUpperCase()}</button>
      {/each}
    </div>
    {/if}
</div>
{/if}
  
<div class="grid grid-cols-1 md:grid-cols-[3fr,auto] gap-4 mx-auto max-w-[1280px]">
    <div>
        {#if showContent}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <article class="markdown-body mb:pr-4 overflow-auto" in:fade="{{ duration: 800, delay: 0 }}">{@html currentContent}</article>

        {/if}
    </div>

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