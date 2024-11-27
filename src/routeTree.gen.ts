/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CityCityNameImport } from './routes/city.$cityName'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const CityCityNameRoute = CityCityNameImport.update({
  id: '/city/$cityName',
  path: '/city/$cityName',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/city/$cityName': {
      id: '/city/$cityName'
      path: '/city/$cityName'
      fullPath: '/city/$cityName'
      preLoaderRoute: typeof CityCityNameImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/city/$cityName': typeof CityCityNameRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/city/$cityName': typeof CityCityNameRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/city/$cityName': typeof CityCityNameRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/city/$cityName'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/city/$cityName'
  id: '__root__' | '/' | '/about' | '/city/$cityName'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  CityCityNameRoute: typeof CityCityNameRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  CityCityNameRoute: CityCityNameRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/city/$cityName"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/city/$cityName": {
      "filePath": "city.$cityName.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
