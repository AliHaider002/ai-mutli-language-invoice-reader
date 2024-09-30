import React from "react";

const Invoice_Hero = () => {
  return (
    <div className="w-full h-[55vh] my-[1rem] p-[1rem]">
      <div className="grid grid-cols-6 gap-[1rem]">
        <div className="col-span-3">
          <div className="text-[2rem] font-bold">ICICI Invoice</div>
          <div className="text-[1.5rem]">
            Invoice is a document sent by a seller to a buyer that lists the
            goods or services provided, the amount due, and the payment terms.
            It typically includes details like the invoice number, seller and
            buyer information, item descriptions, pricing, taxes, and payment
            instructions. Invoices serve as a formal request for payment and are
            important for record-keeping and accounting.
          </div>
        </div>
        <div></div>
        <div className="col-span-2 h-full ">
          <img
            src="/assets/images/invoice_reader_ad_1.jpg"
            className="w-full h-[51.5vh] object-cover"
            alt="ad_1"
          />
        </div>
      </div>
    </div>
  );
};

export default Invoice_Hero;
