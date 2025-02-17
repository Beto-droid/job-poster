import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";
import { SpinnerProps } from "../types/SpinnerTypes.ts";
const override:CSSProperties = {
    display: "block",
    margin: "100px auto",
};

const Spinner = ({ loading }:SpinnerProps) => {
    return (
        <ClipLoader
            color="#4348ca"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Spinner;
