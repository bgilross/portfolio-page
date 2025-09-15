"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./projects.module.css"
import projects from "./data"

export default function ProjectListClient() {
	const lastPointer = useRef<{ x: number; y: number } | null>(null)
	const rafRef = useRef<number | null>(null)
	const prevCardRef = useRef<HTMLElement | null>(null)
	const clearTimeoutRef = useRef<number | null>(null)

	useEffect(() => {
		function onPointerMove(e: PointerEvent) {
			lastPointer.current = { x: e.clientX, y: e.clientY }
		}

		function updateHoverFromPointer() {
			const p = lastPointer.current
			if (!p) return

			// iterate all project cards and test bounding rects against pointer
			const cards = Array.from(
				document.querySelectorAll(`.${styles.projectCard}`)
			) as HTMLElement[]

			let found: HTMLElement | null = null
			for (const c of cards) {
				const r = c.getBoundingClientRect()
				if (
					p.x >= r.left &&
					p.x <= r.right &&
					p.y >= r.top &&
					p.y <= r.bottom
				) {
					found = c
					break
				}
			}

			// if previous card is same as current, keep it
			if (prevCardRef.current === found) return

			// remove class from previous card only
			if (prevCardRef.current) {
				prevCardRef.current.classList.remove("forceHover")
				prevCardRef.current = null
			}

			if (found) {
				found.classList.add("forceHover")
				prevCardRef.current = found
			}
		}

		// make scroll update immediate to reduce perceived latency
		function onScroll() {
			updateHoverFromPointer()
			// keep forced hover for a short period after scroll to reduce flicker
			if (clearTimeoutRef.current != null) {
				window.clearTimeout(clearTimeoutRef.current)
				clearTimeoutRef.current = null
			}
			clearTimeoutRef.current = window.setTimeout(() => {
				if (prevCardRef.current) {
					prevCardRef.current.classList.remove("forceHover")
					prevCardRef.current = null
				}
				clearTimeoutRef.current = null
			}, 20)
		}

		window.addEventListener("pointermove", onPointerMove, { passive: true })
		window.addEventListener("scroll", onScroll, { passive: true })

		// also update on wheel (immediate)
		function onWheelImmediate() {
			updateHoverFromPointer()
		}
		window.addEventListener("wheel", onWheelImmediate, { passive: true })
		window.addEventListener("wheel", onScroll, { passive: true })

		return () => {
			window.removeEventListener("pointermove", onPointerMove)
			window.removeEventListener("scroll", onScroll)
			window.removeEventListener("wheel", onScroll)
			window.removeEventListener("wheel", onWheelImmediate)
			if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
			if (clearTimeoutRef.current != null)
				window.clearTimeout(clearTimeoutRef.current)
		}
	}, [])

	return (
		<div className="flex flex-col gap-8 max-w-6xl">
			{projects.map((p) => (
				<article
					key={p.id}
					className={`${styles.projectCard} bg-white rounded-lg shadow-md overflow-hidden w-full transform transition-transform duration-200 ease-out hover:scale-105 hover:shadow-xl`}
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
											className={`${styles.techPill} inline-block text-xs font-semibold text-white`}
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
	)
}
