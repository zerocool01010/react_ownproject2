import './headerCard.css';

function headerCard(props){
    const classes = 'logo ' + 'banner';
    return <div className={classes}>{props.children}</div>
}

export default headerCard;