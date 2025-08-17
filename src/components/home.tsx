import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Leaf,
  Zap,
  Recycle,
  BarChart3,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-600 to-blue-600"></div>
            <span className="text-xl font-bold text-gray-900">GP Energy</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">
              Solutions
            </a>
            <a href="#technology" className="text-gray-600 hover:text-gray-900">
              Technology
            </a>
            <a href="#impact" className="text-gray-600 hover:text-gray-900">
              Impact
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 py-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
            // onError={handleVideoError}
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
          >
            <source src="/landing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-green-50/80 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Transform Waste Into
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    {" "}
                    Clean Energy
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced waste-to-energy technology that converts organic
                  waste into renewable natural gas, electricity, and valuable
                  by-products while reducing carbon emissions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">
                    Conversion Efficiency
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2,450</div>
                  <div className="text-sm text-gray-600">Carbon Credits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    4.2 MWh
                  </div>
                  <div className="text-sm text-gray-600">
                    Daily Energy Output
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Waste-to-Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our patented technologies transform various waste streams into
              valuable energy resources and sustainable products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Anaerobic Digestion</CardTitle>
                <CardDescription>
                  High-efficiency conversion of organic waste into biogas and
                  renewable natural gas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">85% conversion efficiency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Pipeline-quality RNG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">
                      Organic fertilizer production
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Power Generation</CardTitle>
                <CardDescription>
                  Combined heat and power systems for maximum energy recovery
                  from waste streams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Grid-ready electricity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Heat recovery systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">24/7 renewable energy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>RDF Production</CardTitle>
                <CardDescription>
                  Convert non-recyclable waste into high-quality refuse derived
                  fuel for industrial applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Uniform fuel pellets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">High calorific value</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Reduced landfill waste</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Patented Technology Platform
                </h2>
                <p className="text-lg text-gray-600">
                  Our proprietary waste-to-energy systems are built on decades
                  of research and development, featuring advanced process
                  optimization and environmental controls.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Advanced Process Control
                    </h3>
                    <p className="text-gray-600">
                      AI-powered optimization systems monitor and adjust
                      parameters in real-time for maximum efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Environmental Excellence
                    </h3>
                    <p className="text-gray-600">
                      Ultra-low emissions technology with comprehensive
                      environmental monitoring and reporting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Modular Design
                    </h3>
                    <p className="text-gray-600">
                      Scalable systems that can be customized for different
                      waste volumes and energy requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80"
                alt="Technology Platform"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Uptime Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Designs Section */}
      <section id="architecture" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Future Power Plant Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the innovative architectural designs of our
              next-generation anaerobic digestion facilities, engineered for
              maximum efficiency and environmental integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  Integrated Facility Design
                </h3>
                <p className="text-lg text-gray-600">
                  Our future power plant combines cutting-edge anaerobic
                  digestion technology with sustainable architectural
                  principles, creating facilities that are both highly
                  functional and environmentally harmonious.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Modular Digester Systems
                    </h4>
                    <p className="text-gray-600">
                      Scalable anaerobic digesters designed for optimal biogas
                      production with integrated waste preprocessing facilities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Energy Recovery Hub
                    </h4>
                    <p className="text-gray-600">
                      Centralized power generation facility with combined heat
                      and power systems for maximum energy efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Green Infrastructure
                    </h4>
                    <p className="text-gray-600">
                      Living roofs, natural ventilation systems, and integrated
                      landscaping that blend with the surrounding environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                alt="Future Power Plant Architecture"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl">
                <div className="text-2xl font-bold text-gray-900">50 MW</div>
                <div className="text-sm text-gray-600">Planned Capacity</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                  alt="Aerial View Design"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Aerial Master Plan</CardTitle>
                <CardDescription>
                  Complete facility layout showing digester placement,
                  processing areas, and energy distribution infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">12 modular digesters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Integrated control center</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">On-site laboratory</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80"
                  alt="Cross Section Design"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Process Flow Architecture</CardTitle>
                <CardDescription>
                  Detailed cross-section showing the complete anaerobic
                  digestion process from waste input to energy output.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Multi-stage processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Gas collection system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Waste heat recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&q=80"
                  alt="Control Center Design"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Smart Control Center</CardTitle>
                <CardDescription>
                  Advanced monitoring and control facility featuring AI-powered
                  optimization and real-time performance analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">24/7 monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Predictive maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Remote operation capability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Environmental Impact & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions deliver measurable environmental benefits while
              creating economic value for our partners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                12,450
              </div>
              <div className="text-gray-600">Tons CO₂ Reduced Annually</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,530</div>
              <div className="text-gray-600">MWh Clean Energy Generated</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                85,000
              </div>
              <div className="text-gray-600">Tons Waste Diverted</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3.2%</div>
              <div className="text-gray-600">iNDC Target Contribution</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your Waste Into Energy?
            </h2>
            <p className="text-xl text-green-100">
              Join leading organizations worldwide in creating sustainable
              energy solutions while reducing environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-600 to-blue-600"></div>
                <span className="text-xl font-bold">GP Energy</span>
              </div>
              <p className="text-gray-400">
                Leading provider of advanced waste-to-energy technologies for a
                sustainable future.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Anaerobic Digestion</li>
                <li>Power Generation</li>
                <li>RDF Production</li>
                <li>Environmental Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Careers</li>
                <li>News & Events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@wastetoenergy.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 GP Energy, Inc.. All rights reserved. |{" "}
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
