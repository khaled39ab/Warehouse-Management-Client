import { confirmAlert } from "react-confirm-alert";

const useConfirm = (confirmMessage) => {

    return confirmAlert({
        title: "Auto Car Confirmation box",
        message: confirmMessage,
        buttons: [
            {
                label: "Yes",
                onClick: () => alert("Click Yes")
            },
            {
                label: "No"
                // onClick: () => alert("Click No")
            }
        ]
    });
};

export default useConfirm;