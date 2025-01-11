"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Building2,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Hotel,
  Map,
  Maximize2,
  Minimize2,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Users2,
  Utensils,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { JSX, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

interface slider {
  title: string;
  subtitle: string;
  content: (t: (scope: string) => string) => JSX.Element;
}

const slides = [
  {
    title: "slides.reserNova.title",
    subtitle: "slides.reserNova.subtitle",
    content: (t: (scope: string) => string) => (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">
            {t("slides.reserNova.vision")}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t("slides.reserNova.context")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                12M+ {t("slides.reserNova.tourists")}
              </h3>
              <p className="text-blue-600">
                {t("slides.reserNova.projection")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">+3.6%</h3>
              <p className="text-green-600">{t("slides.reserNova.growth")}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Activity className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-2">+4.4%</h3>
              <p className="text-purple-600">
                {t("slides.reserNova.secondarySector")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "slides.marketAnalysis.title",
    subtitle: "slides.marketAnalysis.subtitle",
    content: (t: (scope: string) => string) => (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">
              {t("slides.marketAnalysis.sectorGrowth")}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  {
                    secteur: t("slides.marketAnalysis.services"),
                    croissance: 3.4,
                  },
                  {
                    secteur: t("slides.marketAnalysis.construction"),
                    croissance: 4.8,
                  },
                  {
                    secteur: t("slides.marketAnalysis.industries"),
                    croissance: 4.4,
                  },
                  {
                    secteur: t("slides.marketAnalysis.tourism"),
                    croissance: 5.2,
                  },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="secteur" stroke="#4a5568" />
                <YAxis stroke="#4a5568" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f7fafc",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Bar dataKey="croissance" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                {t("slides.marketAnalysis.keyOpportunities")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">
                    {t("slides.marketAnalysis.servicesGrowth")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">
                    {t("slides.marketAnalysis.constructionGrowth")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">
                    {t("slides.marketAnalysis.manufacturingSector")}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-800">
                {t("slides.marketAnalysis.tourismIndicators")}
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={[
                    { mois: "Jan", touristes: 800 },
                    { mois: "Fév", touristes: 900 },
                    { mois: "Mar", touristes: 1000 },
                    { mois: "Avr", touristes: 1100 },
                  ]}
                >
                  <Area
                    type="monotone"
                    dataKey="touristes"
                    fill="#8B5CF6"
                    stroke="#7C3AED"
                  />
                  <XAxis dataKey="mois" stroke="#4a5568" />
                  <YAxis stroke="#4a5568" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f7fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "slides.solutionReserNova.title",
    subtitle: "slides.solutionReserNova.subtitle",
    content: (t: (scope: string) => string) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">
                {t("slides.solutionReserNova.userBenefits")}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">
                    {t("slides.solutionReserNova.userBenefit1")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">
                    {t("slides.solutionReserNova.userBenefit2")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">
                    {t("slides.solutionReserNova.userBenefit3")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">
                    {t("slides.solutionReserNova.userBenefit4")}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-emerald-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-green-800">
                {t("slides.solutionReserNova.providerBenefits")}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">
                    {t("slides.solutionReserNova.providerBenefit1")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">
                    {t("slides.solutionReserNova.providerBenefit2")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">
                    {t("slides.solutionReserNova.providerBenefit3")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">
                    {t("slides.solutionReserNova.providerBenefit4")}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "slides.marketOpportunity.title",
    subtitle: "slides.marketOpportunity.subtitle",
    content: (t: (scope: string) => string) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">
                {t("slides.marketOpportunity.addressableMarket")}
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[
                      {
                        name: "TAM",
                        value: 50,
                        description: t("slides.marketOpportunity.tam"),
                      },
                      {
                        name: "SAM",
                        value: 30,
                        description: t("slides.marketOpportunity.sam"),
                      },
                      {
                        name: "SOM",
                        value: 20,
                        description: t("slides.marketOpportunity.som"),
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {["#4F46E5", "#10B981", "#8B5CF6"].map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f7fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-50 to-blue-50 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">
                {t("slides.marketOpportunity.marketPotential")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <span className="font-bold text-blue-700">TAM:</span> 50B
                    MAD
                    <p className="text-sm text-blue-600">
                      {t("slides.marketOpportunity.tam")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users2 className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <span className="font-bold text-green-700">SAM:</span> 30B
                    MAD
                    <p className="text-sm text-green-600">
                      {t("slides.marketOpportunity.sam")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <span className="font-bold text-purple-700">SOM:</span> 20B
                    MAD
                    <p className="text-sm text-purple-600">
                      {t("slides.marketOpportunity.som")}
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-purple-100 to-pink-100 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-800">
              {t("slides.marketOpportunity.marketGrowth")}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { year: "2024", market: 50 },
                  { year: "2025", market: 65 },
                  { year: "2026", market: 85 },
                  { year: "2027", market: 110 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="year" stroke="#4a5568" />
                <YAxis
                  label={{
                    value: "Milliards MAD",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  stroke="#4a5568"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f7fafc",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="market"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    title: "slides.competitiveAdvantage.title",
    subtitle: "slides.competitiveAdvantage.subtitle",
    content: (t: (scope: string) => string) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
            <CardContent className="p-6">
              <Trophy className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                {t("slides.competitiveAdvantage.techInnovation")}
              </h3>
              <ul className="space-y-2 text-blue-700">
                <li>• {t("slides.competitiveAdvantage.techInnovation1")}</li>
                <li>• {t("slides.competitiveAdvantage.techInnovation2")}</li>
                <li>• {t("slides.competitiveAdvantage.techInnovation3")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-200 shadow-md">
            <CardContent className="p-6">
              <Building2 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-green-800">
                {t("slides.competitiveAdvantage.localPartnerships")}
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• {t("slides.competitiveAdvantage.localPartnerships1")}</li>
                <li>• {t("slides.competitiveAdvantage.localPartnerships2")}</li>
                <li>• {t("slides.competitiveAdvantage.localPartnerships3")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 shadow-md">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-800">
                {t("slides.competitiveAdvantage.clientExperience")}
              </h3>
              <ul className="space-y-2 text-purple-700">
                <li>• {t("slides.competitiveAdvantage.clientExperience1")}</li>
                <li>• {t("slides.competitiveAdvantage.clientExperience2")}</li>
                <li>• {t("slides.competitiveAdvantage.clientExperience3")}</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">
              {t("slides.competitiveAdvantage.competitiveAnalysis")}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-4 text-left text-blue-800">
                      {t("slides.competitiveAdvantage.features")}
                    </th>
                    <th className="p-4 text-center text-blue-800">ReserNova</th>
                    <th className="p-4 text-center text-blue-800">
                      Concurrent A
                    </th>
                    <th className="p-4 text-center text-blue-800">
                      Concurrent B
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: t(
                        "slides.competitiveAdvantage.multiServiceBooking"
                      ),
                      us: "✓",
                      a: "×",
                      b: "×",
                    },
                    {
                      feature: t("slides.competitiveAdvantage.localPayment"),
                      us: "✓",
                      a: "✓",
                      b: "×",
                    },
                    {
                      feature: t("slides.competitiveAdvantage.support247"),
                      us: "✓",
                      a: "×",
                      b: "✓",
                    },
                    {
                      feature: t("slides.competitiveAdvantage.mobileApp"),
                      us: "✓",
                      a: "✓",
                      b: "✓",
                    },
                    {
                      feature: t(
                        "slides.competitiveAdvantage.aiRecommendations"
                      ),
                      us: "✓",
                      a: "×",
                      b: "×",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-blue-50" : "bg-white"}
                    >
                      <td className="p-4 text-blue-700">{row.feature}</td>
                      <td className="p-4 text-center text-green-600 font-bold">
                        {row.us}
                      </td>
                      <td className="p-4 text-center text-gray-600">{row.a}</td>
                      <td className="p-4 text-center text-gray-600">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    title: "slides.financialModel.title",
    subtitle: "slides.financialModel.subtitle",
    content: (t: (scope: string) => string) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">
                {t("slides.financialModel.revenueProjections")}
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[
                    { year: "2024", revenue: 2, profit: 0.5 },
                    { year: "2025", revenue: 5, profit: 1.5 },
                    { year: "2026", revenue: 12, profit: 4 },
                    { year: "2027", revenue: 25, profit: 9 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="year" stroke="#4a5568" />
                  <YAxis
                    label={{
                      value: "Millions MAD",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    stroke="#4a5568"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f7fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="revenue"
                    fill="#4F46E5"
                    name={t("slides.financialModel.revenue")}
                  />
                  <Bar
                    dataKey="profit"
                    fill="#10B981"
                    name={t("slides.financialModel.profit")}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">
                {t("slides.financialModel.keyMetrics")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">
                    {t("slides.financialModel.cac")}
                  </span>
                  <span className="font-bold text-blue-800">120 MAD</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">
                    {t("slides.financialModel.ltv")}
                  </span>
                  <span className="font-bold text-blue-800">1,200 MAD</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">
                    {t("slides.financialModel.ltvCacRatio")}
                  </span>
                  <span className="font-bold text-green-600">10x</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">
                    {t("slides.financialModel.grossMargin")}
                  </span>
                  <span className="font-bold text-blue-800">65%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">
              {t("slides.financialModel.revenueSources")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-100 rounded-lg shadow">
                <DollarSign className="h-8 w-8 text-blue-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-blue-800">
                  {t("slides.financialModel.commissions")}
                </h4>
                <p className="text-blue-700">
                  5-15% {t("slides.financialModel.commissionsDescription")}
                </p>
                <p className="text-blue-600 font-bold mt-2">
                  60% {t("slides.financialModel.revenue")}
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <Users2 className="h-8 w-8 text-green-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-green-800">
                  {t("slides.financialModel.proSubscriptions")}
                </h4>
                <p className="text-green-700">
                  {t("slides.financialModel.proSubscriptionsDescription")}
                </p>
                <p className="text-green-600 font-bold mt-2">
                  30% {t("slides.financialModel.revenue")}
                </p>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg shadow">
                <Rocket className="h-8 w-8 text-purple-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-purple-800">
                  {t("slides.financialModel.premiumServices")}
                </h4>
                <p className="text-purple-700">
                  {t("slides.financialModel.premiumServicesDescription")}
                </p>
                <p className="text-purple-600 font-bold mt-2">
                  10% {t("slides.financialModel.revenue")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    title: "slides.investmentOpportunity.title",
    subtitle: "slides.investmentOpportunity.subtitle",
    content: (t: (scope: string) => string) => (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">
            {t("slides.investmentOpportunity.mvpPhase")}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t("slides.investmentOpportunity.mvpDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">
                {t("slides.investmentOpportunity.mainServices")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Hotel className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">
                      {t("slides.investmentOpportunity.accommodation")}
                    </span>
                    <p className="text-sm text-blue-600">
                      {t(
                        "slides.investmentOpportunity.accommodationDescription"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Utensils className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">
                      {t("slides.investmentOpportunity.culinaryExperiences")}
                    </span>
                    <p className="text-sm text-blue-600">
                      {t(
                        "slides.investmentOpportunity.culinaryExperiencesDescription"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Map className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">
                      {t("slides.investmentOpportunity.toursActivities")}
                    </span>
                    <p className="text-sm text-blue-600">
                      {t(
                        "slides.investmentOpportunity.toursActivitiesDescription"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">
                      {t("slides.investmentOpportunity.wellness")}
                    </span>
                    <p className="text-sm text-blue-600">
                      {t("slides.investmentOpportunity.wellnessDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">
                {t("slides.investmentOpportunity.revenueModel")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                  <div>
                    <span className="font-bold text-purple-800">
                      {t("slides.investmentOpportunity.commissions")}
                    </span>
                    <p className="text-sm text-purple-600">
                      {t("slides.investmentOpportunity.commissionsDescription")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Trophy className="h-6 w-6 text-purple-600" />
                  <div>
                    <span className="font-bold text-purple-800">
                      {t("slides.investmentOpportunity.premiumSubscriptions")}
                    </span>
                    <p className="text-sm text-purple-600">
                      {t(
                        "slides.investmentOpportunity.premiumSubscriptionsDescription"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Target className="h-6 w-6 text-purple-600" />
                  <div>
                    <span className="font-bold text-purple-800">
                      {t("slides.investmentOpportunity.promotionalTools")}
                    </span>
                    <p className="text-sm text-purple-600">
                      {t(
                        "slides.investmentOpportunity.promotionalToolsDescription"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">
              {t("slides.investmentOpportunity.investmentNeeds")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow">
                <Rocket className="h-8 w-8 text-blue-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-blue-800">
                  {t("slides.investmentOpportunity.techDevelopment")}
                </h4>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>
                    • {t("slides.investmentOpportunity.techDevelopment1")}
                  </li>
                  <li>
                    • {t("slides.investmentOpportunity.techDevelopment2")}
                  </li>
                  <li>
                    • {t("slides.investmentOpportunity.techDevelopment3")}
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Users2 className="h-8 w-8 text-green-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-green-800">
                  {t("slides.investmentOpportunity.commercialExpansion")}
                </h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>
                    • {t("slides.investmentOpportunity.commercialExpansion1")}
                  </li>
                  <li>
                    • {t("slides.investmentOpportunity.commercialExpansion2")}
                  </li>
                  <li>
                    • {t("slides.investmentOpportunity.commercialExpansion3")}
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Target className="h-8 w-8 text-purple-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-purple-800">
                  {t("slides.investmentOpportunity.marketingAcquisition")}
                </h4>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>
                    • {t("slides.investmentOpportunity.marketingAcquisition1")}
                  </li>
                  <li>
                    • {t("slides.investmentOpportunity.marketingAcquisition2")}
                  </li>
                  <li>
                    • {t("slides.investmentOpportunity.marketingAcquisition3")}
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
];

const PitchDeck = () => {
  const t = useTranslations("");

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-8 ">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap">
          {slides.map((slide: slider, index: number) => (
            <Button
              key={index}
              onClick={() => setCurrentSlide(index)}
              variant={currentSlide === index ? "default" : "outline"}
              className="text-sm sm:text-base mb-2"
            >
              {t(slide.title)}
            </Button>
          ))}
        </nav>
        <Card className="overflow-hidden bg-white shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
            <CardTitle className="text-3xl sm:text-4xl text-white">
              {t(slides[currentSlide].title)}
            </CardTitle>
            <p className="text-xl sm:text-2xl text-blue-100 mt-2">
              {t(slides[currentSlide].subtitle)}
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
                {slides[currentSlide].content(t)}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="flex items-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            <ChevronLeft className="h-4 w-4" /> {t("pitchDeck.previous")}
          </Button>
          <span className="text-sm sm:text-base text-gray-500">
            {currentSlide + 1} {t("pitchDeck.of")} {slides.length}
          </span>
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            className="flex items-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            {t("pitchDeck.next")} <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
