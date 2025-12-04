export interface ProjectSummary {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  category: string;
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
}

export const projectSummaries: ProjectSummary[] = [
  {
    id: 1,
    title: "Bloomi5 Store Builder",
    shortDescription:
      "No-code website builder for creating e-commerce and service websites with drag-and-drop interface. Features 10+ pre-built templates and dynamic schema generation, reducing build time by 40%.",
    technologies: ["Next.js", "React.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    image: "/placeholder-project-1.jpg",
    category: "Platforms",
  },
  {
    id: 2,
    title: "Prompter",
    shortDescription:
      "Platform for discovering, sharing, and managing AI prompts with real-time chat, advanced search, and user authentication. Optimized MongoDB queries improved search performance by 35%.",
    technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    image: "/placeholder-project-2.jpg",
    category: "Platforms",
  },
  {
    id: 3,
    title: "Healing Clay - E-Commerce Store",
    shortDescription:
      "Fully responsive e-commerce application with cart management, checkout flow, and payment gateway integration. Optimized performance improved page load speed by 30%.",
    technologies: ["React.js", "Tailwind CSS", "REST APIs", "Stripe"],
    image: "/placeholder-project-3.jpg",
    category: "E-commerce",
  },
  {
    id: 4,
    title: "The Wild Oasis",
    shortDescription:
      "Administrative hotel management system for managing bookings, cabins, and guests. Features real-time dashboard, check-in/check-out flow, and comprehensive reporting.",
    technologies: ["React.js", "Supabase", "React Query", "Styled Components"],
    image: "/placeholder-project-4.jpg",
    category: "Management Systems",
  },
  {
    id: 5,
    title: "React Pizza",
    shortDescription:
      "Pizza ordering application with real-time geolocation, cart management, and order tracking. Features intuitive menu browsing and seamless checkout experience.",
    technologies: ["React.js", "Tailwind CSS", "Redux", "Geolocation API"],
    image: "/placeholder-project-5.jpg",
    category: "Food & Delivery",
  },
  {
    id: 6,
    title: "React Flix",
    shortDescription:
      "Movie browsing and rating website with API integration. Features search functionality, detailed movie information, and personal watchlist management.",
    technologies: ["React.js", "TMDB API", "CSS3"],
    image: "/placeholder-project-6.jpg",
    category: "Entertainment",
  },
  {
    id: 7,
    title: "Deen Call",
    shortDescription:
      "React Native mobile application providing Islamic utilities including prayer times, Qibla direction, and religious content. Cross-platform app for iOS and Android.",
    technologies: ["React Native", "JavaScript", "Geolocation API", "Islamic APIs"],
    image: "/placeholder-project-7.jpg",
    category: "Mobile Apps",
  },
];

export const projectDetails: ProjectDetails[] = [
  {
    id: 1,
    title: "BLOOMI5 STORE BUILDER",
    overview:
      "Bloomi5 is a comprehensive no-code platform that empowers users to create fully functional e-commerce and service websites without writing a single line of code. The platform combines an intuitive drag-and-drop interface with powerful backend automation to deliver professional websites in minutes.",
    problem:
      "Small businesses and entrepreneurs often struggle with the technical complexity and high costs of building custom websites. Traditional website builders lack flexibility, while custom development is expensive and time-consuming.",
    solution:
      "Bloomi5 bridges this gap by providing a visual builder that generates dynamic database schemas and deploys production-ready websites instantly. Users can choose from pre-built templates or create custom designs, with all backend infrastructure handled automatically.",
    whatIBuilt: [
      "Drag-and-drop interface using React.js and Tailwind CSS for seamless component placement and customization",
      "Dynamic database schema generation system that automatically creates MongoDB collections based on user requirements",
      "10+ pre-built, fully customizable templates for various business types (e-commerce, services, portfolios)",
      "Real-time preview system allowing users to see changes instantly before publishing",
      "One-click deployment integration with Vercel for automatic website hosting",
      "Component library with 20+ reusable elements (headers, footers, product cards, contact forms)",
      "Responsive design system ensuring all websites work perfectly on mobile, tablet, and desktop",
    ],
    keyFeatures: [
      "Visual drag-and-drop editor with intuitive controls",
      "Pre-built templates for quick setup",
      "Custom styling options (colors, fonts, spacing)",
      "Dynamic form builder for contact and order forms",
      "Image upload and management system",
      "SEO optimization tools built-in",
      "Mobile-responsive by default",
    ],
    technicalHighlights: [
      "Implemented complex state management for handling nested components and user interactions",
      "Built custom hooks for drag-and-drop functionality with collision detection",
      "Designed flexible schema generation algorithm supporting various data types",
      "Integrated real-time collaboration features for team editing",
      "Optimized performance for smooth editing experience even with 50+ components",
    ],
    impactResults: [
      "Reduced website build time by 40% compared to traditional development methods",
      "Successfully deployed 15+ client websites across different industries",
      "Average user can build a complete website in under 2 hours",
      "Zero coding knowledge required from end users",
    ],
    technologiesUsed:
      "Next.js, React.js, TypeScript, MongoDB, Tailwind CSS, Vercel, React DnD, Zustand, REST APIs",
    myRole:
      "Full Stack Developer - Designed and developed the entire platform from concept to deployment, including frontend interface, backend APIs, and database architecture.",
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
  },
  {
    id: 3,
    title: "HEALING CLAY - E-COMMERCE STORE",
    overview:
      "Healing Clay is a modern e-commerce platform specializing in natural clay-based skincare products. The store provides a seamless shopping experience with intuitive navigation, secure checkout, and real-time inventory management.",
    problem:
      "The client needed a fast, mobile-friendly e-commerce solution that could handle high traffic during promotional periods while providing excellent user experience and secure payment processing.",
    solution:
      "Built a lightweight, performant React application with optimized images, lazy loading, and efficient state management. Integrated Stripe for secure payments and implemented robust cart management logic.",
    whatIBuilt: [
      "Complete product catalog with filtering by category, price range, and product attributes",
      "Shopping cart system with add/remove items, quantity updates, and price calculations",
      "Multi-step checkout process with form validation and error handling",
      "Stripe payment gateway integration for secure credit card processing",
      "User account system with order history and saved addresses",
      "Product detail pages with image galleries and customer reviews",
      "Mobile-first responsive design ensuring perfect display on all devices",
      "Admin dashboard for inventory management and order processing",
    ],
    keyFeatures: [
      "Browse 50+ natural clay products with detailed descriptions",
      "Smart search with autocomplete suggestions",
      "Filter and sort products by multiple criteria",
      "Persistent cart that saves items across sessions",
      "Guest checkout and registered user options",
      "Order tracking and email confirmations",
      "Wishlist functionality for saving products",
      "Related product recommendations",
    ],
    technicalHighlights: [
      "Implemented code splitting and lazy loading, reducing initial bundle size by 40%",
      "Optimized images using next-gen formats (WebP) with fallbacks",
      "Built custom shopping cart hook with localStorage persistence",
      "Designed efficient state management using Context API",
      "Integrated Stripe Elements for PCI-compliant payment forms",
      "Implemented debounced search for better performance",
      "Added skeleton loaders for improved perceived performance",
    ],
    impactResults: [
      "Page load speed improved by 30% through optimization techniques",
      "Mobile conversion rate increased by 25% after responsive redesign",
      "Cart abandonment reduced by 15% with persistent cart feature",
      "Successfully processed 500+ orders in first three months",
    ],
    technologiesUsed:
      "React.js, JavaScript, Tailwind CSS, Stripe API, REST APIs, Context API, React Router, Axios",
    myRole:
      "Frontend Developer - Designed and implemented entire frontend application, integrated payment gateway, and optimized performance.",
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

