import { Alert } from "react-bootstrap";

type AlertGeneratorPorps = {
    message: String;
};

const AlertGenerator = ({message}: AlertGeneratorPorps) => {
    return(
        <Alert variant="success" className="mt-2 w-25">
            <Alert.Heading>Mensaje recibido:</Alert.Heading>
                <p>
                    {message}
                </p>
        </Alert>
    )
}

export default AlertGenerator;