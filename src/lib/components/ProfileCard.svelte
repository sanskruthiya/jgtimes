<script lang="ts">
  export let profile: any;
  let isExpanded = false;
  
  function toggleExpanded() {
    isExpanded = !isExpanded;
  }

  function getContactLabel(type: string): string {
    const labels: Record<string, string> = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      contact: 'Contact Form',
      email: 'Email',
      twitter: 'X',
      x: 'X'
    };
    return labels[type] || type;
  }
</script>

<div class="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto mb-8">
  <!-- プロフィール画像 -->
  {#if profile.image}
    <img src={profile.image} alt={profile.name} class="w-60 h-60 rounded-full shadow-md mb-4">
  {/if}

  <!-- 名前と職業 -->
  <h1 class="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">{profile.name}</h1>
  <p class="text-lg text-gray-600 dark:text-gray-300">{profile.title}</p>

  <!-- 経歴 -->
  <section class="mt-6 text-left w-full">
    <h2 class="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Background</h2>
    <div class="relative">
      <div class="{isExpanded ? '' : 'overflow-hidden'}" style="{isExpanded ? '' : 'max-height: 4.5rem;'}">
        <p class="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-200">
          {profile.background}
        </p>
      </div>
      
      {#if !isExpanded}
        <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
      {/if}
      
      <button 
        on:click={toggleExpanded}
        class="mt-3 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200 cursor-pointer"
      >
        {isExpanded ? 'Show less' : 'Read more'}
      </button>
    </div>

    <!-- Contact & SNS -->
    {#if profile.contacts && profile.contacts.length > 0}
      <h2 class="text-xl font-bold mt-6 text-gray-900 dark:text-gray-100">Contact & SNS</h2>
      <ul class="space-y-2 mt-6">
        {#each profile.contacts as contact}
          <li class="flex items-center">
            <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d={contact.icon}/>
            </svg>
            <a class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300" href={contact.url} target="_blank">
              {getContactLabel(contact.type)}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</div>
