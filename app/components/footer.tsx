export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Sai Abhipsa Dash. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/sai-abhipsa-dash-155a81175/"
              className="text-xs sm:text-sm text-blue-500 hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a href="mailto:saiabhipsa98@gmail.com" className="text-xs sm:text-sm text-blue-500 hover:text-blue-600">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

