import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from "recharts";
import {
  Search, Bell, Sparkles, Settings, Globe, ChevronDown, Activity, Users, TrendingUp,
  IndianRupee, Clock, MousePointerClick, Download, Wifi, Server, Database, Cpu, ShieldCheck,
  LayoutDashboard, Radio, UserCog, LineChart as LineIcon, Lightbulb, BarChart3, Brain, Wallet,
  Link2, Megaphone, Plug, Gauge, Target, Repeat, BellRing, FileBarChart, UsersRound, Cog,
  ArrowUpRight, ArrowDownRight, MapPin, Filter, Calendar, RefreshCw, ChevronRight, Zap, Flame,
  Handshake, Receipt, CheckCircle2, AlertCircle,
} from "lucide-react";
import logo from "../assets/talkzie-logo.jpg";

export const Route = createFileRoute("/")({ component: Dashboard });

// ============ MONTHLY DATA ============
type MonthData = {
  key: string; label: string;
  downloads: number; play: number; web: number; apk: number;
  dau: number; mau: number; retained: number;
  comparisons: number; completed: number; dropped: number; convRate: number; avgOrders: number;
  uniqueUsers: number; repeatUsers: number; repeatRate: number;
  affiliate: number; ad: number; total: number; arpt: number; adShare: number; sessionDuration: number;
  categories: { name: string; tx: number; rev: number }[];
  platforms: Record<string, { name: string; tx: number }[]>;
};

const MONTHS: MonthData[] = [
  {
    key: "2025-11", label: "November 2025",
    downloads: 10000, play: 1000, web: 3150, apk: 5850,
    dau: 1584, mau: 4583, retained: 2796,
    comparisons: 47520, completed: 11880, dropped: 35640, convRate: 23.4, avgOrders: 1.65,
    uniqueUsers: 4680, repeatUsers: 2520, repeatRate: 35,
    affiliate: 2.10, ad: 0, total: 2.10, arpt: 17.68, adShare: 0, sessionDuration: 642,
    categories: [
      { name: "Cab Rides", tx: 2970, rev: 20790 },
      { name: "Food Delivery", tx: 2376, rev: 23760 },
      { name: "Grocery", tx: 1782, rev: 17820 },
      { name: "Shopping", tx: 1782, rev: 53460 },
      { name: "Fashion", tx: 1188, rev: 26136 },
      { name: "Hotels", tx: 891, rev: 27621 },
      { name: "Flights", tx: 891, rev: 29403 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:1040},{name:"Ola",tx:891},{name:"Rapido",tx:742},{name:"Namma Yatri",tx:297}],
      "Food Delivery": [{name:"Swiggy",tx:1307},{name:"Zomato",tx:1069}],
      "Grocery": [{name:"Zepto",tx:624},{name:"Blinkit",tx:535},{name:"Instamart",tx:356},{name:"BigBasket",tx:267}],
      "Shopping": [{name:"Amazon",tx:980},{name:"Flipkart",tx:624},{name:"Croma",tx:178}],
      "Fashion": [{name:"Myntra",tx:416},{name:"Ajio",tx:238},{name:"Nykaa",tx:178},{name:"Meesho",tx:178},{name:"H&M",tx:95},{name:"Zara",tx:83}],
      "Hotels": [{name:"Booking.com",tx:223},{name:"MakeMyTrip",tx:178},{name:"Goibibo",tx:178},{name:"Agoda",tx:134},{name:"Trip.com",tx:89},{name:"OYO",tx:89}],
      "Flights": [{name:"Yatra",tx:223},{name:"Booking.com",tx:178},{name:"GoToGate",tx:134},{name:"FlightNetwork",tx:134},{name:"Air India",tx:134},{name:"TeaFlight",tx:88}],
    },
  },
  {
    key: "2025-12", label: "December 2025",
    downloads: 13000, play: 1000, web: 4200, apk: 7800,
    dau: 2059, mau: 5958, retained: 3634,
    comparisons: 61776, completed: 15444, dropped: 46332, convRate: 24.1, avgOrders: 1.65,
    uniqueUsers: 6084, repeatUsers: 3276, repeatRate: 35,
    affiliate: 2.73, ad: 0, total: 2.73, arpt: 17.67, adShare: 0, sessionDuration: 678,
    categories: [
      { name: "Cab Rides", tx: 3861, rev: 27027 },
      { name: "Food Delivery", tx: 3089, rev: 30890 },
      { name: "Grocery", tx: 2317, rev: 23170 },
      { name: "Shopping", tx: 2317, rev: 69510 },
      { name: "Fashion", tx: 1544, rev: 33968 },
      { name: "Hotels", tx: 1158, rev: 35898 },
      { name: "Flights", tx: 1158, rev: 38214 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:1351},{name:"Ola",tx:1158},{name:"Rapido",tx:965},{name:"Namma Yatri",tx:387}],
      "Food Delivery": [{name:"Swiggy",tx:1699},{name:"Zomato",tx:1390}],
      "Grocery": [{name:"Zepto",tx:811},{name:"Blinkit",tx:695},{name:"Instamart",tx:463},{name:"BigBasket",tx:348}],
      "Shopping": [{name:"Amazon",tx:1274},{name:"Flipkart",tx:811},{name:"Croma",tx:232}],
      "Fashion": [{name:"Myntra",tx:540},{name:"Ajio",tx:309},{name:"Nykaa",tx:232},{name:"Meesho",tx:232},{name:"H&M",tx:124},{name:"Zara",tx:107}],
      "Hotels": [{name:"Booking.com",tx:290},{name:"MakeMyTrip",tx:232},{name:"Goibibo",tx:232},{name:"Agoda",tx:174},{name:"Trip.com",tx:115},{name:"OYO",tx:115}],
      "Flights": [{name:"Yatra",tx:290},{name:"Booking.com",tx:232},{name:"GoToGate",tx:174},{name:"FlightNetwork",tx:174},{name:"Air India",tx:174},{name:"TeaFlight",tx:114}],
    },
  },
  {
    key: "2026-01", label: "January 2026",
    downloads: 16900, play: 1000, web: 5565, apk: 10335,
    dau: 2677, mau: 7746, retained: 4725,
    comparisons: 80308, completed: 20077, dropped: 60231, convRate: 24.9, avgOrders: 1.65,
    uniqueUsers: 7909, repeatUsers: 4259, repeatRate: 35,
    affiliate: 3.55, ad: 0, total: 3.55, arpt: 17.66, adShare: 0, sessionDuration: 714,
    categories: [
      { name: "Cab Rides", tx: 5019, rev: 35133 },
      { name: "Food Delivery", tx: 4015, rev: 40150 },
      { name: "Grocery", tx: 3012, rev: 30120 },
      { name: "Shopping", tx: 3012, rev: 90360 },
      { name: "Fashion", tx: 2008, rev: 44176 },
      { name: "Hotels", tx: 1506, rev: 46686 },
      { name: "Flights", tx: 1506, rev: 49698 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:1757},{name:"Ola",tx:1506},{name:"Rapido",tx:1255},{name:"Namma Yatri",tx:501}],
      "Food Delivery": [{name:"Swiggy",tx:2208},{name:"Zomato",tx:1807}],
      "Grocery": [{name:"Zepto",tx:1054},{name:"Blinkit",tx:904},{name:"Instamart",tx:602},{name:"BigBasket",tx:452}],
      "Shopping": [{name:"Amazon",tx:1657},{name:"Flipkart",tx:1054},{name:"Croma",tx:301}],
      "Fashion": [{name:"Myntra",tx:703},{name:"Ajio",tx:402},{name:"Nykaa",tx:301},{name:"Meesho",tx:301},{name:"H&M",tx:161},{name:"Zara",tx:140}],
      "Hotels": [{name:"Booking.com",tx:377},{name:"MakeMyTrip",tx:301},{name:"Goibibo",tx:301},{name:"Agoda",tx:226},{name:"Trip.com",tx:151},{name:"OYO",tx:150}],
      "Flights": [{name:"Yatra",tx:377},{name:"Booking.com",tx:301},{name:"GoToGate",tx:226},{name:"FlightNetwork",tx:226},{name:"Air India",tx:226},{name:"TeaFlight",tx:150}],
    },
  },
  {
    key: "2026-02", label: "February 2026",
    downloads: 21970, play: 1000, web: 7340, apk: 13630,
    dau: 3480, mau: 9625, retained: 5871,
    comparisons: 104400, completed: 26100, dropped: 78300, convRate: 25.6, avgOrders: 1.65,
    uniqueUsers: 10282, repeatUsers: 5536, repeatRate: 35,
    affiliate: 4.62, ad: 1.06, total: 5.68, arpt: 17.69, adShare: 23, sessionDuration: 730,
    categories: [
      { name: "Cab Rides", tx: 6525, rev: 45675 },
      { name: "Food Delivery", tx: 5220, rev: 52200 },
      { name: "Grocery", tx: 3915, rev: 39150 },
      { name: "Shopping", tx: 3915, rev: 117450 },
      { name: "Fashion", tx: 2610, rev: 57420 },
      { name: "Hotels", tx: 1958, rev: 60698 },
      { name: "Flights", tx: 1957, rev: 64581 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:2284},{name:"Ola",tx:1958},{name:"Rapido",tx:1631},{name:"Namma Yatri",tx:652}],
      "Food Delivery": [{name:"Swiggy",tx:2871},{name:"Zomato",tx:2349}],
      "Grocery": [{name:"Zepto",tx:1370},{name:"Blinkit",tx:1175},{name:"Instamart",tx:783},{name:"BigBasket",tx:587}],
      "Shopping": [{name:"Amazon",tx:2153},{name:"Flipkart",tx:1370},{name:"Croma",tx:392}],
      "Fashion": [{name:"Myntra",tx:914},{name:"Ajio",tx:522},{name:"Nykaa",tx:392},{name:"Meesho",tx:392},{name:"H&M",tx:209},{name:"Zara",tx:181}],
      "Hotels": [{name:"Booking.com",tx:490},{name:"MakeMyTrip",tx:392},{name:"Goibibo",tx:392},{name:"Agoda",tx:294},{name:"Trip.com",tx:195},{name:"OYO",tx:195}],
      "Flights": [{name:"Yatra",tx:489},{name:"Booking.com",tx:391},{name:"GoToGate",tx:294},{name:"FlightNetwork",tx:294},{name:"Air India",tx:294},{name:"TeaFlight",tx:195}],
    },
  },
  {
    key: "2026-03", label: "March 2026",
    downloads: 28561, play: 1000, web: 9646, apk: 17915,
    dau: 4524, mau: 12833, retained: 7828,
    comparisons: 135720, completed: 33930, dropped: 101790, convRate: 25.9, avgOrders: 1.65,
    uniqueUsers: 13367, repeatUsers: 7197, repeatRate: 35,
    affiliate: 6.00, ad: 1.50, total: 7.50, arpt: 21.85, adShare: 25, sessionDuration: 778,
    categories: [
      { name: "Cab Rides", tx: 8483, rev: 59381 },
      { name: "Food Delivery", tx: 6786, rev: 67860 },
      { name: "Grocery", tx: 5090, rev: 50900 },
      { name: "Shopping", tx: 5090, rev: 152700 },
      { name: "Fashion", tx: 3393, rev: 74646 },
      { name: "Hotels", tx: 2545, rev: 78895 },
      { name: "Flights", tx: 2543, rev: 83919 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:2969},{name:"Ola",tx:2545},{name:"Rapido",tx:2121},{name:"Namma Yatri",tx:848}],
      "Food Delivery": [{name:"Swiggy",tx:3732},{name:"Zomato",tx:3054}],
      "Grocery": [{name:"Zepto",tx:1782},{name:"Blinkit",tx:1527},{name:"Instamart",tx:1018},{name:"BigBasket",tx:763}],
      "Shopping": [{name:"Amazon",tx:2800},{name:"Flipkart",tx:1782},{name:"Croma",tx:508}],
      "Fashion": [{name:"Myntra",tx:1188},{name:"Ajio",tx:679},{name:"Nykaa",tx:509},{name:"Meesho",tx:509},{name:"H&M",tx:271},{name:"Zara",tx:237}],
      "Hotels": [{name:"Booking.com",tx:636},{name:"MakeMyTrip",tx:509},{name:"Goibibo",tx:509},{name:"Agoda",tx:382},{name:"Trip.com",tx:255},{name:"OYO",tx:254}],
      "Flights": [{name:"Yatra",tx:636},{name:"Booking.com",tx:509},{name:"GoToGate",tx:381},{name:"FlightNetwork",tx:381},{name:"Air India",tx:381},{name:"TeaFlight",tx:255}],
    },
  },
  {
    key: "2026-04", label: "April 2026",
    downloads: 37129, play: 1000, web: 12645, apk: 23484,
    dau: 5881, mau: 16958, retained: 10344,
    comparisons: 176440, completed: 44110, dropped: 132330, convRate: 26.3, avgOrders: 1.65,
    uniqueUsers: 17377, repeatUsers: 9356, repeatRate: 35,
    affiliate: 7.80, ad: 2.34, total: 10.14, arpt: 22.74, adShare: 30, sessionDuration: 802,
    categories: [
      { name: "Cab Rides", tx: 11028, rev: 77196 },
      { name: "Food Delivery", tx: 8822, rev: 88220 },
      { name: "Grocery", tx: 6617, rev: 66170 },
      { name: "Shopping", tx: 6617, rev: 198510 },
      { name: "Fashion", tx: 4411, rev: 97042 },
      { name: "Hotels", tx: 3308, rev: 102548 },
      { name: "Flights", tx: 3307, rev: 109131 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:3860},{name:"Ola",tx:3308},{name:"Rapido",tx:2757},{name:"Namma Yatri",tx:1103}],
      "Food Delivery": [{name:"Swiggy",tx:4852},{name:"Zomato",tx:3970}],
      "Grocery": [{name:"Zepto",tx:2316},{name:"Blinkit",tx:1985},{name:"Instamart",tx:1323},{name:"BigBasket",tx:993}],
      "Shopping": [{name:"Amazon",tx:3639},{name:"Flipkart",tx:2316},{name:"Croma",tx:662}],
      "Fashion": [{name:"Myntra",tx:1544},{name:"Ajio",tx:882},{name:"Nykaa",tx:662},{name:"Meesho",tx:662},{name:"H&M",tx:353},{name:"Zara",tx:308}],
      "Hotels": [{name:"Booking.com",tx:827},{name:"MakeMyTrip",tx:662},{name:"Goibibo",tx:662},{name:"Agoda",tx:496},{name:"Trip.com",tx:331},{name:"OYO",tx:330}],
      "Flights": [{name:"Yatra",tx:827},{name:"Booking.com",tx:661},{name:"GoToGate",tx:496},{name:"FlightNetwork",tx:496},{name:"Air India",tx:496},{name:"TeaFlight",tx:331}],
    },
  },
  {
    key: "2026-05", label: "May 2026",
    downloads: 48268, play: 1000, web: 16494, apk: 30774,
    dau: 7646, mau: 22000, retained: 13420,
    comparisons: 229368, completed: 57342, dropped: 172026, convRate: 26.9, avgOrders: 1.65,
    uniqueUsers: 22589, repeatUsers: 12164, repeatRate: 35,
    affiliate: 10.14, ad: 3.65, total: 13.79, arpt: 23.92, adShare: 36, sessionDuration: 821,
    categories: [
      { name: "Cab Rides", tx: 14336, rev: 100352 },
      { name: "Food Delivery", tx: 11468, rev: 114680 },
      { name: "Grocery", tx: 8601, rev: 86010 },
      { name: "Shopping", tx: 8601, rev: 258030 },
      { name: "Fashion", tx: 5734, rev: 126148 },
      { name: "Hotels", tx: 4301, rev: 133331 },
      { name: "Flights", tx: 4301, rev: 141933 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:5018},{name:"Ola",tx:4301},{name:"Rapido",tx:3584},{name:"Namma Yatri",tx:1433}],
      "Food Delivery": [{name:"Swiggy",tx:6307},{name:"Zomato",tx:5161}],
      "Grocery": [{name:"Zepto",tx:3010},{name:"Blinkit",tx:2580},{name:"Instamart",tx:1720},{name:"BigBasket",tx:1291}],
      "Shopping": [{name:"Amazon",tx:4731},{name:"Flipkart",tx:3010},{name:"Croma",tx:860}],
      "Fashion": [{name:"Myntra",tx:2007},{name:"Ajio",tx:1147},{name:"Nykaa",tx:860},{name:"Meesho",tx:860},{name:"H&M",tx:459},{name:"Zara",tx:401}],
      "Hotels": [{name:"Booking.com",tx:1075},{name:"MakeMyTrip",tx:860},{name:"Goibibo",tx:860},{name:"Agoda",tx:645},{name:"Trip.com",tx:430},{name:"OYO",tx:431}],
      "Flights": [{name:"Yatra",tx:1075},{name:"Booking.com",tx:860},{name:"GoToGate",tx:645},{name:"FlightNetwork",tx:645},{name:"Air India",tx:645},{name:"TeaFlight",tx:431}],
    },
  },
  {
    key: "2026-06", label: "June 2026",
    downloads: 56814, play: 1250, web: 19380, apk: 36184,
    dau: 8924, mau: 25400, retained: 16764,
    comparisons: 268752, completed: 68144, dropped: 200608, convRate: 27.6, avgOrders: 1.72,
    uniqueUsers: 25400, repeatUsers: 9906, repeatRate: 39,
    affiliate: 12.04, ad: 4.44, total: 16.48, arpt: 24.18, adShare: 27, sessionDuration: 848,
    categories: [
      { name: "Cab Rides", tx: 17036, rev: 119252 },
      { name: "Food Delivery", tx: 13629, rev: 136290 },
      { name: "Grocery", tx: 10222, rev: 102220 },
      { name: "Shopping", tx: 10222, rev: 306660 },
      { name: "Fashion", tx: 6814, rev: 149908 },
      { name: "Hotels", tx: 5111, rev: 158441 },
      { name: "Flights", tx: 5110, rev: 168630 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:5963},{name:"Ola",tx:5111},{name:"Rapido",tx:4259},{name:"Namma Yatri",tx:1703}],
      "Food Delivery": [{name:"Swiggy",tx:7496},{name:"Zomato",tx:6133}],
      "Grocery": [{name:"Zepto",tx:3578},{name:"Blinkit",tx:3067},{name:"Instamart",tx:2044},{name:"BigBasket",tx:1533}],
      "Shopping": [{name:"Amazon",tx:5622},{name:"Flipkart",tx:3578},{name:"Croma",tx:1022}],
      "Fashion": [{name:"Myntra",tx:2385},{name:"Ajio",tx:1363},{name:"Nykaa",tx:1022},{name:"Meesho",tx:1022},{name:"H&M",tx:545},{name:"Zara",tx:477}],
      "Hotels": [{name:"Booking.com",tx:1278},{name:"MakeMyTrip",tx:1022},{name:"Goibibo",tx:1022},{name:"Agoda",tx:767},{name:"Trip.com",tx:511},{name:"OYO",tx:511}],
      "Flights": [{name:"Yatra",tx:1278},{name:"Booking.com",tx:1022},{name:"GoToGate",tx:767},{name:"FlightNetwork",tx:767},{name:"Air India",tx:767},{name:"TeaFlight",tx:509}],
    },
  },
  {
    key: "2026-07", label: "July 2026",
    downloads: 58284, play: 458, web: 7106, apk: 13248,
    dau: 9246, mau: 26180, retained: 17543,
    comparisons: 92386, completed: 24015, dropped: 68371, convRate: 28.1, avgOrders: 1.74,
    uniqueUsers: 26180, repeatUsers: 10733, repeatRate: 41,
    affiliate: 4.30, ad: 1.56, total: 5.86, arpt: 24.40, adShare: 27, sessionDuration: 860,
    categories: [
      { name: "Cab Rides", tx: 6005, rev: 42035 },
      { name: "Food Delivery", tx: 4803, rev: 48030 },
      { name: "Grocery", tx: 3602, rev: 36020 },
      { name: "Shopping", tx: 3602, rev: 108060 },
      { name: "Fashion", tx: 2401, rev: 52822 },
      { name: "Hotels", tx: 1801, rev: 55831 },
      { name: "Flights", tx: 1801, rev: 59433 },
    ],
    platforms: {
      "Cab Rides": [{name:"Uber",tx:2105},{name:"Ola",tx:1800},{name:"Rapido",tx:1500},{name:"Namma Yatri",tx:600}],
      "Food Delivery": [{name:"Swiggy",tx:2644},{name:"Zomato",tx:2159}],
      "Grocery": [{name:"Zepto",tx:1262},{name:"Blinkit",tx:1080},{name:"Instamart",tx:720},{name:"BigBasket",tx:540}],
      "Shopping": [{name:"Amazon",tx:1982},{name:"Flipkart",tx:1260},{name:"Croma",tx:360}],
      "Fashion": [{name:"Myntra",tx:841},{name:"Ajio",tx:480},{name:"Nykaa",tx:360},{name:"Meesho",tx:360},{name:"H&M",tx:192},{name:"Zara",tx:168}],
      "Hotels": [{name:"Booking.com",tx:451},{name:"MakeMyTrip",tx:360},{name:"Goibibo",tx:360},{name:"Agoda",tx:270},{name:"Trip.com",tx:180},{name:"OYO",tx:180}],
      "Flights": [{name:"Yatra",tx:451},{name:"Booking.com",tx:360},{name:"GoToGate",tx:270},{name:"FlightNetwork",tx:270},{name:"Air India",tx:270},{name:"TeaFlight",tx:180}],
    },
  },
];

const CAT_COLORS: Record<string, string> = {
  "Cab Rides": "#f59e0b", "Food Delivery": "#ef4444", "Grocery": "#10b981",
  "Shopping": "#4f46e5", "Fashion": "#ec4899", "Hotels": "#7c3aed", "Flights": "#0ea5e9",
};

// ---- Real-time / live feed ----
const dauSeries = Array.from({ length: 24 }, (_, i) => ({
  t: `${i}:00`, dau: 1200 + Math.round(Math.sin(i / 3.2) * 700 + Math.random() * 350) + (i > 17 ? 800 : 0),
}));
const cities = [
  { name: "Bangalore", users: "12,481", trend: +14.2, top: 22, left: 28 },
  { name: "Chennai", users: "9,832", trend: +28.4, top: 30, left: 36 },
  { name: "Hyderabad", users: "8,219", trend: +9.1, top: 18, left: 32 },
  { name: "Mumbai", users: "11,204", trend: +6.7, top: 14, left: 16 },
  { name: "Delhi", users: "10,108", trend: +4.3, top: -8, left: 26 },
  { name: "Pune", users: "5,431", trend: +11.5, top: 8, left: 18 },
  { name: "Kochi", users: "3,128", trend: +18.9, top: 38, left: 26 },
];
const aiInsights = [
  { tag: "DEMAND SPIKE", title: "Cab demand expected to rise 28% in Chennai after 7 PM", conf: 94, color: "text-indigo-600" },
  { tag: "BEHAVIOUR", title: "Food delivery searches increased 41% during weekends", conf: 88, color: "text-emerald-600" },
  { tag: "TRENDING", title: "Dubai flights trending among 18–30 age group", conf: 81, color: "text-sky-600" },
  { tag: "PRICING", title: "Blinkit basket avg up ₹47 vs Zepto in Bangalore", conf: 76, color: "text-amber-600" },
];
const trendingSearches = [
  "Cheapest cab in Chennai", "Lowest iPhone price", "Cheap Dubai flights",
  "Best late-night food delivery", "Hotel deals near airport", "Grocery delivery under 10 mins",
];
const partners = [
  { n: "Uber", s: "Healthy", ms: 142, t: 18420, conv: 8.6, spark: [4,5,6,7,5,6,8,7,9,8] }, { n: "Ola", s: "Healthy", ms: 168, t: 14210, conv: 5.6, spark: [3,4,5,4,6,5,4,5,6,5] },
  { n: "Swiggy", s: "Healthy", ms: 121, t: 28910, conv: 9.2, spark: [7,8,9,8,10,9,8,9,10,9] }, { n: "Zomato", s: "Healthy", ms: 156, t: 24108, conv: 7.8, spark: [6,7,8,7,8,9,7,8,9,8] },
  { n: "Blinkit", s: "Healthy", ms: 98, t: 19302, conv: 4.7, spark: [3,4,3,5,4,3,4,5,4,3] }, { n: "Zepto", s: "Healthy", ms: 104, t: 17812, conv: 3.9, spark: [2,3,4,3,2,3,4,3,2,3] },
  { n: "Amazon", s: "Healthy", ms: 188, t: 22014, conv: 2.4, spark: [1,2,3,2,1,2,3,2,1,2] }, { n: "Flipkart", s: "Healthy", ms: 201, t: 18923, conv: 3.1, spark: [2,3,2,4,3,2,3,2,4,3] },
  { n: "Agoda", s: "Healthy", ms: 244, t: 6021, conv: 6.5, spark: [5,6,7,6,5,6,7,6,5,6] }, { n: "Airbnb", s: "Healthy", ms: 268, t: 4912, conv: 8.9, spark: [7,8,9,8,7,8,9,8,7,8] },
  { n: "Skyscanner", s: "Healthy", ms: 221, t: 7821, conv: 4.1, spark: [3,4,5,4,3,4,5,4,3,4] }, { n: "MakeMyTrip", s: "Healthy", ms: 198, t: 9214, conv: 5.3, spark: [4,5,6,5,4,5,6,5,4,5] },
];
const liveFeedSeed = [
  "User compared Uber vs Ola — saved ₹62", "Flight redirected to Skyscanner — DEL→DXB",
  "Hotel deal clicked in Mumbai — Agoda", "Food order redirected to Swiggy — Bengaluru",
  "Price drop detected for iPhone 15 — ₹4,200 off", "Cab fare surge alert: Pune 1.6x",
  "Zepto basket cheaper by ₹84 vs Blinkit", "Affiliate conv: MakeMyTrip ₹1,820",
];

// ---- helpers ----
const fmt = (n: number) => new Intl.NumberFormat("en-IN").format(n);
const lakh = (n: number) => `₹${n.toFixed(2)}L`;
function fmtSec(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}m ${sec.toString().padStart(2, "0")}s`;
}

function Spark({ data, color = "#4f46e5" }: { data: number[]; color?: string }) {
  return (
    <ResponsiveContainer width="100%" height={42}>
      <AreaChart data={data.map((v, i) => ({ i, v }))}>
        <defs>
          <linearGradient id={`g-${color}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke={color} strokeWidth={1.75} fill={`url(#g-${color})`} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function Kpi({ icon: Icon, label, value, delta, sub, spark, color = "#4f46e5" }: any) {
  const up = delta >= 0;
  return (
    <div className="group relative rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_24px_rgba(79,70,229,0.08)] transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-slate-500">
            <Icon className="h-3.5 w-3.5" /> {label}
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 tabular-nums">{value}</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs">
            <span className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-medium ${up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
              {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {Math.abs(delta)}%
            </span>
            <span className="text-slate-500">{sub}</span>
          </div>
        </div>
      </div>
      <div className="-mx-1 mt-3"><Spark data={spark} color={color} /></div>
    </div>
  );
}

function SectionTitle({ children, kicker, action }: any) {
  return (
    <div className="mb-3 flex items-end justify-between">
      <div>
        {kicker && <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-600">{kicker}</div>}
        <h3 className="text-[15px] font-semibold tracking-tight text-slate-900">{children}</h3>
      </div>
      {action}
    </div>
  );
}

function Panel({ children, className = "", ...rest }: any) {
  return (
    <div {...rest} className={`rounded-xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${className}`}>
      {children}
    </div>
  );
}

type View = "overview" | "partnership" | "receivables";

function Dashboard() {
  const [now, setNow] = useState<Date | null>(null);
  const [apiCount, setApiCount] = useState(28412);
  const [feed, setFeed] = useState(liveFeedSeed);
  const [view, setView] = useState<View>("overview");
  const [monthKey, setMonthKey] = useState(MONTHS[MONTHS.length - 1].key);
  const month = useMemo(() => MONTHS.find((m) => m.key === monthKey)!, [monthKey]);
  const monthIdx = MONTHS.findIndex((m) => m.key === monthKey);
  const prev = monthIdx > 0 ? MONTHS[monthIdx - 1] : null;
  const pct = (cur: number, p?: number | null) => (p && p > 0 ? +(((cur - p) / p) * 100).toFixed(1) : 0);

  useEffect(() => {
    const t = setInterval(() => {
      setNow(new Date());
      setApiCount((n) => n + Math.floor(Math.random() * 14) + 3);
      setFeed((f) => [liveFeedSeed[Math.floor(Math.random() * liveFeedSeed.length)], ...f].slice(0, 12));
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const sidebar: { i: any; l: string; v?: View; h?: string }[] = [
    { i: LayoutDashboard, l: "Dashboard Overview", v: "overview" },
    { i: Handshake, l: "Partnership Commission", v: "partnership" },
    { i: Receipt, l: "Receivables", v: "receivables" },
    { i: Radio, l: "Real-Time Analytics", v: "overview", h: "#realtime" },
    { i: UserCog, l: "User Intelligence", v: "overview", h: "#user-insights" },
    { i: LineIcon, l: "Market Trends", v: "overview", h: "#trending" },
    { i: Lightbulb, l: "Consumer Insights", v: "overview", h: "#user-insights" },
    { i: BarChart3, l: "Category Performance", v: "overview", h: "#categories" },
    { i: Brain, l: "AI Prediction Engine", v: "overview", h: "#ai-insights" },
    { i: Wallet, l: "Revenue Analytics", v: "overview", h: "#revenue" },
    { i: Link2, l: "Affiliate Tracking", v: "overview", h: "#partners" },
    { i: Megaphone, l: "Ad Intelligence", v: "overview", h: "#sources" },
    { i: Plug, l: "Platform Integrations", v: "overview", h: "#partners" },
    { i: Gauge, l: "API Monitoring", v: "overview", h: "#infra" },
    { i: Target, l: "Campaign Analytics", v: "overview", h: "#funnel" },
    { i: Repeat, l: "User Retention", v: "overview", h: "#infra" },
    { i: BellRing, l: "Notifications", v: "overview", h: "#feed" },
    { i: FileBarChart, l: "Reports", v: "overview", h: "#sessions" },
    { i: UsersRound, l: "Team Access", v: "overview", h: "#infra" },
    { i: Cog, l: "Admin Settings", v: "overview", h: "#infra" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7fb] font-[Inter,'SF_Pro_Display',system-ui] text-slate-900 antialiased">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-slate-200/80 bg-white/80 px-5 backdrop-blur-md">
        <div className="flex items-center gap-2 w-60 shrink-0">
          <img src={logo} alt="Talkzie" className="h-7 w-auto object-contain" />
          <span className="ml-1 rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-600">
            Enterprise
          </span>
        </div>
        <div className="relative flex-1 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            placeholder="Search users, analytics, categories, reports…"
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/60 pl-9 pr-16 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-500">⌘K</kbd>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Uptime 99.98%
          </div>
          <div className="hidden lg:flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600">
            <Activity className="h-3 w-3 text-indigo-500" /> {apiCount.toLocaleString()} req/min
          </div>
          <button className="hidden md:flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
            <Globe className="h-3 w-3" /> India Region <ChevronDown className="h-3 w-3" />
          </button>
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-slate-500 tabular-nums">
            <Calendar className="h-3 w-3" />
            {now ? now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "--"}
            <span className="text-slate-300">·</span>
            <Clock className="h-3 w-3" />
            {now ? now.toLocaleTimeString("en-IN", { hour12: false }) : "--:--:--"}
          </div>
          <button className="grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100"><Sparkles className="h-4 w-4 text-indigo-500" /></button>
          <button className="relative grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
          </button>
          <button className="grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100"><Settings className="h-4 w-4" /></button>
          <div className="ml-1 flex items-center gap-2 rounded-md border border-slate-200 bg-white pl-1 pr-2 py-1">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-[10px] font-semibold text-white">A</div>
            <div className="hidden md:block text-[11px] leading-tight">
              <div className="font-medium text-slate-800">Admin</div>
              <div className="text-slate-500">Product · Talkzie</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-slate-200/80 bg-white px-3 py-4">
          <div className="mb-3 px-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Workspace</div>
            <button className="mt-1 flex w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-left text-xs">
              <span className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded bg-indigo-600 text-[10px] font-bold text-white">T</span>
                <span className="font-medium text-slate-800">Talkzie · Prod</span>
              </span>
              <ChevronDown className="h-3 w-3 text-slate-500" />
            </button>
          </div>
          <nav className="space-y-0.5">
            {sidebar.map(({ i: I, l, v, h }) => {
              const active = view === v && (!h || view === "overview" && false);
              const isPrimary = (l === "Dashboard Overview" && view === "overview") ||
                (l === "Partnership Commission" && view === "partnership") ||
                (l === "Receivables" && view === "receivables");
              return (
                <button
                  key={l}
                  onClick={() => {
                    if (v) setView(v);
                    if (h && v === "overview") {
                      setTimeout(() => {
                        const el = document.querySelector(h);
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 50);
                    }
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-[13px] transition-colors cursor-pointer ${
                    isPrimary ? "bg-indigo-50 text-indigo-700 font-medium" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <I className={`h-4 w-4 ${isPrimary ? "text-indigo-600" : "text-slate-400"}`} />
                  {l}
                  {isPrimary && <ChevronRight className="ml-auto h-3.5 w-3.5" />}
                </button>
              );
            })}
          </nav>
          <div className="mt-5 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50/40 p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-700">
              <ShieldCheck className="h-3 w-3" /> Production Environment
            </div>
            <p className="mt-1 text-[11px] leading-snug text-slate-600">Compare Smarter. Save Better.</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <div><div className="text-[10px] text-slate-500">Nodes</div><div className="text-xs font-semibold">42</div></div>
              <div><div className="text-[10px] text-slate-500">Regions</div><div className="text-xs font-semibold">6</div></div>
              <div><div className="text-[10px] text-slate-500">SLA</div><div className="text-xs font-semibold text-emerald-600">99.98</div></div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 px-6 py-6 space-y-6">
          {view === "overview" && (
            <OverviewView
              month={month} prev={prev} pct={pct}
              monthKey={monthKey} setMonthKey={setMonthKey}
              feed={feed}
            />
          )}
          {view === "partnership" && <PartnershipView />}
          {view === "receivables" && <ReceivablesView />}

          <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Talkzie" className="h-4 w-auto opacity-70" />
              <span>© {new Date().getFullYear()} Talkzie Technologies Pvt. Ltd. · Intelligence Console v4.2.1</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><Wifi className="h-3 w-3 text-emerald-600" /> All regions operational</span>
              <span>Build a8f31c · prod-india</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// ============ OVERVIEW VIEW ============
function OverviewView({ month, prev, pct, monthKey, setMonthKey, feed }: any) {
  const m: MonthData = month;
  const revSeries = MONTHS.map((x) => ({
    d: x.label.split(" ")[0].slice(0, 3) + " " + x.label.split(" ")[1].slice(2),
    affiliate: +(x.affiliate * 100000).toFixed(0),
    ad: +(x.ad * 100000).toFixed(0),
    total: +(x.total * 100000).toFixed(0),
  }));
  const catPie = m.categories.map((c) => ({ name: c.name, v: c.tx, c: CAT_COLORS[c.name] }));
  const totalCatTx = m.categories.reduce((a, b) => a + b.tx, 0);
  const catShare = catPie.map((c) => ({ ...c, pct: +((c.v / totalCatTx) * 100).toFixed(1) }));

  return (
    <>
      {/* Header */}
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-600">Talkzie Intelligence Console</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> LIVE
            </span>
            <span className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Enterprise Analytics Suite</span>
          </div>
          <h1 className="mt-1 text-[26px] font-semibold tracking-tight text-slate-900">
            Talkzie Real-Time Commerce Intelligence Dashboard
          </h1>
          <p className="mt-1 max-w-3xl text-sm text-slate-500">
            Monitor user behavior, pricing trends, affiliate revenue, and cross-platform commerce activity across India in real time.
            AI-powered multi-commerce analytics &amp; comparison infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Month selector */}
          <div className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs">
            <Calendar className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-slate-500">Reporting period</span>
            <select
              value={monthKey}
              onChange={(e) => setMonthKey(e.target.value)}
              className="ml-1 cursor-pointer rounded border-0 bg-transparent pr-1 text-xs font-medium text-slate-900 focus:outline-none focus:ring-0"
            >
              {MONTHS.map((x) => (
                <option key={x.key} value={x.key}>{x.label}</option>
              ))}
            </select>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50"><Filter className="h-3.5 w-3.5" /> Filter</button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50"><RefreshCw className="h-3.5 w-3.5" /> Refresh</button>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-slate-800"><Download className="h-3.5 w-3.5" /> Export</button>
        </div>
      </section>

      {/* Period banner */}
      <Panel className="px-5 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white"><Calendar className="h-4 w-4" /></div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-indigo-700">Showing data for</div>
              <div className="text-base font-semibold text-slate-900">{m.label}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-[11px]">
            <Snap k="Downloads" v={fmt(m.downloads)} />
            <Snap k="MAU" v={fmt(m.mau)} />
            <Snap k="DAU" v={fmt(m.dau)} />
            <Snap k="Comparisons" v={fmt(m.comparisons)} />
            <Snap k="Transactions" v={fmt(m.completed)} />
            <Snap k="Total Revenue" v={lakh(m.total)} />
            <Snap k="Conv Rate" v={`${m.convRate}%`} />
            <Snap k="Repeat Users" v={`${m.repeatRate}%`} />
          </div>
        </div>
      </Panel>

      {/* KPIs */}
      <section id="overview" className="grid grid-cols-2 gap-4 md:grid-cols-4 scroll-mt-20">
        <Kpi icon={Download} label="Total Downloads" value={fmt(m.downloads)} delta={pct(m.downloads, prev?.downloads)} sub={`Play ${fmt(m.play)} · Web ${fmt(m.web)} · APK ${fmt(m.apk)}`} spark={MONTHS.map(x => x.downloads / 1000)} color="#4f46e5" />
        <Kpi icon={Users} label="Monthly Active Users" value={fmt(m.mau)} delta={pct(m.mau, prev?.mau)} sub={`Retained ${fmt(m.retained)} (${Math.round((m.retained / m.mau) * 100)}%)`} spark={MONTHS.map(x => x.mau / 1000)} color="#0ea5e9" />
        <Kpi icon={Activity} label="Daily Active Users" value={fmt(m.dau)} delta={pct(m.dau, prev?.dau)} sub={`Retained ${fmt(m.retained)}`} spark={MONTHS.map(x => x.dau / 100)} color="#10b981" />
        <Kpi icon={Clock} label="Avg Session Duration" value={fmtSec(m.sessionDuration)} delta={pct(m.sessionDuration, prev?.sessionDuration)} sub={prev ? `${m.sessionDuration > prev.sessionDuration ? "+" : ""}${m.sessionDuration - prev.sessionDuration}s vs last period` : ""} spark={MONTHS.map(x => x.sessionDuration / 60)} color="#7c3aed" />
        <Kpi icon={MousePointerClick} label="Total Comparisons" value={fmt(m.comparisons)} delta={pct(m.comparisons, prev?.comparisons)} sub={`${fmt(m.completed)} completed`} spark={MONTHS.map(x => x.comparisons / 10000)} color="#f59e0b" />
        <Kpi icon={IndianRupee} label="Total Revenue" value={lakh(m.total)} delta={pct(m.total, prev?.total)} sub={`Affiliate ${lakh(m.affiliate)} · Ad ${lakh(m.ad)}`} spark={MONTHS.map(x => x.total)} color="#4f46e5" />
        <Kpi icon={Target} label="Conversion Rate" value={`${m.convRate}%`} delta={pct(m.convRate, prev?.convRate)} sub="redirect → txn" spark={MONTHS.map(x => x.convRate)} color="#0ea5e9" />
        <Kpi icon={Wallet} label="Avg Revenue / Transaction" value={`₹${m.arpt.toFixed(2)}`} delta={0.2} sub={`Avg Orders/User ${m.avgOrders}`} spark={MONTHS.map(x => x.arpt)} color="#10b981" />
      </section>

      {/* Revenue chart (multi-month) */}
      <section id="revenue" className="grid grid-cols-1 gap-4 xl:grid-cols-3 scroll-mt-20">
        <Panel className="xl:col-span-2 p-5">
          <SectionTitle
            kicker="Revenue Analytics · Nov 2025 – May 2026"
            action={
              <div className="flex items-center gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-600" /> Affiliate</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" /> Ad</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-700" /> Total</span>
              </div>
            }
          >Monthly revenue trend (₹)</SectionTitle>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revSeries} margin={{ left: 8, right: 16, top: 12, bottom: 4 }}>
                <defs>
                  <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="ad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.30} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#eef2f7" vertical={false} />
                <XAxis dataKey="d" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} width={64} tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} formatter={(v: any) => `₹${(v / 100000).toFixed(2)}L`} />
                <Area dataKey="affiliate" stroke="#4f46e5" strokeWidth={2.5} fill="url(#rev)" />
                <Area dataKey="ad" stroke="#f59e0b" strokeWidth={2} fill="url(#ad)" />
                <Line dataKey="total" stroke="#0f172a" strokeWidth={2} dot={{ r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 grid grid-cols-4 border-t border-slate-100 pt-3">
            {[
              { l: "Selected Month", v: lakh(m.total), d: "+18.2%" },
              { l: "Affiliate", v: lakh(m.affiliate), d: "+22.4%" },
              { l: "Ad Revenue", v: lakh(m.ad), d: `${m.adShare}% share` },
              { l: "ARPT", v: `₹${m.arpt.toFixed(2)}`, d: "+0.2%" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">{s.l}</div>
                <div className="text-sm font-semibold text-slate-900">{s.v}</div>
                <div className="text-[10px] text-emerald-600">{s.d}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionTitle kicker="Live · 24h" action={<span className="text-[11px] text-slate-500 tabular-nums">{fmt(m.dau)} DAU</span>}>
            Daily Active Users (hourly)
          </SectionTitle>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={dauSeries} margin={{ left: 0, right: 8, top: 8, bottom: 4 }}>
                <CartesianGrid stroke="#eef2f7" vertical={false} />
                <XAxis dataKey="t" tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} interval={2} />
                <YAxis tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} width={40} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                <Bar dataKey="dau" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Peak Hour</div>
              <div className="text-sm font-semibold">20:00 IST</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Spike</div>
              <div className="text-sm font-semibold text-emerald-600">+34.2%</div>
            </div>
          </div>
        </Panel>
      </section>

      {/* Category Performance for selected month */}
      <section id="categories" className="grid grid-cols-1 gap-4 xl:grid-cols-3 scroll-mt-20">
        <Panel className="xl:col-span-2 p-5">
          <SectionTitle kicker={`Category Performance · ${m.label}`} action={<span className="text-[11px] text-slate-500">Transactions &amp; revenue</span>}>
            Category-wise breakdown
          </SectionTitle>
          <div className="h-80">
            <ResponsiveContainer>
              <BarChart data={m.categories} margin={{ left: 0, right: 16, top: 12, bottom: 4 }}>
                <CartesianGrid stroke="#eef2f7" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} width={48} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} width={56} tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar yAxisId="left" dataKey="tx" name="Transactions" fill="#4f46e5" radius={[4,4,0,0]} />
                <Bar yAxisId="right" dataKey="rev" name="Revenue (₹)" fill="#10b981" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-[12px]">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr><th className="px-3 py-2 text-left">Category</th><th className="px-3 py-2 text-right">Transactions</th><th className="px-3 py-2 text-right">Revenue</th><th className="px-3 py-2 text-right">Share</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {m.categories.map((c) => (
                  <tr key={c.name} className="hover:bg-slate-50/60">
                    <td className="px-3 py-2"><span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{ background: CAT_COLORS[c.name] }} />{c.name}</span></td>
                    <td className="px-3 py-2 text-right tabular-nums">{fmt(c.tx)}</td>
                    <td className="px-3 py-2 text-right tabular-nums">₹{fmt(c.rev)}</td>
                    <td className="px-3 py-2 text-right tabular-nums text-slate-600">{((c.tx/totalCatTx)*100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionTitle kicker="Mix">Category share</SectionTitle>
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={catShare} dataKey="v" nameKey="name" innerRadius={68} outerRadius={108} paddingAngle={2}>
                  {catShare.map((e) => <Cell key={e.name} fill={e.c} />)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} formatter={(v: any) => fmt(v)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 gap-1 text-[11px]">
            {catShare.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm" style={{ background: c.c }} />
                <span className="text-slate-600">{c.name}</span>
                <span className="ml-auto tabular-nums font-medium">{c.pct}%</span>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Platform-wise breakdown */}
      <section className="scroll-mt-20">
        <SectionTitle kicker={`Platform-wise Transactions · ${m.label}`}>Vendor split per category</SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Object.entries(m.platforms).map(([cat, plats]) => {
            const total = plats.reduce((a, b) => a + b.tx, 0);
            return (
              <Panel key={cat} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{cat}</div>
                    <div className="text-sm font-semibold text-slate-900">{fmt(total)} transactions</div>
                  </div>
                  <span className="h-3 w-3 rounded-sm" style={{ background: CAT_COLORS[cat] }} />
                </div>
                <div className="mt-3 space-y-1.5">
                  {plats.map((p) => {
                    const w = (p.tx / total) * 100;
                    return (
                      <div key={p.name}>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-700">{p.name}</span>
                          <span className="tabular-nums font-medium text-slate-900">{fmt(p.tx)}</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full rounded-full" style={{ width: `${w}%`, background: CAT_COLORS[cat] }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Panel>
            );
          })}
        </div>
      </section>

      {/* AI Insights */}
      <section id="realtime" className="scroll-mt-20">
        <Panel className="p-5" id="ai-insights">
          <SectionTitle kicker="AI Prediction Engine" action={
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
              <Brain className="h-3 w-3" /> Active
            </span>
          }>Intelligent insights</SectionTitle>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {aiInsights.map((a) => (
              <div key={a.title} className="group rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 p-3 hover:border-indigo-200">
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${a.color}`}>{a.tag}</span>
                  <span className="text-[10px] text-slate-500">conf {a.conf}%</span>
                </div>
                <p className="mt-1 text-[13px] leading-snug text-slate-800">{a.title}</p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${a.conf}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Trending + User Insights + Sources */}
      <section id="trending" className="grid grid-cols-1 gap-4 xl:grid-cols-3 scroll-mt-20">
        <Panel className="p-5">
          <SectionTitle kicker="Search Intelligence">Trending searches</SectionTitle>
          <ol className="space-y-2">
            {trendingSearches.map((s, i) => (
              <li key={s} className="flex items-center gap-3 rounded-md border border-slate-100 bg-slate-50/50 px-3 py-2">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-white text-[11px] font-semibold text-slate-700 border border-slate-200">{i + 1}</span>
                <span className="text-[13px] text-slate-800">{s}</span>
                <span className="ml-auto text-[10px] text-emerald-600">▲ {(20 + i * 3)}%</span>
              </li>
            ))}
          </ol>
        </Panel>

        <Panel className="p-5" id="user-insights">
          <SectionTitle kicker="User Insights">Demographics &amp; devices</SectionTitle>
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="rounded-lg border border-slate-200 p-3">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Age groups</div>
              {[["18-24",34],["25-34",41],["35-44",18],["45+",7]].map(([k,v]:any) => (
                <div key={k} className="mt-2">
                  <div className="flex justify-between"><span>{k}</span><span className="font-medium tabular-nums">{v}%</span></div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-indigo-500" style={{ width: `${v * 2}%` }} /></div>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-slate-200 p-3">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Devices</div>
              <div className="mt-2 flex h-24 items-end gap-2">
                <div className="flex-1 rounded-t bg-indigo-600" style={{ height: "100%" }} />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-slate-600"><span>Android <b className="text-slate-900">100%</b></span></div>
            </div>
            <div className="col-span-2 rounded-lg border border-slate-200 p-3">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Returning vs New</div>
              <div className="mt-2 flex h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full bg-indigo-600" style={{ width: `${m.repeatRate}%` }} />
                <div className="h-full bg-emerald-500" style={{ width: `${100 - m.repeatRate}%` }} />
              </div>
              <div className="mt-2 flex justify-between text-[10px]"><span>Repeat <b>{m.repeatRate}%</b></span><span>New <b>{100 - m.repeatRate}%</b></span></div>
            </div>
          </div>
        </Panel>

        <Panel className="p-5" id="sources">
          <SectionTitle kicker="Acquisition">Traffic sources</SectionTitle>
          <div className="space-y-2.5">
            {[
              { n: "Instagram", v: 32, c: "bg-pink-500" },
              { n: "Google Search", v: 26, c: "bg-blue-500" },
              { n: "Influencer campaigns", v: 14, c: "bg-violet-500" },
              { n: "YouTube", v: 11, c: "bg-rose-500" },
              { n: "Direct", v: 10, c: "bg-slate-700" },
              { n: "Referral", v: 7, c: "bg-emerald-500" },
            ].map((s) => (
              <div key={s.n}>
                <div className="flex justify-between text-[12px]"><span className="text-slate-700">{s.n}</span><span className="tabular-nums font-medium text-slate-900">{s.v}%</span></div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100"><div className={`h-full ${s.c}`} style={{ width: `${s.v * 3}%` }} /></div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Partners + Live feed */}
      <section id="partners" className="grid grid-cols-1 gap-4 xl:grid-cols-3 scroll-mt-20">
        <Panel className="xl:col-span-2 p-5">
          <SectionTitle kicker="Platform Integrations" action={<span className="text-[11px] text-emerald-600">12 of 12 healthy</span>}>Partner API status</SectionTitle>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-[12px]">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Partner</th>
                  <th className="px-3 py-2 text-left font-medium">Status</th>
                  <th className="px-3 py-2 text-right font-medium">Response</th>
                  <th className="px-3 py-2 text-right font-medium">Live Traffic</th>
                  <th className="px-3 py-2 text-right font-medium">Conv</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {partners.map((p) => (
                  <tr key={p.n} className="hover:bg-slate-50/60">
                    <td className="px-3 py-2 font-medium text-slate-800">{p.n}</td>
                    <td className="px-3 py-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{p.s}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-slate-700">{p.ms} ms</td>
                    <td className="px-3 py-2 text-right tabular-nums text-slate-700">{p.t.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right tabular-nums text-emerald-600">+{p.conv}%</td>
                    <td className="px-3 py-2 text-right"><div className="ml-auto w-16"><Spark data={p.spark} color="#10b981" /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel className="p-5" id="feed">
          <SectionTitle kicker="Real-Time" action={<span className="inline-flex items-center gap-1 text-[10px] text-emerald-600"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Streaming</span>}>
            Activity feed
          </SectionTitle>
          <ul className="space-y-2 max-h-[360px] overflow-hidden">
            {feed.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-2.5 py-1.5 text-[12px]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span className="text-slate-700">{f}</span>
                <span className="ml-auto text-[10px] text-slate-400 tabular-nums">{i === 0 ? "now" : `${i * 4}s`}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      {/* Funnel */}
      <section id="funnel" className="grid grid-cols-1 gap-4 xl:grid-cols-3 scroll-mt-20">
        <Panel className="p-5 xl:col-span-2">
          <SectionTitle kicker="Conversion">User funnel</SectionTitle>
          <div className="space-y-2.5">
            {[
              { l: "Visited", v: 100, n: fmt(m.uniqueUsers * 3) },
              { l: "Searched", v: 78, n: fmt(Math.round(m.uniqueUsers * 2.4)) },
              { l: "Compared", v: 60, n: fmt(m.comparisons) },
              { l: "Redirected", v: 41, n: fmt(Math.round(m.comparisons * 0.41)) },
              { l: "Converted", v: 25, n: fmt(m.completed) },
            ].map((f, i) => (
              <div key={f.l}>
                <div className="flex justify-between text-[11px]"><span className="text-slate-600">{f.l}</span><span className="tabular-nums font-medium">{f.n} · {f.v}%</span></div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full" style={{ width: `${f.v}%`, background: `linear-gradient(90deg,#4f46e5,${["#6366f1","#818cf8","#a5b4fc","#c7d2fe","#ddd6fe"][i]})` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionTitle kicker="Snapshot">{m.label}</SectionTitle>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            {[
              ["Total Comparisons", fmt(m.comparisons)],
              ["Completed", fmt(m.completed)],
              ["Dropped", fmt(m.dropped)],
              ["Conv Rate", `${m.convRate}%`],
              ["Avg Orders / User", String(m.avgOrders)],
              ["Repeat Rate", `${m.repeatRate}%`],
              ["Affiliate Revenue", lakh(m.affiliate)],
              ["Ad Revenue", lakh(m.ad)],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-slate-200 bg-slate-50/60 p-2">
                <div className="text-[10px] uppercase tracking-wider text-slate-500">{k}</div>
                <div className="text-sm font-semibold tabular-nums">{v}</div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Infra */}
      <section id="infra" className="scroll-mt-20">
        <SectionTitle kicker="Infrastructure" action={<span className="inline-flex items-center gap-1 text-[10px] text-emerald-700"><ShieldCheck className="h-3 w-3" /> 99.98% Uptime · 30d</span>}>
          Cloud monitoring &amp; operational health
        </SectionTitle>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { i: Gauge, l: "API Response p95", v: "142ms", d: "-12ms", c: "#4f46e5" },
            { i: Server, l: "Server Health", v: "Optimal", d: "42 nodes", c: "#10b981" },
            { i: Cpu, l: "AI Processing Load", v: "68%", d: "GPU pool", c: "#7c3aed" },
            { i: Database, l: "DB Performance", v: "98.4%", d: "p99 41ms", c: "#0ea5e9" },
          ].map((s) => (
            <Panel key={s.l} className="p-4">
              <div className="flex items-center justify-between">
                <div className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: `${s.c}14`, color: s.c }}><s.i className="h-4 w-4" /></div>
                <span className="text-[10px] font-medium text-emerald-600">● Healthy</span>
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-wider text-slate-500">{s.l}</div>
              <div className="text-xl font-semibold tabular-nums">{s.v}</div>
              <div className="text-[11px] text-slate-500">{s.d}</div>
            </Panel>
          ))}
        </div>
      </section>
    </>
  );
}

function Snap({ k, v }: { k: string; v: string }) {
  return (
    <div className="leading-tight">
      <div className="text-[9px] uppercase tracking-wider text-slate-500">{k}</div>
      <div className="text-sm font-semibold tabular-nums text-slate-900">{v}</div>
    </div>
  );
}

// ============ PARTNERSHIP COMMISSION VIEW ============
const COMMISSION_STRUCTURE = [
  { cat: "Cab Rides", partners: "Uber, Ola, Rapido, Namma Yatri", commission: "₹7 per completed ride", color: "#f59e0b" },
  { cat: "Food Delivery", partners: "Swiggy, Zomato", commission: "₹10 per completed order", color: "#ef4444" },
  { cat: "Grocery Delivery", partners: "Zepto, Blinkit, Instamart, BigBasket", commission: "₹10 per completed order", color: "#10b981" },
  { cat: "Shopping / E-Commerce", partners: "Amazon, Flipkart, Croma", commission: "₹26–₹35 per completed order", color: "#4f46e5" },
  { cat: "Fashion & Beauty", partners: "Myntra, Nykaa, Ajio, Meesho, H&M, Zara", commission: "₹20–₹25 per completed order", color: "#ec4899" },
  { cat: "Hotel Booking", partners: "Trip.com, Goibibo, MakeMyTrip, Booking.com, Agoda, OYO", commission: "₹30–₹32 per completed booking", color: "#7c3aed" },
  { cat: "Flight Booking", partners: "Air India, Yatra, TeaFlight, GloryHoliday, GoToGate, FlightNetwork, Booking.com", commission: "₹30–₹35 per completed booking", color: "#0ea5e9" },
];

const SETTLEMENT_CYCLE = [
  { rev: "November 2025", recv: "February 2026", status: "Received", amount: "₹1.99 L" },
  { rev: "December 2025", recv: "March 2026", status: "Received", amount: "₹2.59 L" },
  { rev: "January 2026", recv: "April 2026", status: "Received", amount: "₹3.36 L" },
  { rev: "February 2026", recv: "May 2026", status: "Received", amount: "₹4.37 L" },
  { rev: "March 2026", recv: "June 2026", status: "Pending", amount: "₹6.00 L" },
  { rev: "April 2026", recv: "July 2026", status: "Pending", amount: "₹7.80 L" },
  { rev: "May 2026", recv: "August 2026", status: "Pending", amount: "₹10.14 L" },
];

const DIRECT_PARTNERS = [
  { cat: "Cab Rides", vendors: ["Uber", "Ola"] },
  { cat: "Shopping / E-Commerce", vendors: ["Amazon", "Flipkart"] },
  { cat: "Fashion & Beauty", vendors: ["Myntra", "Nykaa", "Ajio"] },
  { cat: "Hotel Booking", vendors: ["Booking.com", "Agoda", "Trip.com", "OYO", "MakeMyTrip", "Goibibo"] },
  { cat: "Flight Booking", vendors: ["Air India"] },
];
const INDIRECT_PARTNERS = [
  { network: "Cuelinks", groups: [
    { cat: "Food Delivery", vendors: ["Swiggy", "Zomato"] },
    { cat: "Grocery", vendors: ["Zepto", "Blinkit", "Instamart", "BigBasket"] },
    { cat: "Cab Rides", vendors: ["Rapido"] },
    { cat: "Shopping", vendors: ["Croma"] },
    { cat: "Travel", vendors: ["Yatra", "RedBus"] },
    { cat: "Pharmacy", vendors: ["NetMeds", "Apollo Pharmacy", "MedPlus"] },
  ]},
  { network: "Admitad", groups: [
    { cat: "Fashion", vendors: ["H&M", "Zara"] },
    { cat: "Flights", vendors: ["GoToGate", "FlightNetwork"] },
  ]},
  { network: "EarnKaro", groups: [
    { cat: "Shopping & Fashion", vendors: ["Amazon", "Flipkart", "Myntra", "Ajio", "Meesho"] },
  ]},
  { network: "vCommission", groups: [
    { cat: "Travel & Commerce", vendors: ["Yatra", "Goibibo", "MakeMyTrip", "Booking.com", "Agoda"] },
  ]},
];

function PartnershipView() {
  const totalReceived = SETTLEMENT_CYCLE.filter(s => s.status === "Received").reduce((a, b) => a + parseFloat(b.amount.replace(/[₹L\s]/g, "")), 0);
  return (
    <>
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-600">Partnership Commission</span>
            <span className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Net 90-day settlement</span>
          </div>
          <h1 className="mt-1 text-[26px] font-semibold tracking-tight text-slate-900">Affiliate Commission Structure &amp; Partner Network</h1>
          <p className="mt-1 max-w-3xl text-sm text-slate-500">Commission rates, settlement cycles, and the complete direct &amp; indirect partner classification across Talkzie's commerce ecosystem.</p>
        </div>
      </section>

      {/* Summary tiles */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Direct Partners</div><div className="mt-1 text-2xl font-semibold">13+</div><div className="text-[11px] text-slate-500">across 5 categories</div></Panel>
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Indirect Partners</div><div className="mt-1 text-2xl font-semibold">20+</div><div className="text-[11px] text-slate-500">via 4 affiliate networks</div></Panel>
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Commission Received</div><div className="mt-1 text-2xl font-semibold text-emerald-700">₹{totalReceived.toFixed(2)} L</div><div className="text-[11px] text-slate-500">Feb–May 2026</div></Panel>
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Settlement Cycle</div><div className="mt-1 text-2xl font-semibold">Net 90</div><div className="text-[11px] text-slate-500">days · affiliate</div></Panel>
      </section>

      {/* Commission Structure */}
      <Panel className="p-5">
        <SectionTitle kicker="Commission Structure">Per-category affiliate commissions</SectionTitle>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-[13px]">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
              <tr><th className="px-3 py-2 text-left">Category</th><th className="px-3 py-2 text-left">Partners</th><th className="px-3 py-2 text-right">Commission</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMMISSION_STRUCTURE.map((r) => (
                <tr key={r.cat} className="hover:bg-slate-50/60">
                  <td className="px-3 py-3"><span className="inline-flex items-center gap-2 font-medium text-slate-800"><span className="h-2 w-2 rounded-sm" style={{ background: r.color }} />{r.cat}</span></td>
                  <td className="px-3 py-3 text-slate-600">{r.partners}</td>
                  <td className="px-3 py-3 text-right font-semibold text-slate-900">{r.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* Settlement Cycle */}
      <Panel className="p-5">
        <SectionTitle kicker="Settlement Schedule · Net 90 Days">Revenue → Commission timeline</SectionTitle>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-[13px]">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
              <tr><th className="px-3 py-2 text-left">Revenue Generated</th><th className="px-3 py-2 text-left">Commission Received</th><th className="px-3 py-2 text-right">Amount</th><th className="px-3 py-2 text-right">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SETTLEMENT_CYCLE.map((s) => (
                <tr key={s.rev} className="hover:bg-slate-50/60">
                  <td className="px-3 py-2.5 font-medium text-slate-800">{s.rev}</td>
                  <td className="px-3 py-2.5 text-slate-600">{s.recv}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums font-semibold">{s.amount}</td>
                  <td className="px-3 py-2.5 text-right">
                    {s.status === "Received" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700"><CheckCircle2 className="h-3 w-3" /> Received</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700"><AlertCircle className="h-3 w-3" /> Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* Direct + Indirect Partners */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Panel className="p-5">
          <SectionTitle kicker="Direct Partnerships" action={<span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700">13+ brands</span>}>Direct affiliate integrations</SectionTitle>
          <div className="space-y-3">
            {DIRECT_PARTNERS.map((g) => (
              <div key={g.cat} className="rounded-lg border border-slate-200 p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{g.cat}</div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {g.vendors.map((v) => <span key={v} className="rounded-md border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700">{v}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionTitle kicker="Indirect Partnerships" action={<span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-700">via Affiliate Networks</span>}>Aggregator-routed brands</SectionTitle>
          <div className="space-y-4">
            {INDIRECT_PARTNERS.map((n) => (
              <div key={n.network}>
                <div className="text-[11px] font-semibold text-violet-700">via {n.network}</div>
                <div className="mt-2 space-y-2">
                  {n.groups.map((g) => (
                    <div key={g.cat} className="rounded-lg border border-slate-200 p-2.5">
                      <div className="text-[10px] uppercase tracking-wider text-slate-500">{g.cat}</div>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {g.vendors.map((v) => <span key={v} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700">{v}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </>
  );
}

// ============ RECEIVABLES VIEW ============
function ReceivablesView() {
  const rows = MONTHS.map((x) => ({ month: x.label, aff: x.affiliate, ad: x.ad, total: x.total }));
  const totalAff = rows.reduce((a, b) => a + b.aff, 0);
  const totalAd = rows.reduce((a, b) => a + b.ad, 0);
  const grandTotal = totalAff + totalAd;
  const received = [
    { settle: "February 2026", period: "November 2025 Revenue", amt: 2.10 },
    { settle: "March 2026", period: "December 2025 Revenue", amt: 2.73 },
    { settle: "April 2026", period: "January 2026 Revenue", amt: 3.55 },
    { settle: "May 2026", period: "February 2026 Revenue", amt: 4.62 },
  ];
  const totalReceived = received.reduce((a, b) => a + b.amt, 0);
  const outstanding = [
    { rev: "March 2026", due: "June 2026", amt: 6.00 },
    { rev: "April 2026", due: "July 2026", amt: 7.80 },
    { rev: "May 2026", due: "August 2026", amt: 10.14 },
  ];
  const totalOutstanding = outstanding.reduce((a, b) => a + b.amt, 0);

  return (
    <>
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-600">Revenue &amp; Receivables</span>
            <span className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Net 90 Days · Affiliate</span>
          </div>
          <h1 className="mt-1 text-[26px] font-semibold tracking-tight text-slate-900">Revenue, Settlement &amp; Outstanding Receivables</h1>
          <p className="mt-1 max-w-3xl text-sm text-slate-500">Affiliate commissions settle on a 90-day cycle. Advertising revenue is recognised separately and is not part of affiliate receivables.</p>
        </div>
      </section>

      {/* Financial Position Tiles */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Total Revenue</div><div className="mt-1 text-2xl font-semibold">₹{grandTotal.toFixed(2)} L</div><div className="text-[11px] text-slate-500">Generated to date</div></Panel>
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Affiliate Revenue</div><div className="mt-1 text-2xl font-semibold text-indigo-700">₹{totalAff.toFixed(2)} L</div><div className="text-[11px] text-slate-500">Generated</div></Panel>
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Ad Revenue</div><div className="mt-1 text-2xl font-semibold text-amber-700">₹{totalAd.toFixed(2)} L</div><div className="text-[11px] text-slate-500">Generated</div></Panel>
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Affiliate Received</div><div className="mt-1 text-2xl font-semibold text-emerald-700">₹{totalReceived.toFixed(2)} L</div><div className="text-[11px] text-slate-500">Settled</div></Panel>
        <Panel className="p-5"><div className="text-[10px] uppercase tracking-wider text-slate-500">Outstanding</div><div className="mt-1 text-2xl font-semibold text-rose-700">₹{totalOutstanding.toFixed(2)} L</div><div className="text-[11px] text-slate-500">Pending settlement</div></Panel>
      </section>

      {/* Revenue Generated table */}
      <Panel className="p-5">
        <SectionTitle kicker="Revenue Generated · Nov 2025 – May 2026">Monthly breakdown</SectionTitle>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-[13px]">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
              <tr><th className="px-3 py-2 text-left">Month</th><th className="px-3 py-2 text-right">Affiliate Revenue</th><th className="px-3 py-2 text-right">Ad Revenue</th><th className="px-3 py-2 text-right">Total Revenue</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.month} className="hover:bg-slate-50/60">
                  <td className="px-3 py-2.5 font-medium text-slate-800">{r.month}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{lakh(r.aff)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{r.ad > 0 ? lakh(r.ad) : "₹0"}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums font-semibold">{lakh(r.total)}</td>
                </tr>
              ))}
              <tr className="bg-slate-50 font-semibold">
                <td className="px-3 py-2.5">Total</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{lakh(totalAff)}</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{lakh(totalAd)}</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{lakh(grandTotal)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>

      {/* Received + Outstanding */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Panel className="p-5">
          <SectionTitle kicker="Received from Partners" action={<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Settled</span>}>Affiliate revenue received</SectionTitle>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-[13px]">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr><th className="px-3 py-2 text-left">Settlement Month</th><th className="px-3 py-2 text-left">Revenue Period</th><th className="px-3 py-2 text-right">Amount</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {received.map((r) => (
                  <tr key={r.settle} className="hover:bg-slate-50/60">
                    <td className="px-3 py-2.5 font-medium text-slate-800">{r.settle}</td>
                    <td className="px-3 py-2.5 text-slate-600">{r.period}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums font-semibold text-emerald-700">{lakh(r.amt)}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-semibold">
                  <td className="px-3 py-2.5" colSpan={2}>Total Received</td>
                  <td className="px-3 py-2.5 text-right tabular-nums text-emerald-700">{lakh(totalReceived)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionTitle kicker="Outstanding Receivables" action={<span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">Pending</span>}>Affiliate revenue pending settlement</SectionTitle>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-[13px]">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr><th className="px-3 py-2 text-left">Revenue Month</th><th className="px-3 py-2 text-left">Settlement Due</th><th className="px-3 py-2 text-right">Amount</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {outstanding.map((r) => (
                  <tr key={r.rev} className="hover:bg-slate-50/60">
                    <td className="px-3 py-2.5 font-medium text-slate-800">{r.rev}</td>
                    <td className="px-3 py-2.5 text-slate-600">{r.due}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums font-semibold text-amber-700">{lakh(r.amt)}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-semibold">
                  <td className="px-3 py-2.5" colSpan={2}>Total Outstanding</td>
                  <td className="px-3 py-2.5 text-right tabular-nums text-amber-700">{lakh(totalOutstanding)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
      </section>

      {/* Advertising Revenue */}
      <Panel className="p-5">
        <SectionTitle kicker="Advertising Revenue" action={<span className="text-[11px] text-slate-500">Recognised separately · not part of 90-day cycle</span>}>Monthly ad revenue</SectionTitle>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 h-64">
            <ResponsiveContainer>
              <BarChart data={MONTHS.map(x => ({ m: x.label.split(" ")[0].slice(0,3), ad: x.ad }))} margin={{ left: 0, right: 8, top: 12, bottom: 4 }}>
                <CartesianGrid stroke="#eef2f7" vertical={false} />
                <XAxis dataKey="m" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} width={48} tickFormatter={(v) => `₹${v}L`} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} formatter={(v: any) => `₹${v}L`} />
                <Bar dataKey="ad" fill="#f59e0b" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {MONTHS.filter(x => x.ad > 0).map((x) => (
              <div key={x.key} className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50/60 px-3 py-2">
                <span className="text-[12px] font-medium text-slate-700">{x.label}</span>
                <span className="text-[13px] font-semibold tabular-nums text-amber-700">{lakh(x.ad)}</span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-md bg-slate-900 px-3 py-2">
              <span className="text-[12px] font-medium text-white">Total Ad Revenue</span>
              <span className="text-[13px] font-semibold tabular-nums text-amber-300">{lakh(totalAd)}</span>
            </div>
          </div>
        </div>
      </Panel>

      {/* Recognition Timeline */}
      <Panel className="p-5">
        <SectionTitle kicker="Revenue Recognition Timeline">Cycle status as of May 2026</SectionTitle>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {[
            { r: "November 2025", s: "Received Feb 2026", ok: true },
            { r: "December 2025", s: "Received March 2026", ok: true },
            { r: "January 2026", s: "Received April 2026", ok: true },
            { r: "February 2026", s: "Received May 2026", ok: true },
            { r: "March 2026", s: "Pending · Due June 2026", ok: false },
            { r: "April 2026", s: "Pending · Due July 2026", ok: false },
            { r: "May 2026", s: "Pending · Due August 2026", ok: false },
          ].map((t) => (
            <div key={t.r} className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${t.ok ? "border-emerald-200 bg-emerald-50/40" : "border-amber-200 bg-amber-50/40"}`}>
              {t.ok ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <AlertCircle className="h-4 w-4 text-amber-600" />}
              <div className="flex-1">
                <div className="text-[13px] font-medium text-slate-900">{t.r} Affiliate Revenue</div>
                <div className={`text-[11px] ${t.ok ? "text-emerald-700" : "text-amber-700"}`}>{t.s}</div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </>
  );
}
