import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  RotateCcw,
  Maximize,
  Info,
} from "lucide-react";

interface PlantComponent {
  id: string;
  name: string;
  description: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface PlantDesign {
  id: string;
  name: string;
  description: string;
  image: string;
  components: PlantComponent[];
}

const InteractivePlantViewer = () => {
  const [selectedDesign, setSelectedDesign] = useState<string>(
    "anaerobic-digestion",
  );
  const [zoom, setZoom] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);
  const [selectedComponent, setSelectedComponent] =
    useState<PlantComponent | null>(null);

  // Mock data for plant designs
  const plantDesigns: PlantDesign[] = [
    {
      id: "anaerobic-digestion",
      name: "Anaerobic Digestion System",
      description:
        "High-efficiency patented anaerobic digestion system for organic waste processing.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d8e8d96f3cc?w=800&q=80",
      components: [
        {
          id: "pre-treatment",
          name: "Pre-treatment Unit",
          description:
            "Processes incoming waste to remove contaminants and prepare material for digestion.",
          position: { x: 20, y: 30 },
          size: { width: 120, height: 80 },
        },
        {
          id: "digester",
          name: "Primary Digester",
          description:
            "Patented high-efficiency digester where organic material is broken down by microorganisms in the absence of oxygen.",
          position: { x: 180, y: 100 },
          size: { width: 150, height: 150 },
        },
        {
          id: "gas-collection",
          name: "Biogas Collection System",
          description:
            "Captures and stores biogas produced during the anaerobic digestion process.",
          position: { x: 380, y: 80 },
          size: { width: 100, height: 100 },
        },
        {
          id: "upgrading",
          name: "Gas Upgrading Unit",
          description:
            "Purifies biogas into renewable natural gas (RNG) by removing CO2 and contaminants.",
          position: { x: 520, y: 120 },
          size: { width: 120, height: 80 },
        },
        {
          id: "digestate",
          name: "Digestate Processing",
          description:
            "Processes the remaining solid material into high-quality fertilizer products.",
          position: { x: 300, y: 280 },
          size: { width: 140, height: 90 },
        },
      ],
    },
    {
      id: "rdf-production",
      name: "RDF Production Facility",
      description:
        "Specialized facility for converting non-recyclable waste into Refuse Derived Fuel (RDF).",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&q=80",
      components: [
        {
          id: "sorting",
          name: "Waste Sorting",
          description:
            "Automated and manual sorting to separate combustible materials from non-combustibles.",
          position: { x: 50, y: 50 },
          size: { width: 130, height: 90 },
        },
        {
          id: "shredder",
          name: "Primary Shredder",
          description:
            "Reduces waste size for efficient processing and uniform fuel production.",
          position: { x: 220, y: 80 },
          size: { width: 100, height: 100 },
        },
        {
          id: "dryer",
          name: "Thermal Dryer",
          description:
            "Removes moisture from the material to increase calorific value.",
          position: { x: 380, y: 100 },
          size: { width: 120, height: 80 },
        },
        {
          id: "pelletizer",
          name: "Pelletizing Unit",
          description:
            "Compresses processed waste into dense, uniform RDF pellets for easier transport and use.",
          position: { x: 540, y: 150 },
          size: { width: 110, height: 110 },
        },
        {
          id: "quality",
          name: "Quality Control",
          description:
            "Tests RDF for energy content, moisture levels, and contaminants to ensure it meets specifications.",
          position: { x: 320, y: 250 },
          size: { width: 130, height: 80 },
        },
      ],
    },
    {
      id: "power-generation",
      name: "Renewable Power Generation",
      description:
        "Integrated system for converting biogas to electricity through efficient generators.",
      image:
        "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80",
      components: [
        {
          id: "gas-storage",
          name: "Gas Storage",
          description: "Temporary storage for biogas before power generation.",
          position: { x: 60, y: 80 },
          size: { width: 100, height: 100 },
        },
        {
          id: "gas-treatment",
          name: "Gas Treatment",
          description:
            "Removes hydrogen sulfide and other impurities that could damage generation equipment.",
          position: { x: 200, y: 60 },
          size: { width: 120, height: 80 },
        },
        {
          id: "generators",
          name: "Generator Sets",
          description:
            "Combined heat and power (CHP) engines that convert biogas to electricity and useful heat.",
          position: { x: 380, y: 100 },
          size: { width: 150, height: 120 },
        },
        {
          id: "transformer",
          name: "Transformer Station",
          description:
            "Converts generated electricity to appropriate voltage for grid connection.",
          position: { x: 570, y: 120 },
          size: { width: 90, height: 90 },
        },
        {
          id: "heat-recovery",
          name: "Heat Recovery System",
          description:
            "Captures waste heat from generators for use in facility operations or district heating.",
          position: { x: 350, y: 260 },
          size: { width: 130, height: 80 },
        },
      ],
    },
  ];

  const currentDesign =
    plantDesigns.find((design) => design.id === selectedDesign) ||
    plantDesigns[0];

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handleRotateClockwise = () => {
    setRotation((prev) => prev + 90);
  };

  const handleRotateCounterClockwise = () => {
    setRotation((prev) => prev - 90);
  };

  const handleReset = () => {
    setZoom(100);
    setRotation(0);
  };

  const handleComponentClick = (component: PlantComponent) => {
    setSelectedComponent(component);
  };

  return (
    <div className="bg-background p-6 rounded-lg w-full h-full">
      <h2 className="text-2xl font-bold mb-6">
        Interactive Plant Design Viewer
      </h2>

      <Tabs
        defaultValue={selectedDesign}
        onValueChange={setSelectedDesign}
        className="w-full"
      >
        <TabsList className="mb-4">
          {plantDesigns.map((design) => (
            <TabsTrigger key={design.id} value={design.id}>
              {design.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {plantDesigns.map((design) => (
          <TabsContent key={design.id} value={design.id} className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="relative overflow-hidden border rounded-lg h-[500px] bg-muted/20">
                      {/* Plant visualization area */}
                      <div
                        className="relative w-full h-full flex items-center justify-center transition-all duration-300"
                        style={{
                          transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                        }}
                      >
                        <img
                          src={currentDesign.image}
                          alt={currentDesign.name}
                          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
                        />

                        {/* Plant components */}
                        <TooltipProvider>
                          {currentDesign.components.map((component) => (
                            <Tooltip key={component.id}>
                              <TooltipTrigger asChild>
                                <div
                                  className={`absolute cursor-pointer border-2 rounded-md flex items-center justify-center transition-all ${selectedComponent?.id === component.id ? "border-primary bg-primary/20" : "border-muted-foreground/50 bg-background/80 hover:bg-background/90"}`}
                                  style={{
                                    left: `${component.position.x}px`,
                                    top: `${component.position.y}px`,
                                    width: `${component.size.width}px`,
                                    height: `${component.size.height}px`,
                                    zIndex:
                                      selectedComponent?.id === component.id
                                        ? 10
                                        : 1,
                                  }}
                                  onClick={() =>
                                    handleComponentClick(component)
                                  }
                                >
                                  <span className="text-xs font-medium text-center p-1">
                                    {component.name}
                                  </span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                <p className="font-medium">{component.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>

                      {/* Controls overlay */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-background/80 p-2 rounded-lg shadow-md">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleZoomIn}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleZoomOut}
                        >
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleRotateClockwise}
                        >
                          <RotateCw className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleRotateCounterClockwise}
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleReset}
                        >
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <span className="text-sm">Zoom: {zoom}%</span>
                      <Slider
                        value={[zoom]}
                        min={50}
                        max={200}
                        step={5}
                        className="w-48"
                        onValueChange={(value) => setZoom(value[0])}
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-80 space-y-4">
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">
                        {currentDesign.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {currentDesign.description}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Info className="h-3 w-3 mr-1" />
                        <span>Click on components to view details</span>
                      </div>
                    </div>

                    {selectedComponent && (
                      <Card>
                        <CardContent className="p-4 space-y-3">
                          <h4 className="font-medium">
                            {selectedComponent.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedComponent.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default InteractivePlantViewer;
