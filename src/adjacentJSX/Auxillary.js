/* 
    children props is a reserve property in react for the jsx/component we
    wrapped with another Component.

    NOTE: When using windows, we cannot name our file/folder Aux.js or Aux 
    for folders, that's why we I named it as Auxillary because this code is
    originally written in windows machine. MacOS and Linux don't have any
    problem with this. This is issue is because does names are reserved in
    windows machine.s

*/

const Auxillary = props => props.children;


export default Auxillary;
