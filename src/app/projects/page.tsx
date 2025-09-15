import Link from "next/link"
import ProjectListClient from "./ProjectListClient"

export const metadata = {
	title: "Projects — Ben Gilsenberg",
	description: "A showcase of projects built by Ben Gilsenberg",
}

export default function ProjectsPage() {
	return (
		<>
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

					<ProjectListClient />
				</div>
			</main>
		</>
	)
}
