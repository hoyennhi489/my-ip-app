import InfoRow from "./InfoRow";

function LocationCard({ data }) {
  return (
    <div className="card">
      <div className="card-content">
        <InfoRow label="IP Address" value={data.ip} />
        <InfoRow label="Country" value={data.country} />
        <InfoRow label="Country Code" value={data.cc} />
      </div>
    </div>
  );
}

export default LocationCard;