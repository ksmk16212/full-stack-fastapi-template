import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_another_root/stop')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_another_root/tsx/stop"!</div>
}
