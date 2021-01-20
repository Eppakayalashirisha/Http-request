export const setError=(title, description, category)=>{
    let error={};
    error.title=title?"":"Title is required"
    error.description=description?"":"Description is required"
    error.category=category?"":"cCategory is required"
}
