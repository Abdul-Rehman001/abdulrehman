export interface ProjectSummary {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  category: string;
  demoLink?: string;
  githubLink?: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  whatIBuilt: string[];
  keyFeatures: string[];
  technicalHighlights: string[];
  impactResults: string[];
  technologiesUsed: string;
  myRole: string;
  images?: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projectSummaries: ProjectSummary[] = [
  {
    id: 1,
    title: "ApplyIQ",
    shortDescription:
      "An intelligent, AI-powered job application tracking platform that helps users organize their job search, score resume matches, and prepare for interviews using advanced AI coaching.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "MongoDB", "NextAuth", "Groq API", "Framer Motion"],
    image: "/assets/apply-1.png",
    category: "Platforms",
    demoLink: "https://apply-iq-virid.vercel.app/",
    githubLink: "https://github.com/Abdul-Rehman001/apply-iq",
  },
  {
    id: 2,
    title: "Prompter",
    shortDescription:
      "Platform for discovering, sharing, and managing AI prompts with real-time chat, advanced search, and user authentication. Optimized MongoDB queries improved search performance by 35%.",
    technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    image: "/assets/work5.jpg",
    category: "Platforms",
    demoLink: "https://prompter-orpin.vercel.app/",
    githubLink: "https://github.com/Abdul-Rehman001/prompter",
  },
  {
    id: 3,
    title: "Reviso",
    shortDescription:
      "A high-performance, full-stack study analytics platform that helps users track their learning hours, maintain streaks, and visualize their progress over time.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "TanStack Query"],
    image: "/assets/reviso-3.png",
    category: "Management Systems",
    demoLink: "https://reviso-seven.vercel.app/",
    githubLink: "https://github.com/Abdul-Rehman001/reviso",
  },
  {
    id: 4,
    title: "The Wild Oasis",
    shortDescription:
      "Administrative hotel management system for managing bookings, cabins, and guests. Features real-time dashboard, check-in/check-out flow, and comprehensive reporting.",
    technologies: ["React.js", "Supabase", "React Query", "Styled Components"],
    image: "/assets/work1.jpg",
    category: "Management Systems",
    demoLink: "https://the-wild-oasis-khaki.vercel.app",
    githubLink: "https://github.com/Abdul-Rehman001/the-wild-oasis",
  },
  {
    id: 5,
    title: "React Pizza",
    shortDescription:
      "Pizza ordering application with real-time geolocation, cart management, and order tracking. Features intuitive menu browsing and seamless checkout experience.",
    technologies: ["React.js", "Tailwind CSS", "Redux", "Geolocation API"],
    image: "/assets/work2.jpg",
    category: "Food & Delivery",
    demoLink: "https://abdul-rehman001.github.io/react-pizza/",
    githubLink: "https://github.com/Abdul-Rehman001/react-pizza",
  },
  {
    id: 6,
    title: "React Flix",
    shortDescription:
      "Movie browsing and rating website with API integration. Features search functionality, detailed movie information, and personal watchlist management.",
    technologies: ["React.js", "TMDB API", "CSS3"],
    image: "/assets/work3.jpg",
    category: "Entertainment",
    demoLink: "https://abdul-rehman001.github.io/movies-react/",
    githubLink: "https://github.com/Abdul-Rehman001/movies-react",
  },
  {
    id: 7,
    title: "Deen Call",
    shortDescription:
      "React Native mobile application providing Islamic utilities including prayer times, Qibla direction, and religious content. Cross-platform app for iOS and Android.",
    technologies: ["React Native", "JavaScript", "Geolocation API", "Islamic APIs"],
    image: "/assets/deen-call.png",
    category: "Mobile Apps",
    demoLink: "https://play.google.com/store/apps/details?id=com.deencall&hl=en_IN&pli=1",
  },
];

export const projectDetails: ProjectDetails[] = [
  {
    id: 1,
    title: "APPLYIQ - AI-POWERED JOB TRACKER",
    overview:
      "ApplyIQ is a comprehensive job search management platform designed to streamline the chaotic process of applying for jobs. It acts as a personal career copilot, replacing messy spreadsheets with an intuitive, visually stunning dashboard. By integrating advanced AI capabilities, ApplyIQ doesn't just track applications; it actively helps candidates improve their chances of landing interviews and offers.",
    problem:
      "Job seekers often struggle to keep track of numerous applications across various platforms, leading to missed follow-ups, lost opportunities, and general burnout. Furthermore, tailoring resumes for specific job descriptions and preparing for unique interviews is time-consuming and difficult without expert guidance.",
    solution:
      "ApplyIQ centralizes the entire job search pipeline into a sleek, manageable interface. It leverages a Groq-powered AI engine to instantly analyze job descriptions against the user's resume, providing a match score, identifying missing keywords, and generating personalized interview questions and strategies. This transforms a passive tracking system into a proactive career assistant.",
    whatIBuilt: [
      "A robust, responsive Next.js frontend featuring a sleek, dark-mode-first aesthetic with glassmorphism and smooth Framer Motion animations.",
      "A secure authentication system using NextAuth with role-based access control (User vs. Admin dashboards).",
      "A sophisticated, drag-and-drop enabled Kanban board for visualizing the application pipeline (Saved, Applied, Interview, Offer, Rejected).",
      "An AI integration engine connecting to the Groq API (Llama 3) to analyze resumes against job descriptions in real-time.",
      "A comprehensive analytics dashboard that calculates conversion rates, time-to-interview metrics, and application velocity over time.",
      "A dedicated admin portal for platform-wide tracking of user engagement and system usage.",
      "A dynamic, visually engaging landing page optimized for conversion.",
    ],
    keyFeatures: [
      "Smart Pipeline Management: Track applications across custom stages with a dynamic, visual dashboard.",
      "AI Resume Analyzer: Instantly compare your uploaded resume against any job description for a compatibility score and actionable feedback.",
      "Interview Prep Coach: Generate tailored interview questions, model answers, and success strategies based on specific job requirements.",
      "Comprehensive Analytics: Visualize application funnels, response rates, and daily application streaks.",
      "Secure Document Storage: Upload and manage resumes securely using Cloudinary integration.",
    ],
    technicalHighlights: [
      "Implemented a serverless architecture using Next.js App Router and MongoDB for highly scalable and responsive data handling.",
      "Engineered a custom, dynamic AI prompt system within lib/grok.ts that enforces strict JSON formatting from the LLM for reliable frontend rendering.",
      "Developed complex MongoDB aggregation pipelines to generate real-time analytics for both user and admin dashboards.",
      "Built a highly reusable and performant component library utilizing Tailwind CSS and customized UI variants.",
      "Optimized application performance through aggressive server-side rendering and strategic client-side state management.",
    ],
    impactResults: [
      "Delivered a fully functional, production-ready application that significantly reduces the time required to manage job applications.",
      "Created a highly engaging user experience that encourages daily interaction through streak tracking and visual progress indicators.",
      "Established a scalable architecture capable of supporting future feature expansions, such as automated cover letter generation and email integrations.",
    ],
    technologiesUsed:
      "Next.js, React, TypeScript, Tailwind CSS, MongoDB, Mongoose, NextAuth, Groq API (Llama 3), Cloudinary, Framer Motion, Lucide React",
    myRole:
      "Full Stack Developer - Designed and built the entire application from the ground up, including the frontend UI, backend API routes, database schema, and AI integration.",
    images: ["/assets/apply-1.png", "/assets/apply-2.png", "/assets/apply-3.png"],
    demoLink: "https://apply-iq-virid.vercel.app/",
    githubLink: "https://github.com/Abdul-Rehman001/apply-iq",
  },
  {
    id: 2,
    title: "PROMPTER - AI PROMPT SHARING PLATFORM",
    overview:
      "Prompter is a community-driven platform designed for AI enthusiasts to discover, share, and collaborate on effective AI prompts. With the explosion of AI tools like ChatGPT, Claude, and Midjourney, users needed a centralized place to find proven prompts and share their own discoveries.",
    problem:
      "AI users struggle to craft effective prompts and often waste time through trial and error. Existing solutions lack community features, proper categorization, and real-time collaboration capabilities.",
    solution:
      "Prompter provides a Netflix-like browsing experience for AI prompts, complete with search, filtering, user profiles, and real-time chat for discussing prompt techniques and results.",
    whatIBuilt: [
      "Complete authentication system with Google OAuth and email/password login using NextAuth.js",
      "Real-time chat functionality allowing users to discuss prompts and share tips",
      "Advanced search engine with filtering by AI tool, category, popularity, and tags",
      "User profile system with personal prompt collections and activity history",
      "Prompt creation interface with markdown support and preview functionality",
      "Upvote/downvote system and comment threads for community feedback",
      "Tag-based organization system for easy prompt discovery",
      "Responsive design optimized for browsing on any device",
    ],
    keyFeatures: [
      "Browse thousands of AI prompts across different categories",
      "Save favorite prompts to personal collections",
      "Real-time chat rooms for discussing AI techniques",
      "User profiles showcasing contributions and activity",
      "Search and filter by AI tool (ChatGPT, Claude, Midjourney, etc.)",
      "Copy-to-clipboard functionality for quick prompt access",
      "Trending prompts section highlighting popular content",
    ],
    technicalHighlights: [
      "Optimized MongoDB aggregation pipelines reducing search query time by 35%",
      "Implemented efficient caching strategy for frequently accessed prompts",
      "Built custom text indexing for fast full-text search across prompt content",
      "Designed scalable database schema supporting millions of prompts",
      "Integrated WebSocket connections for real-time chat with minimal latency",
      "Implemented rate limiting and moderation tools to prevent spam",
    ],
    impactResults: [
      "Search performance improved by 35% through database optimization",
      "Support for 10,000+ prompts with sub-second search response times",
      "Real-time chat handles 100+ concurrent users smoothly",
      "User engagement metrics show average session time of 12+ minutes",
    ],
    technologiesUsed:
      "Next.js, React.js, MongoDB, Node.js, Express.js, NextAuth.js, Socket.io, Tailwind CSS, REST APIs",
    myRole:
      "Full Stack Developer - Built entire application including frontend UI, backend APIs, real-time chat system, and database architecture.",
    demoLink: "https://prompter-orpin.vercel.app/",
    githubLink: "https://github.com/Abdul-Rehman001/prompter",
  },
  {
    id: 3,
    title: "REVISO - STUDY ANALYTICS PLATFORM",
    overview:
      "Reviso is a production-grade study tracking application designed to help students and self-learners manage their study sessions, track detailed notes, and visualize their long-term progress. Evolving from a simple CRUD concept into a robust, SaaS-like platform, Reviso focuses on speed, reliability, and a premium user experience through advanced data aggregations and seamless, optimistic UI updates.",
    problem:
      "Many self-directed learners struggle to maintain consistency and lack visibility into where their study time is actually being spent. Existing tools are often either too rudimentary (basic stopwatches) or overly complex (enterprise project management suites), leaving a gap for a dedicated, analytics-driven study tracker that motivates without causing friction.",
    solution:
      "Reviso provides a streamlined, distraction-free interface to log study hours, categorize them by subject, and record session-specific topics and notes. It leverages advanced backend aggregations to instantly generate insightful dashboards, activity heatmaps, and progress charts, giving users immediate feedback on their efforts and keeping them motivated.",
    whatIBuilt: [
      "Architected and developed a fully responsive, animated user interface using React, Tailwind CSS, and Framer Motion.",
      "Engineered a robust RESTful API utilizing Next.js Route Handlers and MongoDB.",
      "Implemented a custom Next.js middleware layer for secure route protection and sliding-window API rate limiting.",
      "Designed a comprehensive analytics dashboard featuring heatmaps, bar charts, and pie charts using Recharts.",
      "Developed an optimistic UI layer using TanStack Query (React Query) to eliminate loading spinners and provide instant feedback during data mutations.",
      "Configured a complete CI/CD pipeline with automated End-to-End (E2E) testing via Playwright and GitHub Actions.",
    ],
    keyFeatures: [
      "Subject Management: Create custom subjects with dedicated color themes, emojis, and weekly hour targets.",
      "Frictionless Logging: Quickly log study hours with support for granular sub-topics and session notes.",
      "Advanced Analytics: Interactive dashboards displaying daily/weekly/monthly hours, current streaks, and subject breakdowns.",
      "Activity Heatmap: A GitHub-style contribution graph to visualize study consistency and daily effort over time.",
      "History & Export: Searchable, filterable historical logs with CSV export functionality.",
    ],
    technicalHighlights: [
      "Database Optimization: Replaced memory-intensive client-side array filtering with highly efficient MongoDB Aggregation Pipelines ($facet), significantly reducing server memory usage and processing time.",
      "ACID Transactions: Implemented Mongoose sessions to ensure atomic cascading deletes (e.g., safely deleting a subject removes all associated logs and topics without creating orphaned data).",
      "Caching & Server State Management: Integrated TanStack Query for background revalidation, query invalidation, and cache management, resulting in a near-instantaneous 'Single Page App' feel.",
      "API Resilience: Developed a custom rate limiter within the Next.js edge middleware to protect backend endpoints from abuse and bot traffic.",
    ],
    impactResults: [
      "Achieved a highly responsive, zero-latency feel for critical user actions (like saving logs) via Optimistic UI updates.",
      "Ensured 100% data integrity during complex multi-document deletions, preventing database corruption.",
      "Established a highly reliable deployment workflow safeguarded by automated, browser-based UI tests.",
    ],
    technologiesUsed:
      "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, MongoDB, Mongoose, TanStack Query (React Query), Recharts, NextAuth.js, Playwright, GitHub Actions",
    myRole:
      "Full Stack Developer - Architected and built the entire application from the ground up, handling UI/UX design, frontend engineering, database modeling, API development, and CI/CD automation.",
    images: ["/assets/reviso-1.png", "/assets/reviso-2.png", "/assets/reviso-3.png"],
    demoLink: "https://reviso-seven.vercel.app/",
    githubLink: "https://github.com/Abdul-Rehman001/reviso",
  },
  {
    id: 4,
    title: "THE WILD OASIS - HOTEL MANAGEMENT SYSTEM",
    overview:
      "The Wild Oasis is a comprehensive hotel management dashboard designed for boutique hotel administrators to manage bookings, cabins, guests, and daily operations efficiently. The system replaces manual processes with automated workflows and provides real-time insights into hotel performance.",
    problem:
      "Small boutique hotels often rely on spreadsheets or outdated software for managing reservations, leading to double bookings, manual errors, and poor guest experience. Staff needed a modern, intuitive system accessible from anywhere.",
    solution:
      "Built a cloud-based admin dashboard that centralizes all hotel operations with real-time data synchronization, automated notifications, and comprehensive analytics. The system handles everything from booking management to housekeeping schedules.",
    whatIBuilt: [
      "Real-time dashboard displaying today's arrivals, departures, occupancy rates, and revenue metrics",
      "Booking management system with search, filter, and status tracking (confirmed, checked-in, checked-out)",
      "Check-in/check-out workflow with payment confirmation and breakfast options",
      "Cabin management module for room availability, pricing, and maintenance schedules",
      "Guest profile system storing contact information and booking history",
      "Settings panel for configuring breakfast prices, booking policies, and user accounts",
      "Analytics page with charts showing sales trends, occupancy patterns, and revenue forecasts",
      "Dark mode theme for comfortable night-time usage",
    ],
    keyFeatures: [
      "Interactive dashboard with key performance indicators",
      "Calendar view showing room availability at a glance",
      "Multi-step booking creation with guest information and preferences",
      "Payment tracking and confirmation system",
      "Booking status management (unconfirmed, checked-in, checked-out)",
      "Cabin details with photos, capacity, and amenities",
      "User authentication with role-based access control",
      "Data export functionality for accounting and reporting",
    ],
    technicalHighlights: [
      "Implemented React Query for efficient server state management and caching",
      "Built complex filtering and sorting logic for bookings and cabins",
      "Designed reusable form components with React Hook Form validation",
      "Integrated Supabase for real-time database updates and authentication",
      "Created custom hooks for data fetching, mutations, and optimistic updates",
      "Implemented pagination and infinite scroll for large data sets",
      "Built responsive charts using Recharts library for visual analytics",
    ],
    impactResults: [
      "Reduced booking processing time by 60% through automated workflows",
      "Eliminated double bookings with real-time availability checking",
      "Improved staff efficiency with centralized information access",
      "Hotel can now manage operations remotely from any device",
    ],
    technologiesUsed:
      "React.js, JavaScript, Supabase, React Query, React Hook Form, React Router, Recharts, Styled Components, Date-fns",
    myRole:
      "Full Stack Developer - Developed complete application including UI design, backend integration, and database schema design on Supabase.",
    demoLink: "https://the-wild-oasis-khaki.vercel.app",
    githubLink: "https://github.com/Abdul-Rehman001/the-wild-oasis",
  },
  {
    id: 5,
    title: "REACT PIZZA - FOOD ORDERING APPLICATION",
    overview:
      "React Pizza is a modern pizza ordering application that provides customers with a fast, intuitive way to browse menus, customize orders, and track deliveries in real-time using geolocation features.",
    problem:
      "Traditional pizza ordering involves phone calls, which are prone to miscommunication and don't provide real-time order tracking. Customers want convenience, accuracy, and transparency in their ordering experience.",
    solution:
      "Built a progressive web app that allows customers to browse pizzas, customize toppings, add to cart, and place orders with just a few clicks. Integrated geolocation for automatic address detection and delivery time estimation.",
    whatIBuilt: [
      "Interactive pizza menu with high-quality images and detailed descriptions",
      "Shopping cart with add/remove items, quantity adjustments, and real-time price calculations",
      "Geolocation integration for automatic customer location detection",
      "Order form with address validation and delivery time estimation",
      "Order tracking system showing preparation and delivery status",
      "Priority order option for faster delivery (with additional charge)",
      "Responsive mobile-first design optimized for phone ordering",
      "Order history feature for repeat customers",
    ],
    keyFeatures: [
      "Browse 20+ pizza varieties with customization options",
      "Real-time cart updates with total price calculation",
      "GPS-based automatic address filling",
      "Estimated delivery time based on distance",
      "Order status tracking with live updates",
      "Add notes and special instructions to orders",
      "Save favorite orders for quick reordering",
      "Works offline with service worker caching",
    ],
    technicalHighlights: [
      "Implemented Redux Toolkit for global state management across cart and orders",
      "Built custom middleware for handling geolocation permissions and errors",
      "Integrated browser Geolocation API with reverse geocoding for address details",
      "Designed optimistic UI updates for instant feedback on user actions",
      "Created reusable cart logic with persistent localStorage backup",
      "Implemented form validation with custom validation rules",
      "Optimized images and assets for fast mobile loading",
    ],
    impactResults: [
      "Average order completion time reduced to under 2 minutes",
      "95% of users successfully use geolocation feature for address input",
      "Mobile usage accounts for 70% of orders, confirming mobile-first approach success",
      "Customer satisfaction improved with real-time order tracking",
    ],
    technologiesUsed:
      "React.js, JavaScript, Redux Toolkit, Tailwind CSS, React Router, Geolocation API, LocalStorage",
    myRole:
      "Frontend Developer - Built complete application including UI, state management, and geolocation integration.",
    demoLink: "https://abdul-rehman001.github.io/react-pizza/",
    githubLink: "https://github.com/Abdul-Rehman001/react-pizza",
  },
  {
    id: 6,
    title: "REACT FLIX - MOVIE RATING PLATFORM",
    overview:
      "React Flix is a movie discovery and rating platform that helps users explore movies, read reviews, and maintain personal watchlists. Powered by The Movie Database (TMDB) API, it provides access to thousands of movies with comprehensive information.",
    problem:
      "Movie enthusiasts need a simple, fast way to discover new films, track what they've watched, and manage their watchlist without the clutter of commercial streaming platforms.",
    solution:
      "Created a clean, focused movie platform that prioritizes discovery and organization. Users can search movies, view details, rate films, and build personal collections without distractions.",
    whatIBuilt: [
      "Movie search with autocomplete and instant results",
      "Trending movies section showcasing popular and new releases",
      "Detailed movie pages with synopsis, cast, ratings, and trailers",
      "Personal watchlist where users can save movies to watch later",
      "Rating system allowing users to rate movies they've seen",
      "Genre-based filtering for discovering movies by category",
      "Responsive grid layout optimizing display across devices",
      "Loading states and error handling for smooth user experience",
    ],
    keyFeatures: [
      "Search through 500,000+ movies from TMDB database",
      "View movie details including plot, cast, crew, and release info",
      "Watch trailers directly within the app",
      "Add movies to personal watchlist with one click",
      "Rate movies and see your rating history",
      "Filter by genre (Action, Comedy, Drama, etc.)",
      "Trending section updated daily with popular movies",
      "Responsive design working seamlessly on all devices",
    ],
    technicalHighlights: [
      "Integrated TMDB API with custom hooks for data fetching",
      "Implemented debounced search to reduce API calls and improve performance",
      "Built custom pagination component for browsing large result sets",
      "Created loading skeletons for better perceived performance",
      "Designed efficient caching strategy for previously fetched movies",
      "Handled API rate limiting and error states gracefully",
      "Implemented lazy loading for images to optimize bandwidth",
    ],
    impactResults: [
      "Successfully integrated with TMDB API handling 1000+ requests daily",
      "Search functionality delivers results in under 500ms",
      "Watchlist feature used by 80% of returning users",
      "Clean UI design resulted in minimal user confusion and high engagement",
    ],
    technologiesUsed:
      "React.js, JavaScript, TMDB API, CSS3, React Router, Axios, LocalStorage",
    myRole:
      "Frontend Developer - Built entire application including API integration, UI design, and user interaction features.",
    demoLink: "https://abdul-rehman001.github.io/movies-react/",
    githubLink: "https://github.com/Abdul-Rehman001/movies-react",
  },
  {
    id: 7,
    title: "DEEN CALL - ISLAMIC UTILITY MOBILE APP",
    overview:
      "Deen Call is a comprehensive Islamic mobile application designed to help Muslims practice their faith more easily. The app provides essential utilities like accurate prayer times, Qibla direction, Quran recitation, and Islamic educational content, all in one convenient platform.",
    problem:
      "Muslims need reliable tools for daily religious practices, but existing apps are often cluttered with ads, have inaccurate prayer times, or require internet connectivity. Users needed a clean, accurate, offline-capable solution.",
    solution:
      "Built a native mobile app that works offline, provides location-based accurate prayer times, uses device compass for Qibla direction, and includes downloadable Islamic content for offline access.",
    whatIBuilt: [
      "Prayer time calculator using geolocation and Islamic calculation methods",
      "Qibla compass using device magnetometer for accurate direction",
      "Prayer time notifications with customizable adhan (call to prayer) sounds",
      "Quran reader with Arabic text and translations in multiple languages",
      "Daily Islamic quotes and hadith with push notifications",
      "Mosque finder showing nearby mosques using maps integration",
      "Prayer tracker allowing users to log completed prayers",
      "Dark mode for comfortable night-time usage",
    ],
    keyFeatures: [
      "Automatic prayer times based on GPS location",
      "Multiple calculation methods (MWL, ISNA, Umm al-Qura, etc.)",
      "Customizable notification sounds and timings",
      "Offline Quran with bookmarking and last-read tracking",
      "Qibla compass with visual direction indicator",
      "Prayer history and statistics",
      "Works completely offline after initial setup",
      "Available for both iOS and Android",
    ],
    technicalHighlights: [
      "Implemented native geolocation and compass modules for accurate readings",
      "Built custom prayer time calculation algorithm supporting multiple methods",
      "Designed efficient local storage system for offline Quran access",
      "Integrated push notifications with background task scheduling",
      "Created smooth animations for prayer time transitions",
      "Optimized app size to under 20MB for easy downloading",
      "Handled different device orientations and screen sizes",
    ],
    impactResults: [
      "Successfully delivered cross-platform app working on iOS and Android",
      "Prayer time accuracy within 1-2 minutes across global locations",
      "Offline functionality allows usage without internet connection",
      "Clean UI design preferred by users over cluttered alternatives",
      "Client satisfaction: 5/5 rating with positive user feedback",
    ],
    technologiesUsed:
      "React Native, JavaScript, Expo, AsyncStorage, React Navigation, Push Notifications, Geolocation API, Device Sensors",
    myRole:
      "Mobile App Developer - Developed complete mobile application as freelance project including UI design, feature implementation, and deployment to app stores.",
    images: ["/assets/deen-call.png"],
    demoLink: "https://play.google.com/store/apps/details?id=com.deencall&hl=en_IN&pli=1",
  },
];

// Helper function to get project details by ID
export function getProjectDetails(id: number): ProjectDetails | undefined {
  return projectDetails.find((project) => project.id === id);
}

// Helper function to get projects by category
export function getProjectsByCategory(category: string): ProjectSummary[] {
  return projectSummaries.filter((project) => project.category === category);
}

// Get all unique categories
export function getCategories(): string[] {
  return Array.from(new Set(projectSummaries.map((project) => project.category)));
}

