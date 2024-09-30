import ApiInstance from "../axiosconfig";
import { UPLOAD_INVOICE } from "../routes";

const uploadInvoice = async (data) => {
  const response = await ApiInstance.post(UPLOAD_INVOICE, data);
  return response.data;
};

const invoiceService = {
  uploadInvoice,
};

export default invoiceService;
