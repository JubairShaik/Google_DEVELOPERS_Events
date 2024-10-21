
function Circle({block,color,top,right,rotate,small}:any){
    
    if(!small)
        {
            if(!block)
            {
                return <div className="w-80 h-80  absolute -z-10 border-4 border-slate-300 rounded-full" style={{top:top, right:right, rotate:rotate}}></div>
            }
            else{
        
            return<div className="w-80 h-80  absolute -z-10 border-4 border-slate-300 flex justify-center rounded-full items-center" style={{top:top, right:right, rotate:rotate}}>
                <div className="w-3/4 h-3/4 rounded-full" style={{backgroundColor:color}}></div>
            </div>
            }
    
        }
        else{
            if(!block)
                {
                    return <div className="w-16 h-16  absolute -z-10 border-4 border-slate-300 rounded-full" style={{top:top, right:right, rotate:rotate}}></div>
                }
                else{
            
                return<div className="w-16 h-16  absolute -z-10 border-4 border-slate-300 flex justify-center items-center rounded-full" style={{top:top, right:right, rotate:rotate}}>
                    <div className="w-3/4 h-3/4" style={{backgroundColor:color}}></div>
                </div>
                }
        }
    

}
export default Circle;