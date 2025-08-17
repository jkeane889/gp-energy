import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Download, BarChart3, LineChart, PieChart } from "lucide-react";

interface CalculatorInputs {
  facilitySize: number;
  wasteCapacity: number;
  technologyType: string;
  operationalHours: number;
  wasteDiversion: number;
}

interface CalculatorResults {
  carbonCredits: number;
  indcContribution: number;
  ghgReduction: number;
  renewableEnergy: number;
  wasteDiverted: number;
}

const EnvironmentalImpactCalculator = () => {
  const [activeTab, setActiveTab] = useState("inputs");
  const [inputs, setInputs] = useState<CalculatorInputs>({
    facilitySize: 10000, // square meters
    wasteCapacity: 100, // tons per day
    technologyType: "anaerobic",
    operationalHours: 8000, // hours per year
    wasteDiversion: 80, // percentage
  });

  const [results, setResults] = useState<CalculatorResults>({
    carbonCredits: 0,
    indcContribution: 0,
    ghgReduction: 0,
    renewableEnergy: 0,
    wasteDiverted: 0,
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationComplete, setCalculationComplete] = useState(false);

  const handleInputChange = (
    field: keyof CalculatorInputs,
    value: number | string,
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
    setCalculationComplete(false);
  };

  const calculateImpact = () => {
    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      // These are placeholder calculations - in a real app these would be based on scientific models
      const { facilitySize, wasteCapacity, operationalHours, wasteDiversion } =
        inputs;
      const technologyEfficiency =
        inputs.technologyType === "anaerobic" ? 0.85 : 0.65;

      // Calculate results based on inputs
      const ghgReduction =
        wasteCapacity * operationalHours * 0.5 * technologyEfficiency; // tons CO2e
      const carbonCredits = ghgReduction * 0.8; // 80% of GHG reduction
      const indcContribution = carbonCredits * 0.001; // percentage points
      const renewableEnergy =
        wasteCapacity * operationalHours * 0.3 * technologyEfficiency; // MWh
      const wasteDiverted =
        wasteCapacity * operationalHours * (wasteDiversion / 100);

      setResults({
        carbonCredits: Math.round(carbonCredits),
        indcContribution: parseFloat(indcContribution.toFixed(3)),
        ghgReduction: Math.round(ghgReduction),
        renewableEnergy: Math.round(renewableEnergy),
        wasteDiverted: Math.round(wasteDiverted),
      });

      setIsCalculating(false);
      setCalculationComplete(true);
      setActiveTab("results");
    }, 1500);
  };

  const downloadReport = () => {
    // In a real app, this would generate a PDF or other report format
    alert("Report download functionality would be implemented here");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-background">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Environmental Impact Calculator
          </CardTitle>
          <CardDescription>
            Calculate potential carbon credits and contributions to iNDC targets
            based on your waste-to-energy implementation.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="inputs">
                Implementation Parameters
              </TabsTrigger>
              <TabsTrigger value="results" disabled={!calculationComplete}>
                Impact Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inputs" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="facilitySize">Facility Size (m²)</Label>
                    <Input
                      id="facilitySize"
                      type="number"
                      value={inputs.facilitySize}
                      onChange={(e) =>
                        handleInputChange(
                          "facilitySize",
                          parseInt(e.target.value) || 0,
                        )
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="wasteCapacity">
                      Waste Processing Capacity (tons/day)
                    </Label>
                    <Input
                      id="wasteCapacity"
                      type="number"
                      value={inputs.wasteCapacity}
                      onChange={(e) =>
                        handleInputChange(
                          "wasteCapacity",
                          parseInt(e.target.value) || 0,
                        )
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="operationalHours">
                      Operational Hours (per year)
                    </Label>
                    <Input
                      id="operationalHours"
                      type="number"
                      value={inputs.operationalHours}
                      onChange={(e) =>
                        handleInputChange(
                          "operationalHours",
                          parseInt(e.target.value) || 0,
                        )
                      }
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="technologyType">Technology Type</Label>
                    <Select
                      value={inputs.technologyType}
                      onValueChange={(value) =>
                        handleInputChange("technologyType", value)
                      }
                    >
                      <SelectTrigger id="technologyType">
                        <SelectValue placeholder="Select technology" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="anaerobic">
                          Anaerobic Digestion
                        </SelectItem>
                        <SelectItem value="gasification">
                          Gasification
                        </SelectItem>
                        <SelectItem value="pyrolysis">Pyrolysis</SelectItem>
                        <SelectItem value="combustion">
                          Direct Combustion
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Waste Diversion Rate: {inputs.wasteDiversion}%
                    </Label>
                    <Slider
                      value={[inputs.wasteDiversion]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value) =>
                        handleInputChange("wasteDiversion", value[0])
                      }
                    />
                  </div>

                  <div className="pt-6">
                    <Button
                      onClick={calculateImpact}
                      className="w-full"
                      disabled={isCalculating}
                    >
                      {isCalculating
                        ? "Calculating..."
                        : "Calculate Environmental Impact"}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-6 mt-6">
              {calculationComplete && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          Carbon Credits
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {results.carbonCredits.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          tons CO₂e
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          iNDC Contribution
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {results.indcContribution}%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          towards national targets
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">GHG Reduction</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {results.ghgReduction.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          tons CO₂e
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">
                        Renewable Energy Generated
                      </Label>
                      <div className="flex items-center gap-2">
                        <Progress value={75} className="h-2" />
                        <span className="text-sm font-medium">
                          {results.renewableEnergy.toLocaleString()} MWh
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">
                        Waste Diverted from Landfill
                      </Label>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="h-2" />
                        <span className="text-sm font-medium">
                          {results.wasteDiverted.toLocaleString()} tons
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={downloadReport}
                      className="flex items-center gap-2"
                    >
                      <Download size={16} />
                      Download Full Report
                    </Button>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 flex items-center justify-center gap-1"
                      >
                        <BarChart3 size={16} />
                        Bar
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 flex items-center justify-center gap-1"
                      >
                        <LineChart size={16} />
                        Line
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 flex items-center justify-center gap-1"
                      >
                        <PieChart size={16} />
                        Pie
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col text-sm text-muted-foreground">
          <p>
            This calculator provides estimates based on industry standards and
            research data. Actual results may vary based on specific
            implementation details and local conditions.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EnvironmentalImpactCalculator;
