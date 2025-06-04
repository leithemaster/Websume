import { AsciiArt } from "@/components/ascii-art";
import { Mail, Phone, MapPin, Linkedin, Github, File } from "lucide-react";

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:NguyenL4@outlook.com"
            className="flex items-center text-sm hover:text-primary font-myFont transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary font-myFont" />
            NguyenL4@outlook.com
          </a>
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-2 text-primary font-myFont" />
            203-258-8312
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary font-myFont" />
            Bridgeport, CT 06606
          </div>
          <a
            href="https://www.linkedin.com/in/krimson//"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-myFont text-sm hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary font-myFont" />
            https://www.linkedin.com/in/krimson/
          </a>
          <a
            href="https://github.com/leithemaster"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-myFont text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary font-myFont" />
            https://github.com/leithemaster
          </a>
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary
            text-green-500 font-myFont transition-colors"
          >
            <File className="h-4 w-4 mr-2 font-myFont text-green-500" />
            Download Resume Here
          </a>
        </div>
      </div>
    </div>
  );
}
