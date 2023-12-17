"use client";

/* components */
import Footer from "@/components/footer";
import AddTicketModal from "@/components/modals/addTicketModal";
import RegisterModal from "@/components/modals/registerModal";
import SearchArea from "@/components/search-area";
import TicketCard from "@/components/ticket-card";
import { data } from "@/data/fake-data";

// console.log(data);

export default function Home() {
  return (
    <main className="pt-20 pb-5">
      <RegisterModal />
      <AddTicketModal />
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
