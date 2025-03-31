import {NextResponse} from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import {defaultLanguage, languages} from "./app/[lang]/languages";

function getLocale(request) {
    const negotiatorHeaders = {}
    request.headers.forEach((value, key) => {
        negotiatorHeaders[key] = value
    })

    const negotiatorLanguages = new Negotiator({ headers: negotiatorHeaders }).languages()
    return match(negotiatorLanguages, languages, defaultLanguage)
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = languages.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip _next paths
        '/((?!_next).*)',
    ]
}