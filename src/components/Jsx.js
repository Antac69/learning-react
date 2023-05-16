const Jsx=({temperatura})=>{
    return(
        <>
        <h1>{temperatura} C</h1>
        <h2>Frio o calor?</h2>
        <p>
            {
                temperatura > 20
                ?(temperatura > 40 ?'Te estas quemado papi 🥵':'Calor')
                :'Frio'
            }
        </p>
        </>
    )
}

export default Jsx