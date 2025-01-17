module.exports = {
  siteTitle: 'Issa Maina | Software Engineer',
  siteDescription:
    'Issa Maina is a software engineer based in Nairobi, Kenya who specializes in the design and implementation of scalable, highly available APIs in Python Flask, Python Django and GraphQL.',
  siteKeywords: 'Issa Maina, Issa, software engineer, software developer, fullstack engineer',
  siteUrl: 'https://issamwangi.com',
  siteLanguage: 'en_US',

  googleVerification: 'CHkeh5av_lDWs6zzQ8TpB4KDyQcmm7xxI4CYUKRGaM0',

  name: 'Issa Mwangi',
  location: 'Nairobi, Kenya',
  email: 'issamwangi@gmail.com',
  github: 'https://github.com/IssaIan/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/IssaIan/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/issa-mwangi-784ba5103/',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/10909486/issa-mwangi',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/issa_the_only/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/IssatheOnly1',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@IssatheOnly1',
  googleAnalyticsID: 'UA-142576526-1',
  googleTagManagerID: 'GTM-K44TV88',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
