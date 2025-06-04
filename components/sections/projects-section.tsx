import { AsciiArt } from "@/components/ascii-art";

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="p-3 border border-primary/20 rounded bg-primary/5">
              <h3 className="text-green-500 font-bold">NexGen at USCIS</h3>
              <pre className="text-xs my-2 text-muted-foreground">
                {`
           +---------------------+
           |  Product & Design   |
           |   Review Sessions   |
           +---------------------+
                     |
     +---------------+----------------+
     |                                |
+-------------+              +-----------------+
|  Frontend   |              |     Backend     |
|  (React)    |              | (Spring Boot)   |
+-------------+              +-----------------+
     |                                |
     |                                |
+-------------+              +-----------------+
|  Feature &  |<------------>|  API & Database |
|  UI Logic   |              | (PostgreSQL)    |
+-------------+              +-----------------+
                     |
                     v
           +---------------------+
           |  Deployment & Infra |
           |   (Docker, GitLab)  |
           +---------------------+
    `}
              </pre>
              <p className="text-sm mb-2">
                As a full stack developer on the NexGen USCIS project, I helped
                implement new features on both the frontend and backend of an
                internal web app. I worked closely with designers and product
                teams to improve the usability and performance of core features,
                provided input on the visual and interaction design, and
                supported the backend by integrating APIs and refining data
                workflows.
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                Technologies: React, TypeScript, Spring Boot, PostgreSQL,
                GitLab, Docker, Jira, Agile (Scrum)
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="p-3 border border-primary/20 rounded bg-primary/5 mb-0">
              <h3 className="text-green-500 font-bold">
                Internal Support Portal for Marines
              </h3>
              <pre className="text-xs my-2 text-muted-foreground">
                {`
           +---------------------+
           |   Research & Stake- |
           |   holder Feedback   |
           +---------------------+
                     |
     +---------------+---------------+
     |                               |
+----------------+         +--------------------+
| Wireframes &   |         | Visual Design & UI |
| User Flows     |         | Components         |
+----------------+         +--------------------+
     |                               |
     |                               |
+----------------+         +--------------------+
| Design Reviews |-------->| Frontend Handoff   |
| & Iteration    |         | & Implementation   |
+----------------+         +--------------------+
                     |
                     v
           +----------------------+
           | Deployed Web App UI  |
           |  (HTML, CSS, Angular)|
           +----------------------+
    `}
              </pre>
              <p className="text-sm mb-2">
                At Geocent, I served as the primary UI/UX designer for a web
                platform used by internal teams. I led the design process from
                early user flows and wireframes to polished mockups, gathered
                feedback from stakeholders, and worked with developers to ensure
                a smooth handoff and accurate implementation of the design.
              </p>
              <p className="text-xs text-muted-foreground mb-2 text-blue-400">
                Technologies: Adobe XD, HTML, CSS, Angular, Jira, Accessibility
                Guidelines (508)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
