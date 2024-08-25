import { BROWSER } from 'esm-env';
export function eventNoScroll(state: string) {
	if (BROWSER) {
		if (state === 'active') document.body.classList.add('no-scroll');
		if (state === 'disable') document.body.classList.remove('no-scroll');
	}
}
