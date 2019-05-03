// @flow
import React from "react";
import Story from "./Story";
import Columned from "./../src";
import { css } from "emotion";

const styles = css({
    border: "1px solid #1EA7FD",
    margin: 50,
    padding: 50,
    img: {
        width: "100%",
        display: "block"
    }
});

type Props = {};
type State = {};

class SimpleResponsiveExample extends React.Component<Props, State> {
    render() {
        return (
            <Story>
                <title>Fixed columns example</title>
                <description>
                    We passed <strong>2</strong> for the number of columns. Regardless of the screen size,
                    number of columns will not change.
                </description>
                <example>
                    <Columned className={styles} columns={2}>
                        <img
                            alt="Image 1"
                            src={"https://via.placeholder.com/800x600/001F3F/FFFFFF.png?text=1"}
                        />
                        <img
                            alt="Image 2"
                            src={"https://via.placeholder.com/400x300/0074D9/FFFFFF.png?text=2"}
                        />
                        <img
                            alt="Image 3"
                            src={"https://via.placeholder.com/1024x768/7FDBFF/FFFFFF.png?text=3"}
                        />
                        <img
                            alt="Image 4"
                            src={"https://via.placeholder.com/1280x1024/39CCCC/FFFFFF.png?text=4"}
                        />
                        <img
                            alt="Image 5"
                            src={"https://via.placeholder.com/640x480/3D9970/FFFFFF.png?text=5"}
                        />
                    </Columned>
                </example>
                <code>{code()}</code>
            </Story>
        );
    }
}

const code = () => /* React */ `
<Columned columns={2}>
    <img
        alt="Image 1"
        src={"https://via.placeholder.com/800x600/001F3F/FFFFFF.png?text=1"}
    />
    <img
        alt="Image 2"
        src={"https://via.placeholder.com/400x300/0074D9/FFFFFF.png?text=2"}
    />
    <img
        alt="Image 3"
        src={"https://via.placeholder.com/1024x768/7FDBFF/FFFFFF.png?text=3"}
    />
    <img
        alt="Image 4"
        src={"https://via.placeholder.com/1280x1024/39CCCC/FFFFFF.png?text=4"}
    />
    <img
        alt="Image 5"
        src={"https://via.placeholder.com/640x480/3D9970/FFFFFF.png?text=5"}
    />
</Columned>
`;

export default SimpleResponsiveExample;
