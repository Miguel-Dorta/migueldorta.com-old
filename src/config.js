const profile = {
  fullName: 'Miguel Dorta',
  description: 'Junior Software Developer',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.jpg',
  about: {
    title: `
    Miguel Dorta Rodríguez`,
    description: `Hi! My name is Miguel Dorta Rodríguez, and I'm a junior software developer.
    
    I am currently studying two courses at the same time: a degree in Philosophy at Universidad de la Laguna (University of La Laguna) and formation as Technician Specialist (CFGS) as Multiplatform Applications Developer (Desarrollo de Aplicaciones Multiplataforma) at IES Puerto de la Cruz.

    I specialized myself in GoLang development, system administration and web services developer (traditional backends and cloud services). I also have experience developing in Java, TypeScript, JavaScript and C#, and working with SQL and no-SQL databases.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'San Cristóbal de la Laguna, Spain',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'linkedin',
        text: 'LinkedIn',
        url: 'https://linkedin.com/in/miguel-dorta/',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'contact@migueldorta.com',
        url: 'mailto:contact@migueldorta.com',
        hoverColor: '#000'
      },
      {
        iconName: 'github',
        text: 'GitHub',
        url: 'https://github.com/Miguel-Dorta',
        hoverColor: '#000'
      }
    ]
  },
  social: [
    {
      iconName: 'email',
      url: 'mailto:contact@migueldorta.com',
      text: 'Send me an email',
      hoverColor: '#000'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/Migueh',
      text: "Contact me by Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/Miguel-Dorta',
      text: "My code, on GitHub",
      hoverColor: '#000'
    },
    {
      iconName: 'linkedin',
      url: 'https://linkedin.com/in/miguel-dorta/',
      text: "My professional profile",
      hoverColor: '#1da1f2'
    }
  ]
}

const projects = [
  {
    title: 'losfogueteros.com',
    img: 'https://www.losfogueteros.com/assets/icons/apple-touch-icon-precomposed.png',
    description: 'Los Fogueteros\' Website',
    categories: ['Nethruster', 'SysAdmin'],
    siteUrl: 'https://www.losfogueteros.com',
  },
  {
    title: 'ptemplate',
    img: 'https://ptemplate.nethruster.com/assets/avatar.svg',
    description: 'Simple personal website template. This website is based on ptemplate!',
    categories: ['Nethruster', 'Web', 'JavaScript'],
    sourceCodeUrl: 'https://github.com/nethruster/ptemplate'
  },
  {
    title: 'gkup',
    img: '',
    description: 'Simple and space-efficient backups',
    categories: ['GoLang', 'Multiplatform'],
    sourceCodeUrl: 'https://github.com/Miguel-Dorta/gkup-core'
  },
  {
    title: 'web-msg-handler',
    img: '',
    description: 'An API for handling messages from multiple website contact pages',
    categories: ['GoLang', 'TypeScript', 'Node', 'Web', 'Backend'],
    sourceCodeUrl: 'https://github.com/Miguel-Dorta/web-msg-handler'
  },
  {
    title: 'surveillance-cameras',
    img: '',
    description: 'Scripts for embedded systems processing surveillance cameras\' data',
    categories: ['GoLang', 'Linux', 'High-performance'],
    sourceCodeUrl: 'https://github.com/Miguel-Dorta/surveillance-cameras'
  },
  {
    title: 'si',
    img: '',
    description: 'Single Instance: keep just one instance of your program',
    categories: ['GoLang', 'Public package'],
    sourceCodeUrl: 'https://github.com/Miguel-Dorta/si'
  },
  {
    title: 'MinecraftSystemdWrapper.go',
    img: '',
    description: 'Systemd wrapper for Minecraft servers',
    categories: ['GoLang', 'Linux', 'systemd'],
    sourceCodeUrl: 'https://gist.github.com/Miguel-Dorta/b7ac93db04da7e55a2f5bed7f2348958'
  }
]

const formUrl = 'https://europe-west1-forms-cloud-functions.cloudfunctions.net/migueldorta'
const ReCAPTCHAKey = '6LfmMTIUAAAAAHERsxifkb_Wx-KvwJ1FGpk1wIZc'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
