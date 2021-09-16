import Swal from 'sweetalert2'


const modalError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Oh no, something went wrong!',
    confirmButtonText: 'Continue',
  })
}


export default modalError;