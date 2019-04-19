// @flow
import * as React from "react";
import elementResizeDetectorMaker from "element-resize-detector";

const { useEffect, useRef, useState } = React;

type Props = {
    // An array of elements that need to be shown, for example images.
    children: React.Node,

    // Number of columns, per max screen size, eg. { "320": 1, "480": 2, "800": 3, "1366": 4 }.
    columns: number | { [string]: number }
};

const style = {
    wrap: {
        display: "block"
    },
    column: {
        display: "inline-block",
        verticalAlign: "top"
    },
    item: {
        display: "block",
        width: "100%",
        overflow: "hidden",
        float: "left"
    }
};

function getColumnsCount({ columnsParams, width }): number {
    if (typeof columnsParams === "number") {
        return parseInt(columnsParams);
    }

    const sortedWidths = Object.keys(columnsParams).sort();

    for (let i = 0; i < sortedWidths.length; i++) {
        if (width <= parseInt(sortedWidths[i])) {
            return columnsParams[sortedWidths[i]];
        }
    }

    // Return last.
    return columnsParams[sortedWidths[sortedWidths.length - 1]];
}

let elementResizeDetector = null;

function Columned(props: Props) {
    const containerRef = useRef();

    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            elementResizeDetector = elementResizeDetectorMaker({
                strategy: "scroll" //<- For ultra performance.
            });
            elementResizeDetector.listenTo(containerRef.current, element =>
                setContainerWidth(element.offsetWidth)
            );
        }

        return () => {
            if (elementResizeDetector) {
                elementResizeDetector.uninstall();
                elementResizeDetector = null;
            }
        };
    }, []);

    const { children, columns } = props;

    const columnsCount = getColumnsCount({ columnsParams: columns, width: containerWidth });

    const renderedColumns = [];
    for (let i = 0; i < columnsCount; i++) {
        renderedColumns.push([]);
    }

    const columnsIndexes = {
        current: 0,
        last: columnsCount - 1
    };

    React.Children.forEach(children, child => {
        renderedColumns[columnsIndexes.current].push(child);
        if (columnsIndexes.current === columnsIndexes.last) {
            columnsIndexes.current = 0;
        } else {
            columnsIndexes.current++;
        }
    });

    return (
        <react-columned style={style.wrap} ref={containerRef}>
            {renderedColumns.map((column, i) => (
                <react-columned-column
                    key={i}
                    style={{ ...style.column, width: `calc(100% / ${columnsCount})` }}
                >
                    {column.map((item, j) => (
                        <react-columned-item style={style.item} key={j}>
                            {item}
                        </react-columned-item>
                    ))}
                </react-columned-column>
            ))}
        </react-columned>
    );
}

Columned.defaultProps = {
    columns: { "320": 1, "480": 2, "800": 3, "1366": 4 }
};

export { Columned };
