import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/_layout/company')({

  component: Company,
  head: () => ({
    meta: [
      {
        title: "Dashboard - FastAPI Cloud",
      },
    ],
  }),
})

function Company() {

  return (
    <div>
      <div>
        <h1 className="text-2xl truncate max-w-sm">
          About my company..👌
        </h1>
        <p className="text-muted-foreground">
         Welcome to the Company section. This page provides detailed information
        about the organization, its mission, vision, values, and operational
        structure. It serves as a central reference point for understanding how
        the company operates and what it stands for.
        </p>
        <br></br>
        <p className="text-muted-foreground">
         This Company section may be expanded in the future to include detailed
        profiles, organizational charts, compliance information, policies, and
        other relevant documentation. It acts as a foundation for understanding
        the broader ecosystem in which the company operates.
        </p>
        <br></br>
        <p className="text-muted-foreground">
         Our company was established with the goal of delivering high-quality
        solutions that combine innovation, reliability, and scalability. Over
        the years, we have continuously evolved to meet changing market demands
        while maintaining a strong focus on customer satisfaction and technical
        excellence.
        </p>
        <br></br>
        <p className="text-muted-foreground">
         We believe that technology should empower businesses and individuals.
        Our teams work collaboratively across departments to design, develop,
        and deploy solutions that solve real-world problems. Transparency,
        accountability, and continuous improvement are core principles that
        guide our daily operations.
        </p>
         <br></br>
        <p className="text-muted-foreground">
         Our workforce is composed of skilled professionals from diverse
        backgrounds. We foster a culture of learning and growth, encouraging
        employees to expand their knowledge, share ideas, and contribute to
        meaningful projects. Training, mentorship, and collaboration are key
        components of our internal culture.
        </p>
      </div>
    </div>
  )
}
