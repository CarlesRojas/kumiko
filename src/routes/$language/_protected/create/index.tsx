import { cn } from "@/lib/cn";
import { createFileRoute } from "@tanstack/react-router";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export const Route = createFileRoute("/$language/_protected/create/")({ component: LoggedInHome });

const rows = 10;
const cols = 10;

function LoggedInHome() {
    return (
        <TransformWrapper centerOnInit minScale={0.1} maxScale={2}>
            <TransformComponent wrapperClass="relative !h-full !w-full">
                <div className="grid w-fit" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                    {[...Array(rows)].map((_, row) =>
                        [...Array(cols)].map((_, col) => (
                            <div
                                key={`${row}-${col}`}
                                className={cn(
                                    "bg-wood-200 -mt-[50px] h-[100px] w-[86.6px] scale-[0.89] hover:opacity-80",
                                    row === 0 && "mt-0",
                                    (row + col) % 2 === 0
                                        ? "triangle-left origin-[66.5%_50%]"
                                        : "triangle-right origin-[33.4%_50%]",

                                    (row + col) % 2 === 0 && row === 0 && "triangle-left-first",
                                    (row + col) % 2 === 0 && row === rows - 1 && "triangle-left-last",

                                    (row + col) % 2 !== 0 && row === 0 && "triangle-right-first",
                                    (row + col) % 2 !== 0 && row === rows - 1 && "triangle-right-last",
                                )}
                            />
                        )),
                    )}
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
}

// 100 160px
// 3 5.12px 2.56px
