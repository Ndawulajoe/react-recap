import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate()

  function goBack(){
    navigate('..')
  }

  return (
    <div>
      <h1>Oops </h1>
      <h1>{error.statusText}</h1>
      <Button onClick={goBack} className="bg-teal-600 hover:bg-teal-800">
        Go Back
      </Button>
    </div>
  );
}

export default ErrorPage;
