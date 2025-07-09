import { getPayload } from "payload";
import config from "@payload-config";

// const categories = [
//   {
//     name: "All",
//     slug: "all",
//     subcategories: [{ name: "All Selections", slug: "all-selections" }],
//   },
//   {
//     name: "Sports Events & Lessons",
//     color: "#82C4C4", // A teal-ish color, you can change this
//     slug: "sports-events-lessons",
//     subcategories: [
//       { name: "Tournament Hosting", slug: "tournament-hosting" },
//       { name: "Event Tickets & Entry Fees", slug: "event-tickets-entry-fees" },
//       { name: "Sports Coaching & Clinics", slug: "sports-coaching-clinics" },
//       { name: "Pickleball", slug: "pickleball" },
//       { name: "Golf Events", slug: "golf-events" },
//       { name: "Team Registrations", slug: "team-registrations" },
//       { name: "Sporting Goods & Apparel", slug: "sporting-goods-apparel" },
//     ],
//   },
//   {
//     name: "Business & Money",
//     color: "#FFB347",
//     slug: "business-money",
//     subcategories: [
//       { name: "Accounting", slug: "accounting" },
//       {
//         name: "Entrepreneurship",
//         slug: "entrepreneurship",
//       },
//       { name: "Gigs & Side Projects", slug: "gigs-side-projects" },
//       { name: "Investing", slug: "investing" },
//       { name: "Management & Leadership", slug: "management-leadership" },
//       {
//         name: "Marketing & Sales",
//         slug: "marketing-sales",
//       },
//       { name: "Networking, Careers & Jobs", slug: "networking-careers-jobs" },
//       { name: "Personal Finance", slug: "personal-finance" },
//       { name: "Real Estate", slug: "real-estate" },
//     ],
//   },
//   {
//     name: "Software Development",
//     color: "#7EC8E3",
//     slug: "software-development",
//     subcategories: [
//       { name: "Web Development", slug: "web-development" },
//       { name: "Mobile Development", slug: "mobile-development" },
//       { name: "Game Development", slug: "game-development" },
//       { name: "Programming Languages", slug: "programming-languages" },
//       { name: "DevOps", slug: "devops" },
//       { name: "Cloud", slug: "cloud" },
//     ],
//   },
//   {
//     name: "Writing & Publishing",
//     color: "#D8B5FF",
//     slug: "writing-publishing",
//     subcategories: [
//       { name: "Fiction", slug: "fiction" },
//       { name: "Non-Fiction", slug: "non-fiction" },
//       { name: "Blogging", slug: "blogging" },
//       { name: "Copywriting", slug: "copywriting" },
//       { name: "Self-Publishing", slug: "self-publishing" },
//     ],
//   },
//   {
//     name: "Other",
//     color: "#AFE062",
//     slug: "other",
//     subcategories: [
//       { name: "Cheap", slug: "cheap" },
//       { name: "Expensive", slug: "expensive" },
//       { name: "Just Right", slug: "just-right" },
//     ],
//   },
//   {
//     name: "Education",
//     color: "#FFE066",
//     slug: "education",
//     subcategories: [
//       { name: "Online Courses", slug: "online-courses" },
//       { name: "Tutoring", slug: "tutoring" },
//       { name: "Test Preparation", slug: "test-preparation" },
//       { name: "Language Learning", slug: "language-learning" },
//     ],
//   },
//   {
//     name: "Self Improvement",
//     color: "#96E6B3",
//     slug: "self-improvement",
//     subcategories: [
//       { name: "Productivity", slug: "productivity" },
//       { name: "Personal Development", slug: "personal-development" },
//       { name: "Mindfulness", slug: "mindfulness" },
//       { name: "Career Growth", slug: "career-growth" },
//     ],
//   },
//   {
//     name: "Fitness & Health",
//     color: "#FF9AA2",
//     slug: "fitness-health",
//     subcategories: [
//       { name: "Workout Plans", slug: "workout-plans" },
//       { name: "Nutrition", slug: "nutrition" },
//       { name: "Mental Health", slug: "mental-health" },
//       { name: "Yoga", slug: "yoga" },
//     ],
//   },
//   {
//     name: "Design",
//     color: "#B5B9FF",
//     slug: "design",
//     subcategories: [
//       { name: "UI/UX", slug: "ui-ux" },
//       { name: "Graphic Design", slug: "graphic-design" },
//       { name: "3D Modeling", slug: "3d-modeling" },
//       { name: "Typography", slug: "typography" },
//       { name: "Drawing", slug: "drawing" },
//       { name: "Painting", slug: "painting" },
//     ],
//   },
//   {
//     name: "Music",
//     color: "#FFD700",
//     slug: "music",
//     subcategories: [
//       { name: "Songwriting", slug: "songwriting" },
//       { name: "Music Production", slug: "music-production" },
//       { name: "Music Theory", slug: "music-theory" },
//       { name: "Music History", slug: "music-history" },
//     ],
//   },
//   {
//     name: "Video & Photography",
//     color: "#FF6B6B",
//     slug: "video-photography",
//     subcategories: [
//       { name: "Documentary", slug: "documentary" },
//       { name: "Comedy", slug: "comedy" },
//       { name: "Nature", slug: "nature" },
//       { name: "Urban", slug: "urban" },
//       { name: "Stock Photos", slug: "stock-photos" },
//     ],
//   },
// ];

const categories = [
  {
    name: "All Services",
    slug: "all",
  },
  {
    name: "Compute",
    slug: "compute",
    color: "#7EC8E3",
    subcategories: [
      { name: "Small Instances", slug: "small-instances" },
      { name: "Medium Instances", slug: "medium-instances" },
      { name: "Large Instances", slug: "large-instances" },
      { name: "GPU Instances", slug: "gpu-instances" },
      { name: "Reserved Instances", slug: "reserved-instances" },
    ],
  },
  {
    name: "Storage & Databases",
    slug: "storage-databases",
    color: "#FFB347",
    subcategories: [
      { name: "Block Storage", slug: "block-storage" },
      { name: "Object Storage", slug: "object-storage" },
      { name: "Database Services", slug: "database-services" },
      { name: "In-Memory Databases", slug: "in-memory-databases" },
      { name: "Backup Solutions", slug: "backup-solutions" },
      { name: "High-Performance Storage", slug: "high-performance-storage" },
    ],
  },
  {
    name: "Disaster Recovery & Replication",
    slug: "disaster-recovery",
    color: "#FF6B6B",
    subcategories: [
      { name: "Zerto Replication", slug: "zerto-replication" },
      { name: "Continuous Data Protection", slug: "continuous-data-protection" },
      { name: "Multi-Site Replication", slug: "multi-site-replication" },
    ],
  },
  {
    name: "Networking",
    slug: "networking",
    color: "#96E6B3",
    subcategories: [
      { name: "Virtual Networks", slug: "virtual-networks" },
      { name: "Load Balancers", slug: "load-balancers" },
      { name: "VPN Services", slug: "vpn-services" },
    ],
  },
  {
    name: "Security & Compliance",
    slug: "security-compliance",
    color: "#FF9AA2",
    subcategories: [
      { name: "Firewall Services", slug: "firewall-services" },
      { name: "DDoS Protection", slug: "ddos-protection" },
      { name: "Compliance Certifications", slug: "compliance-certifications" },
      { name: "Security Monitoring", slug: "security-monitoring" },
      { name: "Encryption Services", slug: "encryption-services" },
    ],
  },
  {
    name: "Managed Services",
    slug: "managed-services",
    color: "#D8B5FF",
    subcategories: [
      { name: "Monitoring & Alerts", slug: "monitoring-alerts" },
      { name: "24/7 Support", slug: "24-7-support" },
      { name: "Managed Backup", slug: "managed-backup" },
    ],
  },
  {
    name: "Hybrid Solutions",
    slug: "hybrid-solutions",
    color: "#FFE066",
    subcategories: [
      { name: "Cloud-to-Cloud Sync", slug: "cloud-to-cloud-sync" },
      { name: "On-Premise to Cloud", slug: "on-premise-to-cloud" },
    ],
  },
  {
    name: "Infrastructure Services",
    slug: "infrastructure-services",
    color: "#AFE062",
    subcategories: [
      { name: "Colocation Services", slug: "colocation-services" },
      { name: "Web Hosting", slug: "web-hosting" },
      { name: "Physical Storage", slug: "physical-storage" },
      { name: "Dedicated Hardware", slug: "dedicated-hardware" },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({ config });

  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: "categories",
      data: {
        name: category.name,
        slug: category.slug,
        color: category.color,
        parent: null,
      },
    });

    for (const subCategory of category.subcategories || []) {
      await payload.create({
        collection: "categories",
        data: {
          name: subCategory.name,
          slug: subCategory.slug,
          parent: parentCategory.id,
        },
      });
    }
  }
};

try {
  await seed();
  console.log("database seeding successful");
  process.exit(0);
} catch (error) {
  console.log("database seeding error: ", error);
  process.exit(1);
}
