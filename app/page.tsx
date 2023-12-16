"use client";

/* components */
import Footer from "@/components/footer";
import SearchArea from "@/components/search-area";
import TicketCard from "@/components/ticket-card";

const data = [
  {
    title: "Learn JavaScript",
    description: "Complete a comprehensive JavaScript course.",
    rating: 4,
    progressPercentage: 40,
    status: "started",
    dateTime: new Date(2023, 9, 22, 14, 30), // October 22, 2023 14:30
  },
  {
    title: "Read a Book",
    description: "Read a book on psychology and write the things you learnt.",
    rating: 1,
    progressPercentage: 0,
    status: "not started",
    dateTime: new Date(2023, 9, 23, 11, 0), // October 23, 2023 11:00
  },
  {
    title: "Write a Blog Post",
    description: "Write an informative blog post on web development.",
    rating: 4,
    progressPercentage: 75,
    status: "started",
    dateTime: new Date(2023, 9, 25, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Learn Gin framework",
    description:
      "Learn more about Gin framework of GoLang and write a blog about it.",
    rating: 4,
    progressPercentage: 0,
    status: "not started",
    dateTime: new Date(2023, 8, 2, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Write another Blog Post",
    description: "Write an informative blog post on frontend web development",
    rating: 4,
    progressPercentage: 0,
    status: "not started",
    dateTime: new Date(2023, 1, 25, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
  {
    title: "Read about GraphQL",
    description: "Learn more about GraphQL and write queries and mutations",
    rating: 4,
    progressPercentage: 30,
    status: "started",
    dateTime: new Date(2023, 7, 15, 9, 0), // October 25, 2023 09:00
  },
];

// console.log(data);

export default function Home() {
  return (
    <main className="pt-20 pb-5">
      <SearchArea />
      {/* cards area */}
      <div className="w-full py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((data, idx) => {
            return (
              <TicketCard
                key={idx}
                title={data.title}
                description={data.description}
                rating={data.rating}
                progressPercentage={data.progressPercentage}
                status={data.status}
                dateTime={data.dateTime}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
