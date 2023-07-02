import { useState } from "react"

const SizeTile = ({sizes, selectedSize, selectHanlder}) => {
    const selectSizehanlder = (size) => {
        selectHanlder(size);
    }
    return (
        <div>
            <h5>
            Size <span>{selectedSize}</span>
            </h5>
            <div className="flex gap-4 flex-wrap mb-5">
                {
                    sizes?.map((item, index) => {
                        return(
                            <button
                                style={item === selectedSize ? { "background" : "#000", "color": "#FFF" } : {}}
                                className="text-black-500 border border-slate-500 hover:bg-slate-900 hover:text-white active:bg-slate-900 font-bold uppercase text-xs px-8 py-2 rounded-full outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                type="button"
                                key={index}
                                onClick={()=>{selectSizehanlder(item)}}
                                >
                                {item}
                            </button>
                        )
                    })
                }
            
            </div>
        </div>
    )
}

export default SizeTile;