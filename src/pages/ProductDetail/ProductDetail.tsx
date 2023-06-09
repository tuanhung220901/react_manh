import PropTypes from "prop-types";
import { useProductId } from "queries/productQueries";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductResponse } from "apis/products/product.model";
const ProductDetail = () => {
  const { id } = useParams();
  const { mutate: getProduct } = useProductId();
  const [product, setProduct] = useState<ProductResponse>();
  // const bcd = {
  //   "_id": "64401676aced66a13f577ba6",
  //   "category_id": "64400d377178e194b25d6e73",
  //   "product_name": "Sữa rửa mặt Hadalabo White",
  //   "amount": 737,
  //   "price": 68000,
  //   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
  //   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/hadalaboTrang.png?alt=media&token=2f1d0bac-2e61-418d-b481-722041e2bb7a",
  //   "ngaysx": "2022-03-09T00:00:00.000Z",
  //   "hsd": "2024-02-27T00:00:00.000Z",
  //   "nhasx": "Hadalabo",
  //   "createdAt": "2023-04-19T16:27:34.728Z",
  //   "updatedAt": "2023-04-19T16:27:34.728Z",
  //   "__v": 0
  // }
  useEffect(() => {
    if (id){
      getProduct(
        { idProduct: id },
        {
          onSuccess: data => {
            setProduct(data);
          },
        },
      );
      }
      // setProduct(bcd)
  }, [id]);
  return (
    <div className="mx-auto mt-6 w-[75%] px-4 py-8">
      <section className="py-12 sm:py-16"> 
  <div className="container mx-auto px-4">
    <nav className="flex">
      <ol role="list" className="flex items-center">
        <li className="text-left">
          <div className="-m-1">
            <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
            </div>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">{product?.product_name}</a>
            </div>
          </div>
        </li>
      </ol>
    </nav>

    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 flex-wrap grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16 flex">
      <div className="lg:col-span-3 lg:row-end-1 w-[40%]">
        <div className="lg:flex lg:items-start">
          <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
              <img className="h-full xl:h-[450px] w-full max-w-full object-cover" src={product?.image} alt="" />
            </div>
          </div>

          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                <img className="h-full w-full object-cover" src={product?.image} alt="" />
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img className="h-full w-full object-cover" src={product?.image} alt="" />
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img className="h-full w-full object-cover" src={product?.image} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 w-[50%]">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product?.product_name}</h1>

        <div className="mt-5 flex items-center">
          <div className="flex items-center">
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
        </div>

        <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          <label className="">
            <input type="radio" name="type" value="Powder" className="peer sr-only" checked />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Powder</p>
          </label>
          <label className="">
            <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Whole Bean</p>
          </label>
          <label className="">
            <input type="radio" name="type" value="Groud" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Groud</p>
          </label>
        </div>

        <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          <label className="">
            <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
            <span className="mt-1 block text-center text-xs">$80/mo</span>
          </label>
          <label className="">
            <input type="radio" name="subscription" value="8 Months" className="peer sr-only" checked />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
            <span className="mt-1 block text-center text-xs">$60/mo</span>
          </label>
          <label className="">
            <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
            <span className="mt-1 block text-center text-xs">$40/mo</span>
          </label>
        </div>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
        <div className="w-[30px] h-[30px]">
        <div className="flex-1 h-full">
          <div className="flex items-center justify-center flex-1 h-full p-2 border border-gray-400 rounded-full">
            <div className="relative">
             <img src = "https://e7.pngegg.com/pngimages/255/159/png-clipart-plus-and-minus-signs-subtraction-meno-plus-minus-sign-mathematics-rectangle-black-thumbnail.png"/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80px] bg-[#000] text-center py-2 rounded text-[#fff] mx-3 font-medium text-[16px]">10
        </div>
        <div className="w-[30px] h-[30px]">
        <div className="flex-1 h-full">
          <div className="flex items-center justify-center flex-1 h-full p-2 border border-gray-400 rounded-full">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
        </div>
          <div>
          </div>

        <div className="mt-4 flex  items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div className="flex items-end">
            <h1 className="text-3xl font-bold">{product?.price+ 'đ'}</h1>
            {/* <span className="text-base">/month</span> */}
          </div>

          <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-[#000] bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[gray]">
            <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to cart
          </button>
        </div>

        <ul className="mt-8 space-y-2">
          <li className="flex items-center text-left text-sm font-medium text-gray-600">
            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
            </svg>
            Free shipping worldwide
          </li>

          <li className="flex items-center text-left text-sm font-medium text-gray-600">
            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
            </svg>
            Cancel Anytime
          </li>
        </ul>
      </div>

      <div className="lg:col-span-3">
        <div className="border-b border-gray-300">
          <nav className="flex gap-4">
            <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

            {/* <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </a> */}
          </nav>
        </div>

        <div className="mt-8 flow-root sm:mt-12">
        {product?.description}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ProductDetail;
