import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  position: { x: number; y: number };
}

interface ProcessFlow {
  id: string;
  title: string;
  steps: ProcessStep[];
  connections: { from: string; to: string }[];
}

const ProcessFlowDiagram = () => {
  const [selectedProcess, setSelectedProcess] = useState<string>("rng");
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const processFlows: Record<string, ProcessFlow> = {
    rng: {
      id: "rng",
      title: "Renewable Natural Gas (RNG) Production",
      steps: [
        {
          id: "waste-collection",
          title: "Waste Collection",
          description: "Organic waste is collected and sorted for processing.",
          position: { x: 50, y: 100 },
        },
        {
          id: "pre-treatment",
          title: "Pre-treatment",
          description: "Waste is shredded and prepared for digestion.",
          position: { x: 200, y: 100 },
        },
        {
          id: "anaerobic-digestion",
          title: "Anaerobic Digestion",
          description:
            "Patented high-efficiency anaerobic digestion process breaks down organic matter.",
          position: { x: 350, y: 100 },
        },
        {
          id: "biogas-capture",
          title: "Biogas Capture",
          description:
            "Methane-rich biogas is captured from the digestion process.",
          position: { x: 500, y: 100 },
        },
        {
          id: "gas-upgrading",
          title: "Gas Upgrading",
          description: "Biogas is purified to remove CO2 and other impurities.",
          position: { x: 650, y: 100 },
        },
        {
          id: "rng-production",
          title: "RNG Production",
          description:
            "Purified biogas becomes pipeline-quality renewable natural gas.",
          position: { x: 800, y: 100 },
        },
      ],
      connections: [
        { from: "waste-collection", to: "pre-treatment" },
        { from: "pre-treatment", to: "anaerobic-digestion" },
        { from: "anaerobic-digestion", to: "biogas-capture" },
        { from: "biogas-capture", to: "gas-upgrading" },
        { from: "gas-upgrading", to: "rng-production" },
      ],
    },
    power: {
      id: "power",
      title: "Renewable Power Generation",
      steps: [
        {
          id: "waste-collection",
          title: "Waste Collection",
          description: "Organic waste is collected and sorted for processing.",
          position: { x: 50, y: 100 },
        },
        {
          id: "pre-treatment",
          title: "Pre-treatment",
          description: "Waste is shredded and prepared for digestion.",
          position: { x: 200, y: 100 },
        },
        {
          id: "anaerobic-digestion",
          title: "Anaerobic Digestion",
          description:
            "Patented high-efficiency anaerobic digestion process breaks down organic matter.",
          position: { x: 350, y: 100 },
        },
        {
          id: "biogas-capture",
          title: "Biogas Capture",
          description:
            "Methane-rich biogas is captured from the digestion process.",
          position: { x: 500, y: 100 },
        },
        {
          id: "gas-engine",
          title: "Gas Engine/Turbine",
          description:
            "Biogas fuels engines or turbines to generate electricity.",
          position: { x: 650, y: 100 },
        },
        {
          id: "power-distribution",
          title: "Power Distribution",
          description: "Renewable electricity is distributed to the grid.",
          position: { x: 800, y: 100 },
        },
      ],
      connections: [
        { from: "waste-collection", to: "pre-treatment" },
        { from: "pre-treatment", to: "anaerobic-digestion" },
        { from: "anaerobic-digestion", to: "biogas-capture" },
        { from: "biogas-capture", to: "gas-engine" },
        { from: "gas-engine", to: "power-distribution" },
      ],
    },
    fertilizer: {
      id: "fertilizer",
      title: "Fertilizer Production",
      steps: [
        {
          id: "waste-collection",
          title: "Waste Collection",
          description: "Organic waste is collected and sorted for processing.",
          position: { x: 50, y: 100 },
        },
        {
          id: "pre-treatment",
          title: "Pre-treatment",
          description: "Waste is shredded and prepared for digestion.",
          position: { x: 200, y: 100 },
        },
        {
          id: "anaerobic-digestion",
          title: "Anaerobic Digestion",
          description:
            "Patented high-efficiency anaerobic digestion process breaks down organic matter.",
          position: { x: 350, y: 100 },
        },
        {
          id: "digestate-separation",
          title: "Digestate Separation",
          description:
            "Solid and liquid digestate are separated after digestion.",
          position: { x: 500, y: 100 },
        },
        {
          id: "nutrient-recovery",
          title: "Nutrient Recovery",
          description:
            "Nutrients like nitrogen, phosphorus, and potassium are recovered.",
          position: { x: 650, y: 100 },
        },
        {
          id: "fertilizer-production",
          title: "Fertilizer Production",
          description:
            "High-quality organic fertilizer is produced and packaged.",
          position: { x: 800, y: 100 },
        },
      ],
      connections: [
        { from: "waste-collection", to: "pre-treatment" },
        { from: "pre-treatment", to: "anaerobic-digestion" },
        { from: "anaerobic-digestion", to: "digestate-separation" },
        { from: "digestate-separation", to: "nutrient-recovery" },
        { from: "nutrient-recovery", to: "fertilizer-production" },
      ],
    },
    rdf: {
      id: "rdf",
      title: "Refuse Derived Fuel (RDF) Production",
      steps: [
        {
          id: "waste-collection",
          title: "Waste Collection",
          description: "Mixed waste is collected for processing.",
          position: { x: 50, y: 100 },
        },
        {
          id: "sorting",
          title: "Sorting & Separation",
          description:
            "Waste is sorted to remove recyclables and non-combustibles.",
          position: { x: 200, y: 100 },
        },
        {
          id: "shredding",
          title: "Shredding",
          description: "Remaining waste is shredded to reduce particle size.",
          position: { x: 350, y: 100 },
        },
        {
          id: "drying",
          title: "Drying",
          description: "Material is dried to increase calorific value.",
          position: { x: 500, y: 100 },
        },
        {
          id: "pelletizing",
          title: "Pelletizing",
          description: "Dried material is compressed into pellets or fluff.",
          position: { x: 650, y: 100 },
        },
        {
          id: "rdf-production",
          title: "RDF for Petrochemicals",
          description:
            "High-quality RDF is used as feedstock for petrochemical production.",
          position: { x: 800, y: 100 },
        },
      ],
      connections: [
        { from: "waste-collection", to: "sorting" },
        { from: "sorting", to: "shredding" },
        { from: "shredding", to: "drying" },
        { from: "drying", to: "pelletizing" },
        { from: "pelletizing", to: "rdf-production" },
      ],
    },
  };

  const currentFlow = processFlows[selectedProcess];

  const handleStepClick = (stepId: string) => {
    setSelectedStep(stepId === selectedStep ? null : stepId);
  };

  return (
    <Card className="w-full h-full bg-white">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Process Flow Diagrams</h2>
          <p className="text-gray-600">
            Interactive visualization of waste transformation processes. Click
            on any process step to learn more.
          </p>
        </div>

        <Tabs
          value={selectedProcess}
          onValueChange={setSelectedProcess}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="rng">RNG Production</TabsTrigger>
            <TabsTrigger value="power">Power Generation</TabsTrigger>
            <TabsTrigger value="fertilizer">Fertilizer Production</TabsTrigger>
            <TabsTrigger value="rdf">RDF Production</TabsTrigger>
          </TabsList>

          {Object.values(processFlows).map((flow) => (
            <TabsContent key={flow.id} value={flow.id} className="mt-0">
              <div className="relative h-[400px] border rounded-lg p-4 bg-slate-50">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {flow.title}
                </h3>

                {/* Process Steps */}
                <div className="relative">
                  {flow.steps.map((step) => (
                    <TooltipProvider key={step.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div
                            className={`absolute cursor-pointer ${selectedStep === step.id ? "ring-2 ring-primary" : ""}`}
                            style={{
                              left: `${step.position.x}px`,
                              top: `${step.position.y}px`,
                              width: "120px",
                            }}
                            onClick={() => handleStepClick(step.id)}
                            whileHover={{ scale: 1.05 }}
                            animate={{ y: selectedStep === step.id ? -10 : 0 }}
                          >
                            <div className="bg-white border rounded-lg p-3 shadow-sm">
                              <div className="text-sm font-medium text-center">
                                {step.title}
                              </div>
                            </div>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">{step.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>

                {/* Connections */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 0 }}
                >
                  {flow.connections.map((connection, index) => {
                    const fromStep = flow.steps.find(
                      (s) => s.id === connection.from,
                    );
                    const toStep = flow.steps.find(
                      (s) => s.id === connection.to,
                    );

                    if (!fromStep || !toStep) return null;

                    const startX = fromStep.position.x + 120; // Right side of the box
                    const startY = fromStep.position.y + 25; // Middle of the box
                    const endX = toStep.position.x; // Left side of the box
                    const endY = toStep.position.y + 25; // Middle of the box

                    return (
                      <g key={index}>
                        <line
                          x1={startX}
                          y1={startY}
                          x2={endX}
                          y2={endY}
                          stroke="#94a3b8"
                          strokeWidth="2"
                          markerEnd="url(#arrowhead)"
                        />
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="9"
                            refY="3.5"
                            orient="auto"
                          >
                            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                          </marker>
                        </defs>
                      </g>
                    );
                  })}
                </svg>

                {/* Selected Step Details */}
                {selectedStep && (
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-md border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">
                          {flow.steps.find((s) => s.id === selectedStep)?.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {
                            flow.steps.find((s) => s.id === selectedStep)
                              ?.description
                          }
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-xs"
                      onClick={() => setSelectedStep(null)}
                    >
                      Close
                    </Button>
                  </motion.div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Info className="h-4 w-4 mr-1" />
            <span>Click on any process step to view details</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <span>View Technical Documentation</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessFlowDiagram;
