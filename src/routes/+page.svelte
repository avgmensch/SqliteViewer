<script lang="ts">
	import Resizer from '$lib/Resizer.svelte';
	import Logo from '$lib/Logo.svelte';
</script>

<head>
	<title>SQLite Viewer</title>
</head>

<div class="h-screen w-screen bg-zinc-100">
	<Resizer>
		<header class="bg-db-blue-light p-3">
			<Logo />
		</header>
	</Resizer>
</div>
