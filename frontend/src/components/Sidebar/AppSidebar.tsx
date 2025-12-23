import { Briefcase, Home, Users ,HouseHeart,PersonStanding,Computer,ToolCase,Bitcoin,GitCommitIcon,PictureInPicture2Icon} from "lucide-react"

import { SidebarAppearance } from "@/components/Common/Appearance"
import { Logo } from "@/components/Common/Logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import useAuth from "@/hooks/useAuth"
import { type Item, Main } from "./Main"
import { User } from "./User"

const baseItems: Item[] = [
  { icon: Home, title: "Dashboard", path: "/" },
  { icon: Briefcase, title: "Items", path: "/items" },

  { icon: HouseHeart, title: "ItemName", path: "/itemName" },
  { icon: Computer, title: "Company", path: "/company" },
  { icon: ToolCase, title: "Tools", path: "/tools" },
  { icon: GitCommitIcon, title: "Github", path: "/github" },
  { icon: PictureInPicture2Icon, title: "Diagram", path: "/diagram" },
   { icon: Bitcoin, title: "Bitcoin", path: "/bitcoin" },
     { icon: PersonStanding , title: "football", path: "/play" },
]

export function AppSidebar() {
  const { user: currentUser } = useAuth()

  const items = currentUser?.is_superuser
    ? [...baseItems, { icon: Users, title: "Admin", path: "/admin" }]
    : baseItems

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 py-6 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:items-center">
        <Logo variant="responsive" />
      </SidebarHeader>
      <SidebarContent>
        <Main items={items} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarAppearance />
        <User user={currentUser} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
