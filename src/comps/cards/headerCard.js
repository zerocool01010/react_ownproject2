import './headerCard.css';

function headerCard(props){
    let classes = 'header-card';
    if (props.className) {
        classes += ' ' + props.className;
    }
    return <div className={classes}>{props.children}</div>
}

export default headerCard;