export default function About() {
  return (
    <main className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          About
        </h1>
        <p className="mt-4 text-white/70 max-w-3xl leading-relaxed">
          I’m a Cloud and DevOps-focused engineer passionate about building
          production-ready infrastructure, automated delivery pipelines, and
          scalable backend systems. My focus is on designing reliable systems
          using Infrastructure as Code, containerization, and secure cloud
          architecture principles.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-lg font-semibold">What I Focus On</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>• Infrastructure as Code with Terraform</li>
            <li>• CI/CD automation using GitHub Actions & Jenkins</li>
            <li>• Containerized deployments with Docker & Kubernetes</li>
            <li>• AWS architecture & networking (VPC, ALB, IAM, EC2)</li>
            <li>• Secure and scalable cloud system design</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-lg font-semibold">Engineering Approach</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>• Automate everything possible</li>
            <li>• Design for reliability and observability</li>
            <li>• Follow least-privilege security principles</li>
            <li>• Keep infrastructure modular and reusable</li>
            <li>• Document architecture decisions clearly</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="text-lg font-semibold">Current Focus</h2>
        <p className="mt-4 text-sm text-white/70 leading-relaxed">
          I’m currently building and documenting real-world DevOps projects
          including automated deployments, container-based microservices,
          secure AWS infrastructure setups, and CI/CD pipelines. This portfolio
          serves as a hands-on showcase of production-style engineering
          practices.
        </p>
      </div>
    </main>
  );
}