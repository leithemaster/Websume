import { AsciiArt } from "@/components/ascii-art";

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-green-500 font-bold">
            Full Sail University, Winter Park, FL
          </h3>
          <p className="text-sm">Mobile Development | GPA: 3.2</p>
          <p className="text-xs text-muted-foreground">Graduated: Aug 2018</p>
        </div>
      </div>
    </div>
  );
}
