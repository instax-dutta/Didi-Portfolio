export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Sai Abhipsa Dash. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/sai-abhipsa-dash"
              className="text-xs sm:text-sm text-primary hover:text-primary/80"
            >
              LinkedIn
            </a>
            <a href="mailto:saiabhipsa98@gmail.com" className="text-xs sm:text-sm text-primary hover:text-primary/80">
              Email
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground">+91 6370985979</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

