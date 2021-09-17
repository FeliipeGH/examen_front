import Swal from "sweetalert2";


//Titles
export const CORRECT_TITLE = "Correcto";
export const ERROR_TITLE = "Error";
export const WARNING_TITLE = "Alerta";
export const CONTINUE_QUESTION_TITLE = "¿Continuar?";

//General texts
export const GENERAL_ERROR_TEXT = "¡Ha ocurrido un error, consulta al administrador!";

export const showGenericAlert = async (text, title = CORRECT_TITLE, icon = "success",
                                       events, showCancelButton = false,
                                       showDenyButton = false, confirmTextBtn, cancelTextBtn,
                                       denyTextBtn) => {
    const response = await Swal.fire({
        title,
        text,
        icon,
        showCancelButton,
        showDenyButton,
        confirmButtonText: confirmTextBtn ?? "Aceptar",
        cancelButtonText: cancelTextBtn ?? "Cancelar",
        denyButtonText: denyTextBtn ?? "Denegar",
        allowOutsideClick: false,
        allowEscapeKey: false,
    });
    handleResponse(response, events);
};

export const showLoadingAlert = () => {
    Swal.fire({
        title: "Cargando",
        didOpen(popup) {
            Swal.showLoading();
        }
    }).then();
};

export const closeAlert = () => {
    Swal.close();
};

const handleResponse = (response, events) => {
    if (events) {
        const {onDenied, onDismissed, onConfirm} = events;
        if (response.isConfirmed && onConfirm) {
            onConfirm();
            return;
        }
        if (response.isDismissed && onDismissed) {
            onDismissed();
            return;
        }
        if (response.isDenied && onDenied) {
            onDenied();
        }
    }
}