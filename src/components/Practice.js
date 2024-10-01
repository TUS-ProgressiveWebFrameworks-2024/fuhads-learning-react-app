const Practice = () => {
    const t = [1, -1, 3]
    t.push(5)
    console.log(t.length)
    console.log(t[1])

    t.forEach(value =>{
        console.log(value)
    })
    // const t2= t.concat(5)
    // t2.forEach(value=>{
    //     console.log(value)
    // })
    const m2=t.map(value=> '<li>'+ value + '<li>')
    console.log(m2)

    const object1={
        name: 'Arto hellas',
        age:35,
        education:'phD',
    }
    object1.address='Helsinki'
    
    console.log(object1.name)
    console.log(object1['age'])
    console.log(object1['address'])

    const products={
        title:'PS5 pro',
        cost:'£799',
        category:'Electronics'
    }
    products.image= 'ps5 pro.jpg'
    console.log(products)
    console.log(products.cost)
    console.log(products['title'])
    const age= 26;
    const beverage= age>=21 ? "Beer":"Juice";
    console.log(beverage);

    const grade = 77;
    if (grade>=40){
        console.log("pass"
        )
    }else{console.log("Fail")}
return <div>
    
</div>

}
export default Practice;