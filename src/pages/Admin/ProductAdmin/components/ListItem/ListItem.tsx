import { ProductResponse } from "apis/products/product.model";
import { DateFormat } from "constants/dateFormat";
import format from "date-fns/format";
import { useNavigate } from "react-router";

interface ItemProps {
  product: ProductResponse;
}

function ListItem({ product }: ItemProps) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          boxShadow:
            "0px 15.375px 18.0882px rgba(0, 0, 0, 0.0456112), 0px 2.30969px 2.71728px rgba(0, 0, 0, 0.0243888)",
        }}
        className="mb-5 flex cursor-pointer flex-col justify-between rounded-lg border-0 p-[22px] laptop:grid laptop:grid-cols-3 laptop:flex-row laptop:border-2 laptop:border-text-2 laptop:px-10 laptop:py-[22px]"
      >
        <div className="">
          <img className="h-[100px] max-w-[150px]" src={product?.image} alt="sss" />
        </div>
        <div className="flex items-center laptop:flex-col laptop:items-start laptop:gap-y-6">
          <p className="text-base font-medium text-text-8 laptop:text-lg laptop:leading-6 ">{product?.product_name}</p>
          <span className="hidden font-semibold laptop:block laptop:text-2xl laptop:leading-7">{product?.price}</span>
        </div>
        <div className="ml-0 mt-3 flex flex-col justify-between laptop:ml-2 laptop:mt-0 laptop:items-end">
          <div className="flex justify-between laptop:justify-start">
            <p className="mr-2 text-base font-normal leading-6 text-text-6">Valid until</p>
            <p className="text-base font-bold text-text-8">
              {status === "expired" ? "Expired" : format(new Date(), DateFormat.DATE_WITH_TEXT_MONTH)}
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between laptop:mt-0 laptop:flex-col laptop:items-start">
            <span className="text-2xl font-semibold laptop:hidden laptop:leading-7">{product?.price}</span>
            <div className="font-medium leading-6 text-[var(--color-primary)] laptop:text-base" onClick={() => navigate(product._id)}>Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
