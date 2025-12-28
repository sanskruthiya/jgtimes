<script lang="ts">
    import type { ResourceInfo } from '$lib/getResources';

    export let resources: ResourceInfo[] = [];
    export let filteredResources: ResourceInfo[] = [];
    export let selectedCategories: string[] = [];
    export let selectedLanguages: string[] = [];

    let isFilterOpen: boolean = false;

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

    $: hasActiveFilters = selectedCategories.length > 0 || selectedLanguages.length > 0;

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

    function toggleFilter(): void {
        isFilterOpen = !isFilterOpen;
    }
</script>

<!-- Filter Toggle Button -->
<div class="mb-6">
    <button
        on:click={toggleFilter}
        class="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
               rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700
               transition-all duration-200 {hasActiveFilters ? 'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20' : ''}"
    >
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="p-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                    </svg>
                </div>
                <div class="text-left">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Filter Resources
                        {#if hasActiveFilters}
                            <span class="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                                {selectedCategories.length + selectedLanguages.length}
                            </span>
                        {/if}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Showing {filteredResources.length} of {resources.length} resources
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                {#if hasActiveFilters}
                    <span class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {selectedCategories.length + selectedLanguages.length} active
                    </span>
                {/if}
                <svg 
                    class="w-5 h-5 text-gray-500 transition-transform duration-200 {isFilterOpen ? 'rotate-180' : ''}"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    </button>

    <!-- Filter Content -->
    <div class="overflow-hidden transition-all duration-300 ease-in-out {isFilterOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}">
        <div class="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <!-- Clear All Button -->
            {#if hasActiveFilters}
                <div class="flex justify-end mb-4">
                    <button 
                        on:click={clearFilters}
                        class="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                               rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 
                               border border-gray-300 dark:border-gray-600"
                    >
                        ✕ Clear All Filters
                    </button>
                </div>
            {/if}
            <div class="space-y-6">
                <!-- Category Filters -->
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Categories</h4>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        {#each allCategories as category}
                            <button
                                on:click={() => toggleCategory(category)}
                                class="px-3 py-2 text-sm rounded-lg transition-colors duration-200 border
                                       {selectedCategories.includes(category) 
                                        ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-600 dark:border-blue-600' 
                                        : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'}"
                            >
                                {category}
                            </button>
                        {/each}
                    </div>
                </div>

                <!-- Language Filters -->
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Languages</h4>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        {#each allLanguages as language}
                            <button
                                on:click={() => toggleLanguage(language)}
                                class="px-3 py-2 text-sm rounded-lg transition-colors duration-200 border
                                       {selectedLanguages.includes(language) 
                                        ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-600 dark:border-blue-600' 
                                        : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'}"
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
    </div>
</div>
