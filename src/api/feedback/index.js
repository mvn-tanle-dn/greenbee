import axiosClient from "../../utils/axiosClient";
import { END_POINT } from "../endpoint";

function FeedbackService() {
  const saveFeedback = (payload) => {
    return axiosClient.post(
      `${END_POINT.FEEDBACK}/${payload.productId}`,
      payload
    );
  };

  return {
    saveFeedback: saveFeedback,
  };
}

export default FeedbackService();
