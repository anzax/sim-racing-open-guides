// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://anzax.github.io/sim-racing-open-guides',
	base: '/sim-racing-open-guides/',
	integrations: [
		starlight({
			title: 'Sim Racing Open Guides',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/anzax/sim-racing-open-guides' },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Triple Monitor Blueprint', slug: 'guides/triple-monitor-basics' },
						{ label: 'COMING SOON: Ultrawide Playbooks', slug: 'guides/ultrawide-playbooks', badge: 'planned' },
						{ label: 'COMING SOON: VR Transition Notes', slug: 'guides/vr-transition', badge: 'planned' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
