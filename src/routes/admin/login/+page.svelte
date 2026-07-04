<script>
  let { form } = $props();
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow p-8">
    <h1 class="text-xl font-semibold mb-6 text-center">Admin Login</h1>

    {#if form?.error}
      <p class="mb-4 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg px-3 py-2">{form.error}</p>
    {/if}

    <form method="POST" class="space-y-4">
      <div>
        <label for="password" class="block text-sm font-medium mb-1">パスワード</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
      >ログイン</button>
    </form>
  </div>
</div>
