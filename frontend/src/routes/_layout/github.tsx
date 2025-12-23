import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/github')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/github"!</div>
}
