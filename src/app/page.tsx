
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { LinkPreview } from "@/components/ui/link-preview";
// import GitHubIcon from "../../public/assets/images/github.svg"
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Express', 'MongoDB', 'SQL', 'PostGreSQL', 'Prisma', 'REST APIs',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Docker'
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-foreground">
      <main className="container max-w-3xl mx-auto p-8 pt-16 space-y-16">

        <section id="about" className="space-y-4">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Hi, I&apos;m Aman Subudhi</h2>
            <div className="flex items-center gap-4">
              <Link href={'https://github.com/amansubudhi'} rel="noopener noreferrer" target="_blank">
                <span> <svg aria-hidden="true" className="text-2xl text-muted-foreground transition-colors duration-200 hover:text-black" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.5a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34C5.68 17.31 5.03 17 5.03 17c-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0-10-10Z" fill="currentColor"></path>
                </svg></span>
              </Link>
              <Link href={'https://x.com/Amansubudhi1'} rel="noopener noreferrer" target="_blank">
                <span>
                  <svg aria-hidden="true" className="text-2xl text-muted-foreground transition-colors duration-200 hover:text-black" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.795 11.033 20.68 2.5h-3.073l-5.255 6.517L7.69 2.5H1l7.806 10.91L1.47 22.5h3.074l5.705-7.07 5.061 7.07H22l-8.205-11.467Zm-2.38 2.95L9.97 11.964 4.36 4.127h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" fill="currentColor"></path>
                  </svg>
                </span>
              </Link>
              <Link href={'https://www.linkedin.com/in/p-aman-kumar-subudhi-112a55227/'} rel="noopener noreferrer" target="_blank">
                <span>
                  <svg aria-hidden="true" className="text-2xl text-muted-foreground transition-colors duration-200 hover:text-black" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.959 14.219v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792ZM4.421 2.526C2.958 2.526 2 3.486 2 4.749c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224-.026-1.263-.927-2.223-2.392-2.223ZM2.254 21.598h4.278V8.729H2.254v12.869Z" fill="currentColor"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="about text-muted-foreground">
            <ul className="list-disc ml-4">
              <li>I&apos;m a full-stack engineer from India.</li>
              <li>Currently learning Next.js and TypeScript</li>
              <li>Let's talk how we can work together!</li>
            </ul>

          </div>
        </section>

        <section className="skills space-y-6">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 rounded-full">{skill}</Badge>
            ))}
          </div>
        </section>

        <section className="projects space-y-6">
          <h3 className="text-xl font-semibold">Projects</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm max-w-3xl text-left">
              <LinkPreview
                url="https://ui.aceternity.com"
                className="bg-clip-text text-lg font-medium"
              >
                PayTM
              </LinkPreview>{" "}
              wallet app
            </p>
            <p className="text-muted-foreground text-sm text-left">
              <LinkPreview
                url="https://ui.aceternity.com"
                className="bg-clip-text text-lg font-medium"
              >
                Blogspot
              </LinkPreview>{" "}
              blogging app
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}


