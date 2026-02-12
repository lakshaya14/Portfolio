// import {
//   Heading,
//   Text,
//   Button,
//   RevealFx,
//   Column,
//   Row,
//   Schema,
//   Meta,
//   Line,
// } from "@once-ui-system/core";

// import { home, person, baseURL } from "@/resources";
// import { Github, Linkedin, Mail } from "lucide-react";

// import { Mailchimp } from "@/components";
// import { Projects } from "@/components/work/Projects";
// import StarBackground from "@/components/background/StarBackground";

// /* ---------------- SEO METADATA ---------------- */

// export async function generateMetadata() {
//   return Meta.generate({
//     title: home.title,
//     description: home.description,
//     baseURL,
//     path: home.path,
//   });
// }

// /* ---------------- HOME PAGE ---------------- */

// export default function Home() {
//   const iconStyle = {
//     width: "46px",
//     height: "46px",
//     borderRadius: "999px",
//     padding: 0,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };
  
//   return (
//     <>
//       {/* ⭐ Animated Background */}
//       <StarBackground />

//       {/* ⭐ Content Layer */}
//       <Column
//         maxWidth="m"
//         gap="xl"
//         horizontal="center"
//         style={{
//           position: "relative",
//           zIndex: 1,
//           minHeight: "100vh",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         {/* -------- Structured Data -------- */}
//         <Schema
//           as="webPage"
//           baseURL={baseURL}
//           path={home.path}
//           title={home.title}
//           description={home.description}
//           image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
//           author={{
//             name: person.name,
//             url: `${baseURL}/about`,
//             image: `${baseURL}${person.avatar}`,
//           }}
//         />

//         {/* ================= HERO ================= */}
//         <Column
//   fillWidth
//   horizontal="center"
//   style={{
//     minHeight: "100vh",   // ✅ covers full screen
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <Column
//     maxWidth="s"
//     gap="l"
//     fillWidth
//     horizontal="center"
//     style={{
//       textAlign: "center",
//       alignItems: "center",
//     }}
//   >
//     {/* HELLO I'M */}
//     <RevealFx delay={0.05} translateY={10}>
//       <Text
//         variant="label-default-s"
//         onBackground="neutral-weak"
//         style={{
//           letterSpacing: "0.25em",
//           textTransform: "uppercase",
//           textAlign: "center",
//           width: "100%",
//         }}
//       >
//         {home.hero?.topText ?? "HELLO, I'M"}
//       </Text>
//     </RevealFx>

//     {/* BIG NAME */}
//     <RevealFx delay={0.12} translateY={12}>
//       <Heading
//         variant="display-strong-xl"
//         wrap="balance"
//         style={{
//           lineHeight: 1,
//           textAlign: "center",
//           width: "100%",
//         }}
//       >
//         {home.hero?.headline ?? person.name}
//       </Heading>
//     </RevealFx>

//     {/* ROLE */}
//     <RevealFx delay={0.2} translateY={10}>
//       <Text
//         variant="heading-default-xl"
//         onBackground="neutral-strong"
//         style={{
//           fontWeight: 600,
//           fontSize: "28px",
//           textAlign: "center",
//           width: "100%",
//         }}
//       >
//         {home.hero?.role ?? person.role}
//       </Text>
//     </RevealFx>


//             {/* TAGLINE */}
//             <RevealFx delay={0.3} translateY={12}>
//               <Text
//                 variant="body-default-l"
//                 onBackground="neutral-weak"
//                 wrap="balance"
//                 align="center"
//                 style={{
//                   maxWidth: "520px",
//                   width: "100%",
//                   textAlign: "center",
//                   margin: "0 auto",
//                 }}
                
//               >
//                 {home.hero?.tagline ??
//                   "Building clean, responsive, and high-performance web experiences"}
//               </Text>
//             </RevealFx>

//             {/* CTA BUTTONS */}
//             <RevealFx delay={0.4} translateY={10}>
//               <Column gap="12" fillWidth horizontal="center">
//               <Button
//   variant="primary"
//   size="l"
//   href={home.cta.primary.href}
// >
//   {home.cta.primary.label}
// </Button>


//                 <Button
//                   variant="secondary"
//                   size="l"
//                   href={home.cta.secondary.href}
//                   target="_blank"
//                   style={{
//                     width: "100%",
//                     maxWidth: "320px",
//                     borderRadius: "999px",
//                   }}
//                 >
//                   {home.cta.secondary.label}
//                 </Button>
//               </Column>
//             </RevealFx>

//             {/* SOCIAL ICONS – GLOW */}
// {/* SOCIAL ICONS */}
// <RevealFx delay={0.55} translateY={8}>
//   <Row
//     fillWidth
//     horizontal="center"
//     vertical="center"
//     paddingTop="16"
//     style={{
//       justifyContent: "center",
//     }}
//   >
//     <Row gap="20">
//       <Button
//         variant="secondary"
//         size="s"
//         href="https://github.com/lakshaya14"
//         target="_blank"
//         aria-label="GitHub"
//         style={iconStyle}
//       >
//         <Github size={20} />
//       </Button>

//       <Button
//         variant="secondary"
//         size="s"
//         href="https://www.linkedin.com/in/lakshaya-k-5a534b2a4/"
//         target="_blank"
//         aria-label="LinkedIn"
//         style={iconStyle}
//       >
//         <Linkedin size={20} />
//       </Button>

//       <Button
//         variant="secondary"
//         size="s"
//         href={`mailto:${person.email}`}
//         aria-label="Email"
//         style={iconStyle}
//       >
//         <Mail size={20} />
//       </Button>
//     </Row>
//   </Row>
// </RevealFx>


//             {/* SCROLL */}
//             <RevealFx delay={0.7}>
//               <Text
//                 paddingTop="32"
//                 onBackground="neutral-weak"
//                 variant="label-default-s"
//                 style={{
//                   textAlign: "center",
//                   width: "100%",
//                 }}
//               >
//                 ↓ Scroll
//               </Text>
//             </RevealFx>
//           </Column>
//         </Column>
//                 {/* ================= TECHNOLOGIES ================= */}
//                 <RevealFx delay={0.8} translateY={16}>
//           <Column
//             gap="xl"
//             fillWidth
//             horizontal="center"
//             style={{
//               paddingTop: "120px",
//               paddingBottom: "120px",
//               textAlign: "center",
//             }}
//           >
//             {/* Subtitle */}
//             <Text
//               variant="label-default-s"
//               onBackground="neutral-weak"
//               style={{ letterSpacing: "0.2em", textTransform: "uppercase" }}
//             >
//               Technologies I work with
//             </Text>

//             {/* Title */}
//             <Heading as="h2" variant="display-strong-s">
//               Skills & Tools
//             </Heading>

//             {/* Toggle (UI only for now) */}
//             <Row
//               gap="8"
//               horizontal="center"
//               style={{
//                 background: "rgba(255,255,255,0.04)",
//                 padding: "6px",
//                 borderRadius: "999px",
//               }}
//             >
//               <Button variant="primary" size="s">
//                 Skills
//               </Button>
//               <Button variant="secondary" size="s">
//                 Tools
//               </Button>
//             </Row>

//             {/* Grid */}
//             <Row
//               gap="16"
//               wrap
//               horizontal="center"
//               style={{
//                 maxWidth: "640px",
//                 marginTop: "32px",
//               }}
//             >
//               {[
//                 "React",
//                 "HTML",
//                 "JavaScript",
//                 "TypeScript",
//                 "Figma",
//                 "CSS",
//                 "Flutter",
//                 "Python",
//                 "Java",
//                 "Spring Boot",
//                 "Next.js",
//                 "GitHub",
//                 "Tailwind CSS",
//                 "MySQL",
//               ].map((skill) => (
//                 <Column
//                   key={skill}
//                   horizontal="center"
//                   style={{
//                     width: "140px",
//                     padding: "18px",
//                     borderRadius: "14px",
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                   }}
//                 >
//                   <Text variant="body-default-s">{skill}</Text>
//                 </Column>
//               ))}
//             </Row>
//           </Column>
//         </RevealFx>


//         {/* ================= FEATURED PROJECT ================= */}
//         <RevealFx delay={0.85} translateY={18}>
//           <Column gap="l" fillWidth>
//             <Row fillWidth paddingRight="64">
//               <Line maxWidth={48} />
//             </Row>

//             <Heading as="h2" variant="display-strong-s">
//               Featured Project
//             </Heading>

//             <Projects range={[1, 1]} />

//             <Row fillWidth paddingLeft="64" horizontal="end">
//               <Line maxWidth={48} />
//             </Row>
//           </Column>
//         </RevealFx>

//         {/* ================= MORE PROJECTS ================= */}
//         <RevealFx delay={1} translateY={18}>
//           <Column gap="l" fillWidth>
//             <Heading as="h2" variant="display-strong-s">
//               More Projects
//             </Heading>

//             <Projects range={[2]} />
//           </Column>
//         </RevealFx>

//         {/* ================= CONTACT / NEWSLETTER ================= */}
//         <RevealFx delay={1.15} translateY={12}>
//               {/* ================= CONTACT INFO ================= */}
// <RevealFx delay={1.1} translateY={16}>
// <Column
//   id="contact"
//   gap="xl"
//   fillWidth
//   horizontal="center"
//   style={{
//     paddingTop: "120px",
//     paddingBottom: "80px",
//     textAlign: "center",
//   }}
// >

//     {/* Title */}
//     <Heading as="h2" variant="display-strong-s">
//       Get In <span style={{ color: "#7c3aed" }}>Touch</span>
//     </Heading>

//     {/* Subtitle */}
//     <Text
//       variant="body-default-l"
//       onBackground="neutral-weak"
//       style={{ maxWidth: "620px" }}
//     >
//       Have a project in mind or want to collaborate? Feel free to reach out.
//       I’m always open to discussing new opportunities.
//     </Text>

//     {/* Contact Details */}
//     <Column gap="l" fillWidth style={{ maxWidth: "520px" }}>
//       {/* Email */}
//       <Row gap="16" vertical="center">
//         <Column
//           horizontal="center"
//           style={{
//             width: "44px",
//             height: "44px",
//             borderRadius: "999px",
//             background: "rgba(124,58,237,0.15)",
//           }}
//         >
//           <Mail size={20} />
//         </Column>

//         <Column align="start">
//           <Text variant="label-default-m">Email</Text>
//           <Text onBackground="neutral-weak">
//             lakshayakarun11@gmail.com
//           </Text>
//         </Column>
//       </Row>

//       {/* Phone
//       <Row gap="16" vertical="center">
//         <Column
//           horizontal="center"
//           style={{
//             width: "44px",
//             height: "44px",
//             borderRadius: "999px",
//             background: "rgba(124,58,237,0.15)",
//           }}
//         > */}
//           {/* <Text>📞</Text>
//         </Column>

//         <Column align="start">
//           <Text variant="label-default-m">Phone</Text>
//           <Text onBackground="neutral-weak">+91 9894927154</Text> */}
//         {/* </Column>
//       </Row> */}

//       {/* Location */}
//       <Row gap="16" vertical="center">
//         <Column
//           horizontal="center"
//           style={{
//             width: "44px",
//             height: "44px",
//             borderRadius: "999px",
//             background: "rgba(124,58,237,0.15)",
//           }}
//         >
//           <Text>📍</Text>
//         </Column>

//         <Column align="start">
//           <Text variant="label-default-m">Location</Text>
//           <Text onBackground="neutral-weak">
//             Pudukkottai, Tamil Nadu, India
//           </Text>
//         </Column>
//       </Row>
//     </Column>

//     {/* Socials */}
//     <Column gap="12" paddingTop="32">
//       <Text variant="label-default-s" onBackground="neutral-weak">
//         Connect With Me
//       </Text>

//       <Row gap="20" horizontal="center">
//         <Button
//           variant="tertiary"
//           size="s"
//           href="https://www.linkedin.com/in/lakshaya-k-5a534b2a4/"
//           target="_blank"
//         >
//           LinkedIn
//         </Button>

//         <Button
//           variant="tertiary"
//           size="s"
//           href="https://github.com/lakshaya14"
//           target="_blank"
//         >
//           GitHub
//         </Button>
//       </Row>
//     </Column>
//   </Column>
// </RevealFx>

//           <Mailchimp />

//         </RevealFx>
//       </Column>
//     </>
//   );
// }

export default function Home() {
  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>Home page works</h1>
      <p>If you see this, routing is fixed.</p>
    </main>
  );
}
