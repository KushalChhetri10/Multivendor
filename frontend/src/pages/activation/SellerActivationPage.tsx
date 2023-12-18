import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activateSellerAsync } from "../../redux/actions/seller";
import { AppDispatch } from "../../redux/store";

const SellerActivationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { token } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      const sendRequest = async () => {
        try {
          await dispatch(activateSellerAsync(token));
          toast.success("Seller Successfully Activated!");
          navigate("/");
        } catch (error) {
          const axiosError = error as AxiosError;
          setError("An error occurred while activating seller");
          toast.error(
            axiosError.message || "An error occurred while activating seller"
          );
        }
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{error || "Seller Activation Page"}</p>
    </div>
  );
};

export default SellerActivationPage;
