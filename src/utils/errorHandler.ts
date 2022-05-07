// export const errorHandler = (error?: string) => {
//   return alert(error || 'Erro Interno');
// };
// const response = error.response
//   ? error?.response?.data?.detail && typeof error.response.data.detail === 'string'
//     ? () => alert(error?.response?.data?.detail)
//     : typeof error.response.data.detail === 'object'
//     ? () => {
//         const errorObj = error.response.data.detail.data;
//         let alertStr = '';
//         Object.keys(errorObj).map((item, index) => {
//           alertStr = `${alertStr}${index !== 0 ? '\n' : ''} ${errorObj[item]}`;
//         });
//         alert(alertStr);
//         console.log(`Error Handler: ${alertStr}`);
//       }
//     : () => alert('Ocorreu um erro inesperado. Tente novamente mais tarde')
//   : () =>
//       typeof error === 'string' ? alert(error) : alert('Ocorreu um erro inesperado. Tente novamente mais tarde');

// const handleError = (status?: number) => {
//   console.log("status: " + status);
//   if (status == 401) {
//       alert("Erro 401: Sem conexão com o servidor");
//   }
//   if (status == 403) {
//       alert("Erro 403: Acesso negado");
//   }
// }

// export default handleError;

import { toast } from 'react-toastify';

const handleError = (status?: number, details?: string, detail?: string) => {
 
    if (status == 401) {
        alert("Erro 401: Sessão expirada");
    }
    if (status == 403) {
        alert("Erro 403: Sessão expirada");
    }
    if (details) {
        toast.error(details);
    } else if(detail) {
        toast.error(detail);
    } else{
        toast.error('Erro Interno. Tente novamente mais tarde.');
    }
}

export default handleError;