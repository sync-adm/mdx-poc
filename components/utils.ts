export const getFrontmatter = (props: any, rootKey: string, childKey: string) =>{
    return props[rootKey][childKey];    
}