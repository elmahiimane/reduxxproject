
import { useSelector } from 'react-redux';
import { selectClubInfo } from '../slices/clubInfoSlice';
import "../styles/information.css"

const ClubInfoTable = ({ club }) => {
  const clubInfo = useSelector(selectClubInfo);

  return (
    <div>
      <h3> {club} </h3>
      <table border={1} >
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Filière</th>
            <th>Groupe</th>
          </tr>
        </thead>
        <tbody>
          {clubInfo[club].map((data, index) => (
            <tr key={index}>
              <td>{data.nom}</td>
              <td>{data.email}</td>
              <td>{data.telephone}</td>
              <td>{data.filiere}</td>
              <td>{data.groupe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubInfoTable;
