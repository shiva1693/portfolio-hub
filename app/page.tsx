export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        The ZXCVBNM
      </h1>

      <p className="text-gray-400 mb-12 text-center max-w-xl">
        DevOps | Cloud | Full Stack Projects
      </p>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
        <a
          href="https://p1.thezxcvbnm.online"
          className="border border-gray-700 rounded-lg p-6 hover:bg-gray-900 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Project 1</h2>
          <p className="text-gray-400">Coming soon...</p>
        </a>

        <a
          href="https://lab.thezxcvbnm.online"
          className="border border-gray-700 rounded-lg p-6 hover:bg-gray-900 transition"
        >
          <h2 className="text-xl font-semibold mb-2">DevOps Lab</h2>
          <p className="text-gray-400">CI/CD • Containers • Cloud</p>
        </a>
      </div>
    </main>
  );
}
