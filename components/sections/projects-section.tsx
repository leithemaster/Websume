import { AsciiArt } from "@/components/ascii-art";

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="p-3 border border-primary/20 rounded bg-primary/5 flex flex-col h-full">
              <h3 className="text-green-500 font-bold">NexGen at USCIS</h3>
              <div className="flex-1 flex flex-col justify-center">
                {/* Hide on mobile and tablet, show on lg and up */}
                <pre className="hidden lg:block text-xs my-2 text-muted-foreground text-center">
                  {`
+------------------------+   +------------------------+   +------------------------+
|     FRONTEND (React)   |   |     BACKEND (Spring)   |   |      COLLABORATION     |
+------------------------+   +------------------------+   +------------------------+
| Built UI components    |   | API integration        |   | Design review sessions |
| Feature enhancements   |   | PostgreSQL queries     |   | UX feedback loops      |
| Hook-based logic       |   | Business logic updates |   | Agile sprint planning  |
+------------------------+   +------------------------+   +------------------------+
    `}
                </pre>
                {/* Show on tablet only (md to lg) */}
                <pre className="hidden md:block lg:hidden text-xs my-2 text-muted-foreground text-center">
                  {`
+------------------------+   +------------------------+
|     FRONTEND (React)   |   |     BACKEND (Spring)   |
+------------------------+   +------------------------+
| Built UI components    |   | API integration        |
| Feature enhancements   |   | PostgreSQL queries     |
| Hook-based logic       |   | Business logic updates |
+------------------------+   +------------------------+ 
+------------------------+
|      COLLABORATION     |
+------------------------+
| Design review sessions |
| UX feedback loops      |
| Agile sprint planning  |
+------------------------+
    `}
                </pre>
                {/* Show on mobile only */}
                <div className="block md:hidden text-xs my-2 text-muted-foreground">
                  <div className="space-y-2">
                    <div className="text-center font-semibold">Key Areas:</div>
                    <div>• Frontend (React) - UI components & features</div>
                    <div>• Backend (Spring) - API integration & PostgreSQL</div>
                    <div>• Collaboration - Design reviews & Agile planning</div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-sm mb-2">
                  As a full stack developer on the NexGen USCIS project, I
                  helped implement new features on both the frontend and backend
                  of an internal web app. I worked closely with designers and
                  product teams to improve the usability and performance of core
                  features, provided input on the visual and interaction design,
                  and supported the backend by integrating APIs and refining
                  data workflows.
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  Technologies: React, TypeScript, Spring Boot, PostgreSQL,
                  GitLab, Docker, Jira, Agile (Scrum)
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="p-3 border border-primary/20 rounded bg-primary/5 mb-0 flex flex-col h-full">
              <h3 className="text-green-500 font-bold">
                Internal Support Portal for Marines
              </h3>
              <div className="flex-1 flex flex-col justify-center">
                {/* Hide on mobile and tablet, show on lg and up */}
                <pre className="hidden lg:block text-xs my-2 text-muted-foreground text-center">
                  {`
+-------------------------+   +---------------------------+   +------------------------+
|         DESIGN          |   |       IMPLEMENTATION      |   |     COLLABORATION      |
+-------------------------+   +---------------------------+   +------------------------+
| User flows & wireframes |   | HTML/CSS layout           |   | Feedback sessions      |
| High-fidelity mockups   |   | Angular component styling |   | Cross-team iteration   |
| UX decisions & testing  |   | Accessibility review      |   | Stakeholder approval   |
+-------------------------+   +---------------------------+   +------------------------+
    `}
                </pre>
                {/* Show on tablet only (md to lg) */}
                <pre className="hidden md:block lg:hidden text-xs my-2 text-muted-foreground text-center">
                  {`
+-------------------------+   +---------------------------+
|         DESIGN          |   |       IMPLEMENTATION      |
+-------------------------+   +---------------------------+
| User flows & wireframes |   | HTML/CSS layout           |
| High-fidelity mockups   |   | Angular component styling |
| UX decisions & testing  |   | Accessibility review      |
+-------------------------+   +---------------------------+
+------------------------+
|     COLLABORATION      |
+------------------------+
| Feedback sessions      |
| Cross-team iteration   |
| Stakeholder approval   |
+------------------------+
    `}
                </pre>
                {/* Show on mobile only */}
                <div className="block md:hidden text-xs my-2 text-muted-foreground">
                  <div className="space-y-2">
                    <div className="text-center font-semibold">Key Areas:</div>
                    <div>• Design - User flows, wireframes & mockups</div>
                    <div>• Implementation - HTML/CSS & Angular styling</div>
                    <div>
                      • Collaboration - Stakeholder feedback & iteration
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-sm mb-2">
                  At Geocent, I served as the primary UI/UX designer for a web
                  platform used by internal teams. I led the design process from
                  early user flows and wireframes to polished mockups, gathered
                  feedback from stakeholders, and worked with developers to
                  ensure a smooth handoff and accurate implementation of the
                  design.
                </p>
                <p className="text-xs text-muted-foreground mb-2 text-blue-400">
                  Technologies: Adobe XD, HTML, CSS, Angular, Jira,
                  Accessibility Guidelines (508)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
