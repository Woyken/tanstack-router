/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/solid-router'

import { Route as rootRouteImport } from './routes/__root'
import { Route as PostsRouteImport } from './routes/posts'
import { Route as EditingBRouteImport } from './routes/editing-b'
import { Route as EditingARouteImport } from './routes/editing-a'
import { Route as AnchorRouteImport } from './routes/anchor'
import { Route as LayoutRouteImport } from './routes/_layout'
import { Route as IndexRouteImport } from './routes/index'
import { Route as RedirectIndexRouteImport } from './routes/redirect/index'
import { Route as PostsIndexRouteImport } from './routes/posts.index'
import { Route as RedirectTargetRouteImport } from './routes/redirect/$target'
import { Route as PostsPostIdRouteImport } from './routes/posts.$postId'
import { Route as LayoutLayout2RouteImport } from './routes/_layout/_layout-2'
import { Route as groupLazyinsideRouteImport } from './routes/(group)/lazyinside'
import { Route as groupInsideRouteImport } from './routes/(group)/inside'
import { Route as groupLayoutRouteImport } from './routes/(group)/_layout'
import { Route as anotherGroupOnlyrouteinsideRouteImport } from './routes/(another-group)/onlyrouteinside'
import { Route as RedirectTargetIndexRouteImport } from './routes/redirect/$target/index'
import { Route as RedirectPreloadThirdRouteImport } from './routes/redirect/preload/third'
import { Route as RedirectPreloadSecondRouteImport } from './routes/redirect/preload/second'
import { Route as RedirectPreloadFirstRouteImport } from './routes/redirect/preload/first'
import { Route as RedirectTargetViaLoaderRouteImport } from './routes/redirect/$target/via-loader'
import { Route as RedirectTargetViaBeforeLoadRouteImport } from './routes/redirect/$target/via-beforeLoad'
import { Route as PostsPostIdEditRouteImport } from './routes/posts_.$postId.edit'
import { Route as ParamsSingleValueRouteImport } from './routes/params.single.$value'
import { Route as LayoutLayout2LayoutBRouteImport } from './routes/_layout/_layout-2/layout-b'
import { Route as LayoutLayout2LayoutARouteImport } from './routes/_layout/_layout-2/layout-a'
import { Route as groupSubfolderInsideRouteImport } from './routes/(group)/subfolder/inside'
import { Route as groupLayoutInsidelayoutRouteImport } from './routes/(group)/_layout.insidelayout'

const groupRouteImport = createFileRoute('/(group)')()

const groupRoute = groupRouteImport.update({
  id: '/(group)',
  getParentRoute: () => rootRouteImport,
} as any)
const PostsRoute = PostsRouteImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRouteImport,
} as any)
const EditingBRoute = EditingBRouteImport.update({
  id: '/editing-b',
  path: '/editing-b',
  getParentRoute: () => rootRouteImport,
} as any)
const EditingARoute = EditingARouteImport.update({
  id: '/editing-a',
  path: '/editing-a',
  getParentRoute: () => rootRouteImport,
} as any)
const AnchorRoute = AnchorRouteImport.update({
  id: '/anchor',
  path: '/anchor',
  getParentRoute: () => rootRouteImport,
} as any)
const LayoutRoute = LayoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const RedirectIndexRoute = RedirectIndexRouteImport.update({
  id: '/redirect/',
  path: '/redirect/',
  getParentRoute: () => rootRouteImport,
} as any)
const PostsIndexRoute = PostsIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)
const RedirectTargetRoute = RedirectTargetRouteImport.update({
  id: '/redirect/$target',
  path: '/redirect/$target',
  getParentRoute: () => rootRouteImport,
} as any)
const PostsPostIdRoute = PostsPostIdRouteImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)
const LayoutLayout2Route = LayoutLayout2RouteImport.update({
  id: '/_layout-2',
  getParentRoute: () => LayoutRoute,
} as any)
const groupLazyinsideRoute = groupLazyinsideRouteImport
  .update({
    id: '/lazyinside',
    path: '/lazyinside',
    getParentRoute: () => groupRoute,
  } as any)
  .lazy(() => import('./routes/(group)/lazyinside.lazy').then((d) => d.Route))
const groupInsideRoute = groupInsideRouteImport.update({
  id: '/inside',
  path: '/inside',
  getParentRoute: () => groupRoute,
} as any)
const groupLayoutRoute = groupLayoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => groupRoute,
} as any)
const anotherGroupOnlyrouteinsideRoute =
  anotherGroupOnlyrouteinsideRouteImport.update({
    id: '/(another-group)/onlyrouteinside',
    path: '/onlyrouteinside',
    getParentRoute: () => rootRouteImport,
  } as any)
const RedirectTargetIndexRoute = RedirectTargetIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => RedirectTargetRoute,
} as any)
const RedirectPreloadThirdRoute = RedirectPreloadThirdRouteImport.update({
  id: '/redirect/preload/third',
  path: '/redirect/preload/third',
  getParentRoute: () => rootRouteImport,
} as any)
const RedirectPreloadSecondRoute = RedirectPreloadSecondRouteImport.update({
  id: '/redirect/preload/second',
  path: '/redirect/preload/second',
  getParentRoute: () => rootRouteImport,
} as any)
const RedirectPreloadFirstRoute = RedirectPreloadFirstRouteImport.update({
  id: '/redirect/preload/first',
  path: '/redirect/preload/first',
  getParentRoute: () => rootRouteImport,
} as any)
const RedirectTargetViaLoaderRoute = RedirectTargetViaLoaderRouteImport.update({
  id: '/via-loader',
  path: '/via-loader',
  getParentRoute: () => RedirectTargetRoute,
} as any)
const RedirectTargetViaBeforeLoadRoute =
  RedirectTargetViaBeforeLoadRouteImport.update({
    id: '/via-beforeLoad',
    path: '/via-beforeLoad',
    getParentRoute: () => RedirectTargetRoute,
  } as any)
const PostsPostIdEditRoute = PostsPostIdEditRouteImport.update({
  id: '/posts_/$postId/edit',
  path: '/posts/$postId/edit',
  getParentRoute: () => rootRouteImport,
} as any)
const ParamsSingleValueRoute = ParamsSingleValueRouteImport.update({
  id: '/params/single/$value',
  path: '/params/single/$value',
  getParentRoute: () => rootRouteImport,
} as any)
const LayoutLayout2LayoutBRoute = LayoutLayout2LayoutBRouteImport.update({
  id: '/layout-b',
  path: '/layout-b',
  getParentRoute: () => LayoutLayout2Route,
} as any)
const LayoutLayout2LayoutARoute = LayoutLayout2LayoutARouteImport.update({
  id: '/layout-a',
  path: '/layout-a',
  getParentRoute: () => LayoutLayout2Route,
} as any)
const groupSubfolderInsideRoute = groupSubfolderInsideRouteImport.update({
  id: '/subfolder/inside',
  path: '/subfolder/inside',
  getParentRoute: () => groupRoute,
} as any)
const groupLayoutInsidelayoutRoute = groupLayoutInsidelayoutRouteImport.update({
  id: '/insidelayout',
  path: '/insidelayout',
  getParentRoute: () => groupLayoutRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof groupLayoutRouteWithChildren
  '': typeof LayoutLayout2RouteWithChildren
  '/anchor': typeof AnchorRoute
  '/editing-a': typeof EditingARoute
  '/editing-b': typeof EditingBRoute
  '/posts': typeof PostsRouteWithChildren
  '/onlyrouteinside': typeof anotherGroupOnlyrouteinsideRoute
  '/inside': typeof groupInsideRoute
  '/lazyinside': typeof groupLazyinsideRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/redirect/$target': typeof RedirectTargetRouteWithChildren
  '/posts/': typeof PostsIndexRoute
  '/redirect': typeof RedirectIndexRoute
  '/insidelayout': typeof groupLayoutInsidelayoutRoute
  '/subfolder/inside': typeof groupSubfolderInsideRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
  '/params/single/$value': typeof ParamsSingleValueRoute
  '/posts/$postId/edit': typeof PostsPostIdEditRoute
  '/redirect/$target/via-beforeLoad': typeof RedirectTargetViaBeforeLoadRoute
  '/redirect/$target/via-loader': typeof RedirectTargetViaLoaderRoute
  '/redirect/preload/first': typeof RedirectPreloadFirstRoute
  '/redirect/preload/second': typeof RedirectPreloadSecondRoute
  '/redirect/preload/third': typeof RedirectPreloadThirdRoute
  '/redirect/$target/': typeof RedirectTargetIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof groupLayoutRouteWithChildren
  '': typeof LayoutLayout2RouteWithChildren
  '/anchor': typeof AnchorRoute
  '/editing-a': typeof EditingARoute
  '/editing-b': typeof EditingBRoute
  '/onlyrouteinside': typeof anotherGroupOnlyrouteinsideRoute
  '/inside': typeof groupInsideRoute
  '/lazyinside': typeof groupLazyinsideRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts': typeof PostsIndexRoute
  '/redirect': typeof RedirectIndexRoute
  '/insidelayout': typeof groupLayoutInsidelayoutRoute
  '/subfolder/inside': typeof groupSubfolderInsideRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
  '/params/single/$value': typeof ParamsSingleValueRoute
  '/posts/$postId/edit': typeof PostsPostIdEditRoute
  '/redirect/$target/via-beforeLoad': typeof RedirectTargetViaBeforeLoadRoute
  '/redirect/$target/via-loader': typeof RedirectTargetViaLoaderRoute
  '/redirect/preload/first': typeof RedirectPreloadFirstRoute
  '/redirect/preload/second': typeof RedirectPreloadSecondRoute
  '/redirect/preload/third': typeof RedirectPreloadThirdRoute
  '/redirect/$target': typeof RedirectTargetIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/anchor': typeof AnchorRoute
  '/editing-a': typeof EditingARoute
  '/editing-b': typeof EditingBRoute
  '/posts': typeof PostsRouteWithChildren
  '/(another-group)/onlyrouteinside': typeof anotherGroupOnlyrouteinsideRoute
  '/(group)': typeof groupRouteWithChildren
  '/(group)/_layout': typeof groupLayoutRouteWithChildren
  '/(group)/inside': typeof groupInsideRoute
  '/(group)/lazyinside': typeof groupLazyinsideRoute
  '/_layout/_layout-2': typeof LayoutLayout2RouteWithChildren
  '/posts/$postId': typeof PostsPostIdRoute
  '/redirect/$target': typeof RedirectTargetRouteWithChildren
  '/posts/': typeof PostsIndexRoute
  '/redirect/': typeof RedirectIndexRoute
  '/(group)/_layout/insidelayout': typeof groupLayoutInsidelayoutRoute
  '/(group)/subfolder/inside': typeof groupSubfolderInsideRoute
  '/_layout/_layout-2/layout-a': typeof LayoutLayout2LayoutARoute
  '/_layout/_layout-2/layout-b': typeof LayoutLayout2LayoutBRoute
  '/params/single/$value': typeof ParamsSingleValueRoute
  '/posts_/$postId/edit': typeof PostsPostIdEditRoute
  '/redirect/$target/via-beforeLoad': typeof RedirectTargetViaBeforeLoadRoute
  '/redirect/$target/via-loader': typeof RedirectTargetViaLoaderRoute
  '/redirect/preload/first': typeof RedirectPreloadFirstRoute
  '/redirect/preload/second': typeof RedirectPreloadSecondRoute
  '/redirect/preload/third': typeof RedirectPreloadThirdRoute
  '/redirect/$target/': typeof RedirectTargetIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/anchor'
    | '/editing-a'
    | '/editing-b'
    | '/posts'
    | '/onlyrouteinside'
    | '/inside'
    | '/lazyinside'
    | '/posts/$postId'
    | '/redirect/$target'
    | '/posts/'
    | '/redirect'
    | '/insidelayout'
    | '/subfolder/inside'
    | '/layout-a'
    | '/layout-b'
    | '/params/single/$value'
    | '/posts/$postId/edit'
    | '/redirect/$target/via-beforeLoad'
    | '/redirect/$target/via-loader'
    | '/redirect/preload/first'
    | '/redirect/preload/second'
    | '/redirect/preload/third'
    | '/redirect/$target/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/anchor'
    | '/editing-a'
    | '/editing-b'
    | '/onlyrouteinside'
    | '/inside'
    | '/lazyinside'
    | '/posts/$postId'
    | '/posts'
    | '/redirect'
    | '/insidelayout'
    | '/subfolder/inside'
    | '/layout-a'
    | '/layout-b'
    | '/params/single/$value'
    | '/posts/$postId/edit'
    | '/redirect/$target/via-beforeLoad'
    | '/redirect/$target/via-loader'
    | '/redirect/preload/first'
    | '/redirect/preload/second'
    | '/redirect/preload/third'
    | '/redirect/$target'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/anchor'
    | '/editing-a'
    | '/editing-b'
    | '/posts'
    | '/(another-group)/onlyrouteinside'
    | '/(group)'
    | '/(group)/_layout'
    | '/(group)/inside'
    | '/(group)/lazyinside'
    | '/_layout/_layout-2'
    | '/posts/$postId'
    | '/redirect/$target'
    | '/posts/'
    | '/redirect/'
    | '/(group)/_layout/insidelayout'
    | '/(group)/subfolder/inside'
    | '/_layout/_layout-2/layout-a'
    | '/_layout/_layout-2/layout-b'
    | '/params/single/$value'
    | '/posts_/$postId/edit'
    | '/redirect/$target/via-beforeLoad'
    | '/redirect/$target/via-loader'
    | '/redirect/preload/first'
    | '/redirect/preload/second'
    | '/redirect/preload/third'
    | '/redirect/$target/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  AnchorRoute: typeof AnchorRoute
  EditingARoute: typeof EditingARoute
  EditingBRoute: typeof EditingBRoute
  PostsRoute: typeof PostsRouteWithChildren
  anotherGroupOnlyrouteinsideRoute: typeof anotherGroupOnlyrouteinsideRoute
  groupRoute: typeof groupRouteWithChildren
  RedirectTargetRoute: typeof RedirectTargetRouteWithChildren
  RedirectIndexRoute: typeof RedirectIndexRoute
  ParamsSingleValueRoute: typeof ParamsSingleValueRoute
  PostsPostIdEditRoute: typeof PostsPostIdEditRoute
  RedirectPreloadFirstRoute: typeof RedirectPreloadFirstRoute
  RedirectPreloadSecondRoute: typeof RedirectPreloadSecondRoute
  RedirectPreloadThirdRoute: typeof RedirectPreloadThirdRoute
}

declare module '@tanstack/solid-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/anchor': {
      id: '/anchor'
      path: '/anchor'
      fullPath: '/anchor'
      preLoaderRoute: typeof AnchorRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/editing-a': {
      id: '/editing-a'
      path: '/editing-a'
      fullPath: '/editing-a'
      preLoaderRoute: typeof EditingARouteImport
      parentRoute: typeof rootRouteImport
    }
    '/editing-b': {
      id: '/editing-b'
      path: '/editing-b'
      fullPath: '/editing-b'
      preLoaderRoute: typeof EditingBRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(another-group)/onlyrouteinside': {
      id: '/(another-group)/onlyrouteinside'
      path: '/onlyrouteinside'
      fullPath: '/onlyrouteinside'
      preLoaderRoute: typeof anotherGroupOnlyrouteinsideRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(group)/_layout': {
      id: '/(group)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof groupLayoutRouteImport
      parentRoute: typeof groupRoute
    }
    '/(group)/inside': {
      id: '/(group)/inside'
      path: '/inside'
      fullPath: '/inside'
      preLoaderRoute: typeof groupInsideRouteImport
      parentRoute: typeof groupRoute
    }
    '/(group)/lazyinside': {
      id: '/(group)/lazyinside'
      path: '/lazyinside'
      fullPath: '/lazyinside'
      preLoaderRoute: typeof groupLazyinsideRouteImport
      parentRoute: typeof groupRoute
    }
    '/_layout/_layout-2': {
      id: '/_layout/_layout-2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutLayout2RouteImport
      parentRoute: typeof LayoutRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdRouteImport
      parentRoute: typeof PostsRoute
    }
    '/redirect/$target': {
      id: '/redirect/$target'
      path: '/redirect/$target'
      fullPath: '/redirect/$target'
      preLoaderRoute: typeof RedirectTargetRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(group)/lazyinside': {
      id: '/(group)/lazyinside'
      path: '/lazyinside'
      fullPath: '/lazyinside'
      preLoaderRoute: typeof groupLazyinsideLazyRouteImport
      parentRoute: typeof groupRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexRouteImport
      parentRoute: typeof PostsRoute
    }
    '/redirect/': {
      id: '/redirect/'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(group)/_layout/insidelayout': {
      id: '/(group)/_layout/insidelayout'
      path: '/insidelayout'
      fullPath: '/insidelayout'
      preLoaderRoute: typeof groupLayoutInsidelayoutRouteImport
      parentRoute: typeof groupLayoutRoute
    }
    '/(group)/subfolder/inside': {
      id: '/(group)/subfolder/inside'
      path: '/subfolder/inside'
      fullPath: '/subfolder/inside'
      preLoaderRoute: typeof groupSubfolderInsideRouteImport
      parentRoute: typeof groupRoute
    }
    '/_layout/_layout-2/layout-a': {
      id: '/_layout/_layout-2/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayout2LayoutARouteImport
      parentRoute: typeof LayoutLayout2Route
    }
    '/_layout/_layout-2/layout-b': {
      id: '/_layout/_layout-2/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayout2LayoutBRouteImport
      parentRoute: typeof LayoutLayout2Route
    }
    '/params/single/$value': {
      id: '/params/single/$value'
      path: '/params/single/$value'
      fullPath: '/params/single/$value'
      preLoaderRoute: typeof ParamsSingleValueRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/posts_/$postId/edit': {
      id: '/posts_/$postId/edit'
      path: '/posts/$postId/edit'
      fullPath: '/posts/$postId/edit'
      preLoaderRoute: typeof PostsPostIdEditRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/redirect/$target/via-beforeLoad': {
      id: '/redirect/$target/via-beforeLoad'
      path: '/via-beforeLoad'
      fullPath: '/redirect/$target/via-beforeLoad'
      preLoaderRoute: typeof RedirectTargetViaBeforeLoadRouteImport
      parentRoute: typeof RedirectTargetRoute
    }
    '/redirect/$target/via-loader': {
      id: '/redirect/$target/via-loader'
      path: '/via-loader'
      fullPath: '/redirect/$target/via-loader'
      preLoaderRoute: typeof RedirectTargetViaLoaderRouteImport
      parentRoute: typeof RedirectTargetRoute
    }
    '/redirect/preload/first': {
      id: '/redirect/preload/first'
      path: '/redirect/preload/first'
      fullPath: '/redirect/preload/first'
      preLoaderRoute: typeof RedirectPreloadFirstRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/redirect/preload/second': {
      id: '/redirect/preload/second'
      path: '/redirect/preload/second'
      fullPath: '/redirect/preload/second'
      preLoaderRoute: typeof RedirectPreloadSecondRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/redirect/preload/third': {
      id: '/redirect/preload/third'
      path: '/redirect/preload/third'
      fullPath: '/redirect/preload/third'
      preLoaderRoute: typeof RedirectPreloadThirdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/redirect/$target/': {
      id: '/redirect/$target/'
      path: '/'
      fullPath: '/redirect/$target/'
      preLoaderRoute: typeof RedirectTargetIndexRouteImport
      parentRoute: typeof RedirectTargetRoute
    }
  }
}

interface LayoutLayout2RouteChildren {
  LayoutLayout2LayoutARoute: typeof LayoutLayout2LayoutARoute
  LayoutLayout2LayoutBRoute: typeof LayoutLayout2LayoutBRoute
}

const LayoutLayout2RouteChildren: LayoutLayout2RouteChildren = {
  LayoutLayout2LayoutARoute: LayoutLayout2LayoutARoute,
  LayoutLayout2LayoutBRoute: LayoutLayout2LayoutBRoute,
}

const LayoutLayout2RouteWithChildren = LayoutLayout2Route._addFileChildren(
  LayoutLayout2RouteChildren,
)

interface LayoutRouteChildren {
  LayoutLayout2Route: typeof LayoutLayout2RouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLayout2Route: LayoutLayout2RouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface PostsRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const PostsRouteChildren: PostsRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

const PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren)

interface groupLayoutRouteChildren {
  groupLayoutInsidelayoutRoute: typeof groupLayoutInsidelayoutRoute
}

const groupLayoutRouteChildren: groupLayoutRouteChildren = {
  groupLayoutInsidelayoutRoute: groupLayoutInsidelayoutRoute,
}

const groupLayoutRouteWithChildren = groupLayoutRoute._addFileChildren(
  groupLayoutRouteChildren,
)

interface groupRouteChildren {
  groupLayoutRoute: typeof groupLayoutRouteWithChildren
  groupInsideRoute: typeof groupInsideRoute
  groupLazyinsideRoute: typeof groupLazyinsideRoute
  groupSubfolderInsideRoute: typeof groupSubfolderInsideRoute
}

const groupRouteChildren: groupRouteChildren = {
  groupLayoutRoute: groupLayoutRouteWithChildren,
  groupInsideRoute: groupInsideRoute,
  groupLazyinsideRoute: groupLazyinsideRoute,
  groupSubfolderInsideRoute: groupSubfolderInsideRoute,
}

const groupRouteWithChildren = groupRoute._addFileChildren(groupRouteChildren)

interface RedirectTargetRouteChildren {
  RedirectTargetViaBeforeLoadRoute: typeof RedirectTargetViaBeforeLoadRoute
  RedirectTargetViaLoaderRoute: typeof RedirectTargetViaLoaderRoute
  RedirectTargetIndexRoute: typeof RedirectTargetIndexRoute
}

const RedirectTargetRouteChildren: RedirectTargetRouteChildren = {
  RedirectTargetViaBeforeLoadRoute: RedirectTargetViaBeforeLoadRoute,
  RedirectTargetViaLoaderRoute: RedirectTargetViaLoaderRoute,
  RedirectTargetIndexRoute: RedirectTargetIndexRoute,
}

const RedirectTargetRouteWithChildren = RedirectTargetRoute._addFileChildren(
  RedirectTargetRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  AnchorRoute: AnchorRoute,
  EditingARoute: EditingARoute,
  EditingBRoute: EditingBRoute,
  PostsRoute: PostsRouteWithChildren,
  anotherGroupOnlyrouteinsideRoute: anotherGroupOnlyrouteinsideRoute,
  groupRoute: groupRouteWithChildren,
  RedirectTargetRoute: RedirectTargetRouteWithChildren,
  RedirectIndexRoute: RedirectIndexRoute,
  ParamsSingleValueRoute: ParamsSingleValueRoute,
  PostsPostIdEditRoute: PostsPostIdEditRoute,
  RedirectPreloadFirstRoute: RedirectPreloadFirstRoute,
  RedirectPreloadSecondRoute: RedirectPreloadSecondRoute,
  RedirectPreloadThirdRoute: RedirectPreloadThirdRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
