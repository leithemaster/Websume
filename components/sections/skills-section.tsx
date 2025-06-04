import { AsciiArt } from "@/components/ascii-art";

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-8 pr-4">
        <div>
          <h3 className="text-green-500 font-bold mb-4">
            Design Skills and Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillBar name="Figma" percentage={75} />
            <SkillBar name="UX/UI Design" percentage={90} />
            <SkillBar name="Wireframing & Prototyping" percentage={85} />
            <SkillBar name="Interaction Design" percentage={80} />
            <SkillBar name="Adobe XD" percentage={90} />
            <SkillBar name="Photoshop & Illustrator" percentage={70} />
            <SkillBar name="User Research & Testing" percentage={70} />
            <SkillBar name="Spline (3D)" percentage={60} />
          </div>
        </div>

        <div>
          <h3 className="text-green-500 font-bold mb-4">
            Development Skills and Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillBar name="JavaScript" percentage={70} />
            <SkillBar name="TypeScript" percentage={75} />
            <SkillBar name="React" percentage={85} />
            <SkillBar name="Git" percentage={70} />
            <SkillBar name="VS Code" percentage={90} />
          </div>
        </div>

        <div>
          <h3 className="text-green-500 font-bold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillBar name="Creative Problem Solving" percentage={90} />
            <SkillBar name="Communication" percentage={85} />
            <SkillBar name="Collaboration" percentage={90} />
            <SkillBar name="Adaptability" percentage={85} />
          </div>
        </div>
      </div>
    </div>
  );

  function SkillBar({
    name,
    percentage,
  }: {
    name: string;
    percentage: number;
  }) {
    return (
      <div className="font-mono text-xs sm:text-sm w-full">
        <div className="flex justify-between mb-1">
          <span className="truncate pr-2 flex-1">{name}</span>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <span className="text-blue-500">[</span>
            <div className="flex-1 relative bg-gray-600 h-4 min-w-0">
              <div
                className="bg-blue-400 h-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-blue-500">]</span>
          </div>
          <div className="relative mt-1">
            <span
              className="absolute text-xs font-medium text-blue-300 transform -translate-x-1/2"
              style={{ left: `calc(${percentage}% + 0.5rem)` }}
            >
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    );
  }
}
