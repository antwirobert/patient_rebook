import { Button } from "./components/ui/button";
import { benefits } from "./constants";
import { cn } from "./lib/utils";

const App = () => {
  return (
    <main className="px-4 flex flex-col justify-center py-40">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-bold text-5xl max-md:text-3xl">
          Get 20–40 extra patient appointments per month without ads or new
          staff
        </h1>
        <p className="text-[#6b7282] mt-6 mb-10 text-[18px]">
          I build a simple follow-up & rebooking system for private clinics in
          14 days.
        </p>
        <ul className="flex flex-col items-center space-y-6">
          {benefits.map((item) => (
            <li
              key={item.id}
              className={cn(
                "flex items-center gap-2",
                item.id === 2 && "-ml-18",
              )}
            >
              <span className="bg-[#ebf5f2] rounded-full p-1">
                <item.icon className="size-4 text-[#36967a]" />
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-center gap-2">
          <Button className="px-10 py-[26px]">Book a 15-minute call</Button>
          <span className="text-xs text-[#6b7282]">
            No obligation • Takes 15 minutes
          </span>
        </div>
      </div>

      <span className="text-[#6b7282] absolute bottom-10 left-1/2 -translate-x-1/2 text-sm">
        © 2026 Robert Antwi
      </span>
    </main>
  );
};

export default App;
