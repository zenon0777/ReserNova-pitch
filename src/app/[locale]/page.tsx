"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const slides = [
  {
    id: "title",
    title: "ReserNova",
    subtitle: "Smart Reservations, Simplified",
    content: () => (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl shadow-md">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">ReserNova</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            A unified digital platform revolutionizing the way people make
            reservations across multiple sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Vision</h3>
              <p className="text-blue-700">
                To simplify and enhance the reservation experience for both
                consumers and service providers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">
                Mission
              </h3>
              <p className="text-purple-700">
                Creating a seamless, AI-powered platform that connects users
                with services they love.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-indigo-800">
                Impact
              </h3>
              <p className="text-indigo-700">
                Transforming the fragmented booking landscape into an efficient,
                user-centric ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: "problem",
    title: "The Problem",
    subtitle: "Current Market Challenges",
    content: () => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-red-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-red-800">
                Fragmented Systems
              </h3>
              <p className="text-red-700">
                Users struggle with multiple platforms for different services,
                leading to inefficient booking processes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-800">
                User Frustration
              </h3>
              <p className="text-orange-700">
                Time-consuming comparison and booking processes across different
                platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-800">
                Business Limitations
              </h3>
              <p className="text-amber-700">
                SMEs face challenges with limited digital presence and
                operational inefficiencies.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">
              Market Impact (in %)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { category: "Lost Revenue", value: 40 },
                  { category: "Customer Dissatisfaction", value: 55 },
                  { category: "Operational Inefficiency", value: 45 },
                  { category: "Market Fragmentation", value: 60 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "solution",
    title: "The Solution",
    subtitle: "Introducing ReserNova Platform",
    content: () => (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-green-50 to-emerald-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800">
              Centralized Platform
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-emerald-700">
                  Key Sectors
                </h4>
                <ul className="space-y-2 text-emerald-600">
                  <li>• Accommodation</li>
                  <li>• Culinary Experiences</li>
                  <li>• Entertainment</li>
                  <li>• Wellness</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-emerald-700">
                  Features
                </h4>
                <ul className="space-y-2 text-emerald-600">
                  <li>• AI-Powered Recommendations</li>
                  <li>• Real-time Availability</li>
                  <li>• Secure Payments</li>
                  <li>• Smart Analytics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-800">
                AI Integration
              </h3>
              <p className="text-cyan-700 mb-4">
                Advanced AI-powered features including voice assistants,
                chatbots, and predictive analytics for enhanced user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-violet-800">
                User Interface
              </h3>
              <p className="text-violet-700 mb-4">
                Intuitive design optimized for both service providers and
                consumers, ensuring maximum accessibility and ease of use.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: "market",
    title: "Market Opportunity",
    subtitle: "Global & Regional Insights",
    content: () => (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-indigo-800">
              Global Market Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Accommodation", value: 57 },
                    { name: "Culinary", value: 24 },
                    { name: "Entertainment & Wellness", value: 19 },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  <Cell fill="#4F46E5" />
                  <Cell fill="#7C3AED" />
                  <Cell fill="#2563EB" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-emerald-50 to-green-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-800">
                Market Size
              </h3>
              <p className="text-emerald-700 mb-2">Global: $1.2T (2023)</p>
              <p className="text-emerald-700 mb-2">Africa: $12.6B</p>
              <p className="text-emerald-700">Morocco: $1.1B</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">
                Growth Drivers
              </h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• Rising middle-class spending</li>
                <li>• Tourism recovery</li>
                <li>• Increased smartphone adoption</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: "product",
    title: "Product & Technical Aspects",
    subtitle: "Key Features & User Experience",
    content: () => (
      <div className="space-y-8">
        {" "}
        <Card className="bg-gradient-to-r from-indigo-50 to-blue-100">
          {" "}
          <CardContent className="p-6">
            {" "}
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              {" "}
              Platform Features{" "}
            </h3>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {" "}
              <Card className="shadow-md">
                {" "}
                <CardContent className="p-4">
                  {" "}
                  <h4 className="text-lg font-semibold mb-2 text-indigo-700">
                    {" "}
                    User Experience{" "}
                  </h4>{" "}
                  <ul className="space-y-2 text-gray-600">
                    {" "}
                    <li>• Intuitive booking with just a few taps</li>{" "}
                    <li>• Personalized recommendations powered by AI</li>{" "}
                    <li>• Real-time availability and booking updates</li>{" "}
                    <li>• Secure and seamless payment processing</li>{" "}
                  </ul>{" "}
                </CardContent>{" "}
              </Card>{" "}
              <Card className="shadow-md">
                {" "}
                <CardContent className="p-4">
                  {" "}
                  <h4 className="text-lg font-semibold mb-2 text-indigo-700">
                    {" "}
                    Provider Dashboard{" "}
                  </h4>{" "}
                  <ul className="space-y-2 text-gray-600">
                    {" "}
                    <li>• Seamless reservation management system</li>{" "}
                    <li>• AI-driven insights and dynamic scheduling options</li>{" "}
                    <li>
                      • Real-time data analytics for better decision-making
                    </li>{" "}
                    <li>
                      • AI-powered pricing optimization based on demand trends
                    </li>{" "}
                  </ul>{" "}
                </CardContent>{" "}
              </Card>{" "}
            </div>{" "}
          </CardContent>{" "}
        </Card>{" "}
        <Card className="bg-gradient-to-r from-purple-50 to-violet-100">
          {" "}
          <CardContent className="p-6">
            {" "}
            <h3 className="text-2xl font-bold mb-4 text-violet-800">
              {" "}
              Technical Aspects{" "}
            </h3>{" "}
            <div className="space-y-4 text-gray-600">
              {" "}
              <p>
                • ReserNova is a cross-platform solution that operates
                seamlessly across iOS, Android, and web browsers, providing a
                consistent experience to users everywhere.
              </p>{" "}
              <p>
                • It integrates cutting-edge AI technologies to personalize
                recommendations, drive operational efficiencies, and provide
                predictive analytics for service providers.
              </p>{" "}
              <p>
                • The platform leverages cloud-based infrastructure, ensuring
                scalability, security, and high availability across all
                platforms.
              </p>{" "}
              <p>
                • The intuitive slot management system allows service providers
                to avoid overlapping schedules and improve user experience by
                ensuring real-time availability control.
              </p>{" "}
            </div>{" "}
          </CardContent>{" "}
        </Card>{" "}
      </div>
    ),
  },
  {
    id: "business",
    title: "Business Model",
    subtitle: "Revenue Streams & Pricing",
    content: () => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-800">
                Commission Model
              </h3>
              <p className="text-emerald-700 mb-4">
                Competitive 5-10% commission on each booking, ensuring
                affordability for service providers while maintaining
                profitability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">
                Premium Services
              </h3>
              <p className="text-indigo-700 mb-4">
                Subscription-based premium features offering enhanced analytics,
                visibility, and priority support for businesses.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-purple-50 to-violet-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-violet-800">
              Revenue Projection (in Dhs)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  {
                    period: "Q4 2025",
                    commission: 300000,
                    subscription: 50000,
                  },
                  {
                    period: "Q4 2026",
                    commission: 1000000,
                    subscription: 200000,
                  },
                  {
                    period: "Q4 2027",
                    commission: 2000000,
                    subscription: 500000,
                  },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} Dhs`} />
                <Bar
                  dataKey="commission"
                  name="Commission Revenue"
                  fill="#7C3AED"
                />
                <Bar
                  dataKey="subscription"
                  name="Subscription Revenue"
                  fill="#4F46E5"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "competition",
    title: "Competitive Landscape",
    subtitle: "Market Analysis & Advantages",
    content: () => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-orange-50 to-amber-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-800">
                Global Competitors
              </h3>
              <ul className="space-y-2 text-amber-700">
                <li>• Fresha (Beauty/Wellness)</li>
                <li>• OpenTable (Restaurants)</li>
                <li>• Booking.com (Accommodation)</li>
                <li>• Ticketmaster (Entertainment)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-rose-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-rose-800">
                Local Players
              </h3>
              <ul className="space-y-2 text-rose-700">
                <li>• Hmizate (Deals platform)</li>
                <li>• Local booking solutions</li>
                <li>• Fragmented service providers</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-indigo-800">
              ReserNova&apos;s Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2 text-indigo-700">
                  Multi-Sector Integration
                </h4>
                <p className="text-gray-600">
                  Unified platform across various service types
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2 text-indigo-700">
                  AI-Powered Features
                </h4>
                <p className="text-gray-600">
                  Smart recommendations and predictive analytics
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2 text-indigo-700">
                  Global Scalability
                </h4>
                <p className="text-gray-600">
                  Designed for expansion beyond local markets
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "traction",
    title: "Go-To-Market & Traction",
    subtitle: "Launch Strategy & Milestones",
    content: () => (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-emerald-50 to-green-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800">
              Launch Strategy
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold text-lg mb-2 text-emerald-700">
                  Phase 1: Morocco Launch
                </h4>
                <p className="text-gray-600 mb-3">
                  Initial rollout in Morocco targeting key sectors and cities (
                  Casablanca, Marrakech, Rabat, Tangier )
                </p>
                <p className="text-gray-500">Q4 2025</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold text-lg mb-2 text-emerald-700">
                  Phase 2: Morocco Expansion
                </h4>
                <p className="text-gray-600 mb-3">
                  Expansion to other Cities and Sectors
                </p>
                <p className="text-gray-500">Q3 2026</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold text-lg mb-2 text-emerald-700">
                  Phase 3: Africa
                </h4>
                <p className="text-gray-600 mb-3">
                  Expansion to other African countries with similar market
                  dynamics
                </p>
                {/* <p className="text-gray-500">&amp; Beyond</p> */}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-indigo-800">
              Key Milestones
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  ✓
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-indigo-700">
                    MVP Development
                  </h4>
                  <p className="text-gray-600">
                    Complete and test the Minimum Viable Product
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-bold text-lg">
                  2
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-indigo-700">
                    Pilot Testing
                  </h4>
                  <p className="text-gray-600">
                    Conduct pilot programs with select service providers
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-bold text-lg">
                  3
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-indigo-700">
                    User Acquisition
                  </h4>
                  <p className="text-gray-600">
                    Implement marketing campaigns to drive adoption
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "team",
    title: "The Team",
    subtitle: "Our Leadership & Expertise",
    content: () => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-800">AD</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-800">
                Abderrahmane Daifi
              </h3>
              <p className="text-indigo-600">Co-Founder & CEO</p>
              <p className="text-indigo-600 mt-2 text-sm">
                Full-Stack Developer & DevOps Engineer with expertise in IT
                architecture, AI integration, and automation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-violet-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-violet-800">YE</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">
                Younes El GUERRAOUI
              </h3>
              <p className="text-violet-600">Co-Founder & CTO</p>
              <p className="text-violet-600 mt-2 text-sm">
                Senior Web Developer specializing in React, Node.js, and
                Nest.js, with extensive experience in backend infrastructure and
                cloud solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              Who We Need to Join Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2 text-blue-700">
                  Operations Lead
                </h4>
                <p className="text-gray-600">
                  Seeking an expert in operations to streamline workflows,
                  enhance efficiency, and support scalable growth.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2 text-blue-700">
                  Marketing Specialist
                </h4>
                <p className="text-gray-600">
                  Looking for a creative marketer experienced in digital
                  advertising, social media, and brand strategy to drive user
                  acquisition and engagement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "funding",
    title: "The Ask",
    subtitle: "Funding Requirements & Allocation",
    content: () => (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-800">
              Funding Requirements
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Product Development", value: 40 },
                    { name: "Marketing", value: 25 },
                    { name: "Operations", value: 20 },
                    { name: "Team Expansion", value: 15 },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  <Cell fill="#4F46E5" />
                  <Cell fill="#7C3AED" />
                  <Cell fill="#2563EB" />
                  <Cell fill="#8B5CF6" />
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-purple-800 mt-4 text-center font-semibold">
              Total Funding Request: 100000 DH
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">
                Utilization of Funds
              </h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• Accelerate MVP development</li>
                <li>• Launch targeted market campaigns</li>
                <li>• Conduct comprehensive market research</li>
                <li>• Expand team in operations & marketing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-green-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-800">
                Long-Term Vision
              </h3>
              <p className="text-emerald-700">
                Our goal is to revolutionize the fragmented service reservation
                market globally by delivering a seamless, AI-driven platform
                that maximizes value for both consumers and service providers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-center space-x-4 mb-8 flex-wrap">
          {slides.map((slide, index) => (
            <Button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              variant={currentSlide === index ? "default" : "outline"}
              className="mb-2"
            >
              {slide.title}
            </Button>
          ))}
        </nav>

        <Card className="overflow-hidden bg-white shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
            <CardTitle className="text-4xl text-white">
              {slides[currentSlide].title}
            </CardTitle>
            <p className="text-2xl text-blue-100 mt-2">
              {slides[currentSlide].subtitle}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {slides[currentSlide].content()}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <span className="text-gray-500">
            {currentSlide + 1} of {slides.length}
          </span>
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
