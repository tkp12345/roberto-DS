
export interface SquareType{
    width:number;
    height:number;
    backgroundColor:string;
}
export const Squares = ({width
     = 100, height = 100, backgroundColor='red'}:SquareType) => {

    const style ={
        width,
        height,
        backgroundColor
    }
    return (<div style={style}/>)
}


