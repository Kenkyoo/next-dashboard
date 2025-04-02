import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, href: "/" },
  { text: "Dashboard", icon: <AnalyticsRoundedIcon />, href: "/dashboard" },
  { text: "Dólar", icon: <AttachMoneyRoundedIcon />, href: "/dashboard/dolar" },
  { text: "Feriados", icon: <EventRoundedIcon />, href: "/dashboard/feriados" },
  {
    text: "Inflación",
    icon: <TrendingUpRoundedIcon />,
    href: "/dashboard/inflation",
  },
  {
    text: "Quotes",
    icon: <FormatQuoteRoundedIcon />,
    href: "/dashboard/quotes",
  },
  { text: "Rates", icon: <PercentRoundedIcon />, href: "/dashboard/rates" },
  {
    text: "Senadores",
    icon: <GavelRoundedIcon />,
    href: "/dashboard/senadores",
  },
  { text: "Login/Logout", icon: <ExitToAppRoundedIcon />, href: "/login" },
];

export default function MenuContent() {
  const pathname = usePathname();
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link
              style={{ textDecoration: "none" }}
              href={item.href}
              passHref
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === item.href,
                }
              )}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
