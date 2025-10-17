export default function Footer() {
  const productLinks = [
    { text: "Book A Demo", href: "#" },
    { text: "Features", href: "/#features" },
    { text: "How It Works", href: "/#how" },
    { text: "Pricing", href: "/#pricing" },
    { text: "Login", href: "https://business.m30.io/" },
    { text: "Sign Up", href: "https://business.m30.io/" },
  ];

  const resourceLinks = [
    {
      text: "Documentation",
      href: "https://docs.m30.io/s/docs/doc/integration-documentation-H8ZrBR1Pe5",
    },
    { text: "APIs", href: "https://business.m30.io/api-doc" },
    { text: "Marketplace", href: "https://affiliate.m30.io/join" },
    { text: "How To Resources", href: "#" },
  ];

  const companyLinks = [
    { text: "Blog", href: "/blog" },
    { text: "Videos", href: "https://www.youtube.com/@m30io" },
    { text: "Contact", href: "mailto:hello@m30.io" },
    { text: "Chat", href: "#" },
    { text: "Join Affiliate Network", href: "https://affiliate.m30.io/join" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/m30io",
      icon: "facebook",
    },
    { name: "Twitter", href: "https://twitter.com/@m30_io", icon: "twitter" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/m30_io/",
      icon: "instagram",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/m30io",
      icon: "linkedin",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@m30io",
      icon: "youtube",
    },
  ];

  return (
    <footer className="bg-gray-900 py-20">
      <div className="px-6 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
        <div className="grid grid-cols-1 gap-y-8">
          <div className="flex flex-wrap justify-between items-end gap-y-4">
            <a href="/" className="inline-block">
              <img
                src="/m30-logo.svg"
                alt="m30 logo"
                height="436"
                width="566"
                className="w-20"
              />
            </a>
            <div className="w-full md:w-1/2 xl:w-[36%]">
              <p className="text-white !leading-relaxed">
                Build your referral marketing business with{" "}
                <span className="text-white">m30</span> - an efficient and
                flexible SaaS solution.
              </p>
            </div>
          </div>
          <hr className="border border-gray-800" />
          <div className="flex flex-col md:flex-row flex-wrap xl:justify-between gap-y-12">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-auto">
              <h3 className="font-bold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-auto">
              <h3 className="font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li>
                    <a
                      href={link.href}
                      target="_blank"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-auto">
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-5 w-full md:w-1/2 xl:w-auto">
              <div>
                <h3 className="font-bold mb-4 text-white">
                  Other Contact Channels
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="mailto:hello@m30.io"
                      target="_blank"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      hello@m30.io
                    </a>
                  </li>
                  <li>
                    House 3, Road 1, Rockview Estate, Kangang, Jos, Nigeria
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      href={link.href}
                      target="_blank"
                      className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon === "facebook" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      )}
                      {link.icon === "twitter" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )}
                      {link.icon === "instagram" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      {link.icon === "linkedin" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      )}
                      {link.icon === "youtube" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-gray-800" />
          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-gray-400">
            <p className="text-sm">
              &copy; m30 Technologies Ltd. {new Date().getFullYear()}. All
              rights reserved.
            </p>
            <a
              href="https://storyset.com/"
              target="_blank"
              className="text-sm hover:text-purple-600"
            >
              Illustrations By Storyset
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
