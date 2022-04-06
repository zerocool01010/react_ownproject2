
function headerCard(props){
    let classes = 'header-cardGrid';
    if (props.className) {
        classes += ' ' + props.className;
    }
    return <div className={classes}>{props.children}</div>
}

export default headerCard;