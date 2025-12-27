<script lang="ts">
    import { Fa } from 'svelte-fa'
    import { faStar } from '@fortawesome/free-solid-svg-icons'
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    import type { ResourceInfo } from '$lib/getResources';
    
    export let resource: ResourceInfo;
    
    let isExpanded: boolean = false;
    let descriptionHeight: number = 0;
    let descriptionElement: HTMLElement;

    $: rotateClass = isExpanded ? 'rotate-180' : 'rotate-0';
</script>
  
<div class="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg overflow-hidden m-4 max-w-md mx-auto h-full transition-all duration-200 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600">
    <a href={resource.link} class="flex justify-center mt-4 px-4 overflow-hidden group cursor-pointer">
      <img 
        class="w-full h-auto max-h-60 object-contain transition-transform duration-200 group-hover:scale-105" 
        src={resource.image} 
        alt={resource.title_en} 
      />
    </a>
    <div class="p-4 flex flex-col justify-between flex-grow border-t border-gray-100 dark:border-gray-700 mt-4">
      <div>
          <h2 class="text-lg font-bold mb-1">{resource.title_en}</h2>
          <h3 class="text-sm text-gray-600 dark:text-gray-400 mb-2">{resource.title_jp}</h3>
          <button
            class="w-full flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 mb-2"
            on:click={() => isExpanded = !isExpanded}
            aria-expanded={isExpanded}
            aria-controls="description-{resource.title_en.toLowerCase().replace(/ /g, '-')}"
          >
            <span class="text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              Description
            </span>
            <Fa
              icon={faChevronDown}
              class="w-4 h-4 transition-transform duration-300 ease-in-out {rotateClass}"
            />
          </button>
          <div
            id="description-{resource.title_en.toLowerCase().replace(/ /g, '-')}"
            class="overflow-hidden transition-all duration-300 ease-in-out"
            style="max-height: {isExpanded ? 'none' : '0px'};"
          >
            <div
              class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 transform transition-transform duration-300 ease-in-out {isExpanded ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}"
            >
              <p
                class="text-base text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {resource.description}
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex text-sm flex-wrap">
                {#each resource.category as category, i}
                  <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-full mr-2 mb-2">{category}</span>
                {/each}
                {#each resource.languages as language, i}
                  <span class="px-2 py-1 bg-green-200 text-green-800 rounded-full mr-2 mb-2 font-medium">
                    {#if language === 'ja' && resource.languages.length === 1}🇯🇵 JP only
                    {:else if language === 'ja'}🇯🇵 JP
                    {:else if language === 'en'}🇺🇸 EN
                    {:else}{language}
                    {/if}
                  </span>
                {/each}
            </div>
          </div>
      </div>
      <a href={resource.link} class="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 text-center transition-colors duration-200">Visit Website</a>
    </div>
</div>
