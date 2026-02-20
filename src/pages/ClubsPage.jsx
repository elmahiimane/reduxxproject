// ClubsPage.js

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRegistrations } from '../slices/registrationSlice';
import "../styles/clubs.css"; // Import your CSS file

const ClubsPage = () => {
  const dispatch = useDispatch();
  const registrations = useSelector(selectRegistrations);

  const handleRegistration = (club) => {
    // Ne pas dispatch incrementRegistration ici
  };

  return (
    <div className="clubs-page">
      <h1>Inscrire à l'un des groupes </h1>
   
      <div className="clubs-container">
        <div className="club-item">
          <div className="club-info">
            <p>Nombre d'inscriptions: {registrations.club1}</p>
            <div className="image-container">
              <img className="img2" src="public/images/fa29d60f-3e5d-4f22-ac1c-ca107f1004d2.jpg" alt="" />
              <div className="overlay">
                <p>Un "club culture" est un groupe rassemblé autour d'un intérêt commun lié à la culture, favorisant l'échange d'idées et la collaboration entre ses membres.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="club-item">
          <div className="club-info">
            <p>Nombre d'inscriptions: {registrations.club2}</p>
            <div className="image-container">
              <img className="img2" src="public/images/5e24d4b0-27c2-4cf6-b664-c70b26066712.jpg" alt="" />
              <div className="overlay">
                <p>Un "club sport" réunit des amateurs d'un sport spécifique, encourageant la participation et la passion pour le bien-être physique.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="club-item">
          <div className="club-info">
            <p>Nombre d'inscriptions: {registrations.club3}</p>
            <div className="image-container">
              <img  className="img2" src="public/images/e13b73e7-7b2e-4e0a-b1eb-b0c72a7bf054.jpg" alt="" />
              <div className="overlay">
                <p>Un "career center club" offre des ressources et des opportunités professionnelles à ses membres, favorisant le développement professionnel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buttn-container">
        <button className='buttn'>
          <Link to="/formulaire" onClick={() => handleRegistration('club1')}>
            Inscrire
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ClubsPage;
