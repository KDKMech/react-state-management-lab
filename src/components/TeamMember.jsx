import './TeamMember.css';

const TeamMember = (props) => {

    const handleAddFighter = () => {
        const newTeamMember = {
            img: props.img,
            name: props.name,
            strength: props.strength,
            agility: props.agility,
            price: props.price
        };
        if (props.money >= newTeamMember.price) {
            props.setTeam([...props.team, newTeamMember])
            props.setMoney(props.money - newTeamMember.price)
            console.log(`${newTeamMember.name} Added to the team`);
                       
        }else {
            console.log(`not enough money for that fighter`);
            
        }
        //this function should add a member of the zombie fighters to your team
        // props.addToTeam(newTeamMember);
    }


    return (
        <>
            <div className="TeamMemberCard">
                <img src={props.img} alt="" />
                <h4>{props.name}</h4>
                <h5>Stregnth: {props.strength}</h5>
                <h5>Agility: {props.agility}</h5>
                <p>$: {props.price}</p>
                <button onClick={handleAddFighter}> add to team</button>
            </div>
            
        </>
    )
}

export default TeamMember