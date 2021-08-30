import React from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function TripDetailsPage() {
  useProtectedPage();
  return <h1>TripDetailsPage</h1>;
}
