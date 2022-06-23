import classes from './Wrapper.module.css'
const Wrappper = ( { children }) => {
    return ( 
        <div className={ classes.wrapper }>
            { children }
        </div>
     );
}
 
export default Wrappper;