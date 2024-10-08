export function getCookie(name: string) {
	const cookieNameEQ = encodeURIComponent(name) + '=';
	const ca = document.cookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(cookieNameEQ) === 0) {
			return decodeURIComponent(c.substring(cookieNameEQ.length, c.length));
		}
	}
	return null;
}
