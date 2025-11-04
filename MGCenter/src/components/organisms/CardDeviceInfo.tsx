import { Card } from "../atoms/Card";
import { CardContent } from "../molecules/CardContent";
import { CardHeader } from "../molecules/CardHeader";

export const CardDeviceInfo = () => {
  return (
    <div className="flex gap-2 p-2">
      <Card className="flex flex-col border-2 rounded-xl border-amber-600 w-64 h-48">
        <CardHeader
          title="Dispositivos Totales"
          className="text-black font-semibold"
        />
        <CardContent />
      </Card>
    </div>
  );
};
