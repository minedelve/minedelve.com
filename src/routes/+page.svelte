<script lang="ts">
	import SchemeMode from '$lib/components/scheme-mode.svelte';
	import Icon from '@iconify/svelte';
	import logo from '$lib/assets/images/minedelve.webp';
	import mytril from '$lib/assets/images/logo.webp';
</script>

<nav>
	<SchemeMode />
</nav>

<header>
	<img src={logo} alt="logo" />
	<h1>Minedelve</h1>
	<p>Welcome, enter in the mine</p>
	<div>
		<a href="/" class="discord" target="_blank">
			<Icon icon="ic:baseline-discord" /> Join us Discord
		</a>
		<a href="/" class="github" target="_blank">
			<Icon icon="mdi:github" /> View on GitHub
		</a>
		<a href="/" class="npm" target="_blank">
			<Icon icon="gg:npm" /> We're on NPM
		</a>
	</div>
</header>

<div class="wrapper-form"><div class="triangle"></div></div>

<section id="packages">
	<h2>Explore the first project by Minedelve</h2>
	<div class="mytril">
		<img src={mytril} alt="mytril logo" />
		<a href="/" class="name">Mytril</a>
	</div>
	<p>A new interface framework for developing web applications with Svelte.</p>
	<div>
		<a href="/" class="website" target="_blank">
			<Icon icon="pajamas:rocket-launch" />
			Get started with Mytril
			<Icon icon="ic:round-keyboard-arrow-right" />
		</a>
	</div>
</section>

<section id="introduction">
	<h2>We are Minedelve</h2>
	<p>
		Founded in 2022, Minedelve's ambition is to unite a passionate team around different projects.
		We imagine, learn and test solutions to ambitious technical challenges. Our aim is to offer
		solutions that facilitate the development of your projects.
	</p>
</section>

<footer>
	<div>
		<div class="link">
			<a href="/" class="discord" target="_blank">
				<Icon icon="ic:baseline-discord" />
			</a>
			<a href="/" class="github" target="_blank">
				<Icon icon="mdi:github" />
			</a>
			<a href="/" class="npm" target="_blank">
				<Icon icon="gg:npm" />
			</a>
		</div>
		<div class="copyright">
			<h2>Minedelve</h2>
			<p>Copyright © 2022-2024 Minedelve. All rights reserved.</p>
		</div>
	</div>
</footer>

<style lang="postcss">
	.triangle {
		display: inline-block;
		height: 0;
		width: 0;
		border-top: 3rem solid var(--c-bg);
		border-right: 100vw solid transparent;
		position: relative;
		transition:
			border-color 0.5s,
			background-color 0.5s;
	}

	nav {
		display: flex;
		align-items: center;
		background-color: var(--c-bg);
		height: var(--nav-height);
		left: 0;
		padding: 0 12px;
		top: 0;
		transition:
			border-color 0.5s,
			background-color 0.5s;
		white-space: nowrap;
	}

	header {
		text-align: center;
		width: 100%;
		padding: 1rem;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 3rem;
		margin-top: 3rem;
		transition:
			border-color 0.5s,
			background-color 0.5s;

		@media (min-width: 768px) {
			margin-bottom: 6rem !important;
			margin-top: 6rem !important;
		}

		@media (min-width: 1024px) {
			max-width: 900px;
		}

		& img {
			width: 6rem;
			margin-top: 1rem;

			@media (min-width: 1024px) {
				width: 7rem !important;
			}
		}

		& h1 {
			font-size: 40px;
			font-weight: 600;
			line-height: 1.375;

			@media (min-width: 1024px) {
				font-size: 52px !important;
			}
		}

		& p {
			margin-top: 0.8em;
			font-size: 32px;
			text-align: center;
			line-height: 1.375;
		}

		& > div {
			width: 100%;
			flex-direction: column;
			grid-gap: 0.5rem;
			gap: 0.5rem;
			display: flex;
			margin-top: 1.25rem;
			justify-content: center;

			@media (min-width: 768px) {
				flex-direction: row !important;
				margin-top: 1.5rem !important;
			}

			& a {
				text-decoration: none;
				text-align: center;
				line-height: 1em;
				gap: 0.5rem;
				transition-duration: 0.2s;
				border-color: transparent;
				border-style: solid;
				border-width: 1px;
				flex-shrink: 0;
				cursor: pointer;
				display: inline-flex;
				user-select: none;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				border-radius: 9999px;
				height: 3rem;
				min-height: 3rem;

				@media (min-width: 768px) {
					height: 4rem;
					min-height: 4rem;
					padding-left: 1.5rem;
					padding-right: 1.5rem;
					font-size: 1.125rem;

					& :global(svg) {
						width: 1.5rem;
						height: 1.5rem;
					}
				}

				@media (min-width: 1024px) {
					height: 4rem;
					min-height: 4rem;
					padding-left: 1.5rem;
					padding-right: 1.5rem;
					font-size: 1.125rem;

					& :global(svg) {
						width: 1.75rem;
						height: 1.75rem;
					}
				}

				&.discord {
					color: #ffffff;
					background-color: #5865f2;

					&:hover {
						background-color: #4b56d3;
					}
				}

				&.github {
					border-color: var(--c-text-1);
					color: var(--c-text-1);

					&:hover {
						background-color: rgb(73 79 92 / 66%);
					}
				}

				&.npm {
					border-color: #ff5655;
					color: #ff5655;

					&:hover {
						background-color: rgb(255 86 85 / 66%);
					}
				}
			}
		}
	}

	.wrapper-form {
		width: 100%;
		height: 3rem;
		background-color: transparent;
		position: relative;
		overflow: hidden;
		margin-bottom: -2.95rem;
	}

	#packages {
		text-align: center;
		justify-items: center;
		/* justify-content: center; */
		display: grid;
		gap: 0.75rem;

		width: 100%;
		padding: 1rem;
		margin-right: auto;
		margin-left: auto;
		max-width: 100%;
		background-color: var(--c-bg-mute);
		padding-top: 5rem;
		padding-bottom: 3rem;
		transition:
			border-color 0.5s,
			background-color 0.5s;

		& .mytril {
			& img {
				width: 3rem;
				height: 3rem;
				margin-right: 0.75rem;
			}

			& a {
				color: var(--c-text-1);
				text-decoration: none;
				font-size: 32px;
				text-decoration: none;
				line-height: 1.15;
				font-weight: 600;
			}
		}

		& h2 {
			line-height: 1.15;
			font-weight: 600;
			font-size: 40px;
			margin-bottom: 1.75rem;

			@media (min-width: 1024px) {
				font-size: 52px !important;
				text-align: center;
			}
		}

		& > div {
			display: flex;
			align-items: center;
			min-height: 4rem;
			width: 100%;
			justify-content: center;

			& a:not(.name) {
				text-decoration: none;
				text-align: center;
				line-height: 1em;
				gap: 0.5rem;
				transition-duration: 0.2s;
				border-color: transparent;
				border-style: solid;
				border-width: 1px;
				flex-shrink: 0;
				cursor: pointer;
				display: inline-flex;
				user-select: none;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				border-radius: 9999px;
				height: 3rem;
				min-height: 3rem;
				padding-left: 1rem;
				padding-right: 1rem;

				@media (min-width: 768px) {
					height: 4rem;
					min-height: 4rem;
					padding-left: 1.5rem;
					padding-right: 1.5rem;
					font-size: 1.125rem;

					& :global(svg) {
						width: 1.5rem;
						height: 1.5rem;
					}
				}

				@media (min-width: 1024px) {
					height: 4rem;
					min-height: 4rem;
					padding-left: 1.5rem;
					padding-right: 1.5rem;
					font-size: 1.125rem;

					& :global(svg) {
						width: 1.75rem;
						height: 1.75rem;
					}
				}

				&.website {
					border-color: var(--c-text-1);
					color: var(--c-text-1);

					&:hover {
						background-color: rgb(73 79 92 / 66%);
					}
				}
			}
		}

		& p {
			font-size: 17px;
			line-height: 1.5;

			@media (min-width: 1024px) {
				font-size: 20px !important;
			}
		}
	}

	#introduction {
		width: 100%;
		padding: 1rem;
		margin-right: auto;
		margin-left: auto;
		max-width: 100%;
		padding-top: 5rem;
		padding-bottom: 3rem;
		transition:
			border-color 0.5s,
			background-color 0.5s;

		@media (min-width: 768px) {
			padding-top: 8rem;
			padding-bottom: 6rem;
		}

		& h2 {
			line-height: 1.15;
			font-weight: 600;
			font-size: 40px;
			margin-bottom: 1.75rem;
			text-align: center;

			@media (min-width: 1024px) {
				font-size: 52px !important;
			}
		}

		& p {
			font-size: 17px;
			line-height: 1.5;
			text-align: center;

			@media (min-width: 768px) {
				max-width: 50rem;
				margin: 0 auto;
			}

			@media (min-width: 1024px) {
				font-size: 20px !important;
			}
		}
	}

	footer {
		background-color: var(--c-bg-mute);
		transition:
			border-color 0.5s,
			background-color 0.5s;

		& > div {
			display: grid;
			width: 100%;
			padding: 1rem;
			margin-right: auto;
			margin-left: auto;
			padding-top: 5rem;
			padding-bottom: 3rem;
			max-width: 100%;

			@media (min-width: 768px) {
				grid-template-columns: 1fr auto;
			}

			& p,
			& h2 {
				margin: 0;
				padding: 0;
			}

			.copyright {
				@media (min-width: 768px) {
					order: 1;
				}
			}

			.link {
				@media (min-width: 768px) {
					order: 2;
				}

				& a {
					text-decoration: none;
					height: 2rem;
					width: 2rem;
					min-height: 2rem;
					padding: 0;
					user-select: none;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					border-radius: 0.5rem;
					border-color: transparent;
					border-style: solid;
					border-width: 1px;
					display: inline-flex;
					flex-shrink: 0;
					cursor: pointer;
					text-align: center;
					font-size: 0.875rem;
					line-height: 1em;
					gap: 0.5rem;
					font-weight: 600;
					text-decoration-line: none;
					transition-duration: 0.2s;

					& :global(svg) {
						width: 1.25rem;
						height: 1.25rem;
					}

					&.discord {
						color: #ffffff;
						background-color: #5865f2;

						&:hover {
							background-color: #4b56d3;
						}
					}

					&.github {
						background-color: var(--c-text-1);
						color: var(--c-bg);

						&:hover {
							background-color: rgb(73 79 92 / 66%);
						}
					}

					&.npm {
						background-color: #ff5655;
						color: #ffffff;

						&:hover {
							background-color: rgb(255 86 85 / 66%);
						}
					}
				}
			}
		}
	}
</style>
