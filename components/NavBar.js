import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-6 p-4 bg-gray-200 dark:bg-gray-800">
      <Link href="/"><a className="text-lg font-semibold">Home</a></Link>
      <Link href="/resume"><a className="text-lg font-semibold">Resume</a></Link>
      <Link href="/contact"><a className="text-lg font-semibold">Contact</a></Link>
    </nav>
  );
}
