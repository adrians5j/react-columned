// @flow
import * as React from "react";
import elementResizeDetectorMaker from "element-resize-detector";
import getColumnsCount from "./utils/getColumnsCount";

const { useEffect, useRef, useState } = React;

type Props = {
    // An array of elements that need to be shown, for example images.
    children: React.Node,

    // Number of columns, per container size, eg. { "320": 1, "480": 2, "800": 3, "1366": 4 }.
    columns: number | { [string]: number },

    // Class to append on columns container.
    className?: string
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

let elementResizeDetector = null;

function Columned(props: Props) {
    const containerRef = useRef();

    const [containerWidth, setContainerWidth]: [number, Function] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            elementResizeDetector = elementResizeDetectorMaker({
                strategy: "scroll"
            });
            elementResizeDetector.listenTo(containerRef.current, element =>
                setContainerWidth(element.offsetWidth)
            );
        }

        return () => {
            if (elementResizeDetector) {
                elementResizeDetector.uninstall(containerRef.current);
                elementResizeDetector = null;
            }
        };
    }, []);

    const { children, columns, className } = props;

    const columnsCount = getColumnsCount(columns, containerWidth);

    const renderedColumns = [];
    for (let i = 0; i < columnsCount; i++) {
        renderedColumns.push([]);
    }

    const columnsIndexes = {
        current: 0,
        last: columnsCount - 1
    };

    // Will not render anything if no children are present.
    React.Children.forEach(children, child => {
        renderedColumns[columnsIndexes.current].push(child);
        if (columnsIndexes.current === columnsIndexes.last) {
            columnsIndexes.current = 0;
        } else {
            columnsIndexes.current++;
        }
    });

    return (
        <react-columned ref={containerRef} style={style.wrap} class={className}>
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
    columns: { "320": 1, "480": 2, "800": 3, "1366": 4, "1920": 6 }
};

export default Columned;
