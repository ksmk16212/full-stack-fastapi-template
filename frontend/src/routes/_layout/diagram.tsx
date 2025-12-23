import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/diagram')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/diagram"!</div>
}
