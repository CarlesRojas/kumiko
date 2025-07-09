import { cn } from "@/lib/cn";
import { useRef, type RefObject } from "react";
import { TransformComponent, TransformWrapper, type ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { useDebounceCallback, useResizeObserver } from "usehooks-ts";

const rows = 20;
const cols = 10;

const Canvas = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const transformRef = useRef<ReactZoomPanPinchRef | null>(null);

    const updateScale = () => {
        const grid = gridRef.current;
        const transform = transformRef.current;
        if (grid && transform) transform.zoomToElement(grid, undefined, 100);
    };
    const onResize = useDebounceCallback(updateScale, 200);
    useResizeObserver({ ref: wrapperRef as RefObject<HTMLElement>, onResize });

    return (
        <div ref={wrapperRef} className="relative h-full w-full">
            <TransformWrapper
                ref={transformRef}
                centerOnInit
                minScale={0.01}
                maxScale={10}
                doubleClick={{ disabled: true }}
                zoomAnimation={{ animationTime: 200 }}
                alignmentAnimation={{ animationTime: 200 }}
                limitToBounds={false}
                centerZoomedOut={false}
            >
                <TransformComponent wrapperClass="relative !h-full !w-full ">
                    <div
                        ref={gridRef}
                        className="grid w-fit"
                        style={{ gridTemplateColumns: `repeat(${cols}, minmax(min-content, 1fr))` }}
                    >
                        {[...Array(rows)].map((_, row) =>
                            [...Array(cols)].map((_, col) => (
                                <div
                                    key={`${row}-${col}`}
                                    className={cn(
                                        "bg-wood-300 -mt-[50px] h-[100px] w-[86.6px] scale-[0.89] hover:opacity-80",
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
        </div>
    );
};

export default Canvas;
