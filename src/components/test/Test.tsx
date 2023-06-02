import React from "react";

interface TestProps {
    label: string;
}

const Test = ({ label }: TestProps) => {

    return (
        <button>
            { label }
        </button>
    )
};

export default Test;