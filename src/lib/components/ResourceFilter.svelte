<script lang="ts">
    import type { ResourceInfo } from '$lib/getResources';

    export let resources: ResourceInfo[] = [];
    export let filteredResources: ResourceInfo[] = [];
    export let selectedCategories: string[] = [];
    export let selectedLanguages: string[] = [];

    // Extract unique categories and languages from resources
    $: allCategories = [...new Set(resources.flatMap((r: ResourceInfo) => r.category))].sort();
    $: allLanguages = [...new Set(resources.flatMap((r: ResourceInfo) => r.languages))].sort();

    // Filter resources based on selected filters
    $: {
        filteredResources = resources.filter((resource: ResourceInfo) => {
            const categoryMatch = selectedCategories.length === 0 || 
                selectedCategories.some((cat: string) => resource.category.includes(cat));
            const languageMatch = selectedLanguages.length === 0 || 
                selectedLanguages.some((lang: string) => resource.languages.includes(lang));
            return categoryMatch && languageMatch;
        });
    }

    function toggleCategory(category: string): void {
        if (selectedCategories.includes(category)) {
            selectedCategories = selectedCategories.filter((c: string) => c !== category);
        } else {
            selectedCategories = [...selectedCategories, category];
        }
    }

    function toggleLanguage(language: string): void {
        if (selectedLanguages.includes(language)) {
            selectedLanguages = selectedLanguages.filter((l: string) => l !== language);
        } else {
            selectedLanguages = [...selectedLanguages, language];
        }
    }

    function clearFilters(): void {
        selectedCategories = [];
        selectedLanguages = [];
    }
</script>

<div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
    <div class="flex flex-wrap items-center gap-4 mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Filter Resources</h3>
        <button 
            on:click={clearFilters}
            class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
            Clear All
        </button>
        <span class="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredResources.length} of {resources.length} resources
        </span>
    </div>

    <div class="space-y-4">
        <!-- Category Filters -->
        <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Categories</h4>
            <div class="flex flex-wrap gap-2">
                {#each allCategories as category}
                    <button
                        on:click={() => toggleCategory(category)}
                        class="px-3 py-1 text-sm rounded-full transition-colors {selectedCategories.includes(category) 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800'}"
                    >
                        {category}
                    </button>
                {/each}
            </div>
        </div>

        <!-- Language Filters -->
        <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Languages</h4>
            <div class="flex flex-wrap gap-2">
                {#each allLanguages as language}
                    <button
                        on:click={() => toggleLanguage(language)}
                        class="px-3 py-1 text-sm rounded-full transition-colors {selectedLanguages.includes(language) 
                            ? 'bg-green-500 text-white' 
                            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800'}"
                    >
                        {#if language === 'ja'}🇯🇵 JP
                        {:else if language === 'en'}🇺🇸 EN
                        {:else}{language}
                        {/if}
                    </button>
                {/each}
            </div>
        </div>
    </div>
</div>
