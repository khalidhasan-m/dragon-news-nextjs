import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "EU and US reach provisional trade deal to avoid tariff hikes",
    category: "Business",
    timestamp: "2026-05-20T06:15:00Z",
  },
  {
    id: 2,
    title: "UK inflation falls to 2.8% as energy costs stabilize",
    category: "Economy",
    timestamp: "2026-05-20T06:18:15Z",
  },
  {
    id: 3,
    title: "China and US officials set to discuss $30B tariff reduction",
    category: "World",
    timestamp: "2026-05-20T05:57:25Z",
  },
  {
    id: 4,
    title: "Airtel's 5G priority lane sparks new net neutrality debate",
    category: "Technology",
    timestamp: "2026-05-20T06:00:00Z",
  },
  {
    id: 5,
    title: "Oklahoma City Thunder rise to top of NBA playoff favorites",
    category: "Sports",
    timestamp: "2026-05-22T10:17:22Z",
  },
  {
    id: 6,
    title: "Secretary of State reports 'slight progress' in Iran peace talks",
    category: "Politics",
    timestamp: "2026-05-22T10:20:05Z",
  },
  {
    id: 7,
    title:
      "Record number of students participate in annual job shadowing program",
    category: "Education",
    timestamp: "2026-05-23T01:00:00Z",
  },
  {
    id: 8,
    title: "Global space weather models predict minor G1 geomagnetic storm",
    category: "Science",
    timestamp: "2026-05-23T01:15:00Z",
  },
  {
    id: 9,
    title:
      "Local authorities announce new infrastructure project for Barishal port",
    category: "Regional",
    timestamp: "2026-05-23T01:16:00Z",
  },
  {
    id: 10,
    title: "Tech giant announces breakthrough in quantum computing efficiency",
    category: "Technology",
    timestamp: "2026-05-23T01:17:00Z",
  },
  {
    id: 11,
    title: "Major film studio drops surprise trailer for summer blockbuster",
    category: "Entertainment",
    timestamp: "2026-05-23T01:17:00Z",
  },
  {
    id: 12,
    title:
      "Health organizations launch new awareness campaign for summer heat safety",
    category: "Health",
    timestamp: "2026-05-23T01:17:00Z",
  },
  {
    id: 13,
    title:
      "Environmental researchers report record-high levels of reforestation",
    category: "Environment",
    timestamp: "2026-05-23T01:17:00Z",
  },
  {
    id: 14,
    title:
      "Stock markets show resilience despite ongoing global trade tensions",
    category: "Finance",
    timestamp: "2026-05-23T01:17:00Z",
  },
  {
    id: 15,
    title: "New international art exhibit opens in the capital city",
    category: "Culture",
    timestamp: "2026-05-23T01:17:00Z",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center gap-4 bg-gray-200 py-4 px-4 container mx-auto">
      <button className="btn bg-[#D72050] text-white">Latest News</button>
      <Marquee pauseOnHover={true}>
        {news.map((n) => {
          return (
            <span className="mx-2" key={n.id}>
              {n.title}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
