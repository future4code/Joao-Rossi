import React from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage'
export default function AdminHomePage() {
  useProtectedPage();
  return (
    <div>
      <h1>AdminHomePage</h1>
    </div>
  );
}
