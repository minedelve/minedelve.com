<script lang="ts">
	import '../app.css';

	// fonts
	import '@fontsource/lato/100.css';
	import '@fontsource/lato/300.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import '@fontsource/lato/900.css';
	import '@fontsource/lato/100-italic.css';
	import '@fontsource/lato/300-italic.css';
	import '@fontsource/lato/400-italic.css';
	import '@fontsource/lato/700-italic.css';
	import '@fontsource/lato/900-italic.css';
	import Tracking from '$lib/analytics/tracking.svelte';
	import Rgpd from '$lib/components/rgpd.svelte';
</script>

<Tracking />

<svelte:head>
	<title>Minedelve - Work in the Mine</title>
	<meta
		name="description"
		content="Minedelve use and participate in the evolution of the combines simplicity, personalisation and open source framework. Start using it now."
	/>
	<link rel="canonical" href="https://minedelve.com" />
</svelte:head>

<slot />

<Rgpd />
