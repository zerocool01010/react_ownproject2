import './navCard.css';

function navCard(props){
    let classes = 'navCard';
    /* if (props.className) {
        classes += ' ' + props.className;
    } */
    return <div className={classes}>{props.children}</div>
}

export default navCard;