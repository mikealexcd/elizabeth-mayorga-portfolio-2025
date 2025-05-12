import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/case-study/section-header"
import { ProcessStep } from "@/components/case-study/process-step"
import { InfoSection } from "@/components/case-study/info-card"
import { ButtonLink } from "@/components/case-study/button-link"
import { DeliverableItem } from "@/components/case-study/deliverable-item"
import GrillhouseBanner from "@/assets/grillhouse/grillhouse-banner.jpg"
import Step1Before1 from "@/assets/grillhouse/step-1-before-1.png"
import Step1Before2 from "@/assets/grillhouse/step-1-before-2.png"
import Step1After1 from "@/assets/grillhouse/step-1-after-1.png"
import Step1After2 from "@/assets/grillhouse/step-1-after-2.png"
import Step2Before1 from "@/assets/grillhouse/step-2-before-1.png"
import Step2Before2 from "@/assets/grillhouse/step-2-before-2.png"
import Step2After1 from "@/assets/grillhouse/step-2-after-1.png"
import Step2After2 from "@/assets/grillhouse/step-2-after-2.png"
import Step2After3 from "@/assets/grillhouse/step-2-after-3.png"
import Step2After4 from "@/assets/grillhouse/step-2-after-4.png"
import Step3Before1 from "@/assets/grillhouse/step-3-before-1.png"
import Step3Before2 from "@/assets/grillhouse/step-3-before-2.png"
import Step3Before3 from "@/assets/grillhouse/step-3-before-3.png"
import Step3After1 from "@/assets/grillhouse/step-3-after-1.png"
import Step3After2 from "@/assets/grillhouse/step-3-after-2.png"
import Step3After3 from "@/assets/grillhouse/step-3-after-3.png"
import Step3After4 from "@/assets/grillhouse/step-3-after-4.png"
import Step3After5 from "@/assets/grillhouse/step-3-after-5.png"
import Process21 from "@/assets/grillhouse/process-2-1.png"
import Process22 from "@/assets/grillhouse/process-2-2.png"
import Process23 from "@/assets/grillhouse/process-2-3.png"
import Process24 from "@/assets/grillhouse/process-2-4.png"
import Process31 from "@/assets/grillhouse/process-3-1.png"
import Process32 from "@/assets/grillhouse/process-3-2.png"
import Process33 from "@/assets/grillhouse/process-3-3.png"
import Process34 from "@/assets/grillhouse/process-3-4.png"
import Process41 from "@/assets/grillhouse/process-4-1.png"
import Process42 from "@/assets/grillhouse/process-4-2.png"
import Conclusion from "@/assets/grillhouse/conclusion.jpg"

export default function GrillhouseCaseStudy() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-blue-900">
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
          Back
        </Link>
        <div className="flex gap-8">
          <Link href="/#projects" className="hover:text-blue-900 transition-colors">
            My projects
          </Link>
          <Link href="/#about" className="hover:text-blue-900 transition-colors">
            About me
          </Link>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full">
        <div className="flex justify-center">
          <Image
            alt="Collection of screens for the Grillhouse mobile app"
            src={GrillhouseBanner.src}
            width={3024}
            height={800}
          />
        </div>
      </div>

      {/* Main Content */}

      {/* Overview and Role Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-15">GrillHouse by Sigma - Mobile App Redesign</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <SectionHeader title="OVERVIEW" />
              <p className="text-gray-700 mb-4">
                Grillhouse by Sigma is a B2C e-commerce platform delivering high-quality meat cuts across select cities in Mexico. The objective of this project was to enhance the existing mobile app by addressing critical issues in the delivery and pickup processes, thereby improving the overall user experience and operational efficiency.
              </p>
            </div>
            <div>
              <SectionHeader title="MY ROLE" />
              <p className="text-gray-700 mb-4">Led the end-to-end redesign process, from user research to high-fidelity prototyping</p>
              <SectionHeader title="DELIVERABLES" className="mt-8" />
              <ul className="grid md:grid-cols-2">
                <DeliverableItem text="User Personas" />
                <DeliverableItem text="Competitor Analysis" />
                <DeliverableItem text="Information Architecture" />
                <DeliverableItem text="Wireframes" />
                <DeliverableItem text="Style Guide" />
                <DeliverableItem text="UI Screens - English and Spanish" />
                <DeliverableItem text="Prototype" />
                <DeliverableItem text="Development Specs" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges and Solutions Section */}
      <InfoSection title="What were the main problems?" subtitle="CHALLENGES AND SOLUTIONS" bgColor="bg-gray-100">
        <p>
          My team and I identified several user experience issues on the existing app that hindered customer satisfaction and operational efficiency. These are some of the most relevant issues that we found that impacted the overall app redesign the most.
        </p>
        {/* Step1 */}
        <h2 className="font-bold mt-6 mb-2">⏱️ 1. Location & Store Assignment Challenges</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-between mb-10">
          <div className="md:w-1/3">
            <div>Original Issue (Before):
              <ul>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  The original app would assign a specific store within Mexico to all users, regardless of where the user was located within the country. Also, changing the assigned store on the app was not an intuitive process. If they proceeded to order in the incorrect location, they would have to reorder through the correct store.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-10 md:w-2/3">
            <Image
              alt="Original issue with the store assignment"
              src={Step1Before1}
              width={120}
              height={244}
              className="rounded-lg"
            />
            <Image
              alt="Original issue with the store assignment"
              src={Step1Before2}
              width={120}
              height={244}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
          <div className="md:w-1/3">
            <div>Solution (After):
              <ul>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  Users get assigned to the correct store as per their ZIP code which they introduce during the onboarding process. If they were to change it at any point, they could do so by clicking the current ZIP code field that is located as a fixed position in the header. The store would then change accordingly if needed.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:w-2/3">
            <Image
              alt="Solution for store assignment"
              src={Step1After1}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Solution for store assignment"
              src={Step1After2}
              width={150}
              height={323}
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Step 2 */}
        <h2 className="font-bold mt-6 mb-2">🛒 2. Checkout & Order Tracking Inefficiencies</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-between mb-10">
          <div className="md:w-1/3">
            <div>Original Issue (Before):
              <ul>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  Customers couldn't easily access tracking information post-purchase.
                  The checkout process lacked visual cues and progress indicators.
                  Users had to re-enter delivery and payment details for each order.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-10 md:w-2/3">
            <Image
              alt="Checkout inefficiencies"
              src={Step2Before1}
              width={120}
              height={244}
              className="rounded-lg"
            />
            <Image
              alt="Checkout inefficiencies"
              src={Step2Before2}
              width={120}
              height={244}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
          <div className="md:w-1/3">
            <div>Solution (After):
              <ul>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  Implemented a dedicated order tracking section accessible from the main menu, offering real-time updates on order status.
                  Introduced a progress bar in the checkout process to provide visual cues.
                  Additionally, enabled users to save multiple addresses and payment methods for a streamlined checkout process.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:w-2/3">
            <Image
              alt="Improved checkout process"
              src={Step2After1}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Improved checkout process"
              src={Step2After2}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Improved checkout process"
              src={Step2After3}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Improved checkout process"
              src={Step2After4}
              width={150}
              height={323}
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Step 3 */}
        <h2 className="font-bold mt-6 mb-2">🌟 3. Feature Discoverability & User Engagement</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-between mb-10">
          <div className="md:w-1/3">
            <div>Original Issue (Before):
              <ul>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  Additional app features were hidden and not easily discoverable.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  Users were not engaging with the loyalty program due to its lack of visibility.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-10 md:w-2/3">
            <Image
              alt="Feature discoverability issues"
              src={Step3Before1}
              width={120}
              height={244}
              className="rounded-lg"
            />
            <Image
              alt="Feature discoverability issues"
              src={Step3Before2}
              width={120}
              height={244}
              className="rounded-lg"
            />
            <Image
              alt="Feature discoverability issues"
              src={Step3Before3}
              width={120}
              height={244}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
          <div className="md:w-1/3">
            <div>Solution (After):
              <ul>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  Redesigned the navigation to highlight additional features such as  the recipes and exploring meat cut options, ensuring they are easily accessible to users.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2">•</span>
                  Integrated the loyalty program into the navigation and provided clear information on rewards and how to earn them.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:w-2/3">
            <Image
              alt="Enhanced feature discoverability"
              src={Step3After1}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Enhanced feature discoverability"
              src={Step3After2}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Enhanced feature discoverability"
              src={Step3After3}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Enhanced feature discoverability"
              src={Step3After4}
              width={150}
              height={323}
              className="rounded-lg"
            />
            <Image
              alt="Enhanced feature discoverability"
              src={Step3After5}
              width={150}
              height={323}
              className="rounded-lg"
            />
          </div>
        </div>

      </InfoSection>

      {/* Results Section */}
      <InfoSection title="What were the results?" subtitle="OUTCOME" bgColor="bg-white">
        <p className="mb-6">
          The redesign of the Grillhouse mobile app led to significant improvements in user experience and stakeholder engagement:
        </p>
        <li className="flex items-start mb-2">
          <span className="mr-2">•</span>
          Enhanced User Experience: The introduction of ZIP code-based store assignments and streamlined checkout processes reduced user friction, leading to a more intuitive shopping experience.
        </li>
        <li className="flex items-start mb-2">
          <span className="mr-2">•</span>
          Improved Feature Discoverability: By reorganizing the app's navigation and highlighting additional features like recipes and the loyalty program, user engagement with these sections increased noticeably.
        </li>
        <li className="flex items-start mb-6">
          <span className="mr-2">•</span>
          Positive Stakeholder Feedback: The design solutions received commendations from both the client and internal teams, serving as a blueprint for future enhancements and setting a new standard for user-centric design within the organization.
        </li>

        <p>
          These outcomes underscore the value of thoughtful design in addressing user pain points and enhancing overall satisfaction.
        </p>
      </InfoSection>

      {/* Process Section */}
      <InfoSection title="What are my steps while I design?" subtitle="THE PROCESS" bgColor="bg-gray-100">
        <div className="mt-8">
          <ProcessStep number={1} title="Discovery & Research" bgColor="bg-orange-600">
            <p>
              Conducted interviews and surveys with existing users to understand their pain points and expectations. This qualitative research revealed key issues in the ordering and delivery processes.
            </p>
          </ProcessStep>
          <ProcessStep number={2} title="Competitive Analysis & User Personas" bgColor="bg-orange-600">
            <p className="mb-4">
              Analyzed similar e-commerce and food delivery apps to identify best practices and areas for improvement. With the help of our research process we also identified our two types of user personas.
            </p>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
              <Image
                alt="Process step 2-1"
                src={Process21}
                width={266}
                height={189}
                className="rounded-lg"
              />
              <Image
                alt="Process step 2-2"
                src={Process22}
                width={266}
                height={189}
                className="rounded-lg"
              />
              <Image
                alt="Process step 2-3"
                src={Process23}
                width={266}
                height={189}
                className="rounded-lg"
              />
              <Image
                alt="Process step 2-4"
                src={Process24}
                width={266}
                height={189}
                className="rounded-lg"
              />
            </div>
          </ProcessStep>
          <ProcessStep number={3} title="Ideation" bgColor="bg-orange-600">
            <p className="mb-4">
              Developed wireframes focusing on intuitive navigation, streamlined checkout, and prominent feature placement. I presented this to the key stakeholders involved to make sure we were on the right track.
            </p>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
              <Image
                alt="Process step 3-1"
                src={Process31}
                width={151}
                height={203}
                className="rounded-lg"
              />
              <Image
                alt="Process step 3-2"
                src={Process32}
                width={217}
                height={220}
                className="rounded-lg"
              />
              <Image
                alt="Process step 3-3"
                src={Process33}
                width={423}
                height={169}
                className="rounded-lg"
              />
              <Image
                alt="Process step 3-4"
                src={Process34}
                width={189}
                height={198}
                className="rounded-lg"
              />
            </div>
          </ProcessStep>
          <ProcessStep number={4} title="Wireframing & Prototyping" bgColor="bg-orange-600">
            <p className="mb-4">
              Developed wireframes focusing on intuitive navigation, streamlined checkout, and prominent feature placement. I presented this to the key stakeholders involved to make sure we were on the right track.

            </p>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
              <Image
                alt="Process step 4-1"
                src={Process41}
                width={538}
                height={146}
                className="rounded-lg"
              />
              <Image
                alt="Process step 4-2"
                src={Process42}
                width={374}
                height={146}
                className="rounded-lg"
              />
            </div>
          </ProcessStep>
          <ProcessStep number={5} title="Design Handoff" bgColor="bg-orange-600">
            <p>
              Prepared comprehensive design documentation and assets for the development team to ensure a smooth implementation process.
            </p>
          </ProcessStep>
        </div>
      </InfoSection>

      {/* Conclusion Section */}
      <InfoSection title="What were my final thoughts and learning experiences?" subtitle="CONCLUSION" bgColor="bg-white" media={{ src: Conclusion, alt: "Illustration of the conclusion", width: 300, height: 500 }} transparentMedia>
        <p className="text-gray-700 mb-4">
          Redesigning the Grillhouse mobile app was a pivotal experience in my early design career, offering invaluable lessons in cross-functional collaboration and the nuances of design handoff. Working closely with developers, I recognized the importance of clear communication and meticulous documentation to bridge the gap between design and development.
        </p>
        <p className="text-gray-700 mb-4">
          To facilitate this, we utilized Zeplin to share detailed design specifications efficiently. Recognizing potential challenges, we also provided supplementary files outlining common specifications, ensuring developers had consistent references for elements like spacing, shadows, and border radii. This proactive approach minimized ambiguities and streamlined the development process.
        </p>

        <h3 className="font-bold mt-6 mb-2">Key Takeaways:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>
              <strong>Effective Communication is Crucial:</strong> Clear, organized documentation and open channels of communication are essential for successful collaboration between designers and developers.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>
              <strong>Attention to Detail Enhances Consistency:</strong> Providing comprehensive specifications ensures design consistency and reduces the likelihood of implementation discrepancies.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>
              <strong>Proactive Problem-Solving:</strong> Anticipating potential challenges and addressing them early fosters a smoother workflow and strengthens team collaboration.
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
          <ButtonLink className="bg-orange-600 text-white hover:bg-orange-500" href="/projects/bmo-wire-transfers">Next: BMO Wire Transfers</ButtonLink>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-lg py-6 md:py-15 ">
        <p>Elizabeth Mayorga - 2025</p>
      </footer>
    </main >
  )
}
