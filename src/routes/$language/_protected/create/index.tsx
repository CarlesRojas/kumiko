import { cn } from "@/lib/cn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$language/_protected/create/")({ component: LoggedInHome });

const rows = 10;
const cols = 10;

function LoggedInHome() {
    return (
        <div className="relative h-full w-full">
            <div className="grid w-fit grid-cols-10">
                {[...Array(rows)].map((_, row) =>
                    [...Array(cols)].map((_, col) => (
                        <div
                            key={`${row}-${col}`}
                            className={cn(
                                "bg-wood-400 -mt-[5rem] h-[10rem] w-[8.66rem] scale-[0.85] hover:opacity-80",
                                row === 0 && "mt-0",
                                (row + col) % 2 === 0
                                    ? "triangle-left origin-[66.5%_50%]"
                                    : "triangle-right origin-[33.4%_50%]",
                            )}
                        />
                    )),
                )}
            </div>
        </div>
    );
}
