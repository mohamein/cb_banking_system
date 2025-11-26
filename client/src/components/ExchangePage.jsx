import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRightLeft,
  History,
  TrendingUp,
  Info,
  RefreshCcw,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- MOCK DATA & CONSTANTS ---
const EXCHANGE_RATE = 10750; // 1 USD = 26,000 SLSH
const FEE_PERCENTAGE = 0.0; // 0% Fee for "Simple" prototype

const ExchangePage = () => {
  const [direction, setDirection] = useState("USD_TO_SLSH"); // or 'SLSH_TO_USD'
  const [amount, setAmount] = useState("");
  const [converted, setConverted] = useState("0");

  // Handle Calculation Logic
  useEffect(() => {
    const numericAmount = parseFloat(amount.replace(/,/g, "")) || 0;

    let result = 0;
    if (direction === "USD_TO_SLSH") {
      result = numericAmount * EXCHANGE_RATE;
    } else {
      result = numericAmount / EXCHANGE_RATE;
    }

    // Format based on currency
    if (direction === "USD_TO_SLSH") {
      setConverted(
        result.toLocaleString("en-US", { maximumFractionDigits: 0 })
      );
    } else {
      setConverted(
        result.toLocaleString("en-US", { maximumFractionDigits: 2 })
      );
    }
  }, [amount, direction]);

  // Handle Swap
  const handleSwap = () => {
    setDirection(direction === "USD_TO_SLSH" ? "SLSH_TO_USD" : "USD_TO_SLSH");
    setAmount(""); // Reset input on swap for simplicity
    setConverted("0");
  };

  // Currencies Config
  const fromCurr = direction === "USD_TO_SLSH" ? "USD" : "SLSH";
  const toCurr = direction === "USD_TO_SLSH" ? "SLSH" : "USD";
  const fromSymbol = direction === "USD_TO_SLSH" ? "$" : "Sh";
  const toSymbol = direction === "USD_TO_SLSH" ? "Sh" : "$";
  const fromColor =
    direction === "USD_TO_SLSH" ? "text-secondary" : "text-primary"; // Teal vs Orange
  const toColor =
    direction === "USD_TO_SLSH" ? "text-primary" : "text-secondary";

  return (
    <>
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-secondary tracking-tight flex items-center gap-2 justify-center md:justify-start">
            <RefreshCcw className="h-8 w-8" />
            Sarif (Currency Exchange)
          </h1>
          <p className="text-muted-foreground mt-1">
            Convert between US Dollars and Somali Shillings instantly with zero
            fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: THE CONVERTER (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="shadow-lg border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle>Exchange Calculator</CardTitle>
                <CardDescription>
                  Current Rate:{" "}
                  <span className="font-bold text-foreground">
                    1 USD = {EXCHANGE_RATE.toLocaleString()} SLSH
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* INPUT: FROM */}
                <div className="space-y-2">
                  <Label className="text-muted-foreground font-medium">
                    You Pay ({fromCurr})
                  </Label>
                  <div className="relative">
                    <span
                      className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold ${fromColor}`}
                    >
                      {fromSymbol}
                    </span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-12 h-16 text-2xl font-bold bg-muted/20 border-border focus-visible:ring-2 focus-visible:ring-primary/50"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Badge
                        variant="outline"
                        className="text-xs uppercase bg-background"
                      >
                        {fromCurr}
                      </Badge>
                    </div>
                  </div>
                  {/* Quick Amounts */}
                  <div className="flex gap-2 mt-2">
                    {[10, 50, 100].map((val) => (
                      <Button
                        key={val}
                        variant="outline"
                        size="sm"
                        className="text-xs h-7"
                        onClick={() => setAmount(val.toString())}
                      >
                        {fromSymbol}
                        {val}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* SWAP BUTTON (Centered) */}
                <div className="relative flex items-center justify-center py-2">
                  <Separator className="absolute top-1/2 w-full" />
                  <Button
                    size="icon"
                    variant="outline"
                    className="relative z-10 rounded-full h-10 w-10 border-2 border-border hover:bg-muted hover:border-primary transition-colors"
                    onClick={handleSwap}
                  >
                    <ArrowDown className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>

                {/* INPUT: TO (READ ONLY) */}
                <div className="space-y-2">
                  <Label className="text-muted-foreground font-medium">
                    You Receive ({toCurr})
                  </Label>
                  <div className="relative">
                    <span
                      className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold ${toColor}`}
                    >
                      {toSymbol}
                    </span>
                    <Input
                      readOnly
                      value={converted}
                      className="pl-12 h-16 text-2xl font-bold bg-muted/50 border-border text-foreground/80 cursor-not-allowed"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Badge variant="secondary" className="text-xs uppercase">
                        {toCurr}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="bg-secondary/5 rounded-lg p-4 space-y-2 border border-secondary/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Exchange Rate</span>
                    <span className="font-medium">
                      1 USD = {EXCHANGE_RATE.toLocaleString()} SLSH
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Service Fee (0%)
                    </span>
                    <span className="font-medium text-emerald-600">Free</span>
                  </div>
                  <Separator className="bg-border/50" />
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm font-bold text-secondary">
                      Total to Receive
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      {toSymbol} {converted}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12 text-lg font-bold bg-primary hover:bg-accent text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]">
                  Confirm Exchange
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* RIGHT COLUMN: INFO & HISTORY (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Rates Card */}
            <Card className="shadow-sm bg-gradient-to-br from-secondary to-somali-blue text-white border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <TrendingUp className="h-5 w-5" /> Today's Rates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-secondary font-bold text-xs">
                      $
                    </div>
                    <span className="font-medium">Buying USD</span>
                  </div>
                  <span className="font-bold text-xl">10,750 Sh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xs">
                      Sh
                    </div>
                    <span className="font-medium">Selling USD</span>
                  </div>
                  <span className="font-bold text-xl">10,800 Sh</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Exchanges */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <History className="h-4 w-4" /> Recent Exchanges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center pb-3 last:pb-0 last:border-0 border-b border-border"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                          <ArrowRightLeft className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Bought SLSH</p>
                          <p className="text-xs text-muted-foreground">
                            Today, 10:00 AM
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-emerald-600">
                          + 520,000 Sh
                        </p>
                        <p className="text-xs text-muted-foreground">
                          - $20.00
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex gap-3 items-start">
              <Info className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-xs text-orange-800 leading-relaxed">
                <strong>Note:</strong> Exchange rates are updated every 15
                minutes. Large transactions (over $10,000) may require manual
                approval by an admin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangePage;
