import { useParams } from "react-router-dom";

interface PlantsParams {
  id: string;
}

export function Plants() {
  const {id } = useParams<PlantsParams>();

  return (
    <h1>Planta {id}</h1>
  );
}