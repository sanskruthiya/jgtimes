<script>
    export let article;
    import { format } from 'date-fns';
</script>

<a
    rel="prefetch"
    href="/articles/{article.slug}"
    class="block group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
>
    {#if article.metadata.coverImage}
        <div class="aspect-video w-full overflow-hidden">
            <img
                src={article.metadata.coverImage}
                alt={article.metadata.title}
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
            />
        </div>
    {/if}
    
    <div class="p-6">
        <div class="flex items-center gap-2 mb-3">
            {#if article.metadata.category}
                {#if Array.isArray(article.metadata.category)}
                    {#each article.metadata.category as category}
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {category}
                        </span>
                    {/each}
                {:else}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {article.metadata.category}
                    </span>
                {/if}
            {/if}
            {#if article.metadata.date}
                <time class="text-sm text-gray-500 dark:text-gray-400" datetime={article.metadata.date}>
                    {(() => {
                        try {
                            return format(new Date(article.metadata.date), 'MMM d, yyyy');
                        } catch (e) {
                            console.error("Invalid date format:", article.metadata.date);
                            return '';
                        }
                    })()}
                </time>
            {/if}
        </div>

        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {article.metadata.title}
        </h3>

        {#if article.metadata.excerpt}
            <p class="text-gray-600 dark:text-gray-300 line-clamp-2">
                {article.metadata.excerpt}
            </p>
        {/if}

        {#if article.metadata.tags && article.metadata.tags.length > 0}
            <div class="mt-4 flex flex-wrap gap-2">
                {#each article.metadata.tags as tag}
                    <span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        #{tag}
                    </span>
                {/each}
            </div>
        {/if}
    </div>
</a>