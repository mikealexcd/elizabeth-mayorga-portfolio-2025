import Image from "next/image";
import Link from "next/link";
import ElizabethPortrait from "@/assets/homepage/elizabeth-portrait.png";
import ElizabethMarshmallowAndCoffee from "@/assets/homepage/elizabeth-marshmallow-coffee.jpg";
import KPMGProject from "@/assets/homepage/kpmg-project.jpg";
import GrillHouseProject from "@/assets/homepage/grillhouse-project.jpg";
import BMOProject from "@/assets/homepage/bmo-project.jpg";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-16">
        <div className="font-bold text-xl">
          MAYORGA<span className="text-emerald-500">*</span>
        </div>
        <nav className="flex gap-8">
          <Link
            href="#projects"
            className="hover:text-emerald-500 transition-colors"
          >
            My projects
          </Link>
          <Link
            href="#about"
            className="hover:text-emerald-500 transition-colors"
          >
            About me
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 justify-between items-center mb-24">
        <div className="max-w-3xl">
          <p className="text-gray-600 mb-2">Welcome to my portfolio!</p>
          <h1 className="text-4xl font-bold mb-0">
            Hi! I&apos;m Elizabeth <span className="text-yellow-400">👋</span> —
            a <span className="text-emerald-500">product designer</span>
          </h1>
          <p className="text-4xl font-bold mb-6">
            who&apos;s spent 8+ years crafting thoughtful, accessible
            experiences that make people&apos;s lives easier.
          </p>
          <Link
            href="https://www.linkedin.com/in/elizabeth-mayorga/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Connect with me on LinkedIn{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <Image
            src={ElizabethPortrait.src}
            height={313}
            width={348}
            alt="Elizabeth Mayorga"
            className="rounded-3xl mx-auto"
          />
          <div className="absolute top-60 -left-120 z-10 hidden md:block">
            <svg
              width="503"
              height="96"
              viewBox="0 0 503 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 49C5 61.1835 16.8494 76.4427 25 82C39.3354 91.7741 54.9587 91.6729 69.1068 92.8162C94.7714 94.8901 121.622 92.5184 146.56 86.4482C179.926 78.326 223.317 57.8786 230 22.9779C231.305 16.1629 224 4.97784 215 2.47785C205.365 -0.198573 195.619 9.06511 191.5 12.9779C181.058 22.8978 178.903 42.2596 180 55.9778C182.165 83.042 223.797 90.5918 244.745 86.4482C295.141 76.4797 336.285 41.6952 382.694 21.8055C410.39 9.9358 436.563 6.47785 466.589 6.47785C478.479 6.47785 489.649 7.21658 501.391 8.84734"
                stroke="#30B690"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h2 className="text-3xl font-bold mb-8">My projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="rounded-2xl overflow-hidden border-2 border-gray-500 shadow-md">
            <div className="h-40 md:h-115 relative overflow-hidden">
              <Image
                src={KPMGProject.src}
                width={417}
                height={460}
                alt="KPMG Proposal Generation Bot"
                className="object-cover h-full"
              />
            </div>
            <div className="p-10 bg-blue-900">
              <h3 className="font-bold text-xl mb-1 text-white">
                KPMG - <br />
                Proposal Generation Bot
              </h3>
              <p className="text-sm text-white mb-4">
                I was tasked with leading the design of a new feature for mobile
                and desktop.
              </p>
              <Link href="/projects/kpmg" className="bg-white border border-gray-300 h-5 rounded-full px-4 py-2 text-sm font-bold hover:bg-gray-50 transition-colors shadow-[2px_6px_0px_0px_#000000]">
                READ CASE STUDY
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-2xl overflow-hidden border-2 border-orange-600 shadow-md bg-gradient-to-b from from-black to-orange-600">
            <div className="h-40 md:h-115 relative overflow-hidden">
              <Image
                src={GrillHouseProject.src}
                width={417}
                height={460}
                alt="GrillHouse by Sigma - App Redesign"
                className="object-cover h-full"
              />
            </div>
            <div className="p-10 bg-orange-600">
              <h3 className="font-bold text-xl mb-1 text-white">
                GrillHouse by Sigma - <br />
                App Redesign
              </h3>
              <p className="text-sm text-white mb-4">
                Redesign of a an existing app from a business targeted to
                deliver and pickup fresh cut meats.
              </p>
              <Link href='/projects/grillhouse' className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-bold hover:bg-gray-50 transition-colors shadow-[2px_6px_0px_0px_#000000]">
                READ CASE STUDY
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-2xl overflow-hidden border-2 border-blue-500 shadow-md bg-gradient-to-b from from-white to-blue-700">
            <div className="h-40 md:h-115 relative overflow-hidden">
              <Image
                src={BMOProject.src}
                alt="BMO - US Wire Transfer"
                width={417}
                height={460}
                className="object-cover h-full"
              />
            </div>
            <div className="p-10 bg-blue-700">
              <h3 className="font-bold text-xl mb-1 text-white">
                BMO - <br />
                US Wire Transfer
              </h3>
              <p className="text-sm text-white mb-4">
                New feature introduced for BMO US to allow customers to send
                wire transfers.
              </p>
              <Link href='/projects/bmo-wire-transfers' className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-bold hover:bg-gray-50 transition-colors shadow-[2px_6px_0px_0px_#000000]">
                READ CASE STUDY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">About me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src={ElizabethMarshmallowAndCoffee.src}
              alt="Elizabeth Mayorga enjoying a marshmallow and coffee"
              width={390}
              height={686}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 lg:gap-16">
              <h3 className="text-xl font-bold mb-4 md:flex-1/5 lg:flex-2/12">Hi there!</h3>
              <div className="md:flex-4/5 lg:flex-10/12">
                <p className="mb-4">
                  I&apos;m a product designer with over 8 years of experience.
                  Currently, I&apos;m working as a freelancer with projects around
                  women&apos;s sports and websites for local businesses. I have a
                  Bachelor&apos;s degree in Digital Communications from Humber
                  College, where I fell in love with making technology
                  user-friendly for everyone, especially those who aren&apos;t
                  tech-savvy. Since then I&apos;ve been very passionate about
                  improving user experiences and making technology more accessible
                  and enjoyable for all.
                </p>
                <p className="mb-8">
                  During my spare time, you&apos;ll find me binge-watching tv
                  shows, watching videos on YouTube, playing video games, or
                  hanging out with my cats, who surprisingly love TV as much as I
                  do.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start mb-8 lg:gap-16">
              <h3 className="text-xl font-bold mb-4 md:flex-1/5 lg:flex-2/12">My Skills</h3>
              <div className="grid md:grid-cols-2 md:gap-8 md:flex-4/5 lg:flex-10/12">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> User
                      Empathy
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Product
                      Thinking
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> User
                      Research
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Leadership
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Rapid
                      Prototyping
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Wireframing
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Information
                      Architecture
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Interaction
                      Design
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Design
                      Systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>{" "}
                      Accessibility Standards
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 mt-2 sm:mt-0">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Responsive
                      & Mobile Design
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Workshop
                      Facilitation
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>{" "}
                      Cross-functional Teamwork
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Design
                      Documentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Data-driven
                      Design Decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Agile &
                      Lean UX Methodologies
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Design
                      Tools (e.g., Figma, Adobe Creative Suite, Miro, Notion)
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span> Continuous
                      Learning & Adaptability
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>{" "}
                      Problem-solving & Critical Thinking
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-start lg:gap-16">
              <h3 className="text-xl font-bold mb-4 md:flex-1/5 lg:flex-2/12">Fun Facts</h3>
              <div className="md:gap-8 md:flex-4/5 lg:flex-10/12">
                <ul className="space-y-2">
                  <li className="bg-gray-100 rounded-md px-3 py-2">
                    <span className="font-medium">Favourite TV show:</span>{" "}
                    Avatar, The Last Airbender 🔥💨🌊🪨
                  </li>
                  <li className="bg-gray-100 rounded-md px-3 py-2">
                    <span className="font-medium">Favourite Movie:</span> Lord of
                    the Rings: The Return of the King 👑
                  </li>
                  <li className="bg-gray-100 rounded-md px-3 py-2">
                    <span className="font-medium">Favourite video game:</span> The
                    Legend of Zelda: Breath of the Wild ⚔️
                  </li>
                  <li className="bg-gray-100 rounded-md px-3 py-2">
                    <span className="font-medium">Hogwarts House:</span> Slytherin
                    🐍
                  </li>
                  <li className="bg-gray-100 rounded-md px-3 py-2">
                    <span className="font-medium">Favourite dessert:</span> Mint
                    chip ice cream 🍦
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16 pt-8">
        <p>Elizabeth Mayorga - 2025</p>
      </footer>
    </main>
  );
}
