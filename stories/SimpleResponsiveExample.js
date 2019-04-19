// @flow
import React from "react";
import Story from "./Story";

type Props = {};
type State = {
    files: Array<*>,
    errors: Array<*>
};

class SimpleResponsiveExample extends React.Component<Props, State> {
    state = {
        files: [],
        errors: []
    };

    render() {
        return (
            <Story>
                <title>Simple responive example</title>
                <description>
                    Depending on the width of the container, items will be placed in different
                    number of columns.
                </description>
                <example />
                {/*<code>{code(props)}</code>*/}
            </Story>
        );
    }
}
/*
const code = props => /!* React *!/ `
...
`;*/

export default SimpleResponsiveExample;
