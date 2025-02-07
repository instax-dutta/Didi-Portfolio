export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sai Abhipsa Dash. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sai-abhipsa-dash-155a81175/"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:saiabhipsa98@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

