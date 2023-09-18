const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <p>Helo, {user?.name}</p>
      {/* ?. Optional chaining  it only check name if user exist. Since we give the initial value null we have to use optional chanining*/}
    </section>
  );
};

export default Dashboard;
