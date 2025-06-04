import { AsciiArt } from "@/components/ascii-art";
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison";

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2 font-myFont">
            Liem Nguyen
            <br />
            <span className="text-primary/60 font-myFont">
              Designer/Programmer
            </span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5 font-myFont">
          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <p className="mb-2">
              Hey, I’m Liem. I’m a pretty easygoing guy who enjoys designing
              things that feel good to use. I have a background in full-stack
              development, but design has always been where I feel the most
              comfortable. I like solving problems in ways that actually make
              sense to people.
            </p>
            <p className="mb-2">
              I got started in mobile development, then found myself drawn more
              and more to UX and front-end work. I’ve worked on apps, websites,
              and a bunch of side projects. Through it all, I’ve learned that I
              really enjoy building things that are simple, clean, and
              meaningful.
            </p>
            <p>
              Right now, I’m looking to be part of a team where I can keep
              learning, contribute something real, and build cool stuff with
              good people. When I’m not designing, I’m usually sketching game
              ideas, checking out modern art, or trying to wrangle my ADHD into
              something productive.
            </p>
          </div>
          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-green-500 font-bold mb-2 font-myFont">
              Personal Bio:
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                I’ve always been curious about how things work and how people
                interact with them. That’s what got me into design. I like
                making experiences that feel natural and easy to use. Gaming has
                been a big influence for me too. I’m inspired by how games mix
                interaction, design, and story to create something people really
                connect with. That mindset carries into how I approach
                everything I build.
              </p>
            </div>
          </div>
          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-green-500 font-bold mb-2 font-myFont">
              Quick Facts:
            </h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground font-myFont">
                  Location:
                </span>{" "}
                Bridgeport, Connecticut
              </li>
              <li>
                <span className="text-muted-foreground font-myFont">
                  Education:
                </span>{" "}
                Mobile Development at Full Sail University
              </li>
              <li>
                <span className="text-muted-foreground font-myFont">
                  Specialty:
                </span>{" "}
                Design-Dev bridge, Gaming, Bringing ideas to life, Keeping
                things simple and human.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
