export const asyncHandler = (requestHandler)=>{
    return(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,res)).catch((err)=>next(err))
    }
}