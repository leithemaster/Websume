import { AsciiArt } from "@/components/ascii-art";

export function SkillsSection() {
  return (
    <div className="space-y-4 space-x-2">
      <AsciiArt art="skills" />

      <div className="space-y-6 pr-4">
        <div>
          <h3 className="text-green-500 font-bold mb-2">
            Design Skills and Tools
          </h3>
          <div className="space-y-2">
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
          <h3 className="text-green-500 font-bold mb-2">
            Development Skills and Tools
          </h3>
          <div className="space-y-2">
            <SkillBar name="JavaScript" percentage={70} />
            <SkillBar name="TypeScript" percentage={75} />
            <SkillBar name="React" percentage={85} />
            <SkillBar name="Git" percentage={70} />
            <SkillBar name="VS Code" percentage={90} />
          </div>
        </div>

        <div>
          <h3 className="text-green-500 font-bold mb-2">Soft Skills</h3>
          <div className="space-y-2">
            <SkillBar name="Creative Problem Solving" percentage={90} />
            <SkillBar name="Communication" percentage={85} />
            <SkillBar name="Collaboration" percentage={90} />
            <SkillBar name="Adaptability" percentage={85} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  );
}
