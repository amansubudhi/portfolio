
import { Badge } from "@/components/ui/badge"
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Express', 'MongoDB', 'SQL', 'PostgreSQL', 'Prisma', 'REST APIs',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Docker'
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-foreground">

      <main className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <section id="about">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image src="/assets/images/Profile.jpg" alt="Profile" height={96} width={96}
                  className="object-cover" />
              </div>
              <h1 className="text-4xl font-serif">Aman Subudhi</h1>
              <h2 className="text-xl text-gray-600 mb-4">Full-Stack Engineer</h2>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Love building slick, responsive websites from the ground up, crafting seamless user experiences, and engineering rock-solid backends that power it all.              </p>

              <div className="flex gap-6 items-center">
                <a href="https://github.com/amansubudhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icons/github.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
                <a href="https://www.linkedin.com/in/p-aman-kumar-subudhi-112a55227/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icons/linkedin.svg"
                    alt="Linkedin"
                    className="w-7 h-7"
                  />
                </a>
                <a href="https://x.com/Amansubudhi1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icons/x.svg"
                    alt="X"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs py-1 px-3 rounded-full bg-slate-200">{skill}</Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex flex-col lg:items-center lg:flex-row lg:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-gray-600 h-2 w-2"></div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-md max-w-3xl text-left">
                        <LinkPreview
                          url="https://zenpay.amansubudhi.tech"
                          className="bg-clip-text text-md font-medium"
                        >
                          Zenpay
                        </LinkPreview>{" "}
                        - A full-stack wallet app built with Next.js, TypeScript & Prisma
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end lg:justify-normal">
                    <a href="https://github.com/amansubudhi/zenpay"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/icons/github.svg"
                        alt="GitHub"
                        className="w-6 h-6"
                      />
                    </a>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}


