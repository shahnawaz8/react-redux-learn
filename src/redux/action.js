export const INC = 'INC';

export const DEC = 'DEC';


export const incCount = (payload) => {
    return {
            type:INC,
            payload
        };
}
export const decCount = (payload) => {
    return {
            type:DEC,
            payload
        };
}