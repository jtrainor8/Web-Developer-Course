export default function Greeter({person="everyone",  from="anonymous"}) {
    return (
        <>
            <h1>Hi there {person}</h1>
            <h2>-{from}</h2>
        </>
    )
}