import App from './App.svelte';
import bootstrap from 'bootstrap'

const app = new App({
	// target: document.body,
	target: document.querySelector('#root'),
	props: {
		name: 'world'
	}
});

export default app;