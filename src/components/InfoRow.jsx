function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <h3>{label}:</h3>
      <p>{value}</p>
    </div>
  );
}

export default InfoRow;