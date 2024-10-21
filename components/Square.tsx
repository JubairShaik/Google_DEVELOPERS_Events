


function Square({block,color,top,left,rotate,small}:any){
    
    if(!small)
    {
        if(!block)
        {
            return <div className="w-72 h-72  absolute -z-10 border-4 border-slate-300" style={{top:top, left:left, rotate:rotate}}></div>
        }
        else{
    
        return<div className="w-72 h-72  absolute -z-10 border-4 border-slate-300 flex justify-center items-center" style={{top:top, left:left, rotate:rotate}}>
            <div className="w-3/4 h-3/4 " style={{backgroundColor:color}}></div>
        </div>
        }

    }
    else{
        if(!block)
            {
                return <div className="w-28 h-28  absolute -z-10 border-4 border-slate-300" style={{top:top, left:left, rotate:rotate}}></div>
            }
            else{
        
            return<div className="w-28 h-28  absolute -z-10 border-4 border-slate-300 flex justify-center items-center" style={{top:top, left:left, rotate:rotate}}>
                <div className="w-3/4 h-3/4" style={{backgroundColor:color}}></div>
            </div>
            }
    }


}

export default Square;