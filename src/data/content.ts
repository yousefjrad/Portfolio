import type { Project, SkillCategory, SocialLink, TimelineItem } from './types'

export const profile = {
  name: 'Yousef Jrad',
  title: 'Full-Stack Engineer & Software Engineering Instructor',
  roles: [
    'Full-Stack Engineer',
    '.NET & Clean Architecture Specialist',
    'Software Engineering Instructor',
  ],
  valueProp:
    'Crafting scalable enterprise backends with .NET & Clean Architecture, responsive web applications with React, and delivering impactful technical training.',
  email: 'yousefjradln@gmail.com',
  phone: '+963930592537',
  phoneLocal: '0930592537',
}

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/yousefjrad' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yousef-jrad-015904438',
  },
  { id: 'email', label: 'Email', href: 'mailto:yousefjradln@gmail.com' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/963930592537' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Systems & Architecture',
    icon: 'server',
    level: 'Advanced',
    skills: [
      'C#',
      '.NET / ASP.NET Core Web API',
      'Clean Architecture',
      'Repository & Unit of Work Patterns',
      'RESTful APIs',
      'JWT Authentication & Authorization Policies',
      'FluentValidation',
      'Global Exception Handling Middleware',
      'Fail-Fast DTOs',
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop Application Development',
    icon: 'monitor',
    level: 'Advanced',
    skills: ['C#', '.NET Framework', 'WPF / WinForms', 'Multi-Layer Architecture'],
  },
  {
    id: 'frontend',
    title: 'Frontend Web Development',
    icon: 'layout',
    level: 'Advanced',
    skills: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'TanStack Query',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    id: 'data',
    title: 'Databases & Persistence',
    icon: 'database',
    level: 'Advanced',
    skills: ['SQL Server', 'Relational DB Design', 'Indexing', 'EF Core / Entity Framework Core'],
  },
  {
    id: 'tools',
    title: 'Tools, DevOps & Platforms',
    icon: 'wrench',
    level: 'Proficient',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Visual Studio', 'VS Code', 'Linux basics'],
  },
  {
    id: 'instructor',
    title: 'Instructor & Leadership',
    icon: 'graduation',
    level: 'Experienced',
    skills: [
      'Technical Curriculum Design',
      'Web Development Workshops',
      'Mentorship',
      'Code Review',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'educational-center',
    title: 'EducationalCenter',
    subtitle: 'مركزي - Educational Center Management System',
    category: 'Full-Stack Enterprise Management System',
    description:
      'A comprehensive multi-currency management platform designed to automate administrative and financial operations for educational institutes.',
    stack: [
      '.NET 9',
      'ASP.NET Core Web API',
      'Clean Architecture',
      'SQL Server',
      'EF Core',
      'React',
      'Tailwind CSS',
    ],
    highlights: [
      'Interactive executive dashboard tracking monthly revenue, open study sections, registered students, occupancy rates, and pending payments.',
      'Weekly scheduling engine with conflict detection for classrooms and instructors.',
      'Flexible trainer payroll models: percentage-based, hourly rate, or fixed monthly salary.',
      'Attendance and grade tracking with PDF certificate generation and exportable financial/operational reports (PDF & Excel).',
    ],
    repos: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/yousefjrad/EducationalCenter.git',
      },
    ],
  },
  {
    id: 'unibooking',
    title: 'UniBooking',
    subtitle: 'University Resource & Reservation Management System',
    category: 'Full-Stack Resource Reservation System',
    description:
      'A full-stack university resource and room reservation platform ensuring seamless scheduling and conflict-free bookings.',
    stack: [
      'C#',
      '.NET',
      'Clean Architecture',
      'SQL Server',
      'EF Core',
      'React',
      'TanStack Query',
      'Redux Toolkit',
      'Tailwind CSS',
    ],
    highlights: [
      'Room capacity filtering, real-time availability checks, and booking state management (Pending, Approved, Cancelled).',
      'Dual Hijri & Gregorian calendar synchronization with full Arabic / English bilingual UI support.',
      'Clean Architecture API backend integrated with TanStack Query and Redux for responsive, cached client-side state handling.',
    ],
    repos: [
      { label: 'Backend Repo', href: 'https://github.com/yousefjrad/UniBooking.git' },
      {
        label: 'Frontend Repo',
        href: 'https://github.com/yousefjrad/unibooking-frontend.git',
      },
    ],
  },
  {
    id: 'dvld',
    title: 'DVLD System',
    subtitle: 'Driving & Vehicle Licensing Department',
    category: 'Desktop Enterprise Application',
    description:
      'An end-to-end desktop software solution automating the workflows of driver licensing, vehicle registration, and official testing processes.',
    stack: ['C#', '.NET Framework', 'WinForms', 'SQL Server', 'Multi-Layer Architecture', 'ADO.NET'],
    highlights: [
      'Comprehensive workflow management for vision, written, and street driving tests.',
      'Fee processing, license issuance, renewals, detaining, and license replacement logic.',
      'Role-based access control and strict data validation layers built on a clean multi-tiered architecture.',
    ],
    repos: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/yousefjrad/DVLD-Driving-and-Vehicle-Licensing-Department.git',
      },
    ],
  },
  {
    id: 'clinic',
    title: 'Clinic Management System',
    category: 'Full-Stack Web Application',
    description:
      'A full-stack healthcare platform handling clinic operations, patient health records, and appointment bookings.',
    stack: [
      'C#',
      'ASP.NET Core Web API',
      'SQL Server',
      'Entity Framework Core',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    highlights: [
      'RESTful API backend handling patient management, medical history, and doctor schedules.',
      'Relational database schema optimized with EF Core for appointment tracking and billing status.',
    ],
    repos: [{ label: 'GitHub Profile', href: 'https://github.com/yousefjrad' }],
  },
]

export const timeline: TimelineItem[] = [
  {
    id: 'freelance',
    period: 'Ongoing',
    role: 'Freelance Web Developer',
    org: 'Independent Contracts',
    type: 'freelance',
    points: [
      'Deliver custom web applications end to end: requirements, API design, database modelling, and responsive front ends.',
      'Apply Clean Architecture and SOLID principles to keep client codebases maintainable and testable.',
    ],
  },
  {
    id: 'systems',
    period: 'Ongoing',
    role: 'Systems Engineer',
    org: 'Enterprise & Institutional Projects',
    type: 'engineering',
    points: [
      'Designed management systems for education, university booking, licensing and healthcare workflows.',
      'Built secure APIs with JWT authentication, authorization policies, validation and global error handling.',
    ],
  },
  {
    id: 'instructor',
    period: 'Ongoing',
    role: 'Software Engineering Instructor & Workshop Leader',
    org: 'Training Courses, Hama',
    type: 'teaching',
    points: [
      'Teach web programming and software engineering fundamentals through local courses and workshops in Hama.',
      'Design technical curricula, mentor learners, and run code reviews.',
    ],
  },
  {
    id: 'education',
    period: 'Present',
    role: 'B.Sc. Informatics Engineering (4th Year)',
    org: 'Syrian Arab Private University',
    type: 'education',
    points: [
      'Focus on software design patterns, architecture, and clean code practices.',
    ],
  },
]
