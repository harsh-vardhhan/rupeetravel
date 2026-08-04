import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export interface FeatureItem {
  id?: number | string;
  item?: number | string;
  isPro?: boolean;
  title?: string;
  text?: string;
}

export interface ListViewProps {
  features: FeatureItem[];
}

const ListView: React.FC<ListViewProps> = ({ features }) => {
  return (
    <div className="space-y-2.5">
      {features.map((feature, index) => {
        const textContent = feature.text || feature.title || "";
        const isPro = feature.isPro !== undefined ? feature.isPro : !textContent.includes("❌");
        const cleanText = textContent.replace(/^[✅❌]\s*/, "");

        return (
          <div key={feature.id || feature.item || index} className="flex items-start gap-2.5">
            {isPro ? (
              <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-medium text-foreground/90 leading-snug">
              {cleanText}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
