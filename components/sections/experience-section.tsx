import { AsciiArt } from "@/components/ascii-art";

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="font-bold font-myFont text-green-500">
              Full Stack Developer
            </h3>
            <p className="text-xs text-muted-foreground text-blue-400 font-myFont">
              Sev1tech, Arlington, VA | Feb 2022 - August 2024
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4 font-myFont">
            <li>
              Built internal web tools and dashboards using React, TypeScript,
              and Java (Spring Boot), improving team workflows and surfacing key
              metrics.
            </li>
            <li>
              Partnered with UX, product, and QA teams to deliver user-centric
              features on time in fast-paced agile sprints.
            </li>
            <li>
              Led performance optimization efforts, reducing load times by up to
              30% through code refactoring and efficient API integration.
            </li>
            <li>
              Improved the user interface to enhance usability and deliver a
              smoother, more intuitive user experience.
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="font-bold font-myFont text-green-500">
              UI/UX Designer & Frontend Developer
            </h3>
            <p className="text-xs text-muted-foreground text-blue-400 font-myFont">
              Geocent, Arlington, VA | May 2019 - February 2022
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4 font-myFont">
            <li>
              Created wireframes, prototypes, and high-fidelity mockups for web
              applications used by government clients.
            </li>
            <li>
              Conducted user research and usability testing to inform design
              decisions and improve task completion rates.
            </li>
            <li>
              Worked closely with developers to ensure design handoffs were
              clean, consistent, and technically feasible.
            </li>
            <li>
              Helped implement accessibility best practices and performed audits
              to align with federal 508 compliance.
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="font-bold font-myFont text-green-500">
              Full Stack Developer
            </h3>
            <p className="text-xs text-muted-foreground text-blue-400 font-myFont">
              Fund Diet, Winter Park, FL | June 2018 - May 2019
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4 font-myFont">
            <li>
              Developed and maintained hybrid and native mobile apps using React
              Native and the MVVM pattern for both iOS and Android.
            </li>
            <li>
              Collaborated with design and product teams to turn ideas into
              clean, responsive interfaces and smooth user experiences.
            </li>
            <li>
              Managed source control with GitHub and used JIRA to track progress
              in agile sprints, delivering features on schedule.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
