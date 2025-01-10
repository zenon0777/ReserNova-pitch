"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { Activity, Building2, ChevronLeft, ChevronRight, DollarSign, Hotel, Map, Maximize2, Minimize2, Rocket, Sparkles, Target, TrendingUp, Trophy, Users, Users2, Utensils } from 'lucide-react';
import React, { useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'next-i18next';

const slides = [
  {
    title: "ReserNova",
    subtitle: "Innovation dans la Réservation Digitale au Maroc",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Vision 2024-2025</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Dans un contexte de croissance économique de +2.8% au T3 2024, nous transformons l&apos;expérience de réservation au Maroc en unifiant l&apos;écosystème touristique et les services locaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">12M+ Touristes</h3>
              <p className="text-blue-600">Projection 2024</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">+3.6%</h3>
              <p className="text-green-600">Croissance Hors Agriculture</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Activity className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-2">+4.4%</h3>
              <p className="text-purple-600">Secteur Secondaire</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    title: "Analyse du Marché 2024",
    subtitle: "Tendances Économiques Actuelles",
    content: (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Croissance Sectorielle T3 2024</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { secteur: 'Services', croissance: 3.4 },
                  { secteur: 'Construction', croissance: 4.8 },
                  { secteur: 'Industries', croissance: 4.4 },
                  { secteur: 'Tourisme', croissance: 5.2 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="secteur" stroke="#4a5568" />
                <YAxis stroke="#4a5568" />
                <Tooltip contentStyle={{ backgroundColor: '#f7fafc', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="croissance" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Opportunités Clés</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">Croissance services: +3.4%</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">Construction: +4.8%</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">Secteur manufacturier en hausse</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-800">Indicateurs Touristiques</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={[
                    { mois: 'Jan', touristes: 800 },
                    { mois: 'Fév', touristes: 900 },
                    { mois: 'Mar', touristes: 1000 },
                    { mois: 'Avr', touristes: 1100 }
                  ]}
                >
                  <Area type="monotone" dataKey="touristes" fill="#8B5CF6" stroke="#7C3AED" />
                  <XAxis dataKey="mois" stroke="#4a5568" />
                  <YAxis stroke="#4a5568" />
                  <Tooltip contentStyle={{ backgroundColor: '#f7fafc', border: '1px solid #e2e8f0' }} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    title: "Solution ReserNova",
    subtitle: "Plateforme Intégrée de Réservation",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Bénéfices pour les Utilisateurs</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">Processus de réservation fluide et intuitif</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">Disponibilité en temps réel pour des créneaux immédiats</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">Options de paiement sécurisées et diversifiées</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-700">Système d&aposavis pour renforcer la transparence</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-emerald-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Bénéfices pour les Prestataires</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">Augmentation de la visibilité et acquisition de clients</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">Gestion efficace des réservations et des disponibilités</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">Optimisation des revenus grâce à la tarification dynamique</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700">Accès à des analyses en temps réel pour le suivi des performances</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

    )
  },
  {
    title: "Opportunité de Marché",
    subtitle: "Un Marché en Pleine Expansion",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Marché Addressable</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'TAM', value: 50, description: 'Marché total du tourisme au Maroc' },
                      { name: 'SAM', value: 30, description: 'Marché des réservations en ligne' },
                      { name: 'SOM', value: 20, description: 'Notre marché cible initial' }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {['#4F46E5', '#10B981', '#8B5CF6'].map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#f7fafc', border: '1px solid #e2e8f0' }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-50 to-blue-50 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Potentiel de Marché</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <span className="font-bold text-blue-700">TAM:</span> 50B MAD
                    <p className="text-sm text-blue-600">Marché touristique total au Maroc</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users2 className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <span className="font-bold text-green-700">SAM:</span> 30B MAD
                    <p className="text-sm text-green-600">Réservations digitales</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <span className="font-bold text-purple-700">SOM:</span> 20B MAD
                    <p className="text-sm text-purple-600">Marché cible initial</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-purple-100 to-pink-100 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-800">Croissance Projetée du Marché</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { year: '2024', market: 50 },
                  { year: '2025', market: 65 },
                  { year: '2026', market: 85 },
                  { year: '2027', market: 110 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="year" stroke="#4a5568" />
                <YAxis label={{ value: 'Milliards MAD', angle: -90, position: 'insideLeft' }} stroke="#4a5568" />
                <Tooltip contentStyle={{ backgroundColor: '#f7fafc', border: '1px solid #e2e8f0' }} />
                <Line type="monotone" dataKey="market" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    title: "Avantage Compétitif",
    subtitle: "Notre Différenciation sur le Marché",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
            <CardContent className="p-6">
              <Trophy className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-blue-800">Innovation Technologique</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• IA pour recommandations</li>
                <li>• Interface intuitive</li>
                <li>• Integration multi-services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-200 shadow-md">
            <CardContent className="p-6">
              <Building2 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-green-800">Partenariats Locaux</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Réseau établi</li>
                <li>• Support local</li>
                <li>• Expertise marché</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 shadow-md">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-800">Experience Client</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Service personnalisé</li>
                <li>• Support 24/7</li>
                <li>• Fidélisation innovante</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Analyse Concurrentielle</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-4 text-left text-blue-800">Caractéristiques</th>
                    <th className="p-4 text-center text-blue-800">ReserNova</th>
                    <th className="p-4 text-center text-blue-800">Concurrent A</th>
                    <th className="p-4 text-center text-blue-800">Concurrent B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Réservation Multi-Services', us: '✓', a: '×', b: '×' },
                    { feature: 'Paiement Local', us: '✓', a: '✓', b: '×' },
                    { feature: 'Support 24/7', us: '✓', a: '×', b: '✓' },
                    { feature: 'App Mobile', us: '✓', a: '✓', b: '✓' },
                    { feature: 'IA Recommandations', us: '✓', a: '×', b: '×' }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                      <td className="p-4 text-blue-700">{row.feature}</td>
                      <td className="p-4 text-center text-green-600 font-bold">{row.us}</td>
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
    )
  },
  {
    title: "Modèle Financier",
    subtitle: "Projections et Métriques Clés",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Projections de Revenue</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[
                    { year: '2024', revenue: 2, profit: 0.5 },
                    { year: '2025', revenue: 5, profit: 1.5 },
                    { year: '2026', revenue: 12, profit: 4 },
                    { year: '2027', revenue: 25, profit: 9 }
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="year" stroke="#4a5568" />
                  <YAxis label={{ value: 'Millions MAD', angle: -90, position: 'insideLeft' }} stroke="#4a5568" />
                  <Tooltip contentStyle={{ backgroundColor: '#f7fafc', border: '1px solid #e2e8f0' }} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#4F46E5" name="Revenue" />
                  <Bar dataKey="profit" fill="#10B981" name="Profit" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Métriques Clés</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">CAC</span>
                  <span className="font-bold text-blue-800">120 MAD</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">LTV</span>
                  <span className="font-bold text-blue-800">1,200 MAD</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">Ratio LTV/CAC</span>
                  <span className="font-bold text-green-600">10x</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <span className="text-blue-700">Marge Brute</span>
                  <span className="font-bold text-blue-800">65%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Sources de Revenue</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-100 rounded-lg shadow">
                <DollarSign className="h-8 w-8 text-blue-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-blue-800">Commissions</h4>
                <p className="text-blue-700">5-15% par réservation</p>
                <p className="text-blue-600 font-bold mt-2">60% du revenue</p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <Users2 className="h-8 w-8 text-green-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-green-800">Abonnements Pro</h4>
                <p className="text-green-700">Plans mensuels prestataires</p>
                <p className="text-green-600 font-bold mt-2">30% du revenue</p>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg shadow">
                <Rocket className="h-8 w-8 text-purple-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-purple-800">Services Premium</h4>
                <p className="text-purple-700">Features additionnelles</p>
                <p className="text-purple-600 font-bold mt-2">10% du revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    title: "Opportunité d'Investissement",
    subtitle: "Une Plateforme Universelle de Réservation pour le Marché Marocain",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Phase MVP - Plateforme Multi-Services</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            ReserNova unifie l&apos;écosystème touristique marocain à travers une plateforme mobile et web innovante, offrant une solution complète pour les réservations de services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Services Principaux</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Hotel className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">Hébergement</span>
                    <p className="text-sm text-blue-600">Hôtels, Riads, Locations de Vacances</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Utensils className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">Expériences Culinaires</span>
                    <p className="text-sm text-blue-600">Restaurants, Tours Gastronomiques</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Map className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">Tours et Activités</span>
                    <p className="text-sm text-blue-600">Culturelles, Aventure, Visites</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-800">Bien-être</span>
                    <p className="text-sm text-blue-600">Spas, Hammams, Centres de Beauté</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">Modèle de Revenus</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                  <div>
                    <span className="font-bold text-purple-800">Commissions</span>
                    <p className="text-sm text-purple-600">Sur chaque réservation effectuée</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Trophy className="h-6 w-6 text-purple-600" />
                  <div>
                    <span className="font-bold text-purple-800">Abonnements Premium</span>
                    <p className="text-sm text-purple-600">Fonctionnalités avancées pour prestataires</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow">
                  <Target className="h-6 w-6 text-purple-600" />
                  <div>
                    <span className="font-bold text-purple-800">Outils Promotionnels</span>
                    <p className="text-sm text-purple-600">Services marketing pour entreprises</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Besoins d&apos;Investissement</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow">
                <Rocket className="h-8 w-8 text-blue-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-blue-800">Développement Tech</h4>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Applications Mobile & Web</li>
                  <li>• Intégration Paiements</li>
                  <li>• System de Réservation</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Users2 className="h-8 w-8 text-green-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-green-800">Expansion Commerciale</h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Acquisition Partenaires</li>
                  <li>• Force de Vente</li>
                  <li>• Support Client 24/7</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Target className="h-8 w-8 text-purple-600 mb-2" />
                <h4 className="text-lg font-bold mb-2 text-purple-800">Marketing & Acquisition</h4>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Acquisition Utilisateurs</li>
                  <li>• Campagnes Marketing</li>
                  <li>• Partenariats Stratégiques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
];

const PitchDeck: React.FC = () => {
  const { t } = useTranslation('common');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-8 ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* language switcher */}
      <div className="flex justify-end mb-4 p-4 sm:p-8">
        <LanguageSwitcher />
      </div>
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap">
          {slides.map((slide, index) => (
            <Button
              key={index}
              onClick={() => setCurrentSlide(index)}
              variant={currentSlide === index ? "default" : "outline"}
              className="text-sm sm:text-base mb-2"
            >
              {slide.title}
            </Button>
          ))}
        </nav>
        <Card className="overflow-hidden bg-white shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
            <CardTitle className="text-3xl sm:text-4xl text-white">{slides[currentSlide].title}</CardTitle>
            <p className="text-xl sm:text-2xl text-blue-100 mt-2">{slides[currentSlide].subtitle}</p>
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
                {slides[currentSlide].content}
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
            <ChevronLeft className="h-4 w-4" /> {t('pitchDeck.previous')}
          </Button>
          <span className="text-sm sm:text-base text-gray-500">
            {t('pitchDeck.slide')} {currentSlide + 1} {t('pitchDeck.of')} {slides.length}
          </span>
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            className="flex items-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            {t('pitchDeck.next')} <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={toggleFullScreen} variant="outline" className="flex items-center gap-2 bg-purple-100 text-purple-700 hover:bg-purple-200">
            {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            {isFullScreen ? t('pitchDeck.exitFullScreen') : t('pitchDeck.fullScreen')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;

