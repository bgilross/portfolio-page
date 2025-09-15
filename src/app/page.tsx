"use client"

import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import projectsData from "./projects/data"
import projectStyles from "./projects/projects.module.css"

export default function Home() {
	const personal = [
		{
			key: "linkedin",
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/ben-gilsenberg-1856a7301/",
		},
		{ key: "github", label: "GitHub", url: "https://github.com/bgilross" },
		{
			key: "instagram",
			label: "Instagram",
			url: "https://www.instagram.com/ben_ramblin/",
		},
	]

	const projects = [
		{
			key: "setlist",
			label: "Setlist Creator",
			url: "https://set-list-next.vercel.app/",
			preview: "/preview img/setlister-preview.png",
		},
		{
			key: "spanish",
			label: "Spanish Learning",
			url: "https://spanish-phi.vercel.app/",
			preview: "/preview img/spanish-preview.png",
		},
		{
			key: "rowdy",
			label: "Rowdy Band Houston",
			url: "https://rowdy-website.vercel.app/",
			preview: "/preview img/rowdy-preview.png",
		},
		{
			key: "nfl",
			label: "NFL Box Score Redux",
			url: "https://nfl-next-app-beige.vercel.app/",
			preview: "/preview img/nfl-preview.png",
		},
	]

	const [previewSrc, setPreviewSrc] = useState<string | null>(null)
	const [previewPos, setPreviewPos] = useState<{
		top: number
		left: number
		width: number
	} | null>(null)
	const [previewTech, setPreviewTech] = useState<string[] | null>(null)
	const [techPos, setTechPos] = useState<{ top: number; left: number } | null>(
		null
	)
	const [showTech, setShowTech] = useState(false)
	const [showPreview, setShowPreview] = useState(false)
	const hideTimeoutRef = useRef<number | null>(null)

	useEffect(() => {
		return () => {
			if (hideTimeoutRef.current != null) {
				window.clearTimeout(hideTimeoutRef.current)
				hideTimeoutRef.current = null
			}
		}
	}, [])
	// const comingSoon = [{ key: "nfl", label: "NFL Box Score Redux" }]

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
							d="M9 3v12.26A3.99 3.99 0 007 15c-1.657 0-3 1.343-3 3s1.343 3 3 3a3.99 3.99 0 003.8-2.74L11 18V8h7v5.26A3.99 3.99 0 0016 13c-1.657 0-3 1.343-3 3s1.343 3 3 3a3.99 3.99 0 003.8-2.74L21 16V3H9z"
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
		<main className="min-h-screen flex items-center justify-center app-bg text-slate-900 px-4 transition-colors">
			<div className="w-full max-w-md flex flex-col items-center gap-6 relative">
				<header className="text-center px-2 pt-6">
					<h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2 drop-shadow-sm">
						Ben Gilsenberg
					</h1>

					{/* Emphasized role with more weight and space from name + smaller, subdued tech lines */}
					<p className="text-2xl md:text-3xl font-semibold text-slate-900/95 mb-4">
						Full Stack Developer
					</p>

					<div className="max-w-sm mx-auto space-y-1 text-sm md:text-base text-slate-700/90 leading-snug">
						<p>React · Next.js · TypeScript · TailwindCSS</p>
						<p>Redux · PostgreSQL · Supabase</p>
					</div>
				</header>

				{/* Personal links */}
				<section className="w-full flex flex-col gap-4">
					{personal.map((link) => (
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
				</section>

				<div className="w-full max-w-md px-2 py-0 flex justify-center -mt-2 -mb-1">
					<h2 className="text-md font-semibold text-slate-700 uppercase tracking-wider text-center">
						Projects
					</h2>
				</div>

				{/* Projects with hover preview area (desktop). Links column keeps its width; preview is absolutely positioned to the right */}
				<div className="w-full relative -mt-1">
					<div className="w-full max-w-md flex flex-col gap-4">
						{projects.map((link) => (
							<a
								key={link.key}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="link-btn group"
								data-preview={link.preview || ""}
								onMouseEnter={(e) => {
									if (hideTimeoutRef.current != null) {
										window.clearTimeout(hideTimeoutRef.current)
										hideTimeoutRef.current = null
									}
									const rect = (
										e.currentTarget as HTMLElement
									).getBoundingClientRect()
									// Position the preview to the right of the hovered link and vertically center using translateY(-50%)
									setPreviewPos({
										top: rect.top + window.scrollY + rect.height / 2,
										left: rect.right + window.scrollX + 12,
										width: rect.width,
									})
									setPreviewSrc(link.preview || null)
									// mount hidden then flip visible on next frame so CSS transition can run
									setShowPreview(false)
									requestAnimationFrame(() => {
										void document.body.offsetHeight
										setShowPreview(true)
									})

									// tech bubbles: position left centered on the link
									setPreviewTech(
										projectsData.find((p) => p.preview === link.preview)
											?.tech || null
									)
									setTechPos({
										top: rect.top + rect.height / 2 + window.scrollY,
										left: rect.left + window.scrollX - 8,
									})
									// mount hidden then flip visible on next frame so CSS transition can run
									setShowTech(false)
									requestAnimationFrame(() => {
										// force layout read so the browser treats the element as mounted before we switch to 'show'
										void document.body.offsetHeight
										setShowTech(true)
									})
								}}
								onMouseLeave={() => {
									setShowPreview(false)
									if (hideTimeoutRef.current != null)
										window.clearTimeout(hideTimeoutRef.current)
									hideTimeoutRef.current = window.setTimeout(() => {
										setPreviewSrc(null)
										setPreviewPos(null)
										hideTimeoutRef.current = null
										setShowTech(false)
										setPreviewTech(null)
										setTechPos(null)
									}, 220)
								}}
								onFocus={(e) => {
									if (hideTimeoutRef.current != null) {
										window.clearTimeout(hideTimeoutRef.current)
										hideTimeoutRef.current = null
									}
									const rect = (
										e.currentTarget as HTMLElement
									).getBoundingClientRect()
									// center preview vertically using translateY on the container
									setPreviewPos({
										top: rect.top + window.scrollY + rect.height / 2,
										left: rect.right + window.scrollX + 12,
										width: rect.width,
									})
									setPreviewSrc(link.preview || null)
									// mount hidden then flip visible on next frame so CSS transition can run
									setShowPreview(false)
									requestAnimationFrame(() => {
										void document.body.offsetHeight
										setShowPreview(true)
									})

									setPreviewTech(
										projectsData.find((p) => p.preview === link.preview)
											?.tech || null
									)
									setTechPos({
										top: rect.top + rect.height / 2 + window.scrollY,
										left: rect.left + window.scrollX - 8,
									})
									// mount hidden then flip visible on next frame so CSS transition can run
									setShowTech(false)
									requestAnimationFrame(() => {
										void document.body.offsetHeight
										setShowTech(true)
									})
								}}
								onBlur={() => {
									setShowPreview(false)
									if (hideTimeoutRef.current != null)
										window.clearTimeout(hideTimeoutRef.current)
									hideTimeoutRef.current = window.setTimeout(() => {
										setPreviewSrc(null)
										setPreviewPos(null)
										hideTimeoutRef.current = null
										setShowTech(false)
										setPreviewTech(null)
										setTechPos(null)
									}, 220)
								}}
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
					</div>

					{/* Popup-style preview that appears under the hovered link */}
					{previewSrc && previewPos && (
						<div
							className="hidden md:block fixed z-50 pointer-events-none"
							style={{
								top: previewPos.top,
								left: previewPos.left,
								width: previewPos.width,
								transform: "translateY(-50%)",
							}}
						>
							{/* Outer wrapper handles fade/scale transitions; pointer-events none so it doesn't steal hover */}
							<div
								className={`preview-popup ${
									showPreview ? "preview-popup-visible" : "preview-popup-hidden"
								} pointer-events-none`}
							>
								<div className="bg-white rounded-lg shadow-lg overflow-hidden">
									<div className="w-full h-56 bg-slate-100">
										<Image
											src={previewSrc}
											alt="project preview"
											width={previewPos.width}
											height={Math.round(previewPos.width * 0.6)}
											className="object-cover w-full h-full"
										/>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Vertical tech bubbles to the left of the hovered link */}
					{previewTech && techPos && (
						<div
							className="hidden md:block fixed z-50 pointer-events-none"
							style={{
								top: techPos.top,
								left: techPos.left,
								transform: "translateX(-100%) translateY(-50%)",
							}}
						>
							<div className={`tech-stack ${showTech ? "show" : ""} mr-3`}>
								{(() => {
									const count = previewTech.length
									const center = Math.floor((count - 1) / 2)
									// estimate pill height + gap (tailwind text-xs + padding) ~ 28px
									const pillHeight = 28
									return previewTech.map((t, i) => {
										const offsetIndex = i - center
										const finalY = offsetIndex * (pillHeight + 6)
										const isCenter = i === center
										const pillStyle = {
											transformOrigin: "center",
											transitionDelay: `${Math.abs(offsetIndex) * 40}ms`,
										} as React.CSSProperties & Record<string, string>
										pillStyle["--finalY"] = `${finalY}px`
										return (
											<span
												key={t + i}
												className={`${
													projectStyles.techPill
												} inline-block text-xs font-semibold text-white ${
													isCenter ? "center" : ""
												}`}
												style={pillStyle}
											>
												{t}
											</span>
										)
									})
								})()}
							</div>
						</div>
					)}
				</div>
				<div className="w-full max-w-md px-2">
					<a
						href="/projects"
						className="link-btn dark-btn shrink mt-4"
					>
						<span
							className="icon"
							aria-hidden
						/>
						<span className="label text-center">View All Projects</span>
						<span
							className="arrow"
							aria-hidden
						>
							→
						</span>
					</a>
				</div>

				<footer className="text-center text-xs text-slate-500 pt-2">
					<span>More projects and updates coming soon.</span>
				</footer>
			</div>
		</main>
	)
}
