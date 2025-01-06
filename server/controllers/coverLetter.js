const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const apiKey = process.env.GOOGLE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 1,
  topP: 0.9,
  topK: 30,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const coverLetter = async (req, res) => {
  const { resumeText, jobDescription } = req.body;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "generate a cover letter from below Job description and resume \n\nresume : \"SANJAYSUTHAR (519)-818-1726|suthar73@uwindsor.ca |linkedin|github|Portfolio TECHNICALSKILLS Languages: Java, Python, JavaScript Web Development: HTML, CSS, JavaScript, React.js, Express.js, Node.js, REST API Database Technologies: MySQL, MongoDB, SQlite, PostgreSQL Cloud & Deployment:: AWS EC2, AWS S3 Frameworks :: Bootstrap, Material UI, Tailwind Fundamental Concepts :: OOP, DBMS, Data Structures & Algorithms Methodologies :: SDLC (Agile, Scrum) Version Control :: Git, GitHub EDUCATION University of WindsorWindsor, ON Master of Applied ComputingMay 2024 – Present University of MumbaiMumbai, India Bachelor of Engineering Information Technology|CGPI: 8.34/10Aug 2019 – May 2023 EXPERIENCE Web Development Intern|HTML, CSS, JavaScript, MERNApr 2023 – May 2023 CodeClauseMumbai, India • Designed a website exhibiting competency in web development tools as well as problem-solving, time management, and testing/debugging abilities • Emphasized a user-centered design approach, and stayed current with latest web development trends and technologies PERSONALPROJECTS FriendsVault|AWS S3, EC2, React.js, Node.js, Express.js, MongoDB, Redux Toolkit, Material UISept 2024 Live ProjectGithub • Developed a social media platform where users can sign up, log in, post images or text, add friends, and view others’ profile pages • Stored images in AWS S3 buckets for efficient management, and hosted the platform on AWS EC2, ensuring scalable and reliable performance • Built a responsive social media app using the MERN stack for seamless user interaction • Efficiently handled global state management with Redux Toolkit, enabling smooth data flow and improved performance • Integrated Multer for handling media uploads, JWT for authentication, and Formik for form validation • Built profile pages where users can view posts and activities of friends, enhancing the social experience Etherfunds|HTML, CSS, Javascript, SolidityMay 2023 Github • Developed ”Etherfunds”, a DAPP utilizing Blockchain technology to eliminate middlemen and enhance transparency, trust, and security in crowdfunding processes • Organized all information regarding fundraisers, contributions, withdrawals, and funds to be visible on decentralized Blockchain Network, ensuring transparency and anti-fraudulence throughout entire process • Ensured immutable transactions using Blockchain, preventing any tampering or alterations, thus enhancing security and trust in the crowdfunding process • Enabled on-time donations by leveraging Blockchain’s efficiency, reducing the time it takes to deliver funds to recipients from months to mere moments LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Volunteer Work at UCOE College’s VYRO EventSept 2022 Universal College of EngineeringMumbai, India • Volunteered at the VYRO major event, providing logistical support and managing attendee registration Chess Competition at UCOE CollegeSept 2021 Universal College of EngineeringMumbai, India • Achieved 4th place in competitive chess tournament at college, demonstrating proficiency in game and strategic thinking skills LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Research Paper – International Journal of All Research Education & Scientific MethodsApr 2023 View PaperCertificate Published research paper titled ”Fruit and Vegetable Classification Using CNN” in ”International Journal of All Research Education Scientific Methods,” demonstrating expertise in field and contributing to research advancement in computer vision and machine learning CERTIFICATIONS The Complete 2023 Web Development BootcampCertificateMay 2023 Selenium Essential TrainingCertificateMay 2024 React: Creating and Hosting a FullStack SiteCertificateSept 2024 HOBBIES Chess|Cricket|Teaching|Stock Trading\"\n\nJob description: \"Alquemy Search & Consulting Share Show more options Full Stack Engineer (Java, Springboot, React, Node) Vancouver, BC · Reposted 2 weeks ago · Over 100 applicants CA$70/hr - CA$75/hr Hybrid Matches your job preferences, workplace type is Hybrid. Contract Matches your job preferences, job type is Contract. 5 of 10 skills match: React.js, Java, JavaScript, Full-Stack Development, MongoDB 5 of 10 required skills are found on your profile Easy Apply Save Save Full Stack Engineer (Java, Springboot, React, Node) at Alquemy Search & Consulting How your profile and resume fit this job Get AI-powered advice on this job and more exclusive features with Premium. Reactivate Premium Tailor my resume to this job Am I a good fit for this job? How can I best position myself for this job? Meet the hiring team Matt Munro Matt Munro is verified 2nd Sr. I.T. Recruiter at Alquemy Search & Consulting Job poster · 1 mutual connection Message About the job Full Stack Engineer (Java, Springboot, React & Node) 70% emphasis on the Front End and 30% emphasis on the Back End 12 month contract opportunity, expected to extend Hybrid work environment - 3 days per week in the Vancouver office Desired skills & experience: Experience with current versions of Java and Java Spring Boot framework Experience with restful API design and development Experience with SQL and NoSQL databases Server-side Node.js experience Seeking VERY technical engineers Modern JavaScript concepts such as async/await, dynamic imports, destructuring, and immutability Write world-class code, perform code reviews, refactor and optimize the code, write tests Create quick proof-of-concept prototypes Front-end focused development while also contributing to backend solutions Implement, maintain and evolve cloud-based products and services including the look and feel of enterprise level web applications Experience with React and the tools used in the wider React ecosystem including Node.js, Webpack, NPM, Yarn, PNPM, etc. (Knowledge or experienced with Module Federation and micro front-end concepts is a plus) An excellent understanding of fundamental React concepts like class + functional components, hooks, performance optimization, composition techniques and the React component lifecycle Production level experience in AWS, Azure, GCP or other clouds, MongoDB, micro-services architecture, service oriented architecture, containerization, and orchestration (Docker and Kubernetes etc) Large enterprise experience $70 - $75 per hour for an INC consultant If you're interested, please apply with resume If you're a strong fit, I will be in contact quickly with additional details and next steps Best regards, Job search faster with Premium Access company insights like strategic priorities, headcount trends, and more Tanmay and millions of other members use Premium Reactivate Premium: 50% Off Cancel anytime, for any reason. About the company Alquemy Search & Consulting 62,256 followers Follow IT Services and IT Consulting 51-200 employees 31 on LinkedIn Alquemy challenges traditional thinking and drives innovation through expert delivery of IT consultants, contractors and permanent staff in the areas of IT operations, software development, security, infrastructure, cloud technologies, and IT transformation. Our team creates measurable business value to help your organization gain a competitive edge. Alquemy has grown quickly since opening our doors; today Alquemy operates across Canada and is actively working with the top contract and full-time talent across North America. The IT staffing / contingent industry is becoming increasingly plagued by inexperience, misrepresentation, and an increased focus on high volume and low quality; leaving many organizations frustrated with the state of the industry. Alquemy seeks to reinvigorate the industry by bringing quality, transparency, integrity, and accuracy back to staffing representation. Our proven systems and process are designed to deliver the highest quality candidates and build long lasting partnerships with our clients. Decades of experience has taught us what to look for and what to ignore. By conducting thorough research on the complete market of passive candidates including talent data mining, sourcing, talent attraction, and recruitment; Alquemy provides you with the ability to make the best decision from the best talent in the marketplace. … show more Show more\"\n\nGuidelines:\n\n1. Include the relevant addresses\nWhen writing a cover letter, it's essential you include the recipient's contact details. To do this, include the recipient's full name, job title, the company's name, address, city or province [only as much that provided in JD dont leave blank for me ] for example: the above JD only written Vancouver, BC so that the address. Lastly, proofread the addresses to ensure you spelled all details correctly.\n2.Choose the right salutation\nThe salutation sets the tone for your cover letter, making it an essential element. Choosing the right salutation can demonstrate professionalism to your recipient. When writing a formal letter, the best approach is to address them by their last name. For example, you may say \"Dear Mr. Blur\" or \"Dear Ms. Red.\" In cases where you don't know the hiring manager's last name or preferred pronoun, you may address them with their job title. if you are unsure then just use Dear Hiring Manager\n3. Write an introductory paragraph\nThe introductory paragraph of your cover letter is to declare your reason for writing it. To write a good introductory paragraph, state the specific role that's the subject of your application. Next, you can briefly introduce yourself with your primary qualifications. For example, you may mention your years of experience or academic qualifications. dont write  [as advertised on [Platform where you saw the ad]].\n4. Discuss your qualifications\nThe major purpose of your cover letter is to discuss your qualifications. Remember that the cover letter is meant to supplement your resume, so pick a few of the most impressive qualifications that you can discuss. As this is a general-purpose cover letter, focus on your career level, soft skills, academic qualifications, general certifications, and work experience. Ensure you include specific details about the qualifications and discuss how they can benefit an employer.\n5. Quantify your achievements\nQuantifying your achievements is an effective way to make them appear more impressive to the hiring manager. You can quantify your achievements by using metrics like figures, percentages, and averages. Doing this helps the hiring manager understand the impact you had in your previous experiences, improving your chances of success. Additionally, where you can't quantify an achievement using figures, you can use special adjectives to qualify them. Examples of these adjectives include \"excellent\" or \"outstanding.\"\n6. Justify your interest in the company\nBeyond discussing your qualifications, hiring managers also expect you to discuss why you're interested in the company. This is because the hiring manager wants to confirm that you're enthusiastic about joining the company. For this paragraph, ensure you provide a genuine and convincing reason. For example, you may reference the company's clientele, work environment, or employee benefits. If you need inspiration for this paragraph, consider reading the company's website or speaking to current employees.\n7. Conclude your cover letter\nYour closing paragraph is to reiterate your qualifications and interest in the role. You may invite the hiring manager to review your resume or request a meeting or interview, depending on the situation. Also, it's important you thank the hiring manager for their time. Finally, you may use a formal closing remark like \"Yours Sincerely\" or \"Sincerely\" followed by your full name to end the cover letter.\n\nIMPORTANT: Please do not write anything you are unsure about, and avoid using brackets. If you don't know something, simply leave it out instead of leaving space for me. Also dont use as advertised on [Platform where you saw the ad].\n\n\nSample Cover Letter:\n\nHiring Manager\nCIBC\nToronto, Canada\n \nDear Hiring Manager,\n\nI am excited to apply for the Application Software Developer Co-op position at CIBC. Currently pursuing a Master of Applied Computing at the University of Windsor, I believe my hands-on experience in full-stack development and my ability to contribute to data-driven solutions aligns well with CIBC’s digital transformation goals.\n\nDuring my recent internship at CodeClause, I contributed to the development of user-centric applications, focusing on building efficient solutions. Additionally, I have worked on a personal project called FriendsVault, a social media platform that integrates React, Node.js, Express.js, and MongoDB. This project allowed me to develop my skills in building scalable and secure applications, utilizing Amazon S3 for image storage and EC2 for server deployment. I focused on backend data management and API integration, which are directly relevant to CIBC’s collateral and inventory management applications.\n\nI am particularly excited about the opportunity to be part of an innovation-focused team at CIBC, helping to deliver personalized banking solutions that enhance the client experience. My technical expertise in programming languages and cloud technologies such as S3 and EC2, paired with a passion for solving problems creatively, would make me an asset to your team.\n\nI would welcome the opportunity to discuss how my skills and experience align with your goals at CIBC. Thank you for considering my application. I look forward to the possibility of contributing to your team.\n\n\nWarm regards,\nSanjay Suthar\n",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Matt Munro\n2nd Sr. I.T. Recruiter\nAlquemy Search & Consulting\nVancouver, BC\n\nDear Mr. Munro,\n\nI am writing to express my keen interest in the Full Stack Engineer position at Alquemy Search & Consulting, as advertised on [Platform where you saw the ad].  Possessing a strong background in full-stack development, particularly with a front-end focus, I am confident my skills and experience align well with your requirements.  My recent Master’s degree in Applied Computing at the University of Windsor, coupled with practical experience, provides me with the theoretical and practical knowledge needed to excel in this role.\n\nMy experience encompasses both front-end and back-end development.  As a Web Development Intern at CodeClause, I designed a website showcasing my proficiency in web development tools, and I successfully implemented a user-centered design approach.  Furthermore, my personal project, FriendsVault, a social media platform built with the MERN stack, demonstrates my ability to build scalable, robust, and secure applications.  This project involved leveraging AWS technologies like EC2 and S3 for hosting and image management, as well as advanced JavaScript concepts like Redux Toolkit for managing global state and implementing Formik for form validation.  I am proficient in Java, Spring Boot, React, Node.js, and MongoDB, all of which are highly relevant to the position's requirements.\n\nThe opportunity to contribute to enterprise-level web applications, using my expertise in React, Java, and Spring Boot, combined with my understanding of server-side Node.js and REST API design, strongly appeals to me. I am eager to leverage my experience in cloud technologies and micro-service architectures to further develop and refine my technical skills within a dynamic team environment.\n\nAlquemy's commitment to quality and transparency in the IT staffing industry aligns with my values and aspirations. I believe my skills and dedication would be a valuable asset to your team and contribute to your mission of providing high-quality talent to your clients.  I have attached my resume for your review and welcome the opportunity to discuss my qualifications further.\n\nThank you for your time and consideration.\n\nSincerely,\n\nSanjay Suthar\n",
            },
          ],
        },
      ],
    });

    coverLetterPrompt = `generate a cover letter from below Job description and resume :

RESUME: "${resumeText}"

JOB DESCRIPTION: "${jobDescription}"

Guidelines:

1. Include the relevant addresses
When writing a cover letter, it's essential you include the recipient's contact details. To do this, include the recipient's full name, job title, the company's name, address, city or province [only as much that provided in JD dont leave blank for me ] for example: the above JD only written Vancouver, BC so that the address. Lastly, proofread the addresses to ensure you spelled all details correctly.
2.Choose the right salutation
The salutation sets the tone for your cover letter, making it an essential element. Choosing the right salutation can demonstrate professionalism to your recipient. When writing a formal letter, the best approach is to address them by their last name. For example, you may say "Dear Mr. Blur" or "Dear Ms. Red." In cases where you don't know the hiring manager's last name or preferred pronoun, you may address them with their job title. if you are unsure then just use "Dear Hiring Manager" dont use [ ] brackets for me.
3. Write an introductory paragraph
The introductory paragraph of your cover letter is to declare your reason for writing it. dont write dont write  [as advertised on [Platform where you saw the ad]]. To write a good introductory paragraph, state the specific role that's the subject of your application. Next, you can briefly introduce yourself with your primary qualifications. For example, you may mention your years of experience or academic qualifications. dont write  [as advertised on [Platform where you saw the ad]].
4. Discuss your qualifications
The major purpose of your cover letter is to discuss your qualifications. Remember that the cover letter is meant to supplement your resume, so pick a few of the most impressive qualifications that you can discuss. As this is a general-purpose cover letter, focus on your career level, soft skills, academic qualifications, general certifications, and work experience. Ensure you include specific details about the qualifications and discuss how they can benefit an employer.
5. Quantify your achievements
Quantifying your achievements is an effective way to make them appear more impressive to the hiring manager. You can quantify your achievements by using metrics like figures, percentages, and averages. Doing this helps the hiring manager understand the impact you had in your previous experiences, improving your chances of success. Additionally, where you can't quantify an achievement using figures, you can use special adjectives to qualify them. Examples of these adjectives include "excellent" or "outstanding."
6. Justify your interest in the company
Beyond discussing your qualifications, hiring managers also expect you to discuss why you're interested in the company. This is because the hiring manager wants to confirm that you're enthusiastic about joining the company. For this paragraph, ensure you provide a genuine and convincing reason. For example, you may reference the company's clientele, work environment, or employee benefits. If you need inspiration for this paragraph, consider reading the company's website or speaking to current employees.
7. Conclude your cover letter
Your closing paragraph is to reiterate your qualifications and interest in the role. You may invite the hiring manager to review your resume or request a meeting or interview, depending on the situation. Also, it's important you thank the hiring manager for their time. Finally, you may use a formal closing remark like "Yours Sincerely" or "Sincerely" followed by your full name to end the cover letter.

IMPORTANT: Please do not write anything you are unsure about, and avoid using brackets. If you don't know something, simply leave it out instead of leaving space for me. Also dont use as advertised on [Platform where you saw the ad].
`;

const result = await chatSession.sendMessage(coverLetterPrompt);

// Log the full response to verify structure
console.log(JSON.stringify(result.response, null, 2));

// Safely extract the cover letter text
const candidates = result.response?.candidates;
if (!candidates || !candidates[0]?.content?.parts?.[0]?.text) {
    console.error("Invalid response structure:", result.response);
    return res.status(500).json({ error: "Failed to retrieve cover letter text." });
}

// Extract the generated text
const generatedText = candidates[0].content.parts[0].text;

// Log the generated text for debugging
console.log(generatedText);

// Send the response back as JSON
res.status(200).json({ coverLetter: generatedText });


  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate result" });
  }
};

module.exports = { coverLetter };
