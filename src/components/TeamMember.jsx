import './TeamMember.css';

const TeamMember = (props) => {

    const handleAddFighter = (props) => {
        console.log(props) ;
        
        //this function should add a member of the zombie fighters to your team
        
      }

    return (
        <>
            <div className="TeamMemberCard">
                <img src={props.img} alt="" />
                <h4>{props.name}</h4>
                <h5>Stregnth: {props.strength}</h5>
                <h5>Agility: {props.agility}</h5>
                <p>$: {props.price}</p>
                <button onClick={() => handleAddFighter(props)}> add to team</button>
            </div>
        </>
    )
}

export default TeamMember