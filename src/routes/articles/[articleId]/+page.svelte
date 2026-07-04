<script>
    let { data, form } = $props();
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { enhance } from '$app/forms';
    import ArticleLink from '$lib/components/ArticleLink.svelte';
    
    let showHeader = $state(false);
    let showContent = $state(false);
    let showSidebar = $state(false);
    let lang = $state('en');

    const hasJapanese = data.htmlContentJa !== null && data.htmlContentJa !== undefined;
    const currentMetadata = $derived(lang === 'ja' && data.metadataJa ? data.metadataJa : data.metadata);
    const currentContent = $derived(lang === 'ja' && data.htmlContentJa ? data.htmlContentJa : data.htmlContent);

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
    {#if hasJapanese}
    <div class="flex items-center gap-1 mt-4">
      <button
        onclick={() => lang = 'en'}
        class="px-3 py-1 text-sm rounded-full border transition-colors duration-200 {lang === 'en' ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border-gray-800 dark:border-gray-200' : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-gray-500'}"
      >EN</button>
      <button
        onclick={() => lang = 'ja'}
        class="px-3 py-1 text-sm rounded-full border transition-colors duration-200 {lang === 'ja' ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border-gray-800 dark:border-gray-200' : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-gray-500'}"
      >日本語</button>
    </div>
    {/if}
</div>
{/if}
  
<div class="grid grid-cols-1 md:grid-cols-[3fr,auto] gap-4 mx-auto max-w-[1280px]">
    <div>
        {#if showContent}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <article class="markdown-body mb:pr-4 overflow-auto" in:fade="{{ duration: 800, delay: 0 }}">{@html currentContent}</article>

        <!-- Comment section -->
        <section class="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 class="text-2xl font-semibold mb-6">Comments</h2>

            {#if data.comments && data.comments.length > 0}
                <div class="space-y-4 mb-8">
                    {#each data.comments as comment (comment.id)}
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="font-medium text-sm">{comment.author_name}</span>
                                <span class="text-xs text-gray-400">{new Date(comment.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            </div>
                            <p class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{comment.content}</p>
                        </div>
                    {/each}
                </div>
            {:else}
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-8">No comments yet.</p>
            {/if}

            {#if form?.success}
                <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-6">
                    <p class="text-green-700 dark:text-green-400 text-sm">{form.message}</p>
                </div>
            {:else}
                {#if form?.success === false}
                    <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-4">
                        <p class="text-red-700 dark:text-red-400 text-sm">{form.message}</p>
                    </div>
                {/if}
                <form method="POST" action="?/postComment" use:enhance class="space-y-4">
                    <div>
                        <label for="author_name" class="block text-sm font-medium mb-1">Name <span class="text-gray-400 font-normal">(optional)</span></label>
                        <input
                            id="author_name"
                            name="author_name"
                            type="text"
                            placeholder="Anonymous"
                            class="w-full max-w-xs px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label for="content" class="block text-sm font-medium mb-1">Comment <span class="text-red-400">*</span></label>
                        <textarea
                            id="content"
                            name="content"
                            rows="4"
                            required
                            placeholder="Write a comment..."
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
                    >Submit</button>
                </form>
            {/if}
        </section>
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