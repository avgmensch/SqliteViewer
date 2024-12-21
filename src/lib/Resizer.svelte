<script lang="ts">
	import { type Snippet } from 'svelte';
	let { children }: { children: Snippet<[]> } = $props();
</script>

<div class="flex w-screen justify-center shadow-black">
	<div class="shadow-xl shadow-gray-300">
		<div class="w-screen xl:max-w-[1280px]">
			{@render children()}
		</div>
	</div>
</div>
