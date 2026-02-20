import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Check, TrendingDown, DollarSign, ShieldCheck } from "lucide-react";

const MONTHLY_PRICE = 9.99;
const YEARLY_PRICE = 92;
const YEARLY_MONTHLY = YEARLY_PRICE / 12;

const PricingCalculator = () => {
  const [months, setMonths] = useState(12);

  const monthlyCost = +(months * MONTHLY_PRICE).toFixed(2);
  const yearlyCost = months <= 12 ? YEARLY_PRICE : +(Math.ceil(months / 12) * YEARLY_PRICE).toFixed(2);
  const savings = +(monthlyCost - yearlyCost).toFixed(2);
  const savingsPercent = Math.round((savings / monthlyCost) * 100);

  return (
    <div className="mt-8 sm:mt-14">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-lg font-bold text-foreground sm:text-xl">Savings Calculator</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          See how much you save with annual billing
        </p>
      </div>

      <Card className="mx-auto mt-4 max-w-xl border-border sm:mt-6">
        <CardContent className="pt-5 pb-5 space-y-5 sm:pt-6 sm:pb-6 sm:space-y-6">
          {/* Slider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">Subscription length</span>
              <Badge variant="secondary" className="text-[10px] sm:text-xs">
                {months} {months === 1 ? "month" : "months"}
              </Badge>
            </div>
            <Slider
              value={[months]}
              onValueChange={(v) => setMonths(v[0])}
              min={1}
              max={36}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between mt-1 text-[10px] text-muted-foreground">
              <span>1 mo</span>
              <span>12 mo</span>
              <span>24 mo</span>
              <span>36 mo</span>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-lg border border-border bg-muted/30 p-3 text-center sm:p-4">
              <p className="text-[10px] text-muted-foreground font-medium sm:text-xs">Monthly Plan</p>
              <p className="mt-1 text-xl font-extrabold text-foreground sm:text-2xl">${monthlyCost}</p>
              <p className="text-[10px] text-muted-foreground">${MONTHLY_PRICE}/mo × {months}</p>
            </div>
            <div className="rounded-lg border border-primary/40 bg-primary/5 p-3 text-center sm:p-4">
              <p className="text-[10px] text-primary font-medium sm:text-xs">Yearly Plan</p>
              <p className="mt-1 text-xl font-extrabold text-foreground sm:text-2xl">${yearlyCost}</p>
              <p className="text-[10px] text-muted-foreground">~${YEARLY_MONTHLY.toFixed(2)}/mo</p>
            </div>
          </div>

          {/* Savings callout */}
          {savings > 0 && (
            <div className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-3 py-2.5 sm:px-4 sm:py-3">
              <TrendingDown className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              <span className="text-xs font-semibold text-primary sm:text-sm">
                You save ${savings} ({savingsPercent}%) with yearly billing
              </span>
            </div>
          )}

          {/* No tax / no shipping */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-border sm:gap-4">
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs">
              <DollarSign className="h-3 w-3 text-primary sm:h-3.5 sm:w-3.5" />
              No hidden fees
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs">
              <ShieldCheck className="h-3 w-3 text-primary sm:h-3.5 sm:w-3.5" />
              No tax or shipping
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs">
              <Check className="h-3 w-3 text-primary sm:h-3.5 sm:w-3.5" />
              Cancel anytime
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingCalculator;
