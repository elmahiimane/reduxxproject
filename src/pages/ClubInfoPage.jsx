import ClubInfoTable from '../pages/ClubInfoTable'

const ClubInfoPage = () => {
  return (
    <div>
      <h2>Page d'Information des Clubs</h2>
      <ClubInfoTable club="club1" />
      <ClubInfoTable club="club2" />
      <ClubInfoTable club="club3" />
    </div>
  );
};

export default ClubInfoPage;
