import Image from "next/image";

const ColorVarients = ({varients, selectedVarient, selectVarientHanlder}) => {
    const selectColorhanlder = (name) => {
        selectVarientHanlder(name);
    }
    return (
        <div>
            <p className="uppercase">
                <strong>Color</strong> {selectedVarient}
            </p>
            <div className="flex items-center gap-x-2 mb-5">
                { varients?.map((item, index) => {
                    return(
                        <div
                        style={item.name === selectedVarient ? { "border-color" : "#000"} : {}}
                        key={item?.id}
                        className="border cursor-pointer"
                        onClick={()=>{selectColorhanlder(item?.name)}}
                        >
                            <Image src={item?.url} alt={item?.name} width={52} height={63} />
                        </div>
                    );
                })

                }
            </div>
        </div>
    )
}

export default ColorVarients;