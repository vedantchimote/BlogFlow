import {HomeIcon,SearchIcon,LayoutList,Newspaper} from 'lucide-react'

export const navLinks = [
    {
        icon:HomeIcon,
        name: "All Blogs",
        route: "/"
    },
    {
        icon:Newspaper,
        name: "My Blogs",
        route: "/myblogs"
    },
    {
        icon:SearchIcon,
        name: "Explore Blogs",
        route: "/explore"
    },
    {
        icon:LayoutList,
        name: "Categories",
        route: "/categories"
    }
]