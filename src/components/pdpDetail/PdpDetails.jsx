import { useEffect } from 'react';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { productSizeUpdate, productColorUpdate } from "../../store/actions/pdpAction";
import SizeTile from '../sizeTile/SizeTile';
import appJson from '../../data/appData.json'
import ColorVarients from '../colorVarients/ColorVarients';

const PdpDetails = () => {
  const {productSize, productVarients} = appJson
  const { selectedSize, selectedColor } = useSelector((state) => state.pdp);

  const dispatch = useDispatch();
  const selectionHandler =(size) => {
    dispatch(productSizeUpdate(size));
  }
  const variantHanlder = (variant) => {
    dispatch(productColorUpdate(variant));
  }
  // sticky update 
    useEffect(() => {
        const handleScroll = () => {
        const width = window?.innerWidth;
        const currentScroll = window?.pageYOffset;
        const lastImage = document.getElementById('lastImage')?.offsetTop;
          if(width > 991) {
            if(currentScroll < lastImage) {
                document.getElementById('rightAside')?.classList.add('sticky')
            } else {
                document.getElementById('rightAside')?.classList.remove('sticky')
            }
          } 
        }
  
      handleScroll();
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div id="rightAside" className="sticky top-0 px-8">
      <h2 className="text-3xl lg:text-5xl mb-2">JONATHAN SIMKHAI</h2>
      <p>Lurex Linen Viscose Jacket in Conchiglia</p>
      <p className="mb-5">
        <strong>$225</strong>
      </p>
      <ColorVarients varients={productVarients} selectedVarient={selectedColor} selectVarientHanlder={variantHanlder}/>
      
      <SizeTile sizes={productSize} selectedSize={selectedSize} selectHanlder={selectionHandler}/>
      <div className="mb-5">
        <button
            className="flex justify-center items-center w-full text-white border-slate-500 bg-slate-900 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase px-8 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
        >
            add to bag <ArrowLongRightIcon className="h-6 w-6 ml-5" aria-hidden="true" />
        </button>
      </div>
      <p className="mb-5">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
      <p>Speak to a Personal Stylist CHAT NOW</p>
      <div className='flex lg:hidden w-full h-80'>
          <div className='w-12 h-1 bg-black mt-10'></div>
      </div>
    </div>
  );
};
export default PdpDetails;
