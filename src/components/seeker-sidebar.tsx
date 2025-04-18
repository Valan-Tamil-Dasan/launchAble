import { Calendar, Home, Inbox, Video, Target , User2 , ChevronUp , FileUp , FileUser , FileText ,MessageCircle , BookCheck, Book } from "lucide-react"
import {CONFIG} from '../config'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

const profileItems = [
  {
    title: "Profile",
    url: "/seeker-edit-profile",
    icon: FileUser,
  },
  {
    title: "Resume",
    url: "/seeker-resume",
    icon: FileUp,
  },
]
const scheduleItems = [
  {
    title: "Schedule",
    url : "/coach-schedule",
    icon : Calendar,
  },
]
const jobActions = [
  {
    title: "Online Assesment",
    url : "/seeker-oa",
    icon : BookCheck,
  },
  {
    title: "Notes",
    url : "/seeker-notes",
    icon : FileText,
  },
  {
    title: "Meet",
    url : "/seeker-meet",
    icon : Video,
  },
]
export function SeekerSidebar() {
  const title = CONFIG.TITLE;
  return (
    <Sidebar collapsible="offcanvas" >
      <SidebarHeader className="p-4 font-bold text-center text-lg border-b">
      {title}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Profile Menu</SidebarGroupLabel>
          <SidebarGroupContent>
      <SidebarMenu>
        {profileItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Schedule</SidebarGroupLabel>
        <SidebarGroupContent>
      <SidebarMenu>
        {scheduleItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>General</SidebarGroupLabel>
        <SidebarGroupContent>
      <SidebarMenu>
        {jobActions.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center w-full">
                  <User2 className="mr-2" /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
