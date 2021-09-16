import Swal from 'sweetalert2'


const modalSucces = () => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'Yeah, everything is working!',
    confirmButtonText: 'Continue',
  })
}


export default modalSucces;