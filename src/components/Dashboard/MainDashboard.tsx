import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, BarChart3, Leaf, LineChart, Zap } from "lucide-react";
import ProcessFlowDiagram from "./ProcessFlowDiagram";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  change?: string;
  trend?: "up" | "down" | "neutral";
}

const MetricCard = ({
  title,
  value,
  description,
  icon,
  change,
  trend = "neutral",
}: MetricCardProps) => {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-2 bg-muted rounded-md">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {change && (
          <div className="flex items-center mt-2">
            <span
              className={`text-xs ${trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-gray-500"}`}
            >
              {change}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface TechnologyMetricsProps {
  title: string;
  metrics: {
    label: string;
    value: number;
    maxValue: number;
  }[];
}

const TechnologyMetrics = ({ title, metrics = [] }: TechnologyMetricsProps) => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Key performance indicators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{metric.label}</span>
              <span className="text-sm text-muted-foreground">
                {metric.value}%
              </span>
            </div>
            <Progress value={metric.value} max={metric.maxValue} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const MainDashboard = () => {
  const [chartView, setChartView] = useState<
    "efficiency" | "production" | "energy"
  >("efficiency");

  // Sample data for metrics
  const conversionMetrics = [
    { label: "Organic Waste to Biogas", value: 85, maxValue: 100 },
    { label: "Biogas to RNG", value: 92, maxValue: 100 },
    { label: "Waste to Energy", value: 78, maxValue: 100 },
    { label: "Carbon Reduction", value: 65, maxValue: 100 },
  ];

  const productionMetrics = [
    { label: "Biogas Production", value: 72, maxValue: 100 },
    { label: "RNG Output", value: 68, maxValue: 100 },
    { label: "Fertilizer Production", value: 89, maxValue: 100 },
    { label: "RDF Generation", value: 76, maxValue: 100 },
  ];

  const energyMetrics = [
    { label: "Electricity Generation", value: 81, maxValue: 100 },
    { label: "Heat Recovery", value: 75, maxValue: 100 },
    { label: "Grid Integration", value: 62, maxValue: 100 },
    { label: "Energy Storage", value: 58, maxValue: 100 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Waste-to-Energy Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor conversion efficiency, production metrics, and environmental
            impact.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Export Data</Button>
          <Button>View Reports</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <MetricCard
          title="Conversion Efficiency"
          value="85%"
          description="Average waste-to-energy conversion rate"
          icon={<BarChart3 className="h-4 w-4" />}
          change="+2.5% from last month"
          trend="up"
        />
        <MetricCard
          title="Biogas Production"
          value="1,250 m³/day"
          description="Current daily biogas output"
          icon={<LineChart className="h-4 w-4" />}
          change="+150 m³ from last week"
          trend="up"
        />
        <MetricCard
          title="Carbon Credits"
          value="2,450"
          description="Total carbon credits generated"
          icon={<Leaf className="h-4 w-4" />}
          change="+320 this quarter"
          trend="up"
        />
        <MetricCard
          title="Energy Generated"
          value="4.2 MWh"
          description="Daily renewable energy output"
          icon={<Zap className="h-4 w-4" />}
          change="-0.3 MWh from yesterday"
          trend="down"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <div className="md:col-span-2">
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>
                    Comparative analysis of key indicators
                  </CardDescription>
                </div>
                <Tabs defaultValue="efficiency" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger
                      value="efficiency"
                      onClick={() => setChartView("efficiency")}
                    >
                      Efficiency
                    </TabsTrigger>
                    <TabsTrigger
                      value="production"
                      onClick={() => setChartView("production")}
                    >
                      Production
                    </TabsTrigger>
                    <TabsTrigger
                      value="energy"
                      onClick={() => setChartView("energy")}
                    >
                      Energy
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md p-4">
                {chartView === "efficiency" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Conversion Efficiency Chart Visualization
                    </p>
                    {/* Placeholder for actual chart component */}
                  </div>
                )}
                {chartView === "production" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Production Metrics Chart Visualization
                    </p>
                    {/* Placeholder for actual chart component */}
                  </div>
                )}
                {chartView === "energy" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Energy Generation Chart Visualization
                    </p>
                    {/* Placeholder for actual chart component */}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <TechnologyMetrics
            title={
              chartView === "efficiency"
                ? "Conversion Metrics"
                : chartView === "production"
                  ? "Production Metrics"
                  : "Energy Metrics"
            }
            metrics={
              chartView === "efficiency"
                ? conversionMetrics
                : chartView === "production"
                  ? productionMetrics
                  : energyMetrics
            }
          />
        </div>
      </div>

      <div className="mb-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Waste-to-Energy Process Flow</CardTitle>
            <CardDescription>
              Interactive visualization of the conversion process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] border rounded-md p-4">
              <ProcessFlowDiagram />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Technology Highlights</CardTitle>
            <CardDescription>
              Latest advancements in waste-to-energy technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Advanced Anaerobic Digestion",
                  description:
                    "Patented high-efficiency conversion process with 85% organic matter breakdown",
                },
                {
                  title: "RNG Purification System",
                  description:
                    "New membrane technology achieving 99% methane purity for pipeline injection",
                },
                {
                  title: "Integrated Fertilizer Production",
                  description:
                    "Nutrient recovery system producing commercial-grade organic fertilizers",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Environmental Impact</CardTitle>
            <CardDescription>
              Contributions to sustainability goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  metric: "CO₂ Reduction",
                  value: "12,450 tons",
                  description: "Annual carbon dioxide emissions avoided",
                },
                {
                  metric: "iNDC Contribution",
                  value: "3.2%",
                  description:
                    "Contribution to national determined contributions",
                },
                {
                  metric: "Landfill Diversion",
                  value: "85,000 tons",
                  description: "Annual waste diverted from landfills",
                },
                {
                  metric: "Renewable Energy",
                  value: "1,530 MWh",
                  description: "Annual clean energy production",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg border"
                >
                  <div>
                    <h3 className="font-medium">{item.metric}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-xl font-bold">{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainDashboard;
