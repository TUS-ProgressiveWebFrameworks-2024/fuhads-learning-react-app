let Grade = (props) => {
    return(
        <div>
        <p>Name:{props.person.name}</p>
        <p>Science:{props.person.grade.science}</p>
        <p>Maths: {props.person.grade.maths}</p>
        <p>English:{props.person.grade.english}</p>
        </div>
    )

}
export default Grade;