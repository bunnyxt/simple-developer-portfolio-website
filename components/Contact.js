import userData from "@constants/data";

const contactLinks = [
  { label: "LinkedIn", href: userData.socialLinks.linkedin },
  { label: "GitHub", href: userData.socialLinks.github },
  { label: "X", href: userData.socialLinks.twitter },
];

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#0050B3] dark:bg-[#002766] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-gray-50 font-semibold text-2xl">
              Get in touch, let&apos;s talk.
            </h2>
            <p className="font-light text-base text-gray-200 mt-2">
              You can reach me through one of the links here.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {contactLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 px-6 py-4 text-gray-50 font-medium hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                style={{ color: "#fff" }}
              >
                {label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
