import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: "Projects — Ben Gilsenberg",
	description: "A showcase of projects built by Ben Gilsenberg",
}

const projects = [
	{
		id: "setlist",
		title: "Setlist Creator",
		description:
			"Create and share band setlists with an easy editor and export.",
		url: "https://set-list-next.vercel.app/",
		preview: "/preview img/setlister-preview.png",
		tech: [
			"Next.js",
			"React",
			"TailwindCSS",
			"Supabase",
			"Context",
			"FirebaseAUTH",
		],
	},
	{
		id: "spanish",
		title: "Spanish Learning",
		description:
			"An interactive app for practicing Spanish with spaced repetition.",
		url: "https://spanish-phi.vercel.app/",
		preview: "/preview img/spanish-preview.png",
		tech: ["Next.js", "React", "Zustand", "TailwindCSS", "Prisma-PostgreSQL"],
	},
	{
		id: "rowdy",
		title: "Rowdy Band Houston",
		description:
			"Band website with events, media and booking for Rowdy (Houston).",
		url: "https://rowdy-website.vercel.app/",
		preview: "/preview img/rowdy-preview.png",
		tech: ["React", "Vite", "TailwindCSS"],
	},
	{
		id: "nfl",
		title: "NFL Box Score Redux",
		description: "Stats-focused UI rebuilt with performance in mind.",
		url: "https://nfl-next-app-beige.vercel.app/",
		preview: "/preview img/nfl-preview.png",
		tech: ["React", "Next.js", "Node.js", "NeonDB", "TailwindCSS"],
	},
]

export default function ProjectsPage() {
	return (
		<main className="min-h-screen app-bg flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-5xl">
				<header className="mb-8">
					<div className="mb-3">
						<Link
							href="/"
							className="text-sm text-slate-700 hover:underline"
						>
							← Home
						</Link>
					</div>
					<h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
						Projects
					</h1>
				</header>

				<div className="flex flex-col gap-8 max-w-6xl">
					{projects.map((p) => (
						<article
							key={p.id}
							className="bg-white rounded-lg shadow-md overflow-hidden w-full"
						>
							<a
								href={p.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block"
							>
								<div className="w-full h-64 bg-slate-100 flex items-center justify-center relative overflow-hidden">
									<Image
										src={p.preview}
										alt={p.title}
										width={1600}
										height={800}
										className="object-cover w-full h-full"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent mix-blend-multiply pointer-events-none z-10" />
								</div>
								<div className="p-6 bg-slate-900 text-white">
									<h3 className="font-semibold text-2xl mb-2">{p.title}</h3>
									<p className="text-base text-slate-200">{p.description}</p>
									{p.tech && (
										<div className="mt-4 flex flex-wrap gap-2">
											{p.tech.map((t) => (
												<span
													key={t}
													className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm text-white border border-white/10"
												>
													{t}
												</span>
											))}
										</div>
									)}
								</div>
							</a>
						</article>
					))}
				</div>
			</div>
		</main>
	)
}
