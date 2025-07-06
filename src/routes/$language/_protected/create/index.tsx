import { cn } from "@/lib/cn";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/$language/_protected/create/")({ component: LoggedInHome });

const rows = 10;
const cols = 10;

function LoggedInHome() {
    const gridRef = useRef<HTMLDivElement>(null);
    const triangleRefs = useRef(Array.from({ length: rows }, () => Array(cols).fill(null)));

    useEffect(() => {
        triangleRefs.current.forEach((rowRefs, row) => {
            rowRefs.forEach((ref, col) => {
                if (ref) {
                    const boundingBox = ref.getBoundingClientRect();
                    console.log(`Triangle [${row},${col}] bounding box:`, boundingBox);
                }
            });
        });
    }, []);

    return (
        <div className="relative h-full w-full">
            <div
                ref={gridRef}
                className="bg-wood-800 grid w-fit"
                style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
            >
                {[...Array(rows)].map((_, row) =>
                    [...Array(cols)].map((_, col) => (
                        <div
                            key={`${row}-${col}`}
                            ref={(el) => {
                                if ((row + col) % 2 !== 0) {
                                    triangleRefs.current[row][col] = el;
                                }
                            }}
                            className={cn(
                                "bg-wood-100 -mt-[50px] h-[100px] w-[86.6px] scale-[0.948] hover:opacity-80",
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

// 100 160px
// 3 5.12px 2.56px
