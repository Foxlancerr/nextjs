import React from "react";

function ExperainceCard({ experaince }) {
  return (
    <div className="flex gap-2 flex-col">
      <h2 className="font-medium text-xl">{experaince.role}</h2>
      <p>{experaince.description}</p>
    </div>
  );
}

export default ExperainceCard;
