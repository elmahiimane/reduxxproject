
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateField, resetForm } from '../slices/formSlice';
import { incrementRegistration } from '../slices/registrationSlice';
import { selectFormData } from '../slices/formSlice';
import { updateClubInfo, selectClubInfo } from '../slices/clubInfoSlice';
import "../styles/formulair.css";
import Swal from 'sweetalert2';

const FormulairePage = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  const clubInfo = useSelector(selectClubInfo);
  const clubs =(club) =>{
    handleSubmit(club)
    if(formData.nom && formData.email && formData.telephone && formData.filiere && formData.groupe) {
    Swal.fire({
      position: "top",
      icon: "success",
      title:`you signed in ${club}` ,
      showConfirmButton: false,
      timer: 1500
    });
  }
  } 

  const handleSubmit = (club) => {
    // Check if any of the input fields is empty
    if (!formData.nom || !formData.email || !formData.telephone || !formData.filiere || !formData.groupe) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // If all fields are filled, dispatch the incrementRegistration action
    dispatch(incrementRegistration({ club }));
    dispatch(updateClubInfo({ club, data: [...clubInfo[club], formData] }));
    dispatch(resetForm());
  };

  return (
    <div className="form-background" style={{height:'auto',position:'absolute',top:'-35px',right:'-80px'}}>    
        <div className="form-center">
      <h2>Page de Formulaire</h2>
      <form>
        <label htmlFor="nom">Nom</label>
        <input
          required
          type="text"
          id="nom"
          value={formData.nom}
          onChange={(e) => dispatch(updateField({ field: 'nom', value: e.target.value }))}
        />
        
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => dispatch(updateField({ field: 'email', value: e.target.value }))}
        /> 
        
        <label htmlFor="telephone">Téléphone</label>
        <input
          required
          type="tel"
          id="telephone"
          value={formData.telephone}
          onChange={(e) => dispatch(updateField({ field: 'telephone', value: e.target.value }))}
        />
        
        <label htmlFor="filiere">Filière</label>
        <input
          required
          type="text"
          id="filiere"
          value={formData.filiere}
          onChange={(e) => dispatch(updateField({ field: 'filiere', value: e.target.value }))}
        /> 
        
        <label htmlFor="groupe">Groupe</label>
        <input
          required
          type="text"
          id="groupe"
          value={formData.groupe}
          onChange={(e) => dispatch(updateField({ field: 'groupe', value: e.target.value }))}
        /> 
          </form>
         

          <div >
           <input type="submit" onClick={() => clubs("club1")} value={'club culturel'} style={{marginRight:'10px'}} />
           <input type="submit" onClick={() => clubs("club2")} value={'club sportif '}  style={{marginRight:'10px'}}/> 
           <input type="submit" onClick={() => clubs("club3")} value={'Club de Career Centre'} /> 
           </div>
           </div>
           <div className="outside-form-content2">
     <Link to="/" style={{position:"absolute",top:"20px",left:'80px',color:'red',border:'1px solid red'}}>Exit</Link>
     </div>
    </div>
    
    
   
  );
};

export default FormulairePage;