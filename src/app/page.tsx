export default function Home() {
	const links = [
		{
			key: "linkedin",
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/ben-gilsenberg-1856a7301/",
		},
		{
			key: "instagram",
			label: "Instagram",
			url: "https://www.instagram.com/ben_ramblin/",
		},
		{ key: "github", label: "GitHub", url: "https://github.com/bgilross" },
		{
			key: "spanish",
			label: "Spanish App",
			url: "https://spanish-phi.vercel.app/",
		},
		{
			key: "setlist",
			label: "Setlist App",
			url: "https://set-list-next.vercel.app/",
		},
	]
	const comingSoon = [
		{ key: "nfl", label: "NFL Box Score Redux" },
		{ key: "rowdy", label: "Rowdy Band Houston Website" },
	]

	const Icon = ({ name }: { name: string }) => {
		switch (name) {
			case "linkedin":
				return (
					<svg
						className="icon"
						viewBox="0 0 24 24"
						aria-hidden
					>
						<path
							fill="currentColor"
							d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.2-3.5 1.2V9H7v12h4v-6.4s0-1.96 2-1.96 2 1.76 2 1.76V21h4v-7.22C19 10.37 17.24 9 14.5 9z"
						/>
					</svg>
				)
			case "instagram":
				return (
					<svg
						className="icon"
						viewBox="0 0 24 24"
						aria-hidden
					>
						<path
							fill="currentColor"
							d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2A2.8 2.8 0 1112 15.8a2.8 2.8 0 010-5.6zM17.5 6a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"
						/>
					</svg>
				)
			case "github":
				return (
					<svg
						className="icon"
						viewBox="0 0 24 24"
						aria-hidden
					>
						<path
							fill="currentColor"
							d="M12 2C6.477 2 2 6.522 2 12.055c0 4.435 2.865 8.2 6.839 9.527.5.095.682-.218.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.36-3.369-1.36-.455-1.166-1.11-1.477-1.11-1.477-.908-.624.069-.611.069-.611 1.004.071 1.532 1.04 1.532 1.04.892 1.543 2.341 1.097 2.91.839.091-.655.35-1.098.636-1.351-2.22-.257-4.555-1.129-4.555-5.022 0-1.11.39-2.018 1.029-2.73-.103-.258-.447-1.295.098-2.7 0 0 .84-.27 2.75 1.04A9.47 9.47 0 0112 6.844a9.47 9.47 0 012.504.34c1.909-1.31 2.748-1.04 2.748-1.04.546 1.405.202 2.442.1 2.7.64.712 1.027 1.62 1.027 2.73 0 3.903-2.339 4.762-4.566 5.016.359.31.678.919.678 1.852 0 1.335-.012 2.413-.012 2.741 0 .268.18.582.688.482A10.06 10.06 0 0022 12.055C22 6.522 17.523 2 12 2z"
						/>
					</svg>
				)
			case "spanish":
				return (
					<svg
						className="icon"
						viewBox="0 0 640 480"
						aria-hidden
					>
						<path
							fill="#aa151b"
							d="M0 0h640v480H0z"
						/>
						<path
							fill="#f1bf00"
							d="M0 120h640v240H0z"
						/>
					</svg>
				)
			case "setlist":
				return (
					<svg
						className="icon"
						viewBox="0 0 24 24"
						aria-hidden
					>
						<path
							fill="currentColor"
							d="M6 3v2h12V3h2v18h-2v-2H6v2H4V3h2zm0 4v8h12V7H6zm2 2h8v4H8V9z"
						/>
					</svg>
				)
			case "nfl":
				return (
					<svg
						className="icon"
						viewBox="0 0 24 24"
						aria-hidden
					>
						<path
							fill="currentColor"
							d="M5 3h14l1 4v5c0 5.523-4.477 9-9 9s-9-3.477-9-9V7l1-4zm2 2l-.5 2H8v8.5a5.5 5.5 0 0011 0V7h1.5L17 5H7z"
						/>
					</svg>
				)
			case "rowdy":
				return (
					<svg
						className="icon"
						viewBox="0 0 24 24"
						aria-hidden
					>
						<path
							fill="currentColor"
							d="M3 4h18v2H3V4zm2 4h14v12H5V8zm2 2v8h10v-8H7z"
						/>
					</svg>
				)
			default:
				return null
		}
	}

	return (
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 text-slate-900 px-4">
			<div className="w-full max-w-md flex flex-col items-center gap-10">
				<header className="text-center px-2">
					<h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 drop-shadow-sm">
						Ben Gilsenberg
					</h1>
					<p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-sm mx-auto">
						Developer • Builder • Music & Language Projects
					</p>
				</header>
				<section className="w-full flex flex-col gap-4">
					{links.map((link) => (
						<a
							key={link.key}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="link-btn group"
						>
							<Icon name={link.key} />
							<span className="label">{link.label}</span>
							<span
								className="arrow"
								aria-hidden
							>
								→
							</span>
						</a>
					))}
					{comingSoon.map((cs) => (
						<span
							key={cs.key}
							className="link-btn is-disabled"
						>
							<Icon name={cs.key} />
							<span className="label">{cs.label}</span>
							<span className="soon text-[10px] tracking-wide uppercase">
								Soon
							</span>
						</span>
					))}
				</section>
				<footer className="text-center text-xs text-slate-500 pt-2">
					<span>More projects and updates coming soon.</span>
				</footer>
			</div>
		</main>
	)
}
