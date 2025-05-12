import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/case-study/section-header"
import { ProcessStep } from "@/components/case-study/process-step"
import { InfoSection } from "@/components/case-study/info-card"
import { ButtonLink } from "@/components/case-study/button-link"
import { DeliverableItem } from "@/components/case-study/deliverable-item"
import KPMGBanner from "@/assets/kpmg/kpmg-banner.jpg"
import KPMGChallenge from "@/assets/kpmg/kpmg-challenge.png"
import KPMGConclusion from "@/assets/kpmg/kpmg-conclusion.jpg"
import KPMGMockups from "@/assets/kpmg/kpmg-mockups-desktop.png"
import KPMGMockupsMobile from "@/assets/kpmg/kpmg-mockups-mobile.png"

export default function KPMGCaseStudy() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to homepage
        </Link>
      </div>

      {/* Banner */}
      <div className="w-full">
        <div className="flex justify-center">
          <Image
            alt="KPMG Proposal Generation Bot on desktop and mobile devices"
            src={KPMGBanner.src}
            width={3024}
            height={800}
          />
        </div>
      </div>

      {/* Main Content */}

      {/* Overview and Role Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-15">KPMG - Proposal Generation Bot</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <SectionHeader title="OVERVIEW" />
              <p className="text-gray-700 mb-4 ">
                In response to the need for efficient and consistent proposal development, I led the design of a
                generative AI-powered bot that streamlines the proposal creation process. This tool assists KPMG
                consultants in drafting client proposals by leveraging a database of proposals while ensuring compliance
                with the company's standards.
              </p>
              <ButtonLink href="#prototype" variant="secondary" className="shadow-[2px_6px_0px_0px_#000000] mt-4">
                CHECK OUT THE MOCKUPS
              </ButtonLink>
            </div>
            <div>
              <SectionHeader title="MY ROLE" />
              <p className="text-gray-700 mb-2">Led the design of this bot while collaborating with key stakeholders.</p>
              <SectionHeader title="DELIVERABLES" className="mt-8" />
              <ul>
                <DeliverableItem text="User Journey" />
                <DeliverableItem text="Desktop and Mobile Designs" />
                <DeliverableItem text="Light and Dark Mode UI" />
                <DeliverableItem text="Prototype" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <InfoSection title="What was the challenge?" subtitle="PROBLEM" bgColor="bg-gray-100" media={{ src: KPMGChallenge.src, alt: "", width: 314, height: 208 }} transparentMedia>
        <p className="text-gray-700">
          KPMG consultants often faced challenges in rapidly producing high-quality, tailored proposals. The
          manual process was time-consuming and prone to inconsistencies, impacting both efficiency and client
          satisfaction.
        </p>
      </InfoSection>

      {/* Solution Section */}
      <InfoSection title="How did I approach this?" subtitle="SOLUTION" bgColor="bg-white">
        <p>
          I developed a solution that leverages documents provided by consultants and compares them against a large database of existing proposals to generate new ones that meet KPMG's quality standards. The system incorporates structured data while aligning with KPMG’s branding and compliance requirements. To ensure data security, it operates entirely within KPMG’s protected environment. I also followed their existing design system components, introducing enhancements based on recent development updates.
        </p>
      </InfoSection>

      {/* Results Section */}
      <InfoSection title="What were the results?" subtitle="OUTCOME" bgColor="bg-gray-100">
        <p>
          While I was told from the beginning that my contract would be short, just long enough to gather questions and early feedback from the team, the initial reception was highly positive. The bot was recognized for its potential to streamline proposal creation and improve consistency. I was glad to learn that development had begun shortly after my engagement ended. This experience reinforced the importance of aligning design solutions with both user needs and organizational goals, and I look forward to seeing how the product evolves over time.
        </p>
      </InfoSection>

      {/* Process Section */}
      <InfoSection title="What were my steps while designing?" subtitle="THE PROCESS" bgColor="bg-white">
        <div className="mt-8">
          <ProcessStep number={1} title="Discovery & Research">
            <p>
              To better understand the workflows and challenges involved in creating client proposals, I met with the team to explore improvements in the proposal process. These conversations revealed key pain points, such as time-consuming manual drafting and inconsistencies in formatting. This context helped shape a solution focused on streamlining the experience while ensuring consistency and alignment with the company's standards.
            </p>
          </ProcessStep>
          <ProcessStep number={2} title="Defining the Problem">
            <p>
              The insights gathered highlighted a need for a streamlined, consistent, and efficient method for
              generating client proposals that adheres to KPMG's quality standards. How might we
              enable KPMG consultants to the perfect proposal, with tailored client information in a fraction of the time
              without compromising on quality or brand standards?"
            </p>
          </ProcessStep>
          <ProcessStep number={3} title="Ideation & Concept Development">
            <p>
              Collaborating with cross-functional teams, I brainstormed solutions that leverage generative AI to
              automate proposal drafting. We conceptualized a custom integration into KPMG's internal platform, capable
              of generating proposal drafts based on user inputs.
            </p>
          </ProcessStep>
          <ProcessStep number={4} title="Wireframing & Prototyping">
            <p>
              Using Figma, I created wireframes and interactive prototypes of the chatbot interface, focusing on
              intuitive user flows and compliance with KPMG's design guidelines. These prototypes facilitated early
              feedback and iterative improvements.
            </p>
          </ProcessStep>
          <ProcessStep number={5} title="Design Handoff & Documentation">
            <p>
              Although my tenure concluded before the complete implementation and testing phases, I ensured a smooth transition
              by providing comprehensive design documentation. This included annotated wireframes, user flow diagrams,
              and interaction guidelines to support the development team in bringing the solution to fruition.
            </p>
          </ProcessStep>
        </div>
      </InfoSection>

      {/* Prototype Section */}

      <InfoSection title="Explore final screens for desktop and mobile" subtitle="MOCKUPS - PROTOTYPE COMING SOON" bgColor="bg-gray-600" id="prototype" className="text-white">
        <div className="w-full mt-8">
          <Image
            alt="KPMG Proposal Generation Bot on desktop"
            src={KPMGMockups.src}
            width={3024}
            height={800}
            className="mb-4"
          />
          <Image
            alt="KPMG Proposal Generation Bot on mobile devices"
            src={KPMGMockupsMobile.src}
            width={3024}
            height={800}
          />
        </div>
      </InfoSection>

      {/* Conclusion Section */}
      <InfoSection title="What were my final thoughts and learning experiences?" subtitle="CONCLUSION" bgColor="bg-white" media={{ src: KPMGConclusion, alt: "", width: 325, height: 514 }} transparentMedia>
        <p className="text-gray-700 mb-4">
          Collaborating with KPMG on this project provided a valuable opportunity to address complex user
          experience challenges within a large-scale enterprise environment. Through a user-centered design
          approach and close collaboration with stakeholders, I aimed at enhancing usability, improving
          navigation, and increasing engagement across the platform.
        </p>

        <h3 className="font-bold mt-6 mb-2">Key Takeaways:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-emerald-500 mr-2">•</span>
            <span>
              <strong>Stakeholder Collaboration:</strong> Engaging with cross-functional teams early in the design
              process ensured alignment with business objectives.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-500 mr-2">•</span>
            <span>
              <strong>Scalable Design Systems:</strong> Implementing a consistent design language facilitated
              scalability and maintainability across various components of the platform.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-500 mr-2">•</span>
            <span>
              <strong>User-Centered Approach:</strong> Keeping the end-user at the center was fundamental in
              creating intuitive and accessible interfaces that align with KPMG's standards.
            </span>
          </li>
        </ul>

        <p className="mt-6 text-gray-700">
          This experience reinforced the importance of adaptability, clear communication, and a deep understanding
          of user needs in delivering effective design solutions within complex organizational structures.
        </p>
      </InfoSection>

      {/* Navigation Footer */}
      <div className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-8">
          <ButtonLink href="/" variant="secondary">
            Back to Homepage
          </ButtonLink>
          <ButtonLink href="/projects/grillhouse">Next: GrillHouse by Sigma</ButtonLink>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-lg py-6 md:py-15 ">
        <p>Elizabeth Mayorga - 2025</p>
      </footer>
    </main >
  )
}
