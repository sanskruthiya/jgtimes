<script>
  import { enhance } from '$app/forms';
  let { data } = $props();
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-semibold">コメント管理</h1>
      <form method="POST" action="?/logout" use:enhance>
        <button type="submit" class="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline">ログアウト</button>
      </form>
    </div>

    {#if data.comments.length === 0}
      <div class="bg-white dark:bg-gray-800 rounded-xl p-8 text-center text-gray-500 dark:text-gray-400">
        承認待ちのコメントはありません。
      </div>
    {:else}
      <div class="space-y-4">
        {#each data.comments as comment (comment.id)}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  <span class="font-medium text-sm">{comment.author_name}</span>
                  <span class="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">{comment.article_id}</span>
                  <span class="text-xs text-gray-400">{new Date(comment.created_at).toLocaleString('ja-JP')}</span>
                </div>
                <p class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{comment.content}</p>
              </div>
              <div class="flex gap-2 shrink-0">
                <form method="POST" action="?/approve" use:enhance>
                  <input type="hidden" name="id" value={comment.id} />
                  <button type="submit" class="px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors">承認</button>
                </form>
                <form method="POST" action="?/reject" use:enhance>
                  <input type="hidden" name="id" value={comment.id} />
                  <button type="submit" class="px-3 py-1.5 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition-colors">却下</button>
                </form>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
