// Site-wide settings. Edit these values; every page reads from here.

export const SITE = {
  name: 'Rohan Patrick Jr.',
  // Shown in the centre of the header, like the reference design.
  title: "Rohan Patrick Jr.'s Portfolio",
  headline: 'Electrical & Computer Engineer',
  description:
    'Rohan Patrick Jr. is an Electrical & Computer Engineering student at the University at Albany who builds hardware, embedded, and machine-learning projects.',
  url: 'https://rohanpatrick568.github.io',
  locale: 'en_US',

  // Placeholder photos show a note explaining which picture belongs there.
  // Set this to false before you publish if you'd rather visitors see a
  // quiet illustrated fallback instead of the instructions.
  showPlaceholderNotes: true,

  // Put your resume at public/resume.pdf and set this to '/resume.pdf'.
  // While it is null, no download button is shown anywhere.
  resumePdf: null as string | null,
};

export const CONTACT = {
  emails: [
    { address: 'rpatrick@albany.edu', label: 'University email' },
    { address: 'patrickrohan6@gmail.com', label: 'Personal email' },
  ],
};

export const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohan-w-patrick-jr-a3146125b',
    icon: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/rohanpatrick568', icon: 'github' },
  { label: 'Email', href: 'mailto:rpatrick@albany.edu', icon: 'mail' },
] as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
